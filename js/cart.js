/// SECCION CLASES.... AGREGAR CLASE CLIENTE
class Bicicleta {
  constructor(datos) {
    this.id = datos.id;
    this.name = datos.name;
    this.price = datos.price;
    this.basePrice = datos.price;
    this.count = datos.count;
    this.image = datos.image;
    this.description = datos.description;
    this.detail = datos.detail
  }
}

const listaProductos = [];

for (let i = 0; i < todasLasBicicletas.length; i++) {
  listaProductos.push(new Bicicleta(todasLasBicicletas[i]));
}
console.log(listaProductos);

//// VARIABLES GLOBALES Y ALMACENAMIENTO EN LOCALSTORAGE
const parentElement = document.querySelector("#buyItems");
const cartSumPrice = document.querySelector("#sum-prices");

let productsInCart = JSON.parse(localStorage.getItem("shoppingCart"));
if (!productsInCart) {
  productsInCart = [];
}


/// FUNCION PARA SUMAR EL PRECIO TOTAL DE LA COMPRA 
const SumPrice = function () {
  let sum = 0;
  productsInCart.forEach((item) => {
    sum += item.price;
  });
  return sum;
};


/// FUNCION PARA RENDERIZAR EL CARRITO
const updateShoppingCartHTML = function () {
  localStorage.setItem("shoppingCart", JSON.stringify(productsInCart));
  if (productsInCart.length > 0) {
    let result = productsInCart.map((product) => {
      return `
				<li class="buyItem">
					<img src="${product.image}">
					<div>
						<h5>${product.name}</h5>
						<h6>$${product.price}</h6>
						<div>
							<button class="button-minus" data-id=${product.id}>-</button>
							<span class="countOfProduct">${product.count}</span>
							<button class="button-plus" data-id=${product.id}>+</button>          
						</div>           
					</div>
				</li>
        
        `;
    });
    parentElement.innerHTML = result.join("");
    cartSumPrice.innerHTML = 'Subtotal: $' + SumPrice();

  } else {
    parentElement.innerHTML = '<h4 class="empty">Tu carrito esta vacio</h4>';
    cartSumPrice.innerHTML = '';
  }
};

/// FUNCION PARA AGREGAR PRODUCTOS AL ARRAY SUMANDO LA CANTIDAD SI ES QUE YA ESTA AGREGADO
function updateProductsInCart(product) {
  for (let i = 0; i < productsInCart.length; i++) {
    if (productsInCart[i].id == product.id) {
      productsInCart[i].count += 1;
      productsInCart[i].price =
        productsInCart[i].basePrice * productsInCart[i].count;
      return;
    }
  }
  productsInCart.push(product);
  console.log(productsInCart);
}

/// RECORRO TODOS LOS PRODUCTOS Y EJECUTA LAS FUNCIONES EN CADA CLIC;
function agregar(productos) {
  for (const producto of productos) {
    let botonPedir = document.getElementById(producto.id);
    botonPedir.addEventListener("click", () => {
      updateProductsInCart(producto);
      updateShoppingCartHTML();
    });
  }
}
console.log(productsInCart);

agregar(listaProductos);

/// EVENTO PARA CONTROLAR LOS CLICKS EN BOTONES DE + Y - TANTO SEA PARA SUMAR CANTIDAD DE PRODUCTOS COMP PARA RESTAR
parentElement.addEventListener("click", (e) => { 
  const plusBtn = e.target.classList.contains("button-plus");
  const minusBtn = e.target.classList.contains("button-minus");
  if (plusBtn || minusBtn) {
    for (let i = 0; i < productsInCart.length; i++) {
      if (productsInCart[i].id == e.target.dataset.id) {
        if (plusBtn) {
          productsInCart[i].count += 1;
        } else if (minusBtn) {
          productsInCart[i].count -= 1;
        }
        productsInCart[i].price =
          productsInCart[i].basePrice * productsInCart[i].count;
      }
      if (productsInCart[i].count <= 0) {
        productsInCart.splice(i, 1);
      }
    }
    updateShoppingCartHTML();
  }
});

