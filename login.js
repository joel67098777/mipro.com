 document.getElementById('formjs').addEventListener("submit", (e) => {
  e.preventDefault();
  let email = document.getElementById('inputEmail');
  let password = document.getElementById('inputPassword');
  if (email.value == 'admin@gmail.com' && password.value == '1234') {
    // Aquí puedes agregar el código para enviar el formulario o realizar cualquier otra acción necesaria
    // Por ejemplo, puedes hacer una solicitud AJAX al servidor para verificar las credenciales y realizar el inicio de sesión
    // En este caso, redireccionamos a la página "page2.html" si las credenciales son correctas
    window.location.href = "page2.html";
  } else {
    alert("Email o Password incorrecto");
  }
});

document.addEventListener("DOMContentLoaded", function() {
  var form = document.getElementById("formjs");

  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    var email = document.getElementById("inputEmail").value;
    var password = document.getElementById("inputPassword").value;

    if (email === "" || password === "") {
      alert("Por favor, ingresa un email y una contraseña válidos.");
      return;
    }

    console.log("Inicio de sesión exitoso. Email: " + email + ", Contraseña: " + password);
  });
});