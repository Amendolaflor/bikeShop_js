/// Funcion para ejecutar el slider una vez que DOM ha sido cargado
$(document).ready(function () {
  $(".owl-carousel").owlCarousel();
});

///Funcion para el toggle del carrito esquina
const closeCart = function () {
  const cart = document.querySelector(".producstOnCart");
  cart.classList.toggle("hide");
  document.querySelector("body").classList.toggle("stopScrolling");
};

/// Abriendo el carito al hacer click en icono carrito
const openShopCart = document.querySelector(".shoppingCartButton");
openShopCart.addEventListener("click", () => {
  const cart = document.querySelector(".producstOnCart");
  cart.classList.toggle("hide");
  document.querySelector("body").classList.toggle("stopScrolling");
});

/// Cerrando carrito al hacer click en la cruz
const closeShopCart = document.querySelector("#closeButton");
const overlay = document.querySelector(".overlay");
closeShopCart.addEventListener("click", closeCart);
overlay.addEventListener("click", closeCart);

/// Funcion para renderizar las cards de cada producto
const crearFichaProducto = function (bici) {
  let cont_father = document.getElementById("productContainer");
  let cont_child = document.createElement("div");
  cont_child.innerHTML = `<div class="container">
                            <div class="product" style="width:20rem">
                                <div class="product-under">
                                    <div class="product-image">
                                    <img src=${bici.image} />
                                <div class="product-over">
                                    <button class="btn btn-small addToCart" id="${bici.id}">
                                        <i class="fas fa-cart-plus"></i>Agregar
                                        al carrito
                                    </button>                                    
                                    <a data-toggle="modal" data-target=".bd-example-modal-lg" class="btn btn-small" id="detalle${bici.id}">Detalle</a>
                                </div>
                                </div>
                                <div class="product-summary">
                                    <h4 class="productName">${bici.name}</h4>                                    
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
  let botones = document.getElementById(bici.id);
  console.log(botones); 
};

/// Funcion para renderizar los detalles de cada producto
const crearFichaDetalle = function(bici) {
  let botonDetalle = document.getElementById(`detalle${bici.id}`);
  botonDetalle.addEventListener("click", () => {
    $("#insideModal").html(`<div class="container">
                              <div class="row"> 
                                <div class="col xs-12 md-6 cont_img-detalle">
                                  <img src="${bici.image}" alt="bici" width="100%">
                                </div>
                                <div class="col xs-12 md-6 cont_descripcion">
                                  <h3>${bici.name}</h3>
                                  <p>${bici.detail}</p> 
                                  <button type="button" class="btn btn-small" data-dismiss="modal" id="cerrar${bici.id}">Cerrar
                                  </button>
                                </div>
                              </div>
                            </div>`);
  });
}

/// recorro el array de productos y ejecuto funciones para cada elemento 
for (let bicicleta of todasLasBicicletas) {
  crearFichaProducto(bicicleta);  
  crearFichaDetalle(bicicleta)
}

/// Animaciones del slider de fotos
const owl = $(".owl-carousel");
owl.owlCarousel({
  items: 4,
  loop: true,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
});

$(".play").on("click", function () {
  owl.trigger("play.owl.autoplay", [1000]);
});

$(".stop").on("click", function () {
  owl.trigger("stop.owl.autoplay");
});

function disableBodyScroll(){
 const element = document.querySelector("#appBody");
 element.classList.add("stop-scroll");
}

function enableBodyScroll(){
 const element = document.querySelector("#appBody");
 element.classList.remove("stop-scroll");
}
