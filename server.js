const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const path = require('path')

//const dataBuku = require("./conteroller/controller")(app);

const router = require('./conteroller/controller')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

/*app.get('/', (req, res)=>{
    res.json({
        "post" : "/api/mybook",
        "get" : "/api/mybook"
    })
    res.end()
})*/

app.use("/api", router)


app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname + '/index.html'))
    //jangan pakai res.end() jika menggunakan res.sendFile()
})

app.post('/api/new-book', (req, res)=>{
    var buku = req.body.book
    var penerbit = req.body.publisher
    var tahun = req.body.year
    console.log('buku : ' + buku)
    console.log('penenrbit : ' + penerbit)
    console.log('tahun : ' + tahun)
    res.sendFile(path.join(__dirname + '/index.html'))
    
})

app.listen(4000, ()=>{
    console.log("Server is running on port 4000");
    
})
