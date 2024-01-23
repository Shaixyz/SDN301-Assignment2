const express = require('express')
const Orchids = require('../models/orchids')
const bodyParser = require('body-parser')
const orchidRouter = express.Router()
orchidRouter.use(bodyParser.json())

orchidRouter.route('/')
    .get((res, req) => {
        Orchids.find({})
            .then((orchids) => {
                res.statusCode = 200
                res.setHeader('Content-Type', 'application/json')
                res.json(orchids)
            })
    })
    .post((res, req) => {
        Orchids.create(req.body)
            .then((orchid) => {
                res.json(orchid)
            })
    })
    .put((res, req) => {
        res.end('No support')
    })
    .delete((res, req) => {
        Orchids.deleteOne()
            .then((resp) => {
                res.json(resp)
            })
    })

orchidRouter.route('/:orchidId')
    .get((res, req) => {
        Orchids.findByID(req.params.orchidId)
            .then((orchid) => {
                res.json(orchid)
            })
        // giống bài ex 13
    })
    .put((res, req) => {
        Orchids.findByIdAndUpdate(req.params.orchidId, {
            $set: req.body
        }, { new: true })
            .then((orchid) => {
                res.json(orchid)
            })
    })
    .delete((req, res) => {
        Orchids.findByIdAndRemove(req.params.orchidId)
        .then((resq) => {
            res.json(resq)
        })
    });

module.exports = orchidRouter


