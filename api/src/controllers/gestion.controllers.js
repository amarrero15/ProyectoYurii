const gestion={};
const driver=require("../database/database");

////////////////////////////////////////////
//************ CRUD CLIENTES *************/
////////////////////////////////////////////
gestion.agregarCliente=(req, res) => { 
    var nombreCliente= "JORGITO";
    var apellidoCliente = 'Melano';
    var idCliente = 69; 
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
    var nombreCliente= "Jose";
    var apellidoCliente = 'Leiva';
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
    var nombreCliente= "Jose";
    var apellidoCliente = 'Leiva';
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

////////////////////////////////////////////
//************ CRUD CATALOGO *************/
////////////////////////////////////////////

gestion.agregarProducto=(req, res) => { 
    var idProducto = 69;
    var nombreProducto= "Consolador";
    var marca = 'Mattel';
    var precio = 20000; 
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
    var nombreProdcuto= "Consolador";
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
    var nombreProducto= "Consolador";
    const session = driver.session();
    session
    .run("MATCH (n:Prodcuto {nombreProducto: '"+nombreProdcuto+"'}) RETURN n")
    .then(function(result){
        res.send("Producto leído")
        session.close();
    })
    .catch(function(err){
        console.log(err);
    })  
}

module.exports = gestion;