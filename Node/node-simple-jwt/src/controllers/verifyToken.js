import { JWT_SECRET } from '../config.js'
import jwt from 'jsonwebtoken'

export function verifyToken (req, res, next) {
  const token = req.headers['x-access-token']
  if (!token) {
    return res.status(401).json({ auth: false, message: 'No token provided' })
  }

  const decode = jwt.verify(token, JWT_SECRET)
  req.userId = decode.id
  next()
}
