import Product from "../model/product.model.js";


export const getProducts = async (req, res) => {
  try {
    const prod = await Product.find();
    res.json(
      prod.map((data) => {
        return { name: data.name, desc: data.description, pic: data.image, charges: data.rate };
      })
    );
  } catch (error) {
    res.json({ message: "Error in fetching list of products", data: error });
  }
};


export const addProduct = async (req, res) => {
  try {
    const data = {
      name: req.body.name,
      description: req.body.description,
      image: req.body.image,
      ownerId: req.body.ownerId,
      price: req.body.price,
      location: req.body.location,    //write code for lowecase or else enum schema would fail.
    };
    const product = await Product.create(data);
    res.status(200).json({ message: "Product has been created", product })
  } catch (error) {
    res.status(400).json({ message: "Product not created", data: error });
  }
}

export const deleteProduct = async (req, res) => {
  try {
    const prodId = req.body.id;
    const result = await Product.findById(prodId).remove();
    res.status(200).json({ message: "Product has been deleted", result });
  } catch (error) {
    res.status(400).json({ message: "Unable to Update product details", data: error });
  }
}

export const searchProduct = async (req, res) => {
  try {
    const prodId = req.body.id;
    const result = await Product.findById(prodId);
    res.status(200).json({ message: "Product Results", result });
  } catch (error) {
    res.status(400).json({ message: "Unable to Update product details", data: error });
  }
}

// Incomplete 
export const updateProduct = async (req, res) => {
  try {
    const id = req.body.id;
    const data = {
      name: req.body.name
    }
    const result = await Product.findByIdAndUpdate(id, data);
    res.status(200).json({ message: "Product Results", result });
  } catch (error) {
    res.status(400).json({ message: "Unable to Update product details", data: error });
  }
}