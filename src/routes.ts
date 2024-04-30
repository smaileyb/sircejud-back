import express from 'express'
import { rulingsController } from './controllers/RulingsController'
import { authController } from './controllers/authController'
import { ensureAuthentication } from './middlewares/auth'

const router = express.Router()

router.get('/rulings', ensureAuthentication, rulingsController.index)

router.post('/auth/register', authController.register)
router.post('/auth/login', authController.login)

export { router }
