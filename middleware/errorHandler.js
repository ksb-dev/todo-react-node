const CustomAPIError = require('../errors/customError')

const errorHandler = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message })
  }
  if (err.message.substring(36).startsWith('Cast to date failed')) {
    return res
      .status(500)
      .json({ msg: 'Please provide date in a YYYY-MM-DD format' })
  }
  return res.status(500).json({ msg: err.message })
}

module.exports = errorHandler
