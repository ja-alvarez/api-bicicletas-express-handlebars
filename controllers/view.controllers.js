// Controladores de las vistas
import db from '../database/config.js';

const homeController = async (req, res) => {
    try {
        let results = await db.query('SELECT id, nombre, marca, modelo, precio FROM bicicletas');
        let bicicletas = results.rows;
        res.render('home', {
            bicicletas
        })
    } catch (error) {
        res.render('home', {
            error: 'Error al procesar los datos.'
        })
    }
}

const crudController = async (req, res) => {
    try {
        let results = await db.query('SELECT id, nombre, marca, modelo, precio FROM bicicletas');
        let bicicletas = results.rows;
        res.render('crudBicicletas', {
            bicicletas
        })
    } catch (error) {
        res.render('crudBicicletas', {
            error: 'Error al procesar los datos.'
        })
    }
}
const controladores = {
    homeController,
    crudController
};
export default controladores;