//L'utente indica un livello di difficoltà

let container = document.querySelector('.container')

function creaGriglia(numero) {
    for (let index = 0; index < numero; index++) {
        let radice = Math.sqrt(numero)
        container.style.width = radice * 100 + "px"
        container.style.maxWidth = radice * 100 + "px"
        const elGriglia = document.createElement('div')
        elGriglia.className = 'cella'
        container.appendChild(elGriglia)
        let numGriglia = document.createElement('p')
        elGriglia.appendChild(numGriglia)
        numGriglia.innerHTML = index + 1
        elGriglia.addEventListener("click", function () {
            elGriglia.classList.add("azzurro");
        });
    }
}



document.querySelector(".btn1").addEventListener("click", function () {
    numQuadrati = 100;
    creaGriglia(numQuadrati)
})

document.querySelector(".btn2").addEventListener("click", function () {
    numQuadrati = 81;
    creaGriglia(numQuadrati)
})


document.querySelector(".btn3").addEventListener("click", function () {
    numQuadrati = 49;
    creaGriglia(numQuadrati)
})



