/**
 * @author daferarte
 * @version 1.0.0
 * 
 * Rutas de usuario
 * Este archivo define las rutas de usuarios
 */

const {Router} = require('express');

const router= Router();

/**
 * Importando los metodos
 */

const {AddUsers, ShowUsers, DeleteUsers, EditUsers, ShowUser} = require('../controllers/users.controller');

/**
 * Rutas
 */
router.get('/', ShowUsers);
router.post('/', AddUsers);
router.delete('/', DeleteUsers);
router.put('/', EditUsers);
router.get('/:id', ShowUser);

module.exports = router;