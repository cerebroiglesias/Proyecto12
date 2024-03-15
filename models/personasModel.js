let personas = [];

const listar = () => {
    return personas;
}

const guardar = (nombre, apellido, edad) => {
    personas.push({ nombre, apellido, edad });
}

module.exports = {
    listar,
    guardar
}