import express from 'express'
import { rulingsController } from './controllers/RulingsController'
import { authController } from './controllers/authController'
import { ensureAuthentication } from './middlewares/auth'
import { userController } from './controllers/userController'

const router = express.Router()

router.get('/rulings', ensureAuthentication, rulingsController.index)
router.post('/rulings', ensureAuthentication, rulingsController.create)
router.get('/rulings/:id', ensureAuthentication, rulingsController.getOne)
router.put('/rulings/:id', ensureAuthentication, rulingsController.update)
router.delete('/rulings/:id', ensureAuthentication, rulingsController.delete)

router.post('/auth/register', authController.register)
router.post('/auth/login', authController.login)

router.put('/user/update', ensureAuthentication, userController.update)
router.put(
  '/user/update/password',
  ensureAuthentication,
  userController.updatePassword
)

export { router }
