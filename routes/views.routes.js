import { Router } from 'express'
import viewController from '../controllers/view.controllers.js';

const router = Router()

// Ruta vista home
router.get('/', viewController.homeController);

// Ruta vista CRUD de bicicletas
router.get('/crud', viewController.crudController);

export default router