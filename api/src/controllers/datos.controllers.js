const datos={};
const driver=require("../database/database");

////////////////////////////////////////////////////
//************ IMPORTAR DATOS A NEO4J *************/
///////////////////////////////////////////////////

///***** IMPORTAR NODOS******/

datos.importarCliente=(req, res) => { 
    session
        .run("LOAD CSV WITH HEADERS FROM 'file://C:/Clientes.csv' AS row WITH row WHERE row.id IS NOT NULL CREATE(cl:Cliente{idCliente:row.id, nombreCliente:row.first_name, apellido:row.last_name});")
        .then(function(result){
            console.log("Clientes cargados")
        })
        .catch(function(err){
            console.log(err);
        })
}
datos.importarProductos=(req, res) => { 
    session
        .run("LOAD CSV WITH HEADERS FROM 'file:///C:/Productos.csv' AS row WITH row WHERE row.id IS NOT NULL CREATE(p:Productos{idProducto:row.id, nombre:row.nombre, marca:row.marca, precio:row.precio})")
        .then(function(result){
            console.log("Productos cargados")
        })
        .catch(function(err){
            console.log(err);
        })
}
datos.importarMarca=(req, res) => { 
    session
        .run("LOAD CSV WITH HEADERS FROM 'file:///C:/Marcas.csv' AS row WITH row WHERE row.id IS NOT NULL CREATE(m:Marcas{idMarca:row.id, nombreMarca:row.nombre, pais:row.pais})")
        .then(function(result){
            console.log("Marcas cargadas")
        })
        .catch(function(err){
            console.log(err);
        })
}
datos.importarCompras=(req, res) => { 
    session
        .run("LOAD CSV WITH HEADERS FROM 'file:///C:/Compras.csv' AS row WITH row WHERE row.idCliente IS NOT NULL CREATE(co:Compras{idCliente:row.idCliente, idProducto:row.idProducto, cantidad:row.cantidad})")
        .then(function(result){
            console.log("Compras cargadas")
        })
        .catch(function(err){
            console.log(err);
        })
}

///******* IMPORTAR RELACIONES********/
datos.relacionarProductoCompra=(req, res) => { 
    session
        .run("MATCH (p:Producto),(o:Compras) WHERE p.idProducto = o.idProducto CREATE (p)-[r:INCLUYE]->(o) RETURN type(r)")
        .then(function(result){
            res.send("Producto y compra relacionado")
        })
        .catch(function(err){
            console.log(err);
        })
}
datos.relacionarClienteCompra=(req, res) => { 
    session
        .run("MATCH (c:Cliente), (o:Compras) WHERE c.idCliente = o.idCliente CREATE (c)-[r:REALIZA]->(o) RETURN type(r)")
        .then(function(result){
            res.send("Cliente y compra relacionado")
        })
        .catch(function(err){
            console.log(err);
        })
}

datos.relacionarProductoMarca=(req, res) => { 
    session
        .run("MATCH (m:Marca), (p:Producto) WHERE m.nombreMarca = p.marca CREATE (m)-[r:VENDE]->(p) RETURN type(r)")
        .then(function(result){
            res.send("Cliente y compra relacionado")
        })
        .catch(function(err){
            console.log(err);
        })
}



module.exports= datos;