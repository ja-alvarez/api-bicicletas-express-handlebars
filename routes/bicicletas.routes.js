import { Router } from 'express'
import bicicletasController from '../controllers/bicicletas.controllers.js';

const router = Router()

// Ruta para obtener todas las bicicletas
router.get('/', bicicletasController.getAll);

// Ruta para crear bicicletas
router.post('/', bicicletasController.addBicicleta);

// Rtua eliminar bicicleta por id
router.delete('/:id', bicicletasController.deleteBicicleta);

export default router