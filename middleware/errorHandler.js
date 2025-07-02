//const { stack } = require("../routes/constactRoutes");

const errorHandler = (err, req, res, next) =>{
    const statusCode = res.statusCode ? res.statusCode : 500;
    res.json({ message: err.message, stackTrace: error.stack });
};

module.exports = errorHandler;