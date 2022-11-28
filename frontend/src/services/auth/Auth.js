import { API_URL } from "../../config/Api_Url";
import axios from "axios";
import authValidation from "../../validation/auth/Auth";
console.log(API_URL);
const client = axios.create({ baseURL: API_URL });




async function vertifyOtp(pin, userId) {
  try {
    if (!authValidation.validateOtp(pin)) throw "validation Error - pin";


    const result = await client.post("/verifyMultiFactor", { pin, userId });

    if (result.data) {
      return { status: true, token: result.data.token };
    } else {
      throw ("pin is invalid");
    }

  } catch (error) {
    console.log("Otp Falied", error);
    return { status: false }
  }
}

async function Login(data) {
  try {
    if (!authValidation.validateLogin(data)) throw "validation Error - login";

    const result = await client.post("/login", {
      mobileNumber: data.mobileNumber,
      password: data.password,
    })

    if (result.data) {
      return { status: true, data: result.data };
    } else {
      throw ("token is invalid", result);
    }
  } catch (error) {
    console.log("Login failed", error);
    return { status: false };
  }
}

async function Register(data) {
  try {
    if (!authValidation.validateRegister(data)) throw "validation Error - Register";

    const result = await client.post("/register", {
      mobileNumber: data.mobileNumber,
      password: data.password,
      name: data.name,
      email: data.email,
    });

    if (result.data.token.length > 0) {
      return { status: true, token: result.data.token, userId: result.data.userId };
    }
    else {
      throw ("token is invalid", result);
    }
  } catch (error) {
    if (typeof error != 'string' && JSON.parse(error["request"]["_response"]).duplicate) {
      return {
        status: false,
        duplicate: JSON.parse(error["request"]["_response"]).duplicate,
      };
    } else {
      console.log("Register failed", error);
      return { status: false };
    }

  }
}
async function getUserData(userId, token) {
  try {
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };
    const result = await client.get(`/getUserData?id=${userId}`, config);
    console.log(result.data)
    if (result.data) {
      return { status: true, data: result.data };
    }
    else {
      throw ("token is invalid", result);
    }
  } catch (error) {
    console.log("getUserData failed", error);
    return { status: false };
  }
}

const auth = { Login, Register, vertifyOtp, getUserData };

export default auth;
