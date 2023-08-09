let indexClienteSeleccionado;
let clientes = [];

export function addCliente(){
    let numero_unico_cliente, 
        nombre,
        apellido_paterno,
        apellido_materno,
        genero,
        rfc,
        telefono,
        telefono_movil,
        correo_electronico,
        fecha_nacimiento,
        curp,
        ciudad,
        estado,
        fecha_registro;


      numero_unico_cliente = document.getElementById("txtNumUnico").value;
    nombre = document.getElementById("txtNombre").value;
    apellido_paterno = document.getElementById("txtApePaterno").value;
    apellido_materno = document.getElementById("txtApeMaterno").value;
    telefono = document.getElementById("txtTelefono").value;
    telefono_movil = document.getElementById("txtMovil").value;
    correo_electronico = document.getElementById("txtCorreo").value;
    rfc = document.getElementById("txtRfc").value;
    genero = document.getElementById("txtGenero").value;
    fecha_nacimiento  = document.getElementById("txtFecha_Naci").value;
    curp = document.getElementById("txtCURP").value;
    ciudad= document.getElementById("txtCiudad").value;
    estado = document.getElementById("txtEstado").value;
    fecha_registro = document.getElementById("txtFecha_registro").value;
 
   
   
    if (!nombre || !apellido_paterno || !apellido_materno || !telefono_movil || !genero ||!correo_electronico ||!rfc ||!genero ||!fecha_nacimiento ||!curp ||!ciudad ||!estado ||! fecha_registro) {
        Swal.fire(
            'Error',
            'Por favor, llena todos los campos necesarios.',
            'error'
        );
        return;
    }
   
   
    
    let cliente = {};
    cliente.numero_unico_cliente =  "RF016543";
    cliente.nombre = nombre;
    cliente.apellido_paterno = apellido_paterno;
    cliente.apellido_materno = apellido_materno;
    cliente.telefono = telefono;
    cliente.telefono_movil = telefono_movil;
    cliente.correo_electronico = correo_electronico;
    cliente.rfc = rfc;
    cliente.genero = genero;
    cliente.estatus = "Activo";
    clientes.push(cliente);
    clean();
    loadTabla();
    
Swal.fire(
        '¡Cliente Registrado Correctamente!',
        'Presiona "Ok" para continuar!',
        'success'
    );
  
   
}

export function loadTabla(){
    let cuerpo = "";
    clientes.forEach(function (cliente){
        let registro =    
                '<tr onclick="moduloCliente.selectCliente('+ clientes.indexOf(cliente)+');">'+
                '<td>' + cliente.nombre + '</td>' +
                '<td>' + cliente.apellido_paterno +  ' '+ cliente.apellido_materno +'</td>' +
                '<td>' + cliente.genero + '</td>' +
                '<td>' + cliente.telefono_movil + '</td>' +
                '<td>' + cliente.estatus +  '</td></tr>' ;
                
          
        cuerpo += registro;
    });
    console.log(cuerpo);
    document.getElementById("tblClientes").innerHTML = cuerpo;
      
}

export function selectCliente(index){
    document.getElementById("txtNumUnico").value = clientes[index].numero_unico_cliente;
    document.getElementById("txtNombre").value = clientes[index].nombre ;
    document.getElementById("txtApePaterno").value = clientes[index].apellido_paterno;
    document.getElementById("txtApeMaterno").value = clientes[index].apellido_materno;
    document.getElementById("txtTelefono").value = clientes[index].telefono;
    document.getElementById("txtMovil").value = clientes[index].telefono_movil;
    document.getElementById("txtCorreo").value = clientes[index].correo_electronico;
    document.getElementById("txtRfc").value = clientes[index].rfc;
    document.getElementById("txtGenero").value = clientes[index].genero;
    document.getElementById("txtFecha_Naci").value = clientes[index].fecha_nacimiento;
    document.getElementById("txtCURP").value = clientes[index].curp;
    document.getElementById("txtCiudad").value = clientes[index].ciudad;
    document.getElementById("txtEstado").value = clientes[index].estado;
    document.getElementById("txtFecha_registro").value = clientes[index].fecha_registro;
    document.getElementById("btnUpdate").classList.remove("disabled");
    document.getElementById("btnDelete").classList.remove("disabled");
    
    document.getElementById("btnAdd").classList.add("disabled");
    const fotoElement = document.getElementById("imgFoto");
    fotoElement.src = clientes[index].foto;
    fotoElement.style.display = "block";
    indexClienteSeleccionado = index;
    
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
    document.getElementById("txtFecha_Naci").value="";
    document.getElementById("txtCURP").value="";
    document.getElementById("txtCiudad").value="";
    document.getElementById("txtEstado").value="";
    document.getElementById("txtFecha_registro").value="";
    document.getElementById("imgFoto").value="";
    document.getElementById("btnUpdate").classList.add("disabled");
    document.getElementById("btnDelete").classList.add("disabled");
    document.getElementById("btnAdd").classList.remove("disabled");
    indexClienteSeleccionado = 0;
}

