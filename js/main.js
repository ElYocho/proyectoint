let moduloCliente;
let moduloEmpleado;
let moduloSucursal;
let moduloventas;


function cargarModuloClientes(){
    fetch("modules/moduloClientes/view_Clientes.html")
            .then(
                function(response){
                    return response.text();
                }
            )
            .then(
                function(html){
                    document.getElementById("contenedorPrincipal").innerHTML = html;
                    import ("../modules/moduloClientes/controller_Clientes.js").then(
                            function(controller){
                                moduloCliente = controller;
                            }
                            );
                }
            );
}


function cargarModuloEmpleados(){
    fetch("modules/moduloEmpleados/view_Empleados.html")
            .then(
                function(response){
                    return response.text();
                }
            )
            .then(
                function(html){
                    document.getElementById("contenedorPrincipal").innerHTML = html;
                    import ("../modules/moduloEmpleados/controller_Empleado.js").then(
                            function(controller){
                                moduloEmpleado = controller;
                            }
                            );
                }
            );
}
function cargarModuloSucursales(){
    fetch("modules/moduloSucursales/view_Sucursales.html")
            .then(
                function(response){
                    return response.text();
                }
            )
            .then(
                function(html){
                    document.getElementById("contenedorPrincipal").innerHTML = html;
                    import ("../modules/moduloSucursales/controller_Sucursal.js").then(
                            function(controller){
                                moduloSucursal = controller;
                            }
                            );
                }
            );
}
function cargarproductos(){
    fetch("modules/productos/vista_Productos.html")
            .then(
                function(response){
                    return response.text();
                }
            )
            .then(
                function(html){
                    document.getElementById("contenedorPrincipal").innerHTML = html;
                    import ("../modules/productos/controladorProductos.js").then(
                            function(controller){
                                productos = controller;
                            }
                            );
                }
            );
}


function cargarModuloVentas(){
    fetch("modules/moduloVentas/view_ventas.html")
            .then(
                function(response){
                    return response.text();
                }
            )
            .then(
                function(html){
                    document.getElementById("contenedorPrincipal").innerHTML = html;
                    import ("../modules/moduloVentas/controller_ventas.js").then(
                            function(controller){
                                moduloVentas = controller;
                            }
                            );
                }
            );
}
