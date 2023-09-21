const express = require ('express');
const app = express();

//indicando que se cargen archivos static
app.use(express.static(__dirname + '/static'));

app.get('/', (req, res) => { 
    res.sendFile('./static/inicio.html',{
        root:__dirname
    })
})


app.get('/clientes', (req, res) => { 
    
    res.sendFile('./static/clientes.html',{
        root:__dirname
        
    })

})
app.get('/productos', (req, res) => { 
    res.sendFile('./static/productos.html',{
        root:__dirname
    })
})




//iniciando la conexion
app.listen(5000)
console.log(`server on port ${5000}`)

