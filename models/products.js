const { Schema, model } = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const ProductSchema = new Schema(
  {
    name: String,
    price: Number,
  },
  { timestamps: true }
);

ProductSchema.plugin(mongoosePaginate);

module.exports = model("Product", ProductSchema);
