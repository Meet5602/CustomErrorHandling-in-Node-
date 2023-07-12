import express from "express";
import userRouter from "./routes/user.js";
import errorMiddleware from "./middleware/Error.js";
import connectDb from "./config/db.js";
const app = express();

app.use("/user",userRouter);

connectDb();
app.listen(4000,()=>{
    console.log("listening on the port 4000");
})

app.use(errorMiddleware);
