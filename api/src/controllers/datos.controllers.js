const datos={};
const driver=require("../database/database");

////////////////////////////////////////////////////
//************ IMPORTAR DATOS A NEO4J *************/
///////////////////////////////////////////////////

///***** IMPORTAR NODOS******/

datos.importarCliente=(req, res) => {
    const session = driver.session(); 
    session
        .run("LOAD CSV FROM 'file:///Clientes.csv' AS row WITH toInteger(row[0]) AS IdCliente, row[1] AS NombreCliente, row[2] AS Apellido Create (c:Cliente{idCliente:IdCliente, nombreCliente:NombreCliente, apellido:Apellido})")
        .then(function(result){
            res.send("Clientes cargados")
            session.close();
        })

        .catch(function(err){
            console.log(err);
        })
}
datos.importarProductos=(req, res) => { 
    const session = driver.session();
    session
        .run("LOAD CSV FROM 'file:///Productos.csv' AS row WITH toInteger(row[0]) AS IdProducto, row[1] AS Nombre  ,row[2] AS Marca, toInteger(row[3]) AS Precio Create (p:Producto{idProducto:IdProducto, nombre: Nombre, marca:Marca, precio:Precio})")
        .then(function(result){
            res.send("Productos cargados")
            session.close();
        })
        .catch(function(err){
            console.log(err);
        })
}
datos.importarMarca=(req, res) => { 
    const session = driver.session();
    session
        .run("LOAD CSV FROM 'file:///Marcas.csv' AS row WITH toInteger(row[0]) AS IdMarca, row[1] AS NombreMarca  ,row[2] AS Pais Create (m:Marca{idMarca:IdMarca, nombreMarca: NombreMarca, pais:Pais})")
        .then(function(result){
            res.send("Marcas cargadas")
            session.close();
        })
        .catch(function(err){
            console.log(err);
        })
}
datos.importarCompras=(req, res) => { 
    const session = driver.session();
    session
        .run("LOAD CSV FROM 'file:///Compras.csv' AS row WITH toInteger(row[0]) AS IdCliente, toInteger(row[1]) AS IdProducto  ,toInteger(row[2]) AS Cantidad Create (o:Compras{idCliente:IdCliente, idProducto:IdProducto, cantidad:Cantidad})")
        .then(function(result){
            res.send("Compras cargadas")
            session.close();
        })
        .catch(function(err){
            console.log(err);
        })
}

///******* IMPORTAR RELACIONES********/
datos.relacionarProductoCompra=(req, res) => { 
    const session = driver.session();
    session
        .run("MATCH (p:Producto),(o:Compras) WHERE p.idProducto = o.idProducto CREATE (p)-[r:INCLUYE]->(o) RETURN type(r)")
        .then(function(result){
            res.send("Producto y compra relacionado")
            session.close();
        })
        .catch(function(err){
            console.log(err);
        })
    
}
datos.relacionarClienteCompra=(req, res) => { 
    const session = driver.session();
    session
        .run("MATCH (c:Cliente), (o:Compras) WHERE c.idCliente = o.idCliente CREATE (c)-[r:REALIZA]->(o) RETURN type(r)")
        .then(function(result){
            res.send("Cliente y compra relacionado")
            session.close();
        })
        .catch(function(err){
            console.log(err);
        })
}

datos.relacionarProductoMarca=(req, res) => { 
    const session = driver.session();
    session
        .run("MATCH (m:Marca), (p:Producto) WHERE m.nombreMarca = p.marca CREATE (m)-[r:VENDE]->(p) RETURN type(r)")
        .then(function(result){
            res.send("Cliente y compra relacionado")
            session.close();
        })
        .catch(function(err){
            console.log(err);
        })
}



module.exports= datos;