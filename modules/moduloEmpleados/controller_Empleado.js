let indexEmpleadoSeleccionado;
let empleados = [];

export function addEmpleado() {
    let numero_unico_empleado, 
        nombre,
        apellido_paterno,
        apellido_materno,
        genero,
        fecha_nacimiento,
        rfc,
        curp,
        foto,
        domicilio,
        codigo_postal,
        ciudad,
        estado,
        telefono,
        telefono_movil,
        correo_electronico,
        fecha_ingreso,
        puesto,
        salario,
        email;

    numero_unico_empleado = document.getElementById("txtNumUnico").value;
    nombre = document.getElementById("txtNombre").value;
    apellido_paterno = document.getElementById("txtApePaterno").value;
    apellido_materno = document.getElementById("txtApeMaterno").value;
    genero = document.getElementById("txtGenero").value;
    fecha_nacimiento = document.getElementById("txtFechaNacimiento").value;
    rfc = document.getElementById("txtRfc").value;
    curp = document.getElementById("txtCurp").value;
    foto = document.getElementById("txtFoto").value;
    domicilio = document.getElementById("txtDomicilio").value;
    codigo_postal = document.getElementById("txtCodigoPostal").value;
    ciudad = document.getElementById("txtCiudad").value;
    estado = document.getElementById("txtEstado").value;
    telefono = document.getElementById("txtTelefono").value;
    telefono_movil = document.getElementById("txtMovil").value;
    correo_electronico = document.getElementById("txtCorreo").value;
    fecha_ingreso = document.getElementById("txtFechaIngreso").value;
    puesto = document.getElementById("txtPuesto").value;
    salario = document.getElementById("txtSalario").value;
    email = document.getElementById("txtEmail").value;
    
    let empleado = {};
        empleado.numero_unico_empleado ="RF01";
        empleado.nombre = nombre;
        empleado.apellido_paterno = apellido_paterno;
        empleado.apellido_materno = apellido_materno;
        empleado.genero = genero;
        empleado.fecha_nacimiento = fecha_nacimiento;
        empleado.rfc = rfc;
        empleado.curp = curp;
        empleado.foto = foto;
        empleado.domicilio = domicilio;
        empleado.codigo_postal = codigo_postal;
        empleado.ciudad = ciudad;
        empleado.estado = estado;
        empleado.telefono = telefono;
        empleado.telefono_movil = telefono_movil;
        empleado.correo_electronico = correo_electronico;
        empleado.fecha_ingreso = fecha_ingreso;
        empleado.puesto = puesto;
        empleado.salario = salario;
        empleado.email = email;
        empleado.estatus = "Activo";

   

    empleados.push(empleado);
    clean();
    loadTabla();
}



export function loadTabla() {
    let cuerpo = "";
    empleados.forEach(function (empleado) {
        let registro =  
            '<tr onclick="moduloEmpleado.selectEmpleado(' + empleados.indexOf(empleado) + ');">' +
            '<td>' + empleado.numero_unico_empleado + '</td>' +
            '<td>' + empleado.nombre + '</td>' +
            '<td>' + empleado.apellido_paterno + ' ' + empleado.apellido_materno + '</td>' +
            '<td>' + empleado.genero + '</td>' +
            '<td>' + empleado.fecha_nacimiento + '</td>' +
            '<td>' + empleado.rfc + '</td>' +
            '<td>' + empleado.curp + '</td>' +
            '<td>' +'<img src="' + empleado.foto  + '" width="100" height="auto">' + '</td>'+
            '<td>' + empleado.domicilio + '</td>' +
            '<td>' + empleado.codigo_postal + '</td>' +
            '<td>' + empleado.ciudad + '</td>' +
            '<td>' + empleado.estado + '</td>' +
            '<td>' + empleado.telefono + '</td>' +
            '<td>' + empleado.telefono_movil + '</td>' +
            '<td>' + empleado.correo_electronico + '</td>' +
            '<td>' + empleado.fecha_ingreso + '</td>' +
            '<td>' + empleado.puesto + '</td>' +
            '<td>' + empleado.salario + '</td>' +
            '<td>' + empleado.email + '</td>' +
            '<td>' + empleado.estatus + '</td></tr>';
        cuerpo += registro;
    });
    document.getElementById("tblEmpleados").innerHTML = cuerpo;
}


