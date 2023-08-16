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

const productos = [
    { id: 1, nombre: "Camiseta titular", precio: 20000},
    { id: 2, nombre: "Camiseta suplente", precio: 18000},
    { id: 3, nombre: "Zapatillas blancas", precio: 50000},
    { id: 4, nombre: "Zapatillas azules", precio: 60000},
    { id: 5, nombre: "Short titular", precio: 10000},
    { id: 6, nombre: "Short suplente", precio: 8000},
];

let precio = parseInt(prompt("Ingrese el precio del producto que desea consultar"));
let filtrados = productos.filter((item)=> item.precio < precio);

filtrados.forEach((item) =>{
    alert(`
    Id: ${item.id}
    Nombre: ${item.nombre}
    $${item.precio}
    `);
});

let nombre = prompt("Ingrese el producto que quiera");
let producto;

for (const item of productos) {
    if (item.nombre === nombre){
        producto = item;
    }
}
if (producto) {
    let mensaje = `
    Id: ${producto.id}
    Nombre: ${producto.nombre}
    $${producto.precio}
    `;
    alert(mensaje);
} else {
    alert("El producto que desea no se encuentra");
}

/* class Producto {
    constructor(nombre, precio, imagen, cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
        this.cantidad = cantidad;
        this.vendido = false;
    }
    vender() {
        this.vendido = true;
    }
}

const productos = [];

productos.push (new Producto("Camiseta titular", 20000, "https://", 10));
productos.push (new Producto("Camiseta suplente", 18000, "https://", 10));
productos.push (new Producto("Zapatillas blancas", 50000, "https://", 5));
productos.push (new Producto("Zapatillas azules", 60000, "https://", 5));
productos.push (new Producto("Short titular", 10000, "https://", 10));
productos.push (new Producto("Short suplente", 8000, "https://", 10));

for (const producto of productos) {
    console.log(producto.nombre);
    console.log(producto.precio);
    console.log(producto.imagen);
    console.log(producto.cantidad);
} */