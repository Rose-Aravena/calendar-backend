/*
    Rutas de Usuarios / Auth
    host + /api/auth
*/

const {Router} = require('express');
const router = Router();

const {createUser, loginUser, revalidateToken} = require('../controllers/auth');

router.post('/new', createUser);

router.post('/', loginUser);

router.get('/renew', revalidateToken);

module.exports = router;