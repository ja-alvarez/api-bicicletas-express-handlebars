import express from 'express';
import { create } from 'express-handlebars';
import morgan from 'morgan';

import * as path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Importar rutas de vistas
import viewRoutes from './routes/views.routes.js';
import bicicletasRoutes from './routes/bicicletas.routes.js';




const app = express();

app.listen(3000, () => {
    console.log('Servidor escuchando en http://localhost:3000.')
});


// INICIO configuracion handlebars:
const hbs = create({
	partialsDir: [
		path.resolve(__dirname, ".(/views/partials/"),
	],
});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.set("views", path.resolve(__dirname, "./views"));
// FIN configuracion handlebars:



// Middlewares generales:
app.use(express.json());


// Rutas vistas
app.use('/', viewRoutes);

// Rutas endpoints bicicletas
app.use('/api/v1/bicicletas', bicicletasRoutes)