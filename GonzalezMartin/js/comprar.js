
function validarFormulario(event) {
    event.preventDefault();
  
    const nombre = document.getElementById('name').value.trim();
    const apellido = document.getElementById('surname').value.trim();
    const email = document.getElementById('email').value.trim();
    const cantidad = parseInt(document.getElementById('cantidad').value);
    const categoria = document.getElementById('inputState').value;
  
    if (nombre === '' || apellido === '' || email === '' || isNaN(cantidad)) {
      alert('Se ingreso algun dato erroneo o no se completo, por favor vuelva a ingresar los datos');
      return;
    }
  
    const emailRegex = /^[^\s@]+/;
    if (!emailRegex.test(email)) {
      alert('Correo invalido, por favor ingrese uno nuevamente');
      return;
    }
  
    let montoTotal = 0;
    switch (categoria) {
      case 'Estudiante':
        montoTotal = cantidad * 200 * 0.2;
        break;
      case 'Trainee':
        montoTotal = cantidad * 200 * 0.5;
        break;
      case 'Junior':
        montoTotal = cantidad * 200 * 0.85;
        break;
      default:
        alert('Seleccione una categoría');
        return;
    }
  
    document.getElementById('calculo').textContent = 'Total a Pagar: $' + montoTotal.toFixed(2);
  }
  
  function borrarCampos() {
    document.getElementById('name').value = '';
    document.getElementById('surname').value = '';
    document.getElementById('email').value = '';
    document.getElementById('cantidad').value = '';
    document.getElementById('inputState').value = 'Estudiante';
    document.getElementById('calculo').textContent = 'Total a Pagar: $';
  }
  

  const formulario = document.getElementById('form');

  formulario.addEventListener('submit', validarFormulario);
  

  const botonBorrar = document.querySelector('#form button[type="button"]');

  botonBorrar.addEventListener('click', borrarCampos);
  

