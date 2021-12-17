import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const product = new Schema({
    coinName: {
        type: String,
        required: true
    },
    acronym: {
        type: String,
        required: true
    },
    logo: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: false
    }
});
mongoose.models = {};

const Product = mongoose.model('Product', product);

export default Product;