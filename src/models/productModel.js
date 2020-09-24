const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const ProductsSchema = mongoose.Schema(
  {
    description: String,
    weight: Number,
    unity: {
      type: String,
      require: false,
    },
    img: {
      type: String,
      require: false,
    },
    supplier: String,
    quantity: Number,
    price: Number,
  },
  { timestamps: true }
);

ProductsSchema.plugin(mongoosePaginate)
mongoose.model("Product", ProductsSchema);
