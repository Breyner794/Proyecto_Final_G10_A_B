// const infoproducto = document.querySelector('.informacionproducto')
// const offcanvas = document.querySelector('.offcanvas-body')

// // ============================LISTA GENERAL DE PRODUCTOS================================//

// const itemproductos = document.querySelector('.item-productos')

// // variables de arreglo=================================================================

// let todoproductos =[]

// itemproductos.addEventListener('click', e =>{

//     console.log(e.target)

// })

document.addEventListener('DOMContentLoaded', () => {
  const infoproducto = document.querySelector('.informacionproducto');
  const rowproduct = document.querySelector('.row-product');
  const itemproductos = document.querySelector('.item-productos');

  let todoproductos = [];
  const valortotal = document.querySelector('.total-pagar');
//   const counproduct = document.querySelector();

  itemproductos.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-outline-success')) {
      const producto = e.target.parentElement;
      const infoproducto = {
        quantity: 1,
        
        title: producto.querySelector('h5').textContent,
        price: producto.querySelector('span').textContent,
      };

      const exite = todoproductos.some(
        producto=>producto.title === infoproducto.title);
      
      if(exite){
        const producto1 = todoproductos.map(producto =>{
            if(producto.title === infoproducto.title){
                producto.quantity++;
                return producto;
            }else {
                return producto;
            }
        })
        todoproductos = [...producto1];
      } else{

        todoproductos = [...todoproductos, infoproducto];

      }

      mostrarhtml();

    }
  });

  rowproduct.addEventListener('click',e => {
    if(e.target.classList.contains('btn-close')){
        const producto = e.target.parentElement;
        const title = producto.querySelector('h5').textContent;

        todoproductos = todoproductos.filter(
            producto => producto.title !== title
        );
        console.log(todoproductos);
        mostrarhtml();
    }
  })

//FUNCION PARA MOSTRAR LOS ELEMENTOS AGREGADOS//
  const mostrarhtml = () => {

    // if(!mostrarhtml.length){
    //     containerproducto.innerHTML= `<p class="card-empty"> Carrio vacio. </p>` //no funciona...
    // }

    //FUNCION PARA LIMPIAR HTML

    rowproduct.innerHTML ='';

    let total = 0;
    // let totalpofproducts =0;

    todoproductos.forEach((producto) => {
      const containerproducto = document.createElement('div');
      containerproducto.classList.add('row-product'); //cart-product

      containerproducto.innerHTML = `
                <div class="card" style="width: 21rem;">
                <div class="card-body">
                <h5 class="card-title">${producto.title}</h5>
                <span class="cantidad"><p>Cantidad: ${producto.quantity}</p></span>
                <span class="precio"><p>Precio Unidad: ${producto.price}</p></span><br>
                <button type="button" class="btn-close" aria-label="Close"></button>

            `;
      rowproduct.append(containerproducto);

      total = total + parseInt(producto.quantity * producto.price.slice(1))

    });

    valortotal.innerText = `$${total}`

  };

});


function mostrarAlerta(event) {
    event.preventDefault(); // Prevenir el envío del formulario
    alert("Correo enviado exitosamente");


    // Permitir el envío del formulario después de la alerta
    setTimeout(function() {
        document.getElementById("#formulario").submit();
    }, 0);


}

window.onload = function() {
    document.getElementById("formulario").addEventListener("submit", mostrarAlerta);
}
