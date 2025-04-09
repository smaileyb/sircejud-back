import express from 'express'
import { rulingsController } from './controllers/RulingsController'
import { authController } from './controllers/authController'
import { ensureAuthentication } from './middlewares/auth'
import { userController } from './controllers/userController'
import { topicsController } from './controllers/TopicsController'
import { documentsController } from './controllers/DocumentsController'

const router = express.Router()

router.get('/rulings', ensureAuthentication, rulingsController.index)
router.post('/rulings', ensureAuthentication, rulingsController.create)
router.get('/rulings/:id', ensureAuthentication, rulingsController.getOne)
router.put('/rulings/:id', ensureAuthentication, rulingsController.update)
router.delete('/rulings/:id', ensureAuthentication, rulingsController.delete)

router.post('/rulings/:id/topic', ensureAuthentication, topicsController.create)
router.put('/rulings/topic/:id', ensureAuthentication, topicsController.update)
router.delete(
  '/rulings/topic/:id',
  ensureAuthentication,
  topicsController.delete
)

router.post('/auth', authController.checkEmail)
router.post('/auth/register', authController.register)
router.post('/auth/login', authController.login)

router.get('/user', ensureAuthentication, userController.loggedUser)
router.put('/user/update', ensureAuthentication, userController.update)
router.put(
  '/user/update/password',
  ensureAuthentication,
  userController.updatePassword
)

router.get('/documents', ensureAuthentication, documentsController.index)
router.get('/documents/:id', ensureAuthentication, documentsController.getOne)

export { router }

//TODO need to make a new commit regarding the new migration, table, seeds, service, controller and routes
