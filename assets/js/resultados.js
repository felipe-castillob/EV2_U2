document.addEventListener('DOMContentLoaded', function() {
    // Recupera los datos almacenados en localStorage
    const nombre = localStorage.getItem('nombre');
    const asignatura = localStorage.getItem('asignatura');
    const nota1 = localStorage.getItem('nota1');
    const nota2 = localStorage.getItem('nota2');
    const nota3 = localStorage.getItem('nota3');
    const nota4 = localStorage.getItem('nota4');
    const nota5 = localStorage.getItem('nota5');
    const nota6 = localStorage.getItem('nota6');
    const promedioNotas = localStorage.getItem('promedioNotas');

    const ponderacionNota1 = (nota1*0.12).toFixed(1)
    const ponderacionNota2 = (nota2*0.21).toFixed(1)
    const ponderacionNota3 = (nota3*0.12).toFixed(1)
    const ponderacionNota4 = (nota4*0.21).toFixed(1)
    const ponderacionNota5 = (nota5*0.13).toFixed(1)
    const ponderacionNota6 = (nota6*0.21).toFixed(1)

    // Muestra los datos en la página
    document.getElementById('nombreResultado').textContent = nombre;
    document.getElementById('asignaturaResultado').textContent = asignatura;
    document.getElementById('nota1Resultado').textContent = nota1;
    document.getElementById('nota2Resultado').textContent = nota2;
    document.getElementById('nota3Resultado').textContent = nota3;
    document.getElementById('nota4Resultado').textContent = nota4;
    document.getElementById('nota5Resultado').textContent = nota5;
    document.getElementById('nota6Resultado').textContent = nota6;
    document.getElementById('promedioResultado').textContent = promedioNotas;

    document.getElementById('ponderacionNota1').textContent = ponderacionNota1;
    document.getElementById('ponderacionNota2').textContent = ponderacionNota2;
    document.getElementById('ponderacionNota3').textContent = ponderacionNota3;
    document.getElementById('ponderacionNota4').textContent = ponderacionNota4;
    document.getElementById('ponderacionNota5').textContent = ponderacionNota5;
    document.getElementById('ponderacionNota6').textContent = ponderacionNota6;

    if (promedioNotas >= 40){
        document.getElementById('estadoAsignatura').textContent = "Has aprobado la Asignatura"
        setAprobo('estadoAsignatura');
    } else {
        document.getElementById('estadoAsignatura').textContent = "Has reprobado la Asignatura"
        setDesaprobo('estadoAsignatura');
    }

    function setAprobo(fieldName) { //Funcion que establece un color verde si aprobo la asignatura
        const field = document.getElementById(fieldName);
        field.classList.remove('text-danger');
        field.classList.add('text-success');
      }
      
      function setDesaprobo(fieldName) { //Funcion que establece un color rojo si desaprobo la asignatura
        const field = document.getElementById(fieldName);
        field.classList.remove('text-success');
        field.classList.add('text-danger');
      }

    // Puedes repetir este proceso para mostrar todos los datos capturados.
});