/*Crear una function que tenga 2 parámetros y asignarle números enteros para calcular cual número es 
el mayor. 
*/


function Calcular(n1,n2){
if(n1 > n2){
    console.log('El numero mayor es: '+n1)
    } else if(n1 < n2){
        console.log('El numero menor es: '+n2)
    } else {
        console.log('Los numeros son iguales')
    }
    }
    
    Calcular(10,10)