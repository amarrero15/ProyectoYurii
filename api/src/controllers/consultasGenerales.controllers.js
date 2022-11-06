const generalController={};
const driver=require("../database/database");
var nuevoVector=[]; //var global de consulta 1
var top5Marcas=[]; //var global de consulta 2
var comprasArr=[] //var global de consulta 3
//******FUNCIONES Y CONSULTAS******/


//*******************************CONSULTA 1************ */

generalController.consulta1=(req, res) => {    //maneja peticiones y respuestas cuando visitan pag principal
    const session = driver.session();
    session
        .run("MATCH (n:Compras) WHERE n.idProducto IS NOT NULL AND n.cantidad IS NOT NULL SET n.idProducto = toString(n.idProducto), n.cantidad=toString(n.cantidad) RETURN n")
        .then(function(result){
            var comprasArr1=[]; 
            result.records.forEach(function(record){
                //console.log(record._fields[0].properties)
                comprasArr1.push({
                    idProducto: record._fields[0].properties.idProducto, //SOLO PARA STRING
                    cantidad: record._fields[0].properties.cantidad
                });
            })
            /*var i=0;
            while(i<comprasArr.length){
                console.log(comprasArr[i]);
                i++;
            }*/
            session.close();

            contarDuplicados(comprasArr1);

            res.json(nuevoVector);
        })
        .catch(function(err){
            console.log(err);
        });
   
}

function contarDuplicados(comprasArr1){
    let nuevoVector1 =[] 
    comprasArr1.forEach((elemento) => {
        nuevoVector1.push({
            idProducto: Number(elemento.idProducto),
            cantidad: Number(elemento.cantidad)
        })
    });
    const compraSinDuplicados = nuevoVector1.reduce((acumulador,  valorActual) => {
        const elementoYaExiste = acumulador.find(elemento => elemento.idProducto === valorActual.idProducto);
        if (elementoYaExiste) {
        return acumulador.map((elemento) => {
            if ( elemento.idProducto ===  valorActual.idProducto) {
            return {
                ...elemento,
                cantidad:  elemento.cantidad +  valorActual.cantidad
            }
            }
            return (elemento);
        });
        }
    
        return [...acumulador, valorActual];
    }, []);
    
    var sorted_compras = compraSinDuplicados.sort(function(a, b) {
        return a.cantidad - b.cantidad;
    });

    var reversed_sorted_compras = sorted_compras.reverse();
    var top5Prod = reversed_sorted_compras.slice(0,5);
    var i=0;
    /*while(i<top5Prod.length){
            console.log(top5Prod[i]);                
            i++;
    }*/
    
    //console.log(top5Prod)
    return buscarNombreProducto(top5Prod);
    
}

function buscarNombreProducto(top5Prod){  //maneja peticiones y respuestas cuando visitan pag principal
    const session = driver.session();
    session
        .run("MATCH (n:Producto) WHERE n.idProducto IS NOT NULL AND n.nombre IS NOT NULL SET n.idProducto = toString(n.idProducto) RETURN n")
        .then(function(result){
            var productosArr=[]; 
            result.records.forEach(function(record){
                //console.log(record._fields[0].properties)
                productosArr.push({
                    idProducto: record._fields[0].properties.idProducto, //SOLO PARA STRING
                    nombre: record._fields[0].properties.nombre
                });
            })
            var i=0
            nuevoVector =[] 

            top5Prod.forEach((elemento) => {
                productosArr.forEach((elemento1) => {
                    if (Number(elemento1.idProducto)== elemento.idProducto){
                        nuevoVector.push({
                            nombre: elemento1.nombre,
                            total: elemento.cantidad
                        });
                    }
                })
                i=0
            })
            i=0;
            while(i<nuevoVector.length){
                console.log(nuevoVector[i]);
                i++;
            }
            return nuevoVector;
        })
        .catch(function(err){
            console.log(err);
        });
   
}

/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////

//*****************************CONSULTA 2 ************************/
generalController.consulta2=(req, res) => {    //maneja peticiones y respuestas cuando visitan pag principal
    const session = driver.session();
    session
        .run("MATCH (n:Compras) WHERE n.idProducto IS NOT NULL AND n.cantidad IS NOT NULL SET n.idProducto = toString(n.idProducto), n.cantidad=toString(n.cantidad) RETURN n")
        .then(function(result){
            var comprasArr1=[]; 
            result.records.forEach(function(record){
                //console.log(record._fields[0].properties)
                comprasArr1.push({
                    idProducto: record._fields[0].properties.idProducto, //SOLO PARA STRING
                    cantidad: record._fields[0].properties.cantidad
                });
            })
            /*var i=0;
            while(i<comprasArr.length){
                console.log(comprasArr[i]);
                i++;
            }*/
            session.close();
            contarDuplicadosMarcas(comprasArr1);
            res.json(top5Marcas);
        })
        .catch(function(err){
            console.log(err);
        });
   
}

function contarDuplicadosMarcas(comprasArr1){
    let nuevoVector1 =[] 
    comprasArr1.forEach((elemento) => {
        nuevoVector1.push({
            idProducto: Number(elemento.idProducto),
            cantidad: Number(elemento.cantidad)
        })
    });
    const compraSinDuplicados = nuevoVector1.reduce((acumulador,  valorActual) => {
        const elementoYaExiste = acumulador.find(elemento => elemento.idProducto === valorActual.idProducto);
        if (elementoYaExiste) {
        return acumulador.map((elemento) => {
            if ( elemento.idProducto ===  valorActual.idProducto) {
            return {
                ...elemento,
                cantidad:  elemento.cantidad +  valorActual.cantidad
            }
            }
            return (elemento);
        });
        }
    
        return [...acumulador, valorActual];
    }, []);

    /*var i=0;
    while(i<compraSinDuplicados.length){

        console.log(compraSinDuplicados[i]);
        i++;
    }*/
    tablaProducto(compraSinDuplicados)
}

