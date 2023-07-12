import ErrorHandler from "../utils/errorhandler.js"
import {catchAsyncError} from "../middleware/catchAsyncError.js";

export const newUser = catchAsyncError((req,res,next)=>{
    const userExist = 1;
    if(userExist){
        return next(new ErrorHandler("User already exist",404));
    }

    res.json({
        message:"router is working",
    })
})
