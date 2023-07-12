import mongoose from "mongoose"
const connectDb = async ()=>{
    try {
        await mongoose.connect("mongodb://localhost:27017/errorhandler").then(()=>
        {
            console.log("DB connected Successfully");
        })
    } catch (error) {
        console.log(error)
    }
}

export default connectDb;