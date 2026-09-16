const products =[
    {
        id:1,
        nombre:"Torta ejemplo",
        descripcio:"Deliciosa torta de chocolate con capas de ganache y un toque de avellanas.",
        precio:4500,
        imagen:"img/catalog/tc_01.jpg"
    },
    {
        id: 2,
        nombre: "Torta Circular de Vainilla",
        descripcion: "Bizcocho de vainilla clásico relleno con crema pastelera y cubierto con un glaseado dulce.",
        precio: 40000,
        imagen: "img/catalog/tc_02.jpg"
    }
    
];

const template = document.getElementById("producto-template");
const contenedor = document.getElementById("lista-productos");

productos.forEach(producto => {
    const clon = template.content.cloneNode(true);

    const img = clon.querySelector(".producto-imagen");
    img.src = producto.imagen;
    img.alt = producto.nombre;

    clon.querySelector(".producto-nombre").textContent = producto.nombre;
    clon.querySelector(".producto-descripcion").textContent = producto.descripcion;
    clon.querySelector(".producto-precio").textContent =
        "$" + producto.precio.toLocaleString("es-CL") + " CLP";
    contenedor.appendChild(clon);
});