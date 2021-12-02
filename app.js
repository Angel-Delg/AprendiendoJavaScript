// Repaso de javaScript
//string 

const cadena = 'Cadena de texto en JavaScript'
const cadena2 = `Esto es una cadena de texto usando Templed String`

//Como acceder a un caracter de una string
console.log( cadena[3] )   // ==> Devuelve  ' e ' 

//Como saber la longitud de una cadena de texto
console.log( cadena.length )  // ==> Devuelve  29

//Como Transformar una cadena de texto a mayusculas
console.log( cadena.toUpperCase() ) // ==> Devuelve ' CADENA DE TEXTO EN JAVASCRIPT '

//Como tranformar una cadena de texto a minusculas
console.log( cadena.toLowerCase() ) // ==> Devuelve ' cadena de texto en javascript '

//Como saber si existe el nombre en un cadena de texto
if( cadena.includes('JavaScript') || cadena.includes('javascript')) console.log( true )
else console.log(false)

//Recortar los espacios en blanco
console.log( `      ${cadena}`) 
console.log( cadena.trim() );

//Generar un array de separación en un string
console.log( cadena.split(' ') )

//Recortar una cadena de texto o string ===>recibe 2 argumento el inicio y el final
let extraer = cadena.substring(0,4)
console.log(extraer)

//indexOf encuentra la longitud hasta encontrar el argumentos que le mencionan
let indice = cadena.indexOf(' ')
console.log(indice)
extraer = cadena.substring(0,indice)
console.log(extraer)

/* ---------------------- Numeros en JavaScript --------------------------------- */

const decimales = 7.34
console.log( Number( decimales.toFixed(2) ) )  // toFixed recibe como parametro el número de decimales que queremos

const a = '345'
const b = 23
let c = Number(a) + b // ==> Number() Tranforma un string a Número
console.log(c)

const Numero = 345.567
console.log( parseInt(Numero) )
console.log( parseFloat( Numero.toFixed(2) ) )

/* ---------------------- Destructuración en JavaScript -------------------------- */


const array = [ 2,4,6,8 ]
const [ one,two,three,four ] = array
console.log( one,two,three,four )

const universidades = {
    primera:'Universidad Nacional de ingienería',
    segunda:'Universidad politecnica de Nicaragua',
    tercera:'Universidad de las Americas',
    cuarta:'Universidad Centroamericana'
}
const { primera,segunda,tercera,cuarta } = universidades

const lista = `${primera}, ${segunda}, ${tercera}, ${cuarta}`
console.log( lista.split(',') )


/* -------------------------  Objeto Literario --------------------------------- */
let nombre = 'Angel Abraham'
let apellido = 'López Delgado'
let edad = 20

const persona = {
    nombre,
    apellido,
    edad
}
console.log( persona )

// /* Programa una Función que cuente el número de caracteres de una cadena de texto: Ejemplo ==> 'Hola Mundo' = 10  */


// const ejercicio1 =  resultado => {
//     const mensaje = prompt('Ingrese la cadena de texto')
//     return console.log( resultado = mensaje.length )
// }
// ejercicio1(this.mensaje)

/* Segundo metodo de validación */
const contarCaracteres = ( cadena = '' ) => {
    (!cadena) ? console.warn('No haz ingresado ninguna cadena de texto') 
    : typeof cadena !== 'string' ? console.warn('El tipo de dato ingresado no es valido') 
    :console.log(`La oración "${cadena}" tiene ${cadena.length} caracte res`) 
}
contarCaracteres() 


/* programa un función que devuelva el texto recortado segun el número de caracteres indicados:  */

// const ejercicio2 = ( inicio,final ) => {
//     const mensaje = prompt('Introduzca un nombre')
//     inicio = 0
//     final = 8
//     resultado = mensaje.substring(inicio,final)
//     console.log(resultado)
// }
// ejercicio2( this.inicio,this.final )


const cortarCaracteres = final  => {
    const saludo = 'Hello guys'
    console.info(saludo.substring(0,final))
}
cortarCaracteres(5)
 
// /* Programa una función que te duelva un estring recortado en un array */

const ejercicio3 = saludo =>  console.log( saludo.split(' '))
/* --- Hacemos uso del prototipo split() ==> Recibe un argumento de como separar un estring y t devueleve un array --- */
ejercicio3('Hello guys tell me about your self') // Resultado [ 'Hola','que','tal' ]


/* Programa una función que repita un texto x veces  */
const ejercicio4 = ( numVeces,mensaje ) => console.log(mensaje.repeat(numVeces).split(','))
ejercicio4( 5,'Hello guys' )

/* ----------------- prototipos ----------------------*/

function Animals ( nombre,genero,edad ) {
    this.nombre = nombre,
    this.genero = genero,
    this.edad = edad   
}
// como agregar los metodos
Animals.prototype.saludar = function () {
    console.info(`Hola mi nombre es ${this.nombre} y tengo ${this.edad} años`)   
}



const snoopy = new Animals('snoopy','Macho',7 )
const lola = new Animals( 'Lola','Hembra',5 )

snoopy.saludar()