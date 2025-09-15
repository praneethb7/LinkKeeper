import mongoose from "mongoose";

const connectDB = async() => {
    try {
        await mongoose.connect(process.env.dbUrl);
        console.log("MongoDB Connected");
    } catch(e) {
        console.error("Mongo DB Failed to connect: ",e);
        process.exit(1);
    }
};

export default connectDB;