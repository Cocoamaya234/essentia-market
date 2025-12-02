const products = [
    {name:"Scandal Jean Paul Gaultier (M)", price:10500, img:"img/perfume1.jpg", desc:"Aroma masculino sofisticado y duradero."},
    {name:"Dior Sauvage (M)", price:11500, img:"img/perfume2.jpg", desc:"Fragancia fresca y masculina."},
    {name:"Phantom Paco Rabanne (M)", price:12000, img:"img/perfume3.jpg", desc:"Aroma intenso y moderno."},
    {name:"Phantom Legion Paco Rabanne (M)", price:12500, img:"img/perfume4.jpg", desc:"Edición especial masculina."},
    {name:"212 VIP Men Club Edition (M)", price:9500, img:"img/perfume5.jpg", desc:"Fragancia juvenil y elegante."},
    {name:"Erba Pura Especial (M)", price:11000, img:"img/perfume6.jpg", desc:"Aroma dulce y potente."},
    {name:"Erba Pura Clásico (M)", price:10500, img:"img/perfume7.jpg", desc:"Fragancia clásica y duradera."},
    {name:"Calvin Klein (M)", price:9500, img:"img/perfume8.jpg", desc:"Aroma moderno y fresco."},
    {name:"Olympea Paco Rabanne (F)", price:11500, img:"img/perfume9.jpg", desc:"Fragancia femenina, elegante y potente."},
    {name:"Good Girl (F)", price:12000, img:"img/perfume10.jpg", desc:"Disponible en varios modelos femeninos."}
];

const catalog = document.getElementById("catalog");
products.forEach(p => {
    catalog.innerHTML += `<div class="card">
        <img src="${p.img}" alt="${p.name}">
        <h3>${p.name}</h3>
        <p class="price">$${p.price}</p>
        <p>${p.desc}</p>
        <a class="whatsapp-btn" href="https://wa.me/5491128747241text=Hola! quiero comprar el producto: ${p.name}">Comprar por WhatsApp</a>
    </div>`;
});
