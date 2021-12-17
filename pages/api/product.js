import connectDB from '../../db/connect';
import Product from '../../models/Product';

const handler = async (req, res) => {
    if (req.method === 'POST') {
        const {coinName, acronym, logo, price} = req.body;
        if (coinName && acronym && logo && price) {
            try {
                const product = new Product({
                    coinName,
                    acronym,
                    logo,
                    price,
                });
                const productCreated = await product.save();
                return res.status(200).send(productCreated);
            } catch (error) {
                return res.status(500).send(error.message);
            }
        } else {
            res.status(422).send('data_incomplete');
        }
    } else {
        res.status(422).send('req_method_not_supported');
    }
};

export default connectDB(handler);