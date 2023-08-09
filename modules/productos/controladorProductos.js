let indexProductoSeleccionado;
let productos = [];

export function addProducto(){
    let  nombre,
         nombre_generico,
         forma_farmaceutica,
         unidad_de_medida,
         presentacion, 
         principal_indicacion,
         contraindicaciones,
         concentracion,
         unidades_en_envase,
         precio_unitario,
        foto;
     
       
   nombre = document.getElementById("nombre").value;
      nombre_generico = document.getElementById("nombre_generico").value;
    forma_farmaceutica = document.getElementById("forma_farmaceutica").value;
    unidad_de_medida = document.getElementById("unidad_medida").value;
    presentacion = document.getElementById("presentacion").value;
    principal_indicacion = document.getElementById("indicacion").value;
     contraindicaciones = document.getElementById("contraindicacion").value;
    concentracion = document.getElementById("concentracion").value;
    unidades_en_envase = document.getElementById("unidades_envase").value;
    precio_unitario=  document.getElementById("precio_unitario").value; 
     foto=document.getElementById("foto").value;;   
   if (!nombre || !nombre_generico || !forma_farmaceutica || !unidad_de_medida || !presentacion || !principal_indicacion
           || !contraindicaciones || !concentracion || !unidades_en_envase || !precio_unitario || !foto) {
        Swal.fire(
            'Error',
            'Por favor, llena todos los campos necesarios.',
            'error'
        );
        return;
    }

    let producto = {};
    producto.nombre=nombre ;
    producto.nombre_generico=nombre_generico;
    producto. forma_farmaceutica = forma_farmaceutica ;
    producto.unidad_de_medida =unidad_de_medida ;
    producto.presentacion=presentacion;
    producto.principal_indicacion=principal_indicacion;
    producto.contraindicaciones=contraindicaciones;
    producto.concentracion=concentracion;
    producto.unidades_en_envase=unidades_en_envase;
    producto.precio_unitario=precio_unitario;
    producto.foto=foto;
    producto.estatus="Activo";
    productos.push(producto);
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
    productos.forEach(function (producto){
        let registro =  
                 '<tr onclick="productos.selectProducto('+ productos.indexOf(producto) +');">'+
      '<td>' +'<img src="' + producto.foto  + '" width="100" height="auto">' + '</td>' +
      '<td>' + producto.nombre + '</td>' +
      '<td>' + producto.nombre_generico + '</td>' +
      '<td>' + producto.forma_farmaceutica + '</td>' +
      '<td>' + producto.unidad_de_medida + '</td>' +
      '<td>' + producto.presentacion + '</td>' +
      '<td>' + producto.principal_indicacion + '</td>' +
      '<td>' + producto.contraindicaciones + '</td>' +
      '<td>' + producto.concentracion + '</td>' +
      '<td>' + producto.unidades_en_envase + '</td>' +
      '<td>' +"$"+ producto.precio_unitario + '</td>' +
      '<td>' + producto.estatus + '</td></tr>';
    cuerpo += registro;
    });
    console.log(cuerpo);
    document.getElementById("tblProductos").innerHTML = cuerpo;
    
}

export function selectProducto(index){
    document.getElementById("nombre").value = productos[index].nombre;
    document.getElementById("nombre_generico").value = productos[index].nombre_generico ;
    document.getElementById("forma_farmaceutica").value = productos[index].forma_farmaceutica;
    document.getElementById("unidad_medida").value = productos[index].unidad_de_medida;
    document.getElementById("presentacion").value = productos[index].presentacion;
    document.getElementById("indicacion").value = productos[index].principal_indicacion;
    document.getElementById("contraindicacion").value = productos[index].contraindicaciones;
    document.getElementById("concentracion").value = productos[index].concentracion;
    document.getElementById("unidades_envase").value = productos[index].unidades_en_envase;
     document.getElementById("precio_unitario").value = productos[index].precio_unitario;
     
    document.getElementById("btnUpdate").classList.remove("disabled");
    document.getElementById("btnDelete").classList.remove("disabled");
    document.getElementById("btnAdd").classList.add("disabled");
    indexProductoSeleccionado = index;
}