//
function tablaProducto (compraSinDuplicados){    //maneja peticiones y respuestas cuando visitan pag principal
    let totalMarcas=[];
    const session = driver.session();
    session
        .run("MATCH (n:Producto) WHERE n.idProducto IS NOT NULL AND n.marca IS NOT NULL SET n.idProducto = toString(n.idProducto) RETURN n")
        .then(function(result){
            var productosArr=[]
            result.records.forEach(function(record){
                //console.log(record._fields[0].properties)
                productosArr.push({
                    idProducto: record._fields[0].properties.idProducto, //SOLO PARA STRING
                    marca: record._fields[0].properties.marca
                })}
            )
            var i=0;
            /**while(i<productosArr.length){
                console.log(productosArr[i]);
                i++;
            } **/   
            session.close(); 
            compraSinDuplicados.forEach((elemento) => {
                productosArr.forEach((elemento1) => {
                    if (Number(elemento1.idProducto)== elemento.idProducto){//
                        totalMarcas.push({
                            nombre: elemento1.marca,
                            cantidad: elemento.cantidad
                        });
                    }
                })
            })
            /*var i=0;
            while(i<totalMarcas.length){
                console.log(totalMarcas[i]);
                i++;
            }*/
               
            obtenerTop5Marcas(totalMarcas)  
            
        })
        .catch(function(err){
            console.log(err);
        })
        
    
    //console.log(totalMarcas);
}


function obtenerTop5Marcas(totalMarcas){
    let listaMarcas =[] 
    totalMarcas.forEach((elemento) => {
        listaMarcas.push({
            nombre: String(elemento.nombre),
            cantidad: Number(elemento.cantidad)
        })
        
    });
    //console.log(totalMarcas)
    const marcasSinDuplicados = listaMarcas.reduce((acumulador,  valorActual) => {
        const elementoYaExiste = acumulador.find(elemento => elemento.nombre === valorActual.nombre);
        if (elementoYaExiste) {
        return acumulador.map((elemento) => {
            if ( elemento.nombre ===  valorActual.nombre) {
            return {
                ...elemento, cantidad:  elemento.cantidad + valorActual.cantidad}
            }
            return (elemento);
        });
        }
    
        return [...acumulador, valorActual];
    }, []);

    var i=0;
    while(i<marcasSinDuplicados.length){
        //console.log(marcasSinDuplicados[i]);
        i++;
    }
    var sorted_marcas = marcasSinDuplicados.sort(function(a, b) {
        return a.cantidad - b.cantidad;
    });

    var reversed_sorted_marcas = sorted_marcas.reverse();
    top5Marcas = reversed_sorted_marcas.slice(0,5);
    var i=0;
    while(i<top5Marcas.length){
        //console.log(top5Marcas[i]);                
        i++;
    }
    //console.log(top5Marcas)   
    return top5Marcas; 
}

/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////

//***************************** CONSULTA 3 ************************/
generalController.consulta3=(req, res) => {    //maneja peticiones y respuestas cuando visitan pag principal
    const nombrePersona= "'Selena'";
    const apellido="'Coch'"
    const session = driver.session();
    session
    .run("MATCH (n:Cliente) WHERE  n.idCliente IS NOT NULL AND n.nombreCliente = "+ nombrePersona+" AND n.apellido = "+ apellido+" SET n.idCliente = toString(n.idCliente) RETURN n")
    .then(function(result){
        var clienteArr=[]; 
        result.records.forEach(function(record){
            //console.log(record._fields[0].properties)
            clienteArr.push({
                id: record._fields[0].properties.idCliente, //SOLO PARA STRING
                //nombre: record._fields[0].properties.nombreCliente
            });
        })
        var i=0;
        session.close();

        let resultado = Number(clienteArr.map(a => a.id));   //ESTA LINEA TRANSFORMA UN ARRAY EN ENTERO, PARA MANIPULAR NUMEROS Y NO LISTAS
        resultado=resultado.toString()
        console.log("id")
        console.log(resultado)
        buscarCompras(resultado);
        res.json(comprasArr);

    })
    .catch(function(err){
        console.log(err);
    });
}

function buscarCompras(resultado){  //maneja peticiones y respuestas cuando visitan pag principal
    const session = driver.session();
    session
        .run("MATCH (n:Compras) WHERE n.idCliente= "+resultado+" SET n.idProducto =toString(n.idProducto), n.cantidad=toString(n.cantidad) RETURN n")
        .then(function(result){
            comprasArr=[]
            result.records.forEach(function(record){
                comprasArr.push({
                    idProducto: record._fields[0].properties.idProducto, //SOLO PARA STRING
                    cantidad: record._fields[0].properties.cantidad
                });
            })
            session.close()
            var i=0;
            while(i<comprasArr.length){
                console.log(comprasArr[i]);
                i++;
            }
            return comprasArr;
        })
        .catch(function(err){
            console.log(err);
        });
   
}



module.exports= generalController;