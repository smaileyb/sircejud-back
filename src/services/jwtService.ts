import jwt from 'jsonwebtoken'

type PayloadType = string | object | Buffer

const secret = 'sirce-jud'

export const jwtService = {
  signPayload: (payload: PayloadType, expiration: string) => {
    return jwt.sign(payload, secret, { expiresIn: expiration })
  },
  verifyToken: (token: string, callbackFunction: jwt.VerifyCallback) => {
    jwt.verify(token, secret, callbackFunction)
  }
}
