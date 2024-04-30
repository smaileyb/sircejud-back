import { NextFunction, Request, Response } from 'express'
import { UserInstance } from '../models/User'
import { jwtService } from '../services/jwtService'
import { userService } from '../services/userService'
import { JwtPayload } from 'jsonwebtoken'

export interface AuthenticatedRequest extends Request {
  user?: UserInstance | null
}

export function ensureAuthentication(
  request: AuthenticatedRequest,
  response: Response,
  next: NextFunction
) {
  const authorizationHeader = request.headers.authorization

  if (!authorizationHeader)
    return response
      .status(401)
      .json({ message: 'Usuário não autorizado - token não encontrado.' })

  const token = authorizationHeader.replace(/Bearer /, '')

  jwtService.verifyToken(token, (error, decoded) => {
    if (error || typeof decoded == 'undefined') {
      return response
        .status(401)
        .json({ message: 'Usuário não autorizado. Token inválido.' })
    }

    userService.findByEmail((decoded as JwtPayload).email).then(user => {
      request.user = user
      next()
    })
  })
}
