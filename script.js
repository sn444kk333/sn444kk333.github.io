document.addEventListener("DOMContentLoaded", function() {
    var titulos = ["Texto 1", "Texto 2", "Texto 3"];
    var index = 0;

    setInterval(function() {
        // Aplica una clase para ocultar el texto
        document.getElementById("titulo").classList.add("ocultar");

        // Espera 500 milisegundos (duración de la animación) y luego cambia el texto
        setTimeout(function() {
            document.getElementById("titulo").textContent = titulos[index];
            index++;
            if (index >= titulos.length) {
                index = 0;
            }

            // Elimina la clase para mostrar el texto con la nueva animación
            document.getElementById("titulo").classList.remove("ocultar");
        }, 500);
    }, 3000); // Cambia cada 3 segundos
});

document.getElementById("entrarBtn").addEventListener("click", function() {
    // Resto del código para el botón Entrar
    // Oculta el botón al hacer clic
    document.getElementById("entrarBtn").style.display = "none";

    // Muestra la barra de carga
    document.querySelector(".loader").style.display = "block";
    
   // Cambia el texto del <h1> mientras se carga
   var tituloElement = document.getElementById("titulo");
   tituloElement.textContent = ""; // Cambia el texto del <h1> mientras se carga

    // Espera 5 segundos (5000 milisegundos) antes de redirigir al usuario
    setTimeout(function() {
        window.location.href = "info.html";
    }, 5000); // 5000 milisegundos = 5 segundos
});

