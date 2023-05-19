import mongoose from 'mongoose';

const UserSchema = mongoose.Schema(
// create a products schema here based on the following list: Product	_id	String	name	String	price	String	description	String	category	String	rating	Number	supply	Number
    {
        name: {
            type: String,
            required: true,
            min: 2,
            max: 100,
        },
        price: {
            type: String,
            required: true,
            min: 2,
            max: 100,
        },
        description: {
            type: String,
            required: true,
            min: 2,
            max: 100,
        },
        category: {
            type: String,
            required: true,
            min: 2,
            max: 100,
        },
        rating: {
            type: Number,
            required: true,
            min: 2,
            max: 100,
        },
        supply: {
            type: Number,
            required: true,
            min: 2,
            max: 100,
        },
    },
    { timestamps: true }
);

const Product = mongoose.model("Product", UserSchema);
export default Product;
