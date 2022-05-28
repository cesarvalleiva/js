// let nombre = 'Gonza' // Declaración
// let apellido = "Lopez"

// nombre +" "+ apellido // Gonza y el apellido

// // Resultado final: El nombre es nombre y su apellido es apellido

// "El nombre es "+nombre+" y su apellido es "+apellido;

// `El nombre es ${nombre} y su apellido es ${apellido}`

// nombre = "Jorge" // redefinición
// nombre = "Majo" // redefinición
// nombre = "Gonza" // redefinición

// const edad = 45

// let autenticado = true

// let ocupacion

// alert("Hola, cómo estan?")

// console.log(`El nombre es ${nombre} y su apellido es ${apellido}`)

// prompt('Indique su edad')

// document.write(`El nombre es ${nombre} y su apellido es ${apellido}`)

// let mas1 = numero + 1

// Funciones



// function saludar() {
//     console.log('Hola a todos');
// }

// saludar()



// const despedir = function(){
//     console.log('Chau chau');
// }

// despedir()

// function saludar(nombre, apellido) {
//     console.log(`Hola ${nombre} ${apellido}, bienvenido a la clase`)
// }

// saludar("Maxi", "Lacovich")
// saludar("Bruno", "Quiroga")
// saludar("Cande", "Bonoris")

// function bienvenida() {
//     let nombre = prompt('Ingrese su nombre')
//     let apellido = prompt('Ingrese su apellido')

//     alert(`Bienvenido ${nombre} ${apellido}`)
// }

// bienvenida()

let persona = ["Gonza", "Sanchez", 25, "argentino"]
let persona2 = ["Juan", "Lopez", 45, "argentino", "soltero", "lic. en administración de empresas"]
let perri = ["coneja", 3, "flor"]



// function data(person) {
//     for(let i = 0; i<person.length; i++){
//         console.log(person[i]);
//     }
// } 

// data(persona)
// data(persona2)
// data(perri)

// function cuadrado(x){
//     return x*x
// }

// let resultado = cuadrado(5)
// console.log(resultado)

// console.log(cuadrado(5))

// let nombre = ""

// function saludar(){
//     let nombre = prompt('Ingrese su nombre')
//     let apellido = prompt('Ingrese su apellido')
    
//     return `${nombre} ${apellido}`
// }

// let saludo = saludar()
// document.write(saludo)
// console.log(saludo)
// alert(saludo)

// console.log(nombre)

// function leerTexto(texto){
//     console.log(texto);
// }

// function multiplicarx10(x){
//     return console.log(x*10);
// }

// leerTexto('saidjais jipàsdj iij ip`ji jiasdji asdsdija djsad jasidjas')

// function generica(arg, num2) {
//     num2(arg)
// }
// generica(5, multiplicarx10)



// function procesarEntradaUsuario(callback) {
//     let nombre = prompt('Por favor ingresa tu nombre.');
//     callback(nombre);
// }

// function saludar(nombre) {
//     alert('Hola ' + nombre+', como estas?');
// }

// procesarEntradaUsuario(saludar);


//  function normal
// function sumar(num1, num2) {
//     return num1+num2
// }

// let resultado = sumar(5, 6)
// console.log(resultado);

// // arrow function
// const sumar2 = (num1, num2) => {
//     return num1+num2
// }

// let resultado2= sumar2(10, 20)
// console.log(resultado2);

// // arrow function una sola linea
// const sumar3 = (num1, num2) => num1+num2

// let resultado3= sumar3(5, 10)
// console.log(resultado3);

// // arrow function SIN parametros
// const sumar4 = () => {
//     let num1 = Number(prompt('Indique un número'))
//     let num2 = Number(prompt('Indique otro número'))
//     return num1+num2
// }

// let resultado4= sumar4()
// console.log(resultado4);

// // arrow function con UN SOLO parámetro
// const saludar = nombre => console.log(nombre)

// saludar("Roberto")

// let titulo = document.querySelector("h1")
// console.log(titulo);
// let variable = document.querySelector("#elefante")
// console.log(variable.value);

const saludo = () => {
    alert('Hola a todos!')
}

function texto(){
    alert('Pasaste por encima del texto')
}

function test(event){
    event.preventDefault();
    console.log('1, 2, 3, probando');
}

let boton = document.querySelector('#btn')
boton.addEventListener('mouseover', saludo)


let contador = 0;

function contadorDeClicks(){
    contador+=1
    console.log(contador);
}

function hola(num1, num2){
    return num1+num2
}

const hola2 = (total, numero) => total + numero;

let usuario = ""
let pass = ""


const inicioSesion = (event) => {
    event.preventDefault();
    usuario = document.querySelector('#user')
    pass = document.querySelector('#pass')

    // if(usuario.value === '' || pass.value === ''){
    //     return alert('Todos los campos son obligatorios')
    // } else {
    //     usuario.value = ""
    //     pass.value = ""
    //     console.log('iniciando sesión');
    // }
    console.log('iniciando sesión');
    limpieza()
}

const limpieza = () => {
    usuario.value = ""
    pass.value = ""
}