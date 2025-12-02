const products = [
    {name:"Perfume Réplica 212 VIP", price:9500, img:"img/perfume1.jpg", desc:"Aroma importado de larga duración."},
    {name:"Combo Termo + Mate + Bombilla", price:14500, img:"img/termo1.jpg", desc:"Set completo de excelente calidad."},
    {name:"Parlante JBL Mini", price:12500, img:"img/jbl1.jpg", desc:"Sonido potente y portable."},
    {name:"Cable iPhone Lightning", price:3500, img:"img/cable1.jpg", desc:"Calidad premium, carga rápida."}
];

const catalog = document.getElementById("catalog");
products.forEach(p => {
    catalog.innerHTML += `<div class="card">
        <img src="${p.img}" alt="${p.name}">
        <h3>${p.name}</h3>
        <p class="price">$${p.price}</p>
        <p>${p.desc}</p>
        <a class="whatsapp-btn" href="https://wa.me/5491128747241?text=Hola! quiero comprar el producto: ${p.name}">Comprar por WhatsApp</a>
    </div>`;
});
