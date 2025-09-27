const express = require('express')
const app = express()
const port = 5000

app.use(express.static('public'))
app.get('view engine','ejs')
app.set('views',__dirname+'/views')
app.use(express.urlencoded())


app.get('/', (req, res) => {
  res.sendFile(__dirname+'/home.html')
})
app.get('/home', (req, res) => {
  res.sendFile(__dirname+'/home.html')
})
app.get('/about', (req, res) => {
  res.sendFile(__dirname+'/about.html')
})
// http://127.0.0.1:5000/product/1
app.get('/product/:id', (req, res) => {
  var a = req.params.id
  res.send('Product id is '+a)
})
// http://127.0.0.1:5000/search?q=laptop
app.get('/search', (req, res) => {
  var a = req.query.q
  res.send('Search results for '+a)
})
app.get('/contact', (req, res) => {
  res.sendFile(__dirname+'/contact.html')
})

app.get('/contactprocess', (req, res) => {
  var a = req.query.no1
  var b = req.query.no2
  var c = parseInt(a)+parseInt(b)
  res.send('Sum is '+c)
})

app.get('/sum', (req, res) => {
  res.render('sum')
})

app.get('/sumprocess', (req, res) => {
  console.log(req.body)
  var a = req.body.no1
  var b = req.body.no2
  var c = parseInt(a) + parseInt(b)
  res.render('ans',{mya:a,myb:b,myc:c})
})

app.listen(port, () => {
  console.log(`Example app listening on port http://127.0.0.1:${port}`)
})