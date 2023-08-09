document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const system = document.getElementById('system').value;

    fetch('json/usuarios.json')
    .then(response => response.json())
    .then(users => {
        const user = users.find(user => user.username === username && user.password === password && user.system === system);

        if (user) {
            // Aquí puedes implementar lo que sucede cuando el usuario inicia sesión con éxito.
            window.location.href = system.toLowerCase() + '.html' + '?usuario=' + user.nombre + '&foto=' + user.foto;
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Datos incorrectos, corrija e intente denuevo',
            });
        }
    });
});