export function clean(){
    document.getElementById("nombre").value = "";
    document.getElementById("nombre_generico").value = "" ;
    document.getElementById("forma_farmaceutica").value = "";
    document.getElementById("unidad_medida").value = "";
    document.getElementById("presentacion").value = "";
    document.getElementById("indicacion").value = "";
    document.getElementById("contraindicacion").value = "";
    document.getElementById("concentracion").value = "";
    document.getElementById("unidades_envase").value = "";
    document.getElementById("precio_unitario").value = "";
    document.getElementById("foto").value = "";

    
    document.getElementById("nombre").focus();
    document.getElementById("btnUpdate").classList.add("disabled");
    document.getElementById("btnDelete").classList.add("disabled");
    document.getElementById("btnAdd").classList.remove("disabled");
    indexProductoSeleccionado = 0;
}

export function updateProducto(){
     let  nombre,
         nombre_generico,
         forma_farmaceutica,
         unidad_de_medida,
         presentacion, 
         principal_indicacion,
         contraindicaciones,
         concentracion,
         unidades_en_envase,
         precio_unitario,
         foto;
   
         
   nombre = document.getElementById("nombre").value;
      nombre_generico = document.getElementById("nombre_generico").value;
    forma_farmaceutica = document.getElementById("forma_farmaceutica").value;
    unidad_de_medida = document.getElementById("unidad_medida").value;
    presentacion = document.getElementById("presentacion").value;
    principal_indicacion = document.getElementById("indicacion").value;
     contraindicaciones = document.getElementById("contraindicacion").value;
    concentracion = document.getElementById("concentracion").value;
    unidades_en_envase = document.getElementById("unidades_envase").value;
    precio_unitario=  document.getElementById("precio_unitario").value; 
     foto=document.getElementById("foto").value;
     
     if (!nombre || !nombre_generico || !forma_farmaceutica || !unidad_de_medida || !presentacion || !principal_indicacion
           || !contraindicaciones || !concentracion || !unidades_en_envase || !precio_unitario) {
        Swal.fire(
            'Error',
            'Por favor, llena todos los campos necesarios.',
            'error'
        );
        return;
    }
    
    let producto = {};
     producto.nombre=nombre ;
    producto.nombre_generico=nombre_generico;
    producto. forma_farmaceutica = forma_farmaceutica ;
    producto.unidad_de_medida =unidad_de_medida ;
    producto.presentacion=presentacion;
    producto.principal_indicacion=principal_indicacion;
    producto.contraindicaciones=contraindicaciones;
    producto.concentracion=concentracion;
    producto.unidades_en_envase=unidades_en_envase;
    producto.precio_unitario=precio_unitario;
    producto.foto=foto;
    producto.estatus="Activo";
     productos[indexProductoSeleccionado] = producto;
    clean();
    loadTabla();
      Swal.fire(
        '¡Cliente Actualizado Correctamente!',
        'Presiona "Ok" para continuar!',
        'success'
    );
   }


export function deleteProducto(){
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
    productos[indexProductoSeleccionado].estatus = "Inactivo";
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

fetch("modules/productos/dataProductos.json")
        .then(function(response){
            return response.json();
        })
        .then(function(jsondata){
                productos = jsondata;
                console.log(productos);
                loadTabla();
            }            
        );

export function searchProducto(){
    let filtro = document.getElementById("txtBusquedaProducto").value;
    
    let resultados = productos.filter(element => element.nombre === filtro);
    let cuerpo = "";
    resultados.forEach(function (producto){
        let registro =  
            '<tr onclick="productos.selectProducto('+ productos.indexOf(producto) +');">'+
      '<td>' +'<img src="' + producto.foto  + '" width="100" height="auto">' + '</td>' +
      '<td>' + producto.nombre + '</td>' +
      '<td>' + producto.nombre_generico + '</td>' +
      '<td>' + producto.forma_farmaceutica + '</td>' +
      '<td>' + producto.unidad_de_medida + '</td>' +
      '<td>' + producto.presentacion + '</td>' +
      '<td>' + producto.principal_indicacion + '</td>' +
      '<td>' + producto.contraindicaciones + '</td>' +
      '<td>' + producto.concentracion + '</td>' +
      '<td>' + producto.unidades_en_envase + '</td>' +
      '<td>' +"$"+ producto.precio_unitario + '</td>' +
      '<td>' + producto.estatus + '</td></tr>';
    cuerpo += registro;
    });
    console.log(cuerpo);
    document.getElementById("tblProductos").innerHTML = cuerpo;
}