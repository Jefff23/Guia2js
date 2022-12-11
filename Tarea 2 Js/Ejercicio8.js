/**Crear una Fuction para calcular el descuento en viajes turísticos tomando en cuenta lo siguiente: Si el 
usuario introduce como origen la ciudad de Palma y como destino La costa del Sol, el descuento será
de 5%, si el destino es Panchimalco el descuento será del 10% y si el destino es Puerto el Triunfo el 
descuento será del 15% */

let descuento;
let descuentoTotal;
  
function viaje(precio,destino){
    switch (destino) {
        case 'La costa del sol':
             descuento =  (precio * 0.05)
             descuentoTotal = precio - descuento
            break;
        case 'Panchimalco':
             descuento =  (precio * 0.10)
             descuentoTotal = precio - descuento
            break;
        case 'Puerto el triunfo':
             descuento =  (precio * 0.15)
             descuentoTotal = precio - descuento
            break;
        default:
            return console.log('Ingrese un destino valido')
    }
    console.log(' La ciudad de origen es: La Palma ' ,'\n','El destino es: ' + destino ,'\n','El precio del viaje es: '+ precio ,'\n','El descuento del viaje es: $' + descuento ,'\n','El precio del vaije con descuento es: $' + descuentoTotal)
}

viaje(100,'La costa del sol')
