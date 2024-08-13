//this is the custom error we might to use i our code,
export const errorHandaler = (statusCode , message) => {
    const error = new Error();
    error.statusCode = statusCode;
    error.message = message;
    return error;
}; 