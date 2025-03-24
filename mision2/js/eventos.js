
function evento() {
    const eventos = document.getElementById("eventos").value;
    const fechaOptions = document.querySelectorAll("#fecha option");
    const horaOptions=document.querySelectorAll("#hora option");
    const lugarEvento=document.querySelectorAll("#lugar option");

    fechaOptions.forEach(option => {
        if (option.value === "") {
            option.style.display = "block";
        } else if (eventos === "futbol" && option.value === "primeraFe") {
            option.style.display = "block";
        } else if (eventos === "voley" && option.value === "segundaFe") {
            option.style.display = "block";
        } else if (eventos === "feria" && option.value === "terceraFe") {
            option.style.display = "block";
        } else {
            option.style.display = "none";
        }
    });
    document.getElementById("fecha").value = "";

    horaOptions.forEach(option => {
        if(option.value===""){
            option.style.display="block";
        }else if(eventos === "futbol" && option.value==="primeraHo"){
            option.style.display="block";
        }else if(eventos === "voley" && option.value==="segundaHo"){
            option.style.display="block";
        }else if(eventos === "feria" && option.value==="terceraHo"){
            option.style.display="block";
        }else {
            option.style.display="none";
        }
    })

    document.getElementById("hora").value="";

    lugarEvento.forEach(option => {
        if(option.value===""){
            option.style.display="block";
        }else if(eventos === "futbol" && option.value==="primeraLug"){
            option.style.display="block";
        }else if(eventos === "voley" && option.value==="segundaLug"){
            option.style.display="block";
        }else if(eventos === "feria" && option.value==="segundaLug"){
            option.style.display="block";
        }else {
            option.style.display="none";
        }
    })

    document.getElementById("lugar").value="";

}