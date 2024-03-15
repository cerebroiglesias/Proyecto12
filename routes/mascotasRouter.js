const express = require('express');
const { listar, guardar } = require('../controllers/mascotasController');
const router = express.Router();


router.get('/listar', listar);
router.post('/guardar', guardar);

module.exports = router;