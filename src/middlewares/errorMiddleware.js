const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`)
  res.status(404)
  next(error)
}
const errorHandler = (err, req, res, next) => {
  var statusCode = res.statusCode === 200 ? 500 : res.statusCode
  if (err.message === 'jwt expired') {
    res.status(401)
    res.json({
      message: err.message,
      stack: err.stack,
    })
    res.redirect('/login')
    return
  }
  res.status(statusCode)
  res.json({
    message: err.message,
    stack: err.stack,
  })
}

module.exports = { notFound, errorHandler }
