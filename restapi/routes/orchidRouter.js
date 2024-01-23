const express = require('express');
const Orchids = require('../models/orchids');
const bodyParser = require('body-parser');
const orchidRouter = express.Router();
orchidRouter.use(bodyParser.json());

orchidRouter.route('/')
    .get((req, res) => {
        Orchids.find({})
            .then((orchids) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(orchids);
            })
    })
    .post((req, res) => {
        Orchids.create(req.body)
            .then((orchid) => {
                res.json(orchid);
            })
    })
    .put((req, res) => {
        res.end('No support');
    })
    .delete((req, res) => {
        Orchids.deleteOne({})
            .then((resp) => {
                res.json(resp);
            })
    });

orchidRouter.route('/:orchidId')
    .get((req, res) => {
        Orchids.findById(req.params.orchidId)
            .then((orchid) => {
                res.json(orchid);
            })
    })
    .put((req, res) => {
        Orchids.findByIdAndUpdate(req.params.orchidId, {
            $set: req.body
        }, { new: true })
            .then((orchid) => {
                res.json(orchid);
            })
    })
    .delete((req, res) => {
        Orchids.findByIdAndRemove(req.params.orchidId)
            .then((resq) => {
                res.json(resq);
            })
    });

module.exports = orchidRouter;
