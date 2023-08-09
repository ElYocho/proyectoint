document.getElementById('salir-link').addEventListener('click', function (e) {
    e.preventDefault(); // Evitar la redirección por defecto

    Swal.fire({
        title: 'estas seguro?',
        text: "volveras al inicio",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, deseo salir',
        cancelButtonText:'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                'redireccionando',
                '....',
                'success'
            );

            window.location.href = 'index.html';
        }
    });
});


