import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectdb = (
    async () => {
        try {
           const connectioninstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
            console.log("database connected success",connectioninstance.connection.host);
// app.on("error", (error)=>{
//     console.log("Error is :",error)
//     process.exit(1)
// });
// app.listen(process.env.PORT, ()=>{
//     console.log(`server is listening on port ${process.env.PORT}`);
   
// })
        } catch (error) {
            console.log(`Error is `,error);
            throw error;
        }
        

})

export default connectdb;
