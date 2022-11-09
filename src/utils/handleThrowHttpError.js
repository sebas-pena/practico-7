const handleThrowHttpError = (req, res, statusCode, error, details = "No details available") => {
  const { baseUrl } = req
  res.status(statusCode).json({
    path: baseUrl,
    status: statusCode,
    error,
    details
  })
}

module.exports = handleThrowHttpError
