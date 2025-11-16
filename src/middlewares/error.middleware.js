export const errorHandler = (err, req, res, next) => {
  console.error(err);

  const status = err.statusCode || 500;
  const name = err.name || "InternalServerError";
  const message = err.message || "Something went wrong";
  const details = err.details || null;

  return res.status(status).json({
    success: false,
    error: name,
    message,
    details,
  });
};
