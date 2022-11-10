const gestion={};
const driver=require("../database/database");

////////////////////////////////////////////
//************ CRUD CLIENTES *************/
////////////////////////////////////////////

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

gestion.agregarCliente=(req, res) => { 
    var nombreCliente= req.body.nombre;
    var apellidoCliente = req.body.apellido;
    var idCliente = getRandomInt(100); 
    const session = driver.session();
    session
    .run("CREATE (c:Cliente {nombreCliente: '"+nombreCliente+"', apellido: '"+apellidoCliente+"', idCliente: '"+idCliente+"'})")
    .then(function(result){
        res.send("Cliente Agregado")
        session.close();
    })
    .catch(function(err){
        console.log(err);
    })
}

gestion.modificarCliente=(req, res) => { 
    var nombreCliente= "Antonia";
    var apellidoCliente = 'Ford';
    var nombreClienteNuevo= "JORGITO";
    var apellidoClienteNuevo = 'Melano';
    const session = driver.session();
    session
    .run("MERGE (n:Cliente {nombreCliente: '"+nombreCliente+"', apellido: '"+apellidoCliente+"'})SET n.nombreCliente = '"+nombreClienteNuevo+"', n.apellido = '"+apellidoClienteNuevo+"', n.idCliente=99  RETURN n ")
    .then(function(result){
        res.send("Cliente modificado")
        session.close();
    })
    .catch(function(err){
        console.log(err);
    })  
}

gestion.eliminarCliente=(req, res) => { 
    var nombreCliente= req.params.nombre;
    var apellidoCliente = req.params.apellido;
    const session = driver.session();
    session
    .run("MATCH (n:Cliente {nombreCliente: '"+nombreCliente+"', apellido: '"+apellidoCliente+"'}) DELETE n")
    .then(function(result){
        res.send("Cliente eliminado")
        session.close();
    })
    .catch(function(err){
        console.log(err);
    })   
}

gestion.leerCliente=(req, res) => { 
    var nombreCliente= req.params.apellido;
    var apellidoCliente = req.params.apellido;
    const session = driver.session();
    session
    .run("MATCH (n:Cliente {nombreCliente: '"+nombreCliente+"', apellido: '"+apellidoCliente+"'}) RETURN n")
    .then(function(result){
        res.send("Cliente leído")
        session.close();
    })
    .catch(function(err){
        console.log(err);
    })  
}

gestion.totalClientes=(req, res) => { 
    const session = driver.session();
    session
    .run("MATCH (n:Cliente) RETURN n")
    .then(function(result){
        res.send("Cliente leído")
        session.close();
    })
    .catch(function(err){
        console.log(err);
    })  
}

////////////////////////////////////////////
//************ CRUD CATALOGO *************/
////////////////////////////////////////////

gestion.agregarProducto=(req, res) => { 
    var idProducto = getRandomInt(100);
    var nombreProducto= req.body.nombre;
    var marca = req.body.marca;
    var precio = req.body.marca; 
    const session = driver.session();
    session
    .run("CREATE (c:Producto {idProducto: '"+idProducto+"', nombreProducto: '"+nombreProducto+"', marca: '"+marca+"', precio: '"+precio+"'})")
    .then(function(result){
        res.send("Prodcuto Agregado")
        session.close();
    })
    .catch(function(err){
        console.log(err);
    })
}

gestion.eliminarProducto=(req, res) => { 
    var nombreProducto= "Consolador";
    const session = driver.session();
    session
    .run("MATCH (n:Producto {nombreProducto: '"+nombreProducto+"'}) DELETE n")
    .then(function(result){
        res.send("Producto eliminado")
        session.close();
    })
    .catch(function(err){
        console.log(err);
    })   
}

gestion.leerProducto=(req, res) => { 
    var nombreProducto= req.params.nombre;
    const session = driver.session();
    session
    .run("MATCH (n:Producto {nombreProducto: '"+nombreProducto+"'}) RETURN n")
    .then(function(result){
        res.send("Producto leído")
        session.close();
    })
    .catch(function(err){
        console.log(err);
    })  
}



module.exports = gestion;