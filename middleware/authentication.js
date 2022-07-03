const User = require('./../models/User')
const { StatusCodes } = require('http-status-codes')
const jwt = require('jsonwebtoken')

const auth = async (req, res, next) => {
  // Check Header
  //console.log(req.headers.authorization)

  const authHeader = req.headers.authorization

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ message: 'Authentication Invalid' })
  }

  const token = authHeader.split(' ')[1]

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET)

    // Attatch the user to the job routes
    req.user = { userId: payload.userId, name: payload.name }
    next()
  } catch (error) {
    console.log('error')
    res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ message: 'Authentication Invalid' })
  }
}

module.exports = auth
