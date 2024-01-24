import dotenv from "dotenv";
import connectdb from "./db/index.js";

connectdb()
.then(() => {
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`server is running on port : ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("MONGO db connection failed !!! ", err);
})
/*
import mongoose from "mongoose";
import { DB_NAME } from "./constant.js";
import express from "express";
const app = express();
*/


// it is loaded first :important
dotenv.config({
    path: './env'
});


/*
(
    async () => {
        try {
            await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
            console.log("database connected success");
app.on("error", (error)=>{
    console.log("Error is :",error)
    throw error;
});
app.listen(process.env.PORT, ()=>{
    console.log(`server is listening on port ${process.env.PORT}`);
   
})
        } catch (error) {
            console.log(`Error is `,error);
            throw error;
        }
        

})()
*/