
function redireccionarALogin(){
    window.location.href = "login.html";
}

function redirigirAInicio(event) {
    event.preventDefault(); // Evita el envío del formulario
    window.location.href = "index.html"; // Redirige a index.html
  }

  function mostrarAlerta() {
    alert("¡Nuevas funciones muy pronto!");
}