export function selectEmpleado(index) {
    document.getElementById("txtNumUnico").value = empleados[index].numero_unico_empleado;
    document.getElementById("txtNombre").value = empleados[index].nombre;
    document.getElementById("txtApePaterno").value = empleados[index].apellido_paterno;
    document.getElementById("txtApeMaterno").value = empleados[index].apellido_materno;
    document.getElementById("txtTelefono").value = empleados[index].telefono;
    document.getElementById("txtMovil").value = empleados[index].telefono_movil;
    document.getElementById("txtCorreo").value = empleados[index].correo_electronico;
    document.getElementById("txtRfc").value = empleados[index].rfc;
    document.getElementById("txtGenero").value = empleados[index].genero;
    document.getElementById("txtFechaNacimiento").value = empleados[index].fecha_nacimiento;
    document.getElementById("txtCurp").value = empleados[index].curp;
    document.getElementById("txtFoto").value = empleados[index].foto;
    document.getElementById("txtDomicilio").value = empleados[index].domicilio;
    document.getElementById("txtCodigoPostal").value = empleados[index].codigo_postal;
    document.getElementById("txtCiudad").value = empleados[index].ciudad;
    document.getElementById("txtEstado").value = empleados[index].estado;
    document.getElementById("txtSalario").value = empleados[index].salario;
    document.getElementById("txtEmail").value = empleados[index].email;
    document.getElementById("txtFechaIngreso").value = empleados[index].fecha_ingreso;
    document.getElementById("txtPuesto").value = empleados[index].puesto;
    document.getElementById("btnUpdate").classList.remove("disabled");
    document.getElementById("btnDelete").classList.remove("disabled");
    document.getElementById("btnAdd").classList.add("disabled");
    indexEmpleadoSeleccionado = index;
}


export function clean() {
    document.getElementById("txtNumUnico").value = "";
    document.getElementById("txtNombre").value = "";
    document.getElementById("txtApePaterno").value = "";
    document.getElementById("txtApeMaterno").value = "";
    document.getElementById("txtTelefono").value = "";
    document.getElementById("txtMovil").value = "";
    document.getElementById("txtCorreo").value = "";
    document.getElementById("txtRfc").value = "";
    document.getElementById("txtGenero").value = "";
    document.getElementById("txtFechaNacimiento").value = "";
    document.getElementById("txtCurp").value = "";
    document.getElementById("txtFoto").value = "";
    document.getElementById("txtDomicilio").value = "";
    document.getElementById("txtCodigoPostal").value = "";
    document.getElementById("txtCiudad").value = "";
    document.getElementById("txtEstado").value = "";
    document.getElementById("txtSalario").value = "";
    document.getElementById("txtEmail").value = "";
    document.getElementById("txtFechaIngreso").value = "";
    document.getElementById("txtPuesto").value = "";
    
    document.getElementById("txtNombre").focus();
    document.getElementById("btnUpdate").classList.add("disabled");
    document.getElementById("btnDelete").classList.add("disabled");
    document.getElementById("btnAdd").classList.remove("disabled");
    indexEmpleadoSeleccionado = 0;
}


