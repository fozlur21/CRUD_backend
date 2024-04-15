import mongoose from 'mongoose';

const ProductsSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter the product name"]
        },
        description: {
            type: String,
            required: [false, "Please enter the product description"]
        },
        quantity: {
            type: Number,
            required: true,
            default: 0
        },
        price: {
            type: Number,
            required: true,
            default: 0
        },
        images: {
            type: [String],
            required: false
        },
        category: {
            type: String,
            required: false
        },
        brand: {
            type: String,
            required: [false, "Please add brand name"]
        }
    },
    {
        timestamps: true

    }

);

const Product = mongoose.model('Product', ProductsSchema);
export default Product;