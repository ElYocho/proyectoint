/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

let indexVentaSeleccionada;
let ventas = [];

export function addVenta(){
    let numero_unico_venta, 
        nombre,
        apellido_paterno,
        apellido_materno,
        genero,
        rfc,
        telefono,
        telefono_movil,
        correo_electronico;

    numero_unico_venta = document.getElementById("txtNumUnico").value;
    nombre = document.getElementById("txtNombre").value;
    apellido_paterno = document.getElementById("txtApePaterno").value;
    apellido_materno = document.getElementById("txtApeMaterno").value;
    telefono = document.getElementById("txtTelefono").value;
    telefono_movil = document.getElementById("txtMovil").value;
    correo_electronico = document.getElementById("txtCorreo").value;
    rfc = document.getElementById("txtRfc").value;
    
    genero = document.getElementById("txtGenero").value;;
    
    let venta = {};
    venta.numero_unico_venta =  "RF01";
    venta.nombre = nombre;
    venta.apellido_paterno = apellido_paterno;
    venta.apellido_materno = apellido_materno;
    venta.telefono = telefono;
    venta.telefono_movil = telefono_movil;
    venta.correo_electronico = correo_electronico;
    venta.rfc = rfc;
    venta.genero = genero;
    venta.estatus = "Activo";
    ventas.push(venta);
    clean();
    loadTabla();
}

export function loadTabla(){
    let cuerpo = "";
    ventas.forEach(function (venta){
        let registro =  
                '<tr onclick="moduloVenta.selectVenta('+ ventas.indexOf(venta) +');">'+
                '<td>' + venta.nombre + '</td>' +
                '<td>' + venta.apellido_paterno +  ' '+ venta.apellido_materno +'</td>' +
                '<td>' + venta.genero + '</td>' +
                '<td>' + venta.telefono_movil + '</td>' +
                '<td>' + venta.estatus + '</td></tr>' ; 
        cuerpo += registro;
    });
    console.log(cuerpo);
    document.getElementById("tblVentas").innerHTML = cuerpo;
}

export function selectVenta(index){
    document.getElementById("txtNumUnico").value = ventas[index].numero_unico_venta;
    document.getElementById("txtNombre").value = ventas[index].nombre ;
    document.getElementById("txtApePaterno").value = ventas[index].apellido_paterno;
    document.getElementById("txtApeMaterno").value = ventas[index].apellido_materno;
    document.getElementById("txtTelefono").value = ventas[index].telefono;
    document.getElementById("txtMovil").value = ventas[index].telefono_movil;
    document.getElementById("txtCorreo").value = ventas[index].correo_electronico;
    document.getElementById("txtRfc").value = ventas[index].rfc;
    document.getElementById("txtGenero").value = ventas[index].genero;
    document.getElementById("btnUpdate").classList.remove("disabled");
    document.getElementById("btnDelete").classList.remove("disabled");
    document.getElementById("btnAdd").classList.add("disabled");
    indexVentaSeleccionada = index;
}

export function clean(){
    document.getElementById("txtNumUnico").value = "";
    document.getElementById("txtNombre").value = "" ;
    document.getElementById("txtApePaterno").value = "";
    document.getElementById("txtApeMaterno").value = "";
    document.getElementById("txtTelefono").value = "";
    document.getElementById("txtMovil").value = "";
    document.getElementById("txtCorreo").value = "";
    document.getElementById("txtRfc").value = "";
    
    document.getElementById("txtNombre").focus();
    document.getElementById("btnUpdate").classList.add("disabled");
    document.getElementById("btnDelete").classList.add("disabled");
    document.getElementById("btnAdd").classList.remove("disabled");
    indexVentaSeleccionada = 0;
}

export function updateVenta(){
    let numero_unico_venta, 
        nombre,
        apellido_paterno,
        apellido_materno,
        genero,
        rfc,
        telefono,
        telefono_movil,
        correo_electronico;

    numero_unico_venta = document.getElementById("txtNumUnico").value;
    nombre = document.getElementById("txtNombre").value;
    apellido_paterno = document.getElementById("txtApePaterno").value;
    apellido_materno = document.getElementById("txtApeMaterno").value;
    telefono = document.getElementById("txtTelefono").value;
    telefono_movil = document.getElementById("txtMovil").value;
    correo_electronico = document.getElementById("txtCorreo").value;
    rfc = document.getElementById("txtRfc").value;
    
    genero = document.getElementById("txtGenero").value;
    
    let venta = {};
    venta.numero_unico_venta =  numero_unico_venta;
    venta.nombre = nombre;
    venta.apellido_paterno = apellido_paterno;
    venta.apellido_materno = apellido_materno;
    venta.telefono = telefono;
    venta.telefono_movil = telefono_movil;
    venta.correo_electronico = correo_electronico;
    venta.rfc = rfc;
    venta.genero = genero;
    venta.estatus = "Activo";
    ventas[indexVentaSeleccionada] = venta;
    clean();
    loadTabla();
}

export function deleteVenta(){
    ventas[indexVentaSeleccionada].estatus = "Inactivo";
    clean();
    loadTabla();
}

fetch("modules/moduloVentas/data_Ventas.json")
        .then(function(response){
            return response.json();
        })
        .then(function(jsondata){
                ventas = jsondata;
                console.log(ventas);
                loadTabla();
            }            
        );

export function searchVenta(){
    let filtro = document.getElementById("txtBusquedaVenta").value;
    
    let resultados = ventas.filter(element => element.nombre === filtro);
    let cuerpo = "";
    resultados.forEach(function (venta){
        let registro =  
                '<tr onclick="moduloVenta.selectVenta('+ ventas.indexOf(venta) +');">'+
                '<td>' + venta.nombre + '</td>' +
                '<td>' + venta.apellido_paterno +  ' '+ venta.apellido_materno +'</td>' +
                '<td>' + venta.genero + '</td>' +
                '<td>' + venta.telefono_movil + '</td>' +
                '<td>' + venta.estatus + '</td></tr>' ; 
        cuerpo += registro;
    });
    console.log(cuerpo);
    document.getElementById("tblVentas").innerHTML = cuerpo;
}
