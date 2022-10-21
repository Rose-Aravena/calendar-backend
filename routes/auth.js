/*
    Rutas de Usuarios / Auth
    host + /api/auth
*/
const { Router } = require('express');
const { check } = require('express-validator');
const { fileValidator } = require('../middlewares/file-validator');
const { createUser, loginUser, revalidateToken } = require('../controllers/auth');

const router = Router();

router.post(
    '/new',
    [
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'la contraseña debe de ser de 6 caracteres').isLength({ min: 6 }),
        fileValidator
    ],
    createUser
);

router.post(
    '/',
    [
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'la contraseña debe de ser de 6 caracteres').isLength({ min: 6 }),
        fileValidator
    ],
    loginUser
);

router.get('/renew', revalidateToken);

module.exports = router;