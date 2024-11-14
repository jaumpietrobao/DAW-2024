const value1 = true;
const value2 = false;

console.log(value1 == value2);

//Thrustv / Falsy --> Variáveis vazias ou com valor 0, se submeter
//a um teste lógica, se tornarão um tipo boolean (thrustv/falsv)

//Teste logico 01
if (value1){
    console.log('verdadeiro')
}
else {
    console.log('falso')
}

//Teste Lógico 02
if(value1) console.log('verdadeiro');

// Teste lógico 03
const resultado = value1 ? 'verdadeiro' : 'falso';

console.log(resultado);