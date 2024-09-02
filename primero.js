var a=3;
var b=4;

let c=5;
let d=6;

const e=7;
const f=8;

g=9;
h=0;

//comparacion 
// if(a!='3'){
//     console.log("Soy diferente ");
// }else{
//     console.log("Soy igual");
// }

// let res=(a==='3')?"Soy igual":"Soy diferente" //nullish coalescing

// console.log(res);

//undefined -> nunca se ha asignado el valor a una variable.
// console.log(i);
//null -> indica la aucencia de valor.
// let i = null;
// console.log(i);
//NaN -> algo que no es un numero
// let i = 'a';
// console.log(i-2);

//objeto
// let abecedario = {
//     'a': '1',
//     'b': '2',
//     'c': '3'
// };

// console.log(abecedario);
//shorthand syntax
// let abecedario = {a,b,c,d}
// console.log(abecedario);

// function saludar(){
//     console.log("hola");
// }

// let abecedario2 = {a,b,c,d,saludar}
// console.log(abecedario2);

//desestructuracion

let usuario = {
    nombre: 'Daniel Fernando',
    apellido: 'Arteaga',
    username: 'daferarte',
    telefono: '3016889827',
    correo: 'daniel.arteagafajar@campusucc.edu.co'
};

//tradicional
// username= usuario.usuario;
// nombre= usuario.nombre;

//desestructura
// let {username, nombre, ...sobrantes} = usuario;
// let {apellido:ape} = usuario;
// console.log(ape);

//arrow function
let suma = (a, b) => a + b;
let saludo =() => console.log("hola");

saludo();
// console.log(suma(3,5));

