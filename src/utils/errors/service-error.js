const { StatusCodes } = require("http-status-codes");

class ServiceError extends Error {
    constructor(message, explanation, statusCode = StatusCodes.INTERNAL_SERVER_ERROR) {
        this.name = 'ServiceError'
        this.message = message
        this.explanation = explanation
        this.statusCode = statusCode
    }
}

module.exports = ServiceError