import jwt from 'jsonwebtoken'
import { JWT_KEY } from '../config/environment'

type PayloadType = string | object | Buffer

export const jwtService = {
  signPayload: (payload: PayloadType, expiration: string) => {
    return jwt.sign(payload, JWT_KEY, { expiresIn: expiration })
  },
  verifyToken: (token: string, callbackFunction: jwt.VerifyCallback) => {
    jwt.verify(token, JWT_KEY, callbackFunction)
  }
}
