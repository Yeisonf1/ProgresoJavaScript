const tittleOne = document.querySelector('h1'); 
const paragraphClass = document.querySelector('.parrafoClase');
const paragraphId = document.querySelector('#parrafoId');
const inputId = document.querySelector('#inputPlace');

console.log(inputId.value)

console.log({tittleOne,
paragraphClass,
paragraphId,
inputId});

tittleOne.innerHTML = 'Hola mundo <br> innerHTML';//captura br como html funcional mala practica
tittleOne.innerText = 'Codigo texto innerText';//reemplazo de innerHTML para strings
//inputId.value = innerHTML = 'Hola Dom'  
console.log(tittleOne.getAttribute('pantalla'))//getAtriu...para leer atributos
tittleOne.setAttribute('pantalla', 'marcaSetAttri');//manipula los el contenido de los atributos
console.log(tittleOne.getAttribute('pantalla'))
tittleOne.classList.add('otraclase')//agrega otra clase con nombre otra clase a la etiqueta h1
tittleOne.classList.remove('otraclase')//elimina la clase
/**tititleOne.ClassList.toggle('AlgunAtributo') //util en eventos 
 * tittleOne.ClassList.contains('AlgunAtributo') //Nos podria servir de condicional para indicar si su contenido es true o false
*/
inputId.value = 'Datos listos para enviar'; //modifica el valor del input

console.log(document.createElement('img'))//crea una etiqueta html desde el js, lo reconoce y lo autocompleta

const img = document.createElement('img')
img.setAttribute('src', './facebook.png')//agregar atributo y contenido de este
paragraphId.innerHTML = "";//limpia la etiqueta que traiga el id
paragraphId.append(img)//appne...child pone esta ultima img como hija o debajo de la constante = id de la etiqueta y la utiliza debajo de esta
