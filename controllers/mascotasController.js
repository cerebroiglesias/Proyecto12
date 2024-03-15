const model = require('../models/mascotasModel');

const listar = (req, res) => {
    res.send(model.listar());
}

const guardar = (req, res) => {
    console.log(req.body);
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