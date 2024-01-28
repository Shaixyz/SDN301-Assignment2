const express = require('express')
const bodyParser = require('body-parser');
const orchidRouter = express.Router();
orchidRouter.use(bodyParser.json());

const Orchids = require('../models/orchids');
const orchidController = require('../controllers/orchidController');

orchidRouter
   .route('/')
   .get(orchidController.index)
   .post(orchidController.create)
orchidRouter
   .route('/delete/:orchidId')
   .get(orchidController.remove)
orchidRouter
   .route('/edit/:orchidId')
   .get(orchidController.formEdit)
   .post(orchidController.edit)

module.exports = orchidRouter;