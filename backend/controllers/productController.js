import { v2 as cloudinary } from "cloudinary";
import productModel from "../models/productModel.js";

const addProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      category,
      subCategory,
      price,
      sizes,
      bestseller,
    } = req.body;

    /* upload image in cloudinery */
    let images = ["image1", "image2", "image3", "image4"].map(
      (filed) => req.files[filed] && req.files[filed][0]
    );
    images = images.filter((item) => item !== undefined);
    const imageUrls = await Promise.all(
      images.map(async (item) => {
        const result = await cloudinary.uploader.upload(item.path, {
          resource_type: "image",
        });
        return result.secure_url;
      })
    );
    const productData = {
      name,
      description,
      price: Number(price),
      sizes: JSON.parse(sizes),
      image: imageUrls,
      bestseller: bestseller === "true" ? true : false,
      category,
      subCategory,
      date: Date.now(),
    };

    const product = new productModel(productData);
    await product.save();

    res.json({ success: true, message: "product add successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const removeProduct = async (req, res) => {
  try {
     const { id } = req.params;
    await productModel.findByIdAndDelete(id);
    return res.json({ success: true, message: "product removed successfully" });
  } catch (error) {
    res.json({ success: false, message: error.message });
    console.log(error);
  }
};

const listAllProduct = async (req, res) => {
  try {
    const products = await productModel.find();
    return res.json({ success: true, products });
  } catch (error) {
    res.json({ success: false, message: error.message });
    console.log(error);
  }
};

const getSingleProduct = async (req, res) => {
  try {
    const product = await productModel.findById(req.params.id);
    return res.json({ success: true, product });
  } catch (error) {
    res.json({ success: false, message: error.message });
    console.log(error);
  }
};

export { addProduct, listAllProduct, removeProduct, getSingleProduct };