export function updateEmpleado() {
    let numero_unico_empleado,
        nombre,
        apellido_paterno,
        apellido_materno,
        genero,
        fecha_nacimiento,
        rfc,
        curp,
        foto,
        domicilio,
        codigo_postal,
        ciudad,
        estado,
        telefono,
        telefono_movil,
        correo_electronico,
        fecha_ingreso,
        puesto,
        salario,
        email;

    numero_unico_empleado = document.getElementById("txtNumUnico").value;
    nombre = document.getElementById("txtNombre").value;
    apellido_paterno = document.getElementById("txtApePaterno").value;
    apellido_materno = document.getElementById("txtApeMaterno").value;
    telefono = document.getElementById("txtTelefono").value;
    telefono_movil = document.getElementById("txtMovil").value;
    correo_electronico = document.getElementById("txtCorreo").value;
    rfc = document.getElementById("txtRfc").value;
    
    genero = document.getElementById("txtGenero").value;
    fecha_nacimiento = document.getElementById("txtFechaNacimiento").value;
    curp = document.getElementById("txtCurp").value;
    foto = document.getElementById("txtFoto").value;
    domicilio = document.getElementById("txtDomicilio").value;
    codigo_postal = document.getElementById("txtCodigoPostal").value;
    ciudad = document.getElementById("txtCiudad").value;
    estado = document.getElementById("txtEstado").value;
    fecha_ingreso = document.getElementById("txtFechaIngreso").value;
    puesto = document.getElementById("txtPuesto").value;
    salario = parseFloat(document.getElementById("txtSalario").value);
    email = document.getElementById("txtEmail").value;

    let empleado = {};
        empleado.numero_unico_empleado =numero_unico_empleado;
        empleado.nombre = nombre;
        empleado.apellido_paterno = apellido_paterno;
        empleado.apellido_materno = apellido_materno;
        empleado.genero = genero;
        empleado.fecha_nacimiento = fecha_nacimiento;
        empleado.rfc = rfc;
        empleado.curp = curp;
        empleado.foto = foto;
        empleado.domicilio = domicilio;
        empleado.codigo_postal = codigo_postal;
        empleado.ciudad = ciudad;
        empleado.estado = estado;
        empleado.telefono = telefono;
        empleado.telefono_movil = telefono_movil;
        empleado.correo_electronico = correo_electronico;
        empleado.fecha_ingreso = fecha_ingreso;
        empleado.puesto = puesto;
        empleado.salario = salario;
        empleado.email = email;
        empleado.estatus = "Activo";

    empleados[indexEmpleadoSeleccionado] = empleado;
    clean();
    loadTabla();
}


export function deleteEmpleado() {
    empleados[indexEmpleadoSeleccionado].estatus = "Inactivo";
    clean();
    loadTabla();
}


fetch("modules/moduloEmpleados/data_Empleados.json")
        .then(function(response){
            return response.json();
        })
        .then(function(jsondata){
                empleados = jsondata;
                console.log(empleados);
                loadTabla();
            }            
        );

export function searchEmpleado() {
    let filtro = document.getElementById("txtBusquedaEmpleado").value;
    
    let resultados = empleados.filter(element =>
        element.nombre.toLowerCase().includes(filtro.toLowerCase()) ||
        element.apellido_paterno.toLowerCase().includes(filtro.toLowerCase()) ||
        element.apellido_materno.toLowerCase().includes(filtro.toLowerCase())
    );

    let cuerpo = "";
    resultados.forEach(function (empleado) {
        let registro =
            '<tr onclick="moduloEmpleado.selectEmpleado(' + empleados.indexOf(empleado) + ');">' +
            '<td>' + empleado.numero_unico_empleado + '</td>' +
            '<td>' + empleado.nombre + '</td>' +
            '<td>' + empleado.apellido_paterno + ' ' + empleado.apellido_materno + '</td>' +
            '<td>' + empleado.genero + '</td>' +
            '<td>' + empleado.fecha_nacimiento + '</td>' +
            '<td>' + empleado.rfc + '</td>' +
            '<td>' + empleado.curp + '</td>' +
            '<td>' + empleado.foto + '</td>' +
            '<td>' + empleado.domicilio + '</td>' +
            '<td>' + empleado.codigo_postal + '</td>' +
            '<td>' + empleado.ciudad + '</td>' +
            '<td>' + empleado.estado + '</td>' +
            '<td>' + empleado.telefono + '</td>' +
            '<td>' + empleado.telefono_movil + '</td>' +
            '<td>' + empleado.correo_electronico + '</td>' +
            '<td>' + empleado.fecha_ingreso + '</td>' +
            '<td>' + empleado.puesto + '</td>' +
            '<td>' + empleado.salario + '</td>' +
            '<td>' + empleado.email + '</td>' +
            '<td>' + empleado.estatus + '</td></tr>';
        cuerpo += registro;
    });

    document.getElementById("tblEmpleados").innerHTML = cuerpo;
}
