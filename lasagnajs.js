const tiempoCoccion = 40;


function calcularTiempo() {
    
    let capas = parseInt(document.getElementById("capas").value);
    let tiempoHorno = parseInt(document.getElementById("horno").value);

   
    if (isNaN(capas) || capas <= 0 || isNaN(tiempoHorno) || tiempoHorno < 0) {
        document.getElementById("result").textContent = "Por favor, ingresa valores válidos (números positivos).";
        document.getElementById("result").classList.add("error");
        return;
    } else {
        document.getElementById("result").classList.remove("error");
    }

    
    let tiempoRestante = tiempoCoccion - tiempoHorno;
    if (tiempoRestante < 0) {
        tiempoRestante = 0; 
    }

    
    let tiempoPreparacion = capas * 2; // 2 minutos por capa

    
    let tiempoTotalTrabajo = tiempoHorno + tiempoPreparacion;

   
    let resultado = `
        Tiempo Restante en el Horno: ${tiempoRestante} minutos<br>
        Tiempo Total de Preparación: ${tiempoPreparacion} minutos<br>
        Tiempo Total de Trabajo: ${tiempoTotalTrabajo} minutos
    `;

    document.getElementById("result").innerHTML = resultado;
}