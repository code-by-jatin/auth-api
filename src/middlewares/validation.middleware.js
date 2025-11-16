export const validateBody = (schema) => (req, res, next) => {
  const { error, value } = schema.validate(req.body, { abortEarly: false, stripUnknown: true });
  if (error) {
    const details = error.details.map(d => d.message);
    return res.status(422).json({
      success: false,
      error: "ValidationError",
      message: "Invalid request data",
      details,
    });
  }
  req.body = value;
  next();
};
