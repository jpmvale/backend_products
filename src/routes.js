const express = require("express");
const routes = express.Router();
const productController = require("./controllers/productController");
const userController = require("./controllers/userController");

//PRODUCTS
routes.get("/products/getProducts", productController.listProducts);
routes.post("/products/createProduct", productController.registerProducts);
routes.get("/products/listProduct/:productCode", productController.listByCode);
routes.post("/products/updateProduct/:productCode", productController.updateProduct);
routes.delete("/products/deleteProduct/:productCode", productController.removeProduct);
routes.get("/products/listProductByName/:productName", productController.getProductByName);

//USER

routes.post("/user/createUser", userController.createUser);
routes.get("/user/getUsers", userController.getUsers);
routes.post("/user/authenticateUser", userController.authenticateUser);
module.exports = routes;
