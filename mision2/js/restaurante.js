const platosRestaurante = [
    plato1 = {
        nombre : "Arepa con queso",
        precio : 6000
    },
    plato2 = {
        nombre : "Empanada de carne",
        precio : 5000
    },
    plato3 = {
        nombre : "Patacón con pollo",
        precio : 12000
    },
    plato4 = {
        nombre : "Bandeja paisa",
        precio : 18000
    },
    plato5 = {
        "nombre" : "Sancocho de gallina",
        "precio" : 15000
    }
];

// Elementos del DOM 
const formulario = document.querySelector('.formulario');
const platos = document.querySelector('#platos');
const precio = document.querySelector('#precio');
const btnLimpiar = document.querySelector('#btnLimpiar');
const inputCantidad = document.querySelector('#inputCantidad');
const mensajeError = document.querySelector('.mensajeError');

formulario.addEventListener('submit', (e) => {
    const cantidad = parseInt(inputCantidad.value, 10);
    if (cantidad > 2) {
        e.preventDefault();
        mensajeError.textContent = "La cantidad no puede ser mayor a 2.";
        mensajeError.classList.remove('ocultar');
        return; 
    }
    mensajeError.classList.add('ocultar'); 
    e.preventDefault();
    formulario.reset();
});

btnLimpiar.addEventListener('click', () =>  {
    formulario.reset()
    mensajeError.classList.add('ocultar'); 
});

platosRestaurante.forEach(plato => {
    let option = document.createElement('OPTION');
    option.textContent = plato.nombre;
    console.log(option);
    platos.appendChild(option);
});

platos.addEventListener('change', () => {
    let platoElegido = platosRestaurante.find(plato => plato.nombre === platos.value)
    precio.value = platoElegido.precio;
});

inputCantidad.addEventListener('input', () => {
    const cantidad = parseInt(inputCantidad.value, 10);
    if (cantidad > 2) {
        mensajeError.textContent = "La cantidad no puede ser mayor a 2.";
        mensajeError.classList.remove('ocultar');
    } else {
        mensajeError.classList.add('ocultar'); 
    }
});