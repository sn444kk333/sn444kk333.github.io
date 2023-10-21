// Variable de control para saber si la función cambiarTexto() debe ejecutarse
var cambiarTextoActivo = true;

document.addEventListener("DOMContentLoaded", function() {
    // Inmediatamente después de que se carga el DOM, iniciar el temporizador para cambiar el texto
    cambiarTexto();
});

function cambiarTexto() {
    var titulos = ["$nakee", "Pulsa el botón 'Entrar' para ver más información"];
    var index = 0;
    var tituloElement = document.getElementById("titulo");

    // Cambiar el texto inicial inmediatamente después de cargar la página
    tituloElement.textContent = titulos[index];
    index++;

    // Establecer un temporizador para cambiar el texto cada 3 segundos
    var intervaloTexto = setInterval(function() {
        if (cambiarTextoActivo) {
            // Desactivar el título (agregar una clase específica)
            tituloElement.classList.add("desactivado");

            // Aplicar la animación de fadeOut antes de cambiar el texto
            tituloElement.classList.add("fade-out");

            // Esperar 0.5 segundos (duración de la animación) y luego cambiar el texto
            setTimeout(function() {
                tituloElement.textContent = titulos[index];
                index++;

                // Reiniciar el índice si se llega al final de la lista
                if (index >= titulos.length) {
                    index = 0;
                }

                // Quitar la clase de fade-out para iniciar la animación fadeIn
                tituloElement.classList.remove("fade-out");

                // Reactivar el título (quitar la clase específica de desactivación)
                tituloElement.classList.remove("desactivado");
            }, 500); // Esperar 0.5 segundos (500 milisegundos) antes de cambiar el texto
        }
    }, 3000); // Cambiar cada 3 segundos

    // Retornar el intervalo del texto para que pueda ser detenido externamente si es necesario
    return intervaloTexto;
}

document.getElementById("entrarBtn").addEventListener("click", function() {
    // Ocultar el logo al hacer clic en el botón
    var logoContainer = document.getElementById("logoContainer");
    logoContainer.style.display = "none";

    // Detener la función cambiarTexto()
    cambiarTextoActivo = false;

    // Ocultar los títulos
    var tituloElement = document.getElementById("titulo");
    tituloElement.style.display = "none";

    // Resto del código para el botón Entrar
    // Oculta el botón al hacer clic
    document.getElementById("entrarBtn").style.display = "none";

    // Muestra la barra de carga
    document.querySelector(".loader").style.display = "block";

    // Espera 5 segundos (5000 milisegundos) antes de redirigir al usuario
    setTimeout(function() {
        window.location.href = "info.html";
    }, 5000); // 5000 milisegundos = 5 segundos
});