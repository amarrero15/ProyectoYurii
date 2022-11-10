const especialController={};
const driver=require("../database/database");
var comprasArr=[];
var comprasArr2=[];
let resultado=3;

////////////////////////////////
    //CONSULTA ESPECIAL 1 //
////////////////////////////////


especialController.consulta3=(req, res) => {    //maneja peticiones y respuestas cuando visitan pag principal
    const nombrePersona= req.params.nombre;
    const apellido= req.params.apellido;
    console.log(nombrePersona);
    console.log(apellido);
    var clienteArr=[]
    var session = driver.session();
    session
    .run("MATCH (n:Cliente) WHERE  n.idCliente IS NOT NULL AND n.nombreCliente = '"+ nombrePersona+"' AND n.apellido = '"+ apellido+"' SET n.idCliente = toString(n.idCliente) RETURN n")
    .then(function(result){
        result.records.forEach(function(record){
            //console.log(record._fields[0].properties)
            clienteArr.push({
                id: record._fields[0].properties.idCliente, //SOLO PARA STRING
                //nombre: record._fields[0].properties.nombreCliente
            });
        })
        session.close();

        resultado = Number(clienteArr.map(a => a.id));   //ESTA LINEA TRANSFORMA UN ARRAY EN ENTERO, PARA MANIPULAR NUMEROS Y NO LISTAS
        resultado=resultado.toString()
        //console.log("id")
        console.log(resultado)

        comprasArr=[]
        buscarCompras(resultado);
       
            
        res.send(comprasArr);

    })
    .catch(function(err){
        console.log(err);
    });
}

function buscarCompras(resultado){  //maneja peticiones y respuestas cuando visitan pag principal
    const session = driver.session();
    session
        .run("MATCH (n:Compras) WHERE n.idCliente= '"+resultado+"' SET n.idProducto =toString(n.idProducto), n.cantidad=toString(n.cantidad) RETURN n")
        .then(function(result){
            comprasArr=[]
            comprasArr2=[];
            result.records.forEach(function(record){
                comprasArr2.push({
                    idProducto: record._fields[0].properties.idProducto //SOLO PARA STRING
                    
                });
            })
            session.close()
            var i=0;
            while(i<comprasArr2.length){
                console.log(comprasArr2[i]);
                i++;
            }
            return buscarNombreProducto2(comprasArr2);
        })
        .catch(function(err){
            console.log(err);
        });
   
}

function buscarNombreProducto2(comprasArr2){  //maneja peticiones y respuestas cuando visitan pag principal
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

            comprasArr2.forEach((elemento) => {
                productosArr.forEach((elemento1) => {
                    if (Number(elemento1.idProducto)== elemento.idProducto){
                        comprasArr.push({
                            nombre: elemento1.nombre
                        });
                    }
                })
                i=0
            })
            i=0;
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
especialController.consultaespecialController1=(req,res) => {
    var session = driver.session();
    var idProducto=16;
    var comunesArr=[]; 
    var clienteArr=[]
    session
    .run("MATCH (n:Compras) WHERE n.idProducto IS NOT NULL AND n.idProducto='"+idProducto+"' AND n.idCliente<>'"+resultado+"' RETURN n")
    .then(function(result){
        
        result.records.forEach(function(record){
            comunesArr.push({
                id:Number(record._fields[0].properties.idCliente)
            });
 
        })
        i=0;
        while(i<comunesArr.length){
            console.log(comunesArr[i]);
            i++;
        }
        session.close()
})
.catch(function(err){
    console.log(err);
});
    
    var session1 = driver.session();
    session1
    
    
    .run("MATCH (n:Cliente) WHERE  n.idCliente IS NOT NULL RETURN n")
    .then(function(result){
        result.records.forEach(function(record){
            clienteArr.push({
                id: Number(record._fields[0].properties.idCliente),
                nombre: record._fields[0].properties.nombreCliente,
                apellido: record._fields[0].properties.apellido//SOLO PARA STRING
            });
            
        })
        /*i=0;
        while(i<clienteArr.length){
            console.log(clienteArr[i]);
            i++;
        } */  
        var resultadoFinalArr=[]
            clienteArr.forEach((elemento) => {
            comunesArr.forEach((elemento1) => {
                if (Number(elemento.id) == Number(elemento1.id)){
                    resultadoFinalArr.push({
                        idClientes: elemento1.id,
                        nombreCliente: elemento.nombre,
                        apellidoCliente: elemento.apellido
                    });
                }
            })
            
        })

        i=0;
        while(i<resultadoFinalArr.length){
        console.log(resultadoFinalArr[i]);
        i++;
    }  

        session1.close();

         
    })
    
    .catch(function(err){
        console.log(err);
    });
}

module.exports = especialController;