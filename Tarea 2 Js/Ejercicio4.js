let aumento;
let salarioTotal;

function Calcular(nombre,salario,categoria){
    switch (categoria) {
        case 'A':
       aumento =  (salario * 0.15)
      salarioTotal = salario + aumento
            break;
        case 'B':      
    aumento =  (salario * 0.30)
    salarioTotal = salario + aumento
            break;
        case 'C':
      aumento =  (salario * 0.10)
      salarioTotal = salario + aumento
            break;
        case 'D':
      aumento =  (salario * 0.20)
     salarioTotal = salario + aumento
            break;
        default:
            return console.log('Ingrese una categoria valida')        
    }
    console.log(' Nombre: ' + nombre,'\n','Categoria: ' + categoria ,'\n','Aumento : $' + aumento + '\n','Salario total: $' + salarioTotal )
}

Calcular('Juan', 350, 'A')