export function updateCliente(){
    let numero_unico_cliente, 
        nombre,
        apellido_paterno,
        apellido_materno,
        genero,
        rfc,
        telefono,
        telefono_movil,
        correo_electronico,
        fecha_nacimiento,
        curp,
        ciudad,
        estado,
        fecha_registro;


      numero_unico_cliente = document.getElementById("txtNumUnico").value;
    nombre = document.getElementById("txtNombre").value;
    apellido_paterno = document.getElementById("txtApePaterno").value;
    apellido_materno = document.getElementById("txtApeMaterno").value;
    telefono = document.getElementById("txtTelefono").value;
    telefono_movil = document.getElementById("txtMovil").value;
    correo_electronico = document.getElementById("txtCorreo").value;
    rfc = document.getElementById("txtRfc").value;
    genero = document.getElementById("txtGenero").value;
    fecha_nacimiento  = document.getElementById("txtFecha_Naci").value;
    curp = document.getElementById("txtCURP").value;
    ciudad= document.getElementById("txtCiudad").value;
    estado = document.getElementById("txtEstado").value;
    fecha_registro = document.getElementById("txtFecha_registro").value;
  
   
   
    if (!nombre || !apellido_paterno || !apellido_materno || !telefono_movil || !genero ||!correo_electronico ||!rfc ||!genero ||!fecha_nacimiento ||!curp ||!ciudad ||!estado ||! fecha_registro) {
        Swal.fire(
            'Error',
            'Por favor, llena todos los campos necesarios.',
            'error'
        );
        return;
    }
   let cliente = {};
    cliente.numero_unico_cliente =  "RF016543";
    cliente.nombre = nombre;
    cliente.apellido_paterno = apellido_paterno;
    cliente.apellido_materno = apellido_materno;
    cliente.telefono = telefono;
    cliente.telefono_movil = telefono_movil;
    cliente.correo_electronico = correo_electronico;
    cliente.rfc = rfc;
    cliente.genero = genero;
    cliente.estatus = "Activo";
    clientes[indexClienteSeleccionado] = cliente;
    loadTabla();
    
Swal.fire(
        '¡Cliente Registrado Correctamente!',
        'Presiona "Ok" para continuar!',
        'success'
    );
  
   
}



export function deleteCliente() {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  });

  swalWithBootstrapButtons
    .fire({
      title: '¿Estas seguro de eliminar a este Cliente?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, Eliminar!',
      cancelButtonText: 'No, Cancelar!',
      reverseButtons: true
    })
    .then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          '¡Eliminado!',
          '¡Haz eliminado correctamente al cliente!.',
          'success'
        );
        clientes[indexClienteSeleccionado].estatus = 'Inactivo';
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        swalWithBootstrapButtons.fire(
          '¡Cancelado!',
          'Haz cancelado esta Acción',
          'error'
        );
        clientes[indexClienteSeleccionado].estatus = 'Activo';
      }
      clean();
      loadTabla();
    });
}



fetch("modules/moduloClientes/data_Clientes.json")
        .then(function(response){
            return response.json();
        })
        .then(function(jsondata){
                clientes = jsondata;
                console.log(clientes);
                loadTabla();
            }            
        );

export function searchCliente() {
    let filtro = document.getElementById("txtBusquedaCliente").value;
    
    let resultados = clientes.filter(element =>
        element.nombre.toLowerCase().includes(filtro.toLowerCase()) ||
        element.apellido_paterno.toLowerCase().includes(filtro.toLowerCase()) ||
        element.apellido_materno.toLowerCase().includes(filtro.toLowerCase())||
        element.genero.toLowerCase().includes(filtro.toLowerCase()) ||
        element.telefono_movil.toLowerCase().includes(filtro.toLowerCase()) ||
        element.estatus.toLowerCase().includes(filtro.toLowerCase())
    );

let cuerpo = "";
    resultados.forEach(function (cliente) {
        let registro =    
                '<tr onclick="moduloCliente.selectCliente('+ clientes.indexOf(cliente)+');">'+
                '<td>' + cliente.nombre + '</td>' +
                '<td>' + cliente.apellido_paterno +  ' '+ cliente.apellido_materno +'</td>' +
                '<td>' + cliente.genero + '</td>' +
                '<td>' + cliente.telefono_movil + '</td>' +
                '<td>' + cliente.estatus + '</td>' +
                   '<td>' + cliente.foto + '</td>' +
                '<td>' + cliente.fecha_nacimiento + '</td>' +
                 '<td>' + cliente.curp + '</td>' +
                 '<td>' + cliente.ciudad + '</td>' +
                 '<td>' + cliente.estado + '</td>' +
                  '<td>' + cliente.fecha_registro+ '</td> \n\</tr>' ; 
        cuerpo += registro;
    });

    document.getElementById("tblClientes").innerHTML = cuerpo;
}

