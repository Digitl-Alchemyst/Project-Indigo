import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema(
// create a products schema here based on the following list: Product	_id	String	name	String	price	String	description	String	category	String	rating	Number	supply	Number
    {
        name: {
            type: String,
        },
        price: {
            type: Number,
        },
        description: {
            type: String,
        },
        category: {
            type: String,
        },
        rating: {
            type: Number,
        },
        supply: {
            type: Number,
        },
    },
    { timestamps: true }
);

const Product = mongoose.model("Product", ProductSchema);
export default Product;
