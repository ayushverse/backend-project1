import mongoose from 'mongoose'
import {dbName} from "../constant.js";

const connectDB = async () => {
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${dbName}`)
        console.log(`Connected to ${connectionInstance.connection.host}`)
    }catch (error){
        console.log("Connection error : ",error)
        process.exit(1)
    }
}

export default connectDB