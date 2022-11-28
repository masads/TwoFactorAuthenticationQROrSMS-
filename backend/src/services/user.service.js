import User from "../model/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import twilio from "twilio"

const createJWT = (user) => {
  console.log(user)

  const token = jwt.sign(
    {
      id: user._id,
      mobileNumber: user.mobileNumber,
      name: user.name,
      emai: user.email,
    },
    process.env.JWT_SECRET
  );
  return token;
};

export const getUserData = async (req, res) => {
  try {
    const user = await User.find({ _id: req.query.id });

    if (user.length == 0) throw ("user not found")

    res.status(200).json({ userId: user[0]._id, name: user[0].name, email: user[0].email, mobileNumber: user[0].mobileNumber.toString() });

  } catch (error) {
    console.log(error)
    res.status(400).json({ message: "User not Found", found: error === "user not found" });
  }
}

export const getUsers = async (req, res) => {
  try {
    const user = await User.find();
    res.json(
      user.map((data) => {
        return data;
      })
    );
  } catch (error) {
    console.log(error)
    res.json({ message: "Error in getting users", data: error });
  }
};

export const register = async (req, res) => {
  try {
    console.log(req.body, Number(req.body.mobileNumber))
    const hashPassword = await bcrypt.hash(req.body.password, 10);
    console.log(hashPassword)
    const data = {
      name: req.body.name,
      password: hashPassword,
      mobileNumber: Number(req.body.mobileNumber),
      email: req.body.email
    };

    const user = await User.create(data);
    const token = createJWT(user);

    res.status(200).json({ message: "user created", token, userId: user._id })
  } catch (error) {
    console.log(error)
    res.status(400).json({ message: error.code == 11000 ? "user already register with this number" : "user not created", exist: error.code == 11000 });
  }
};

export const login = async (req, res) => {
  try {

    const user = await User.find({ mobileNumber: Number(req.body.mobileNumber) });
    if (user.length === 0) throw ({ message: "mobile number not register", valid: true, found: false, twillo: true })

    const isValid = await bcrypt.compare(req.body.password, user[0].password);

    if (!isValid) throw ({ message: "password not valid", valid: false, found: true, twillo: true })


    // const accountSid = process.env.TWILIO_ACCOUNT_SID;
    // const authToken = process.env.TWILIO_AUTH_TOKEN;
    // const client = new twilio(accountSid, authToken);
    //send code
    // const result = await client.verify.v2.services('VA5a67ff28b22a09011d34eb0bff25368b')
    //   .verifications
    //   .create({ to: '+92' + user[0].mobileNumber.toString(), channel: 'sms' })

    res.status(200).json({ name: user[0].name, id: user[0]._id, email: user[0].email, mobileNumber: user[0].mobileNumber.toString() });


  } catch (error) {
    res.status(400).json({ message: error.message ? error.message : "Something went wrong", valid: error.valid ? error.valid : false, found: error.found ? error.found : false, twillo: error.twillo ? true : false })
  }
};

export const multiFactorAuthentication = async (req, res) => {
  try {

    const user = await User.find({ id: req.body.userId });

    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const client = new twilio(accountSid, authToken);
    // const result = await client.verify.v2.services('VA5a67ff28b22a09011d34eb0bff25368b')
    //   .verificationChecks
    //   .create({ to: '+92' + user[0].mobileNumber.toString(), code: req.body.pin })

    // if (result.status == "pending") throw (result.status);
    console.log(req.body.pin)
    if (req.body.pin != "0000") throw ("pending")

    const token = createJWT(user[0]);
    res.status(200).json({ message: "Pin is valid", token });
  } catch (error) {
    console.log(error)
    res.status(400).json({ message: error == "pending" ? "Pin invalid" : "Something went wrong", status: error == "pending" })
  }

}