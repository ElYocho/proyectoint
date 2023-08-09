let indexSucursalSeleccionada;
let sucursales = [];

export function addSucursal() {
    let nombre_sucursal,
        nombre_titular,
        rfc_titular,
        domicilio,
        colonia,
        ciudad,
        estado,
        codigo_postal,
        telefono,
        longitud,
        latitud,
        estatus;

    nombre_sucursal = document.getElementById("txtNombreSucursal").value;
    nombre_titular = document.getElementById("txtNombreTitular").value;
    rfc_titular = document.getElementById("txtRfcTitular").value;
    domicilio = document.getElementById("txtDomicilio").value;
    colonia = document.getElementById("txtColonia").value;
    ciudad = document.getElementById("txtCiudad").value;
    estado = document.getElementById("txtEstado").value;
    codigo_postal = document.getElementById("txtCodigoPostal").value;
    telefono = document.getElementById("txtTelefono").value;
    longitud = document.getElementById("txtLongitud").value;
    latitud = document.getElementById("txtLatitud").value;
    estatus = document.getElementById("txtEstatus").value;

    if (
        nombre_sucursal === "" ||
        nombre_titular === "" ||
        rfc_titular === "" ||
        domicilio === "" ||
        colonia === "" ||
        ciudad === "" ||
        estado === "" ||
        codigo_postal === "" ||
        telefono === "" ||
        longitud === "" ||
        latitud === ""
    ) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Por favor, completa todos los campos antes de registrar la sucursal.',
        });
        return; // Detener la función si falta algún campo
    }

    let sucursal = {
        nombre_sucursal,
        nombre_titular,
        rfc_titular,
        domicilio,
        colonia,
        ciudad,
        estado,
        codigo_postal,
        telefono,
        longitud,
        latitud,
        estatus,
    };

    sucursales.push(sucursal);
    clean();
    loadTabla();

    Swal.fire({
        icon: 'success',
        title: '¡Registro Exitoso!',
        text: 'Se ha registrado la sucursal exitosamente.',
    });
}



export function loadTabla() {
    let cuerpo = "";
    sucursales.forEach(function (sucursal) {
        let registro =
            '<tr onclick="moduloSucursal.selectSucursal(' + sucursales.indexOf(sucursal) + ');">' +
            '<td>' + sucursal.nombre_sucursal + '</td>' +
            '<td>' + sucursal.nombre_titular + '</td>' +
            '<td>' + sucursal.rfc_titular + '</td>' +
            '<td>' + sucursal.telefono + '</td>' +
            '<td>' + sucursal.estado + '</td>' +
            '<td>' + sucursal.estatus + '</td></tr>';
        cuerpo += registro;
    });
    console.log(cuerpo);
    document.getElementById("tblSucursales").innerHTML = cuerpo;
}

export function selectSucursal(index) {
    document.getElementById("txtNombreSucursal").value = sucursales[index].nombre_sucursal;
    document.getElementById("txtNombreTitular").value = sucursales[index].nombre_titular;
    document.getElementById("txtRfcTitular").value = sucursales[index].rfc_titular;
    document.getElementById("txtDomicilio").value = sucursales[index].domicilio;
    document.getElementById("txtColonia").value = sucursales[index].colonia;
    document.getElementById("txtCiudad").value = sucursales[index].ciudad;
    document.getElementById("txtEstado").value = sucursales[index].estado;
    document.getElementById("txtCodigoPostal").value = sucursales[index].codigo_postal;
    document.getElementById("txtTelefono").value = sucursales[index].telefono;
    document.getElementById("txtLongitud").value = sucursales[index].longitud;
    document.getElementById("txtLatitud").value = sucursales[index].latitud;
    document.getElementById("txtEstatus").value = sucursales[index].estatus;
    document.getElementById("btnUpdate").classList.remove("disabled");
    document.getElementById("btnDelete").classList.remove("disabled");
    document.getElementById("btnAdd").classList.add("disabled");
        document.getElementById("btnMostrarUbicacion").classList.remove("disabled");
    indexSucursalSeleccionada = index;
}

export function clean() {
    document.getElementById("txtNombreSucursal").value = "";
    document.getElementById("txtNombreTitular").value = "";
    document.getElementById("txtRfcTitular").value = "";
    document.getElementById("txtDomicilio").value = "";
    document.getElementById("txtColonia").value = "";
    document.getElementById("txtCiudad").value = "";
    document.getElementById("txtEstado").value = "";
    document.getElementById("txtCodigoPostal").value = "";
    document.getElementById("txtTelefono").value = "";
    document.getElementById("txtLongitud").value = "";
    document.getElementById("txtLatitud").value = "";
    document.getElementById("txtEstatus").value = "1";
    document.getElementById("txtNombreSucursal").focus();
    document.getElementById("btnUpdate").classList.add("disabled");
    document.getElementById("btnDelete").classList.add("disabled");
    document.getElementById("btnAdd").classList.remove("disabled");
    document.getElementById("btnMostrarUbicacion").classList.add("disabled");  
    indexSucursalSeleccionada = 0;
}

