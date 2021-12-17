import mongoose from 'mongoose';

const connectDB = handler => async (req, res) => {
    if (mongoose.connections[0].readyState) {
        return handler(req, res);
    }
    // Use new db connection
    const uri = "mongodb+srv://Matthis:root@marketplace.zepzc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    await mongoose.connect(uri, {
        useUnifiedTopology: true,
        useCreateIndex: true,
    });
    return handler(req, res);
};

export default connectDB;