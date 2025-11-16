export class AppError extends Error {
  constructor(message, statusCode = 400, name = "AppError", details = null) {
    super(message);
    this.statusCode = statusCode;
    this.name = name;
    if (details) this.details = details;
    Error.captureStackTrace(this, this.constructor);
  }
}
