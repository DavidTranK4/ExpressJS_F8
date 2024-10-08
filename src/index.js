const express = require('express')
const app = express()
const port = 3000
const morgan = require('morgan')
const handlebars =require("express-handlebars") // import thu vien handerbars trong express js
const path = require('path')

//http loger hiem thi cac xu ly htpp trong terminal and console log

//dang ky cai name handlebars = funtion nay
app.engine('hbs',handlebars.engine({extname : '.hbs', partialsDir: path.join(__dirname, 'resources','views', 'partials')}))
//set view engie = cai name handlebars vua dang ky luc nay
app.set('view engine','hbs')

app.use(express.static(path.join(__dirname,'public')))
app.set('view engine', 'hbs');

app.set ('views',path.join(__dirname, 'resources','views'))
//duong dan toi trang chu
app.get('/', (req, res) => {
  res.render('home')
})
app.get('/news', (req, res) => {
  console.log(req.query.Search);
  res.render('news')
})
app.get('/search', (req, res) => {
  console.log(req.query.Search);
  
  res.render('search')
})

app.listen(port, () => {
  console.log(`Click at here http://localhost:${port}`)
})

