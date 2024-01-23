const express = require ('express')
const Categories = require ('../models/categories')
const bodyParser = require('body-parser')
const categoryRouter = express.Router()
categoryRouter.use(bodyParser.json()) 

categoryRouter.route('/')
.get((res,req)=>{
    Categories.find({})
    .then((categories)=>{
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.json(categories)
    })
})
module.exports = categoryRouter