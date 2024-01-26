// Not found error Handler
const notFound = (req, res, next) => {
    const err = new Error(`Route not found : ${req.originalUrl}`);
    res.status(400);
    next(err);
}

//Error Handler
const handleError = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    res.status(statusCode);
    res.json(
        {
            status: false,
            message: err?.message,
            stack: err?.stack
        }
    )
}

module.exports = { handleError, notFound }