const validateFile = (req, res, next) => {
  if (!req.files || Object.keys(req.files).length === 0 || !req.files.cv) {
    return res.status(400).json({
      message: "No hay archivos",
    });
  }

  next();
};

module.exports = {
  validateFile,
};
