let mascotas = [];

const listar = () => {
    return mascotas;
}

const guardar = (nombre, apellido, edad) => {
    mascotas.push({ nombre, apellido, edad });
}

module.exports = {
    listar,
    guardar
}