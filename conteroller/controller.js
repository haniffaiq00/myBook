const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const app = express()
const path = require('path')

const dataBuku = require('../model/buku')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

/*const buku = app => {
    app.get('/collection',  (req,res)=>{
        var newBook = new dataBuku(req.body);
        res.json({
            newBook
        })
    })
    app.post('/new-book',  (req,res)=>{
        
    })
}*/

router.get('/collection',  (req,res)=>{
    res.json({
        "book" : "book name",
        "publisher" : "book publisher"
    })
})



module.exports = router;
//module.exports = buku