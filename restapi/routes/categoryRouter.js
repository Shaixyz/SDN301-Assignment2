const express = require ('express')
const Categories = require ('../models/categories')
const bodyParser = require('body-parser')
const categoryRouter = express.Router()
categoryRouter.use(bodyParser.json()) 

categoryRouter.route('/')
.get((req, res)=>{
    Categories.find({})
    .then((categories)=>{
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.json(categories)
    })
})
.post((req, res)=>{
    Categories.create(req.body)
    .then((category)=>{
        res.json(category);
    })
})
.put((req, res) => {
    res.end('No support');
})
.delete((req, res) => {
    Categories.deleteOne({})
        .then((resp) => {
            res.json(resp);
        })
});
categoryRouter.route('/:categoryId')
    .get((req, res) => {
        Categories.findById(req.params.categoryId)
            .then((category) => {
                res.json(category);
            })
    })
    .put((req, res) => {
        Categories.findByIdAndUpdate(req.params.categoryId, {
            $set: req.body
        }, { new: true })
            .then((category) => {
                res.json(category);
            })
    })
    .delete((req, res) => {
        Categories.findOneAndDelete({ _id: req.params.categoryId })
            .then((response) => {
                if (response) {
                    res.json(response);
                } else {
                    res.status(404).json({ error: 'Category not found' });
                }
            })
            .catch((error) => {
                res.status(500).json({ error: error.message });
            });
    });

module.exports = categoryRouter