export function updateSucursal() {
    let nombre_sucursal,
        nombre_titular,
        rfc_titular,
        domicilio,
        colonia,
        ciudad,
        estado,
        codigo_postal,
        telefono,
        longitud,
        latitud,
        estatus;

    nombre_sucursal = document.getElementById("txtNombreSucursal").value;
    nombre_titular = document.getElementById("txtNombreTitular").value;
    rfc_titular = document.getElementById("txtRfcTitular").value;
    domicilio = document.getElementById("txtDomicilio").value;
    colonia = document.getElementById("txtColonia").value;
    ciudad = document.getElementById("txtCiudad").value;
    estado = document.getElementById("txtEstado").value;
    codigo_postal = document.getElementById("txtCodigoPostal").value;
    telefono = document.getElementById("txtTelefono").value;
    longitud = document.getElementById("txtLongitud").value;
    latitud = document.getElementById("txtLatitud").value;
    estatus = document.getElementById("txtEstatus").value;

    if (
        nombre_sucursal === "" ||
        nombre_titular === "" ||
        rfc_titular === "" ||
        domicilio === "" ||
        colonia === "" ||
        ciudad === "" ||
        estado === "" ||
        codigo_postal === "" ||
        telefono === "" ||
        longitud === "" ||
        latitud === ""
    ) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Por favor, completa todos los campos antes de actualizar la sucursal.',
        });
        return; // Detener la función si falta algún campo
    }

    let sucursal = {
        nombre_sucursal,
        nombre_titular,
        rfc_titular,
        domicilio,
        colonia,
        ciudad,
        estado,
        codigo_postal,
        telefono,
        longitud,
        latitud,
        estatus,
    };

    Swal.fire({
        title: '¿Estás seguro?',
        text: 'Esta acción actualizará la información de la sucursal. ¿Deseas continuar?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, actualizar',
        cancelButtonText: 'Cancelar',
        reverseButtons: true,
    }).then((result) => {
        if (result.isConfirmed) {
            sucursales[indexSucursalSeleccionada] = sucursal;
            clean();
            loadTabla();
            Swal.fire(
                '¡Actualizada!',
                'La información de la sucursal ha sido actualizada exitosamente.',
                'success'
            );
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire(
                'Cancelado',
                'La acción ha sido cancelada.',
                'info'
            );
        }
    });
}



export function deleteSucursal() {
    Swal.fire({
        title: '¿Estás seguro?',
        text: 'Esta acción cambiará el estado de la sucursal a inactivo. No podrás deshacer esta acción.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'Cancelar',
        reverseButtons: true,
    }).then((result) => {
        if (result.isConfirmed) {
            sucursales[indexSucursalSeleccionada].estatus = "0"; // Cambiar a Inactivo (0)
            clean();
            loadTabla();
            Swal.fire(
                '¡Eliminada!',
                'La sucursal ha sido eliminada exitosamente.',
                'success'
            );
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire(
                'Cancelado',
                'La acción ha sido cancelada.',
                'info'
            );
        }
    });
}


fetch("modules/moduloSucursales/data_Sucursales.json")
        .then(function(response){
            return response.json();
        })
        .then(function(jsondata){
                sucursales = jsondata;
                console.log(sucursales);
                loadTabla();
            }            
        );
export function searchSucursal() {
    let filtro = document.getElementById("txtBusquedaSucursal").value;
    filtro = filtro.toLowerCase(); // Convertir a minúsculas para comparación insensible a mayúsculas

    let resultados = sucursales.filter(
        (element) =>
            element.nombre_sucursal.toLowerCase().includes(filtro) ||
            element.nombre_titular.toLowerCase().includes(filtro) ||
            element.rfc_titular.toLowerCase().includes(filtro) ||
            element.telefono.toLowerCase().includes(filtro) ||
            element.estado.toLowerCase().includes(filtro) ||
            element.estatus.toLowerCase().includes(filtro)
    );

    let cuerpo = "";
    resultados.forEach(function (sucursal) {
        let registro =
            '<tr onclick="moduloSucursal.selectSucursal(' + sucursales.indexOf(sucursal) + ');">' +
            '<td>' + sucursal.nombre_sucursal + '</td>' +
            '<td>' + sucursal.nombre_titular + '</td>' +
            '<td>' + sucursal.rfc_titular + '</td>' +
            '<td>' + sucursal.telefono + '</td>' +
            '<td>' + sucursal.estatus + '</td></tr>';
        cuerpo += registro;
    });

    console.log(cuerpo);
    document.getElementById("tblSucursales").innerHTML = cuerpo;
}

export function mostrarUbicacion() {
    if (indexSucursalSeleccionada !== undefined) {
        const ubicacionSucursal = sucursales[indexSucursalSeleccionada].ubicacion;

        // Creamos un elemento iframe
        const iframeElement = document.createElement("iframe");
        iframeElement.src = ubicacionSucursal;
        iframeElement.width = "600";
        iframeElement.height = "450";
        iframeElement.style.border = "0";
        iframeElement.allowfullscreen = "";
        iframeElement.loading = "lazy";
        iframeElement.referrerpolicy = "no-referrer-when-downgrade";

        // Obtenemos el contenedor donde queremos mostrar el mapa y lo limpiamos para evitar contenido previo
        const mapContainer = document.getElementById("mapContainer");
        mapContainer.innerHTML = "";

        // Agregamos el iframe al contenedor para mostrar el mapa
        mapContainer.appendChild(iframeElement);
    }
}
