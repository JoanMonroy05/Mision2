function accion1() {
    const fechas = document.getElementById("fecha").value;
    const horasOption = document.querySelectorAll("#hora option");
    horasOption.forEach(option => {
        if (option.value === "") {
            option.style.display = "block";
        } else if (fechas === "fecha1" && option.value === "hora1") {
            option.style.display = "block";
        } else if (fechas === "fecha2" && option.value === "hora2") {
            option.style.display = "block";
        } else if (fechas === "fecha3" && option.value === "hora3") {
            option.style.display = "block";
        } else {
            option.style.display = "none";
        }
    })

    document.getElementById("hora").value = "";

}

function botonAcc(event) {
    event.preventDefault();
    const fechas = document.querySelectorAll("#fecha option");
    const horas = document.getElementById("hora").value;


    fechas.forEach(option => {
        if (option.value === "") {
            option.style.display = "none";
        } else if (option.value === "fecha1" && horas=== "hora1" ) {
            option.style.display = "none";
        } else if (option.value === "fecha2" && horas=== "hora2") {
            option.style.display = "none";
            
        } else if (option.value === "fecha3" && horas=== "hora3") {
            option.style.display = "none";
        } else {
            option.style.display = "block";
        }
    });
    document.getElementById("fecha").value = ""
}

function resetForm() {
    document.getElementById("hora").value = "";
    document.getElementById("nombre").value = "";
}