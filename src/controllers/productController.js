const mongoose = require("mongoose");
const product = mongoose.model("Product");

module.exports = {
  async registerProducts(req, res) {
    const payload = req.body;
    const response = await product.create(payload);
    res.json(response);
  },
  async listProducts(req, res) {
    const { page } = req.query;
    const response = await product.paginate({}, { page, limit: 10 });
    res.json(response);
  },
  async listByCode(req, res) {
    const productCode = req.params.productCode;
    const response = await product.findById(productCode);
    res.json(response);
  },
  async updateProduct(req, res) {
    const productCode = req.params.productCode;
    const updatedProduct = req.body;
    console.log(productCode);
    const response = await product.findByIdAndUpdate(productCode, updatedProduct, { new: true });
    res.json(response);
  },
  async removeProduct(req, res) {
    const productCode = req.params.productCode;
    const response = await product.findByIdAndRemove(productCode);
    res.json(response);
  },
  async getProductByName(req, res) {
    const productName = req.params.productName;
    const response = await product.where({ "description": productName });
    res.json(response);
  }
};
