const express = require('express')

const cors = require('cors')

const dataservice = require('./services/dataservice')

const app = express()

app.use(express.json())

app.use(cors({
    origin:'http://localhost:3000'
}))

app.listen(8000,()=>{
    console.log('listening on port 8000');
})

app.get('/get-all-products',(req,res)=>{
    dataservice.allProducts()
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})

// add new product

app.post('/add-product',(req,res)=>{
    dataservice.addProduct(req.body.id,req.body.pName,req.body.model,req.body.airEnd,
        req.body.production,req.body.sbm,req.body.casingSet,req.body.mainCasing,
        req.body.deliveryCasing,req.body.rotorPair,req.body.gear,req.body.pinion,
        req.body.dcMale,req.body.dcFemale,req.body.endCover,req.body.ptDate,
        req.body.ptBy,req.body.ptRemark,req.body.assembly)
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})

// delete product

app.delete('/delete-product/:id',(req,res)=>{
    dataservice.removeProduct(req.params.id)
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})