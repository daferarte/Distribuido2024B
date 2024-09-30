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

const {AddUsers, ShowUsers, DeleteUsers, EditUsers, ShowUser, Login} = require('../controllers/users.controller');
const { validateJWT } = require('../middlewares/jwt');
/**
 * Rutas
 */
router.get('/', ShowUsers);
router.post('/', validateJWT, AddUsers);
router.delete('/:id',validateJWT, DeleteUsers);
router.put('/:id',validateJWT, EditUsers);
router.get('/:id',validateJWT, ShowUser);
router.post('/Login', Login);

module.exports = router;