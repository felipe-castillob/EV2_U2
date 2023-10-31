document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.requires-validation');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // No envia el formulario si este contiene errores
      const nombre = document.getElementById('nombre').value;
      const asignatura = document.getElementById('asignatura').value;
      const nota1 = parseInt(document.getElementById('nota1').value);
      const nota2 = parseInt(document.getElementById('nota2').value);
      const nota3 = parseInt(document.getElementById('nota3').value);
      const nota4 = parseInt(document.getElementById('nota4').value);
      const nota5 = parseInt(document.getElementById('nota5').value);
      const nota6 = parseInt(document.getElementById('nota6').value);

      const promedioNotas = ((nota1*0.12)+(nota2*0.21)+(nota3*0.12)+(nota4*0.21)+(nota5*0.13)+(nota6*0.21)).toFixed(0);
      console.log(promedioNotas);

      let isValid = true;

      if (!/^[a-zA-Z\s]+$/.test(nombre)) { //Invalida el campo si es distinto a a-zA-Z
          isValid = false;
          setInvalidField('nombre');
          //alert('El Nombre es invalido.');
          console.log('No permita enviar solamente un numero y el campo vacio.')
      } else {
          setValidField('nombre');
      }

      if (!/^[a-zA-Z\s]+$/.test(asignatura)) { //Invalida el campo si es distinto a a-zA-Z
          isValid = false;
          setInvalidField('asignatura');
          //alert('La asignatura es invalida.');
          console.log('No permita enviar solamente un numero y el campo vacio.')
      } else {
          setValidField('asignatura');
      }

      if (isNaN(nota1) || nota1 < 10 || nota1 > 70) { //Invalida el campo si no es un numero o si es menor a 22... o mayor a 99...
          isValid = false;
          setInvalidField('nota1');
          //alert('La nota es invalida.');
          console.log('Solo permite enviar un valor numerico y que sea mayor a 10 y menor que 70.')
      } else {
          setValidField('nota1');
      }

      if (isNaN(nota2) || nota2 < 10 || nota2 > 70) { //Invalida el campo si no es un numero o si es menor a 22... o mayor a 99...
          isValid = false;
          setInvalidField('nota2');
          //alert('La nota es invalida.');
          console.log('Solo permite enviar un valor numerico y que sea mayor a 10 y menor que 70.')
      } else {
          setValidField('nota2');
      }

      if (isNaN(nota3) || nota3 < 10 || nota3 > 70) { //Invalida el campo si no es un numero o si es menor a 22... o mayor a 99...
          isValid = false;
          setInvalidField('nota3');
          //alert('La nota es invalida.');
          console.log('Solo permite enviar un valor numerico y que sea mayor a 10 y menor que 70.')
      } else {
          setValidField('nota3');
      }

      if (isNaN(nota4) || nota4 < 10 || nota4 > 70) { //Invalida el campo si no es un numero o si es menor a 22... o mayor a 99...
          isValid = false;
          setInvalidField('nota4');
          //alert('La nota es invalida.');
          console.log('Solo permite enviar un valor numerico y que sea mayor a 10 y menor que 70.')
      } else {
          setValidField('nota4');
      }

      if (isNaN(nota5) || nota5 < 10 || nota5 > 70) { //Invalida el campo si no es un numero o si es menor a 22... o mayor a 99...
          isValid = false;
          setInvalidField('nota5');
          //alert('La nota es invalida.');
          console.log('Solo permite enviar un valor numerico y que sea mayor a 10 y menor que 70.')
      } else {
          setValidField('nota5');
      }

      if (isNaN(nota6) || nota6 < 10 || nota6 > 70) { //Invalida el campo si no es un numero o si es menor a 22... o mayor a 99...
          isValid = false;
          setInvalidField('nota6');
          //alert('La nota es invalida.');
          console.log('Solo permite enviar un valor numerico y que sea mayor a 10 y menor que 70.')
      } else {
          setValidField('nota6');
      }

      //NOTAS

      if (!isValid) {
          alert('Mensaje no enviado. Revisa los datos ingresados.')
      } else {
          alert('Datos enviados correctamente')
          // Guarda los datos en localStorage
          localStorage.setItem('nombre', nombre);
          localStorage.setItem('asignatura', asignatura);
          localStorage.setItem('nota1', nota1);
          localStorage.setItem('nota2', nota2);
          localStorage.setItem('nota3', nota3);
          localStorage.setItem('nota4', nota4);
          localStorage.setItem('nota5', nota5);
          localStorage.setItem('nota6', nota6);
          localStorage.setItem('promedioNotas', promedioNotas);

          // Redirige a la página "promedio.html"
          window.location.href = "promedio.html";
      }
  });
});

function setValidField(fieldName) { //Funcion que establece el campo como valido junto a un mensaje en el "valid-feedback"
  const field = document.getElementById(fieldName);
  field.classList.remove('is-invalid');
  field.classList.add('is-valid');
}

function setInvalidField(fieldName) { //Funcion que establece el campo como invalido junto a un mensaje en el "invalid-feedback"
  const field = document.getElementById(fieldName);
  field.classList.remove('is-valid');
  field.classList.add('is-invalid');
}

/*
(function () {
  'use strict'
  const forms = document.querySelectorAll('.requires-validation')
  Array.from(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()
  */