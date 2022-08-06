const bloque = document.querySelectorAll('.bloque');
const question = document.querySelectorAll('.question');
const arrowImg = document.querySelectorAll('.arrowImg');


//Cuando haga click en h2
    //Quitar la clase activo de todos los bloques
    //Vamos a añadir la clase activo al bloque de la posicion h2

//Recorrer todos los h2
question.forEach( (cadaQuestion,i) => {
    //Asignando un click a cada h2
    question[i].addEventListener('click', ()=>{

        //Recorrer todos los bloques
        bloque.forEach( (cadaBloque, i) =>{
            //Quitamos la clase activo de todos los bloques
            bloque[i].classList.remove('activo');
            question[i].classList.remove('bolder');
        })

        //Agregamos la clase activo al bloque que su posicion es igual al h2 seleccionado
        //Linea 10
        bloque[i].classList.add('activo');
        question[i].classList.add('bolder');
    })
})



//Recorrido para dar vuelta la imagen
question.forEach( (cadaPregunta,i) => {
    question[i].addEventListener('click', () => {

        arrowImg.forEach((porcadaFlecha, i) => {
            arrowImg[i].classList.remove('rotate');
        })

        arrowImg[i].classList.add('rotate');
    })
})