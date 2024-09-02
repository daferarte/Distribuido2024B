// callback

// let request = require('request');

// request('pagina web') //peticion web

// request('peticion web', function(){
//     console.log('hola mundo');
// });

// promesas

// let request = require('request-promise');

// request('peticion pagina web')
// .them(//se ejecuta despues de la peticion
//     function(){
//         console.log("hola mundo");
//     }
// )// promesa exitosa
// .catch(
//     //se ejecuta en caso de error
//     function(err){
//         console.log(err);
//     }
// )

// callback de las promesas 

// let request = require('request-promise');

// request('peticion pagina web')
// .them(//se ejecuta despues de la peticion
//     function(){
//         console.log("hola mundo");
//     }
// )// promesa exitosa
// .catch(
//     //se ejecuta en caso de error
//     function(err){
//         console.log(err);
//     }
// )
// .finally(
//     function(eer){
//         console.log(eer);
//     }
// )

// crear promesa
// let promesa = new Promise(function(resolve, reject){
//     request(url, function(err, res){
//         if(err) return reject(err);
//         resolve(response)
//     })
// })

// funciones asincronas

// async function

// async function suma(a, b){
//     return a + b;
// }

// await function

async function tiempo(){
    let promesa = await new Promise((res, rej)=>{
        setTimeout(res, 1000,5)
    })
    console.log(promesa);
    
}

tiempo();
// manejo de errores

// try y catch