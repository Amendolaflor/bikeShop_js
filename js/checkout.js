////  SECCION CHECKOUT
$(document).ready(function() {  
$("form").submit(function (e) { 
  e.preventDefault();
  let hijos = $("form :input");
  //console.log($("form :input"));
  const objCreadoForm = {
    nombre: hijos[0].value,
    apellido: hijos[1].value,
    direccion: hijos[2].value,
    provincia:  hijos[3].value,
    cuidad: hijos[4].value, 
    cp: hijos[5].value, 
    tarjeta: hijos[6].value, 
    vencimiento: hijos[7].value, 
    cvv: hijos[8].value, 
  }
  console.log(objCreadoForm)

  const APIURL = 'https://jsonplaceholder.typicode.com/posts'; 

    $.ajax({
        method: "POST",
        url:  APIURL,
        data: objCreadoForm,
        success: function(respuesta) {$("form").append(
		 				`<div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
              						<div class="modal-dialog modal-lg">
                						<div class="modal-content" ">
                 						 	<div class="modal-header">
                    								<h5 class="modal-title" id="exampleModalLabel">Pedido realizado con exito, ${respuesta.nombre}! </h5>
                 						 	</div>
                 					 	<div class="modal-body"> 
                  						  <p>Recibirás tu pedido en ${respuesta.direccion}</p>
                  						  <h2>Gracias por tu compra!</h2>
                  						</div>
                					</div>
              					</div>`);                  
         					                          
         }
      });
    });
  });


