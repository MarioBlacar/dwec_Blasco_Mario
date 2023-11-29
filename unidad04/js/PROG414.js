let products = [
    {
        id: '1000',
        product: 'Fresas de Huelva',
        price: 410,
        image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/fresas.jpg',
    },
    {
        id: '1001',
        product: 'Kiwi amarillo',
        price: 245,
        image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/kiwis.jpg',
    },
    {
        id: '1002',
        product: 'Manzana roja',
        price: 195,
        image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/manzanas_rojas.jpg',
    },
    {
        id: '1003',
        product: 'Manzana verde',
        price: 170,
        image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/manzanas_verdes.jpg',
    },
    {
        id: '1004',
        product: 'Melón',
        price: 135,
        image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/melones.jpg',
    },
    {
        id: '1005',
        product: 'Naranja valenciana',
        price: 160,
        image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/naranjas.jpg',
    },
    {
        id: '1006',
        product: 'Pera conferencia',
        price: 210,
        image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/peras.jpg',
    },
    {
        id: '1007',
        product: 'Plátano',
        price: 260,
        image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/platanos.jpg',
    },
    {
        id: '1008',
        product: 'Sandía',
        price: 115,
        image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/sandias.jpg',
    },
    {
        id: '1009',
        product: 'Uva',
        price: 195,
        image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/uvas.jpg',
    },
    {
        id: '1010',
        product: 'Aguacate',
        price: 415,
        image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/aguacate.jpg',
    },
    {
        id: '1011',
        product: 'Cereza del Bierzo',
        price: 520,
        image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/cereza.jpg',
    },
    {
        id: '1012',
        product: 'Granada',
        price: 310,
        image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/granada.jpg',
    },
    {
        id: '1013',
        product: 'Limón',
        price: 155,
        image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/limon.jpg',
    },
    {
        id: '1014',
        product: 'Nectarina',
        price: 180,
        image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/nectarina.jpg',
    },
    {
        id: '1015',
        product: 'Piña',
        price: 320,
        image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/pineapple.jpg',
    },

]

//   ===========================================================================

function botonComprarClick(id) {
    console.log(id);
}

// Pintar tabla de cesta de la compra
let cesta = document.getElementById("cart-section");
cesta.innerHTML = `<div class= "tabla divIndex">
    <div>Cantidad</div>
    <div>Nombre</div>
    <div>Precio</div>
</div>`;

// Pintar tabla de compra de productos
products.forEach(producto => {
    let cartaProducto = document.createElement("div");
    cartaProducto.classList.add("product");

    let divFoto = document.createElement("div");
    divFoto.classList.add("foto");
    divFoto.innerHTML = `<img src='${producto["image"]}' alt='${producto["product"]}'>`;
    let divDatos = document.createElement("div");
    divDatos.classList.add("datos");
    cartaProducto.append(divFoto);
    cartaProducto.append(divDatos);


    let divNombre = document.createElement("div");
    divNombre.classList.add("nombre");
    divNombre.innerHTML = `<h1>${producto["product"]}</h1>`;

    let divPrecio = document.createElement("div");
    divPrecio.classList.add("precio");
    divPrecio.innerHTML = `<h3>${producto["price"]} €/Kg</h3>`;

    let divBoton = document.createElement("div");
    divBoton.classList.add("boton");
    divBoton.innerHTML = `<h3>Añadir</h3>`;
    divBoton.addEventListener('click', boton => {
        botonComprarClick(producto["id"]);
    });

    divDatos.append(divNombre);
    divDatos.append(divPrecio);
    divDatos.append(divBoton);

    document.getElementById("products-section").append(cartaProducto);
});