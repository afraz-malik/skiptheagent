const jwt = require('jsonwebtoken')

function getToken(id) {
  return jwt.sign({ data: id }, process.env.JWT_PRIVATE_KEY, {
    expiresIn: 60,
  })
}
function validateToken(headers) {
  const split = headers.split(' ')
  const token = jwt.verify(split[1], process.env.JWT_PRIVATE_KEY)
  if (split[0] === 'Bearer' && token) {
    return token.data
  } else {
    throw new Error('Token Validating Failed')
  }
}
module.exports = { getToken, validateToken }
