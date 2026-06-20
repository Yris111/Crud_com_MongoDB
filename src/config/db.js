import mongoose from "mongoose";

export function connectDB() {
    mongoose.connect("mongodb://127.0.0.1:27017/produtosdb")
    .then(() => console.log("Mongodb conectado"))
    .catch(err => console.error(err));
}