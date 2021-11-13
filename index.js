console.log("Bienvenido desde index.js");

var suma 
suma = 1+3+'hola'
console.log(suma);

let resta
resta = 4-2+'Hola con let'

console.log(resta);

const object = {

    "nombre" : "Juan",
    "Apellido" : "Perez"
}

console.log(object)

console.log(object.Apellido)

sumar()
function sumar(){

console.log("Desde la función suma")
}

function validar (){

    console.log("Validando datos ..........")

    var user = {

        "usuario" : "",
        "password": ""

              
    }

    user.usuario = document.login.username.value;
    user.password = document.login.password.value;
    console.log(user)


// Petición asincrona a backend
var url = 'https://jsonplaceholder.typicode.com/comments/';


fetch(url, {
  method: 'POST', // or 'PUT'
  body: JSON.stringify(user), // data can be `string` or {object}!
  headers:{
    'Content-Type': 'application/json'
  }
}).then(respuesta => respuesta.json()


  )


.catch(error => console.error('Error:', error))
.then(response => console.log('Success:', response));



var url = 'https://jsonplaceholder.typicode.com/comments/500';


fetch(url, {
  method: 'GET', // or 'PUT'
  //body: JSON.stringify(user), // data can be `string` or {object}!
  headers:{
    'Content-Type': 'application/json'
  }
}).then(respuesta => respuesta.json()


  )


.catch(error => console.error('Error:', error))
.then(response => console.log('Success:', response));
}