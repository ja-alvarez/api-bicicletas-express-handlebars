// Controladores de las vistas
import db from '../database/config.js';

const getAll = async (req, res) => {
    try {
        let results = await db.query('SELECT id, nombre, marca, modelo, precio FROM bicicletas');
        res.json(results.rows)
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener data de bicicletas.' })
    }
};

const addBicicleta = async (req, res) => {
    try {
        let { nombre, marca, modelo, precio } = req.body;
        if (!nombre || !marca || !modelo || !precio) {
            return res.status(400).json({ message: 'Debe proporcionar todos los datos requeridos.' })
        }
        let consulta = {
            text: 'INSERT INTO bicicletas VALUES (default, $1, $2, $3, $4)',
            values: [nombre, marca, modelo, precio]
        }
        await db.query(consulta);
        res.status(201).json({
            message: 'Bicicleta creada correctamente.'
        });
    } catch (error) {
        res.status(500).json({ message: 'Error al crear bicicleta.' })
    }
};

const deleteBicicleta = async (req, res) => {
    try {
        //let id = req.params.id; or
        let { id } = req.params;
        let consulta = {
            text: 'DELETE FROM bicicletas WHERE id =  $1',
            values: [id]
        }
        let results = await db.query(consulta);
        if (results.rowCount == 1) {
            return res.json({
                message: `Bicicleta con id ${id} eliminada correctamente.`
            });
        } else {
            return res.atatus(404).json({
                message: `No se encuentra la bicicleta con id ${id}.`
            });
        }
    } catch (error) {
        console.log(error.code)
        res.status(500).json({ message: 'Error al eliminar bicicleta.' })
    }
}

const controladores = {
    getAll,
    addBicicleta,
    deleteBicicleta
};

export default controladores;