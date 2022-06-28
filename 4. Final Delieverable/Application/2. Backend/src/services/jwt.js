import jwt from 'jsonwebtoken'

export function getToken(id) {
  return jwt.sign({ data: id }, process.env.JWT_PRIVATE_KEY, {
    expiresIn: '365d',
  })
}
export function validateToken(headers) {
  if (!headers) {
    throw new Error('Token Validating Failed')
  }
  const split = headers.split(' ')
  const token = jwt.verify(split[1], process.env.JWT_PRIVATE_KEY)
  if (split[0] === 'Bearer' && token) {
    return token.data
  } else {
    throw new Error('Token Validating Failed')
  }
}
