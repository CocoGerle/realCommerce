import { RequestHandler } from "express";
import { productModel } from "../../models/product.schema";

export const createProductController: RequestHandler = async (req, res) => {
  try {
    const { productName, price } = req.body;

    await productModel.create({ productName, price });

    return res.status(201).json({
      message: "Product created successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Interval setver eroor",
    });
  }
};
