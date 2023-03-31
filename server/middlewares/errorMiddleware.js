const errorMiddleware = (error, req, res, next) => {
    const statusCode = error.statusCode || 500;
    const message =
        error.message || 'Something went wrong. Please try again later.';
    const errors = error.errors || {};

    res.status(statusCode).send({ message, errors });
};

module.exports = errorMiddleware;
