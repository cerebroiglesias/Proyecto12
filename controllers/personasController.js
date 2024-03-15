const model = require('../models/personasModel');

const listar = (req, res) => {
    res.send(model.listar());
}

const guardar = (req, res) => {
    let {
        nombre,
        apellido,
        edad
    } = req.body
    model.guardar(nombre, apellido, edad);
    res.send('Persona guardada');
}

module.exports = {
    listar,
    guardar
}