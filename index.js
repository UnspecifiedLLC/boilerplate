require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const handlebars = require('express-handlebars')
const helpers = require('handlebars-helpers')()

const app = express();
let port = 3000;

app.set('json spaces', 2);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.set('view engine', 'hbs');
app.engine('hbs', handlebars({
    extname: 'hbs',
    layoutsDir: __dirname + '/views/layouts',
    helpers: helpers
}));

app.use(express.static('assets'))

app.get('/', (req, res) => {
    res.render('index', { layout: 'main' })
})

app.get('/form', (req, res) => {
    res.render('form', { layout: 'main' })
})

app.get('/data', (req, res) => {
    let data = {
        title: "Title provided by passing data",
        items: [
            { name: "Item 1", price: 12.00 },
            { name: "Item 2", price: 0.99 },
            { name: "Item 3", price: 77.99 },
        ]
    }
    res.render('data', { layout: 'main', data })
})

app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`)
})