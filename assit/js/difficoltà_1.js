//L'utente indica un livello di difficoltà

//in base al quale viene generata una griglia di gioco quadrata,
//in cui ogni cella contiene un numero tra quelli compresi in un range:
//con difficoltà 1 => tra 1 e 100
//con difficoltà 2 => tra 1 e 81
//con difficoltà 3 => tra 1 e 49

let contenitore = document.getElementById("contenitore")

document.querySelector(".btn1").addEventListener("click", function () {
    contenitore.className = 'container_1';

})




//prima_difficoltà

let container_1 = document.querySelector('.container_1')

for (let index = 0; index < 100; index++) {
    const elGriglia = document.createElement('div')
    elGriglia.className = 'cella'
    container_1.append(elGriglia)
    elGriglia.addEventListener("click", function () {
        elGriglia.classList.add("azzurro");
    })

}



//seconda difficoltà

let container_2 = document.querySelector('.container_2')

for (let index = 0; index < 81; index++) {
    const elGriglia = document.createElement('div')
    elGriglia.className = 'cella'
    container_2.append(elGriglia)
    elGriglia.addEventListener("click", function () {
        elGriglia.classList.add("azzurro");
    })

}


//terza difficoltà

let container_3 = document.querySelector('.container_3')

for (let index = 0; index < 49; index++) {
    const elGriglia = document.createElement('div')
    elGriglia.className = 'cella'
    container_3.append(elGriglia)
    elGriglia.addEventListener("click", function () {
        elGriglia.classList.add("azzurro");
    })

}



//Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.





