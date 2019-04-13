const express = require('express');
const router = require('express-promise-router')();
const usersController = require('../controllers/usersController');

const {validateBody, schemas} = require('../helpers/routeHelpers');

router.route('/signup')
    //컨트롤러 이동 전에 검증 후 이동
    .post(validateBody(schemas.authSchema), usersController.signUp);
router.route('/signin')
    .post(usersController.signIn);

router.route('/secret')
    .get(usersController.secret);

module.exports = router;