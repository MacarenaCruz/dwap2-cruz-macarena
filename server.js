const express = require('express')
const app = express()

const hbs = require('hbs');
require('./data/Articulos');
const port = process.env.PORT || 9000 
app.use(express.static(__dirname + '/public' ));

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home',{
        prod: 'Accesorios',
        prod2: 'Bases',
        prod3: 'Sombras',
        prec1: 10.00,
        prec2: 8.00,
        prec3: 15.00
    });
});
app.listen(port,()=>{
    console.log(`Escuchando peticiones en el puerto ${port}`);
});