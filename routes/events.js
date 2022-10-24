const { Router } = require('express');
const {check} = require('express-validator');
const {fileValidator} = require('../middlewares/file-validator');
const {validatorJWT} = require('../middlewares/validator-jwt');
const {getEvents, createEvent, updateEvent, deleteEvent} = require('../controllers/events');
const { isDate } = require('../helpers/isDate');

const router = Router();

router.use(validatorJWT)

router.get('/', getEvents);

router.post(
    '/',
    [
        check('title', 'El titulo es obligatorio').not().isEmpty(),
        check('start', 'Fecha de inicio es obligatoria').custom(isDate),
        check('end', 'Fecha de finalizacion es obligatoria').custom(isDate),
        fileValidator
    ],
    createEvent);

router.put(
    '/:id',
    [
        check('title', 'El titulo es obligatorio').not().isEmpty(),
        check('start', 'Fecha de inicio es obligatoria').custom(isDate),
        check('end', 'Fecha de finalizacion es obligatoria').custom(isDate),
        fileValidator
    ],
    updateEvent);

router.delete('/:id', deleteEvent);

module.exports = router;