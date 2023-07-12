class ErrorHandler extends Error{
    constructor(err,statusCode){
        super(err);
        this.statusCode = statusCode;
    }
}

export default ErrorHandler;