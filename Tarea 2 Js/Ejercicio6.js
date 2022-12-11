/** Realizar una fuction para una tienda de coches en donde se deberá calcular: Si el coche a la venta es 
un FORD FIESTA, aplicar un 5% de descuento en la compra. Si el coche a la venta es un FORD 
FOCUS, el descuento será del 10% y si es un FORD ESCAPE el descuento será del 20%. Deberá de 
usar un parámetro que permita identificar el tipo de coche y la fuction deberá demostrar el coche 
seleccionado*/

let descuento;
let PrecioTotal;

function compra(precio,modelo){
    switch (modelo) {
        case 'fiesta':
             descuento =  (precio * 0.05)
             PrecioTotal = precio - descuento
            break;
        case 'focus':
             descuento =  (precio * 0.10)
             PrecioTotal = precio - descuento
            break;
        case 'escape':
             descuento =  (precio * 0.20)
             PrecioTotal = precio - descuento
            break;
        default:
            return console.log('Ingrese un modelo valido')
    }
    console.log('Modelo seleccionado: ' + modelo ,'\n','Precio del auto: $'+ precio ,'\n','Descuento del auto: $' + descuento +'\n','precio con descuento: $' + PrecioTotal )
}

compra(100,'focus')