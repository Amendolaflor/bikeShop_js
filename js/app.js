$(document).ready(function(){
  $(".owl-carousel").owlCarousel();

});
if (document.getElementById('hearderSlide')) {
	$('#hearderSlide').multislider();
	$('#hearderSlide').multislider('pause');
}


function closeCart() {
	const cart = document.querySelector('.producstOnCart');
	cart.classList.toggle('hide');
	document.querySelector('body').classList.toggle('stopScrolling')
}


const openShopCart = document.querySelector('.shoppingCartButton');
openShopCart.addEventListener('click', () => {
	const cart = document.querySelector('.producstOnCart');
	cart.classList.toggle('hide');
	document.querySelector('body').classList.toggle('stopScrolling');
});


const closeShopCart = document.querySelector('#closeButton');
const overlay = document.querySelector('.overlay');
closeShopCart.addEventListener('click', closeCart);
overlay.addEventListener('click', closeCart);


 /// RECORRO EL ARRAY DE TODOS LOS PRODUCTOS
 for (let bicicleta of todasLasBicicletas) {
  crearFichaProducto(bicicleta);
 
}
console.log(todasLasBicicletas)

/// FUNCION PARA RENDERIZAR FICHAS DE CADA PRODUCTO POR MEDIO DEL DOM

function crearFichaProducto(bici) {
  let cont_father = document.getElementById("contenidoGenerado");
  let cont_child = document.createElement("div");
  cont_child.innerHTML = `<div class="container">
  <div class="product" style="width:20rem">
                        <div class="product-under">
                            <div class="product-image">
                                <img src=${bici.image} />
                                <div class="product-over">
                                    <button class="btn btn-small addToCart" data-product-id=${bici.id}>
                                        <i class="fas fa-cart-plus"></i>Agregar
                                        al carrito
                                    </button>
                                    <a href="detail_page.html" class="btn btn-small">Detalle</a>
                                </div>
                            </div>
                            <div class="product-summary">
                                <h4 class="productName">${bici.name}</h4>
                                <span class="stars"></span>
                                <p>
                                    ${bici.description}
                                </p>
                                <h6 class="price">
                                    $<span class="priceValue"> ${bici.price}</span>
                                </h6>
                            </div>
                        </div>
			</div>
                    </div>`;

  cont_father.appendChild(cont_child);
}

/// slider

var owl = $('.owl-carousel');
owl.owlCarousel({
    items:4,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})
