const inCalculo1 = document.querySelector('#calculo1');
const inCalculo2 = document.querySelector('#calculo2');
const eventoClick = document.querySelector('#btnId');
const expresaResultado = document.querySelector('#paragraph-p')
const formularioId = document.querySelector('#formId')


formularioId.addEventListener('submit', sumarInputValues)
/**argumento dentro del parentesis se pone un event para 
 * que no recargue la pagina
  */
function sumarInputValues(event) {
    console.log({event});//verificar que sucede
    event.preventDefault()//para que envie info de form, pero que no se recargue la pagina
   const sumarNumbers = parseInt(inCalculo1.value) + parseInt(inCalculo2.value);
   expresaResultado.innerText = 'Resultado: '+ (sumarNumbers);
}
