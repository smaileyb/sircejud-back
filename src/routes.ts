import express from 'express'
import { rulingsController } from './controllers/RulingsController'
import { authController } from './controllers/authController'

const router = express.Router()

router.get('/rulings', rulingsController.index)

router.post('/auth/register', authController.register)

export { router }
