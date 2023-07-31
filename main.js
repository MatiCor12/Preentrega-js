alert("Bienvenidos a la pagina de los Golden State");
let edad= parseInt(prompt("Ingrese su edad"));
if(edad>=18){
    alert("Resolver breve cuestionario")
} else {
    alert("Para poder continuar, debes ser mayor de edad");
    (prompt("Ingrese su edad"));
}

function saludar(){
    let nombre= prompt("Ingrese el nombre");
    alert(`Hola ${nombre}`)
}
saludar()
let gustar=prompt("Les gusta los Golden State");
let jugadorFav=prompt("Escriba su jugador favorito del equipo");

function color(selector){
    switch (selector) {
        case "azul":
            return "Usted eligio el azul";
            break;
        case "amarillo":
            return "Usted eligio el amarillo";
            break;
        case "blanco":
            return "Usted eligio el blanco";
            break;
        case "negro":
            return "Usted eligio el negro";
            break;
        default:
            return "Usted eligio un color que no tiene el equipo";
            break;
    }
}
let selector

while(selector != "ESC"){
    selector= (prompt("Ingrese el color que te gusta del equipo"));
    if (selector!= "ESC"){
        alert(color(selector))
    }
}

alert("Gracias por su tiempo")