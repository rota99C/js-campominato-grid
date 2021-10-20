//L'utente indica un livello di difficoltà

//in base al quale viene generata una griglia di gioco quadrata,
//in cui ogni cella contiene un numero tra quelli compresi in un range:
//con difficoltà 1 => tra 1 e 100
//con difficoltà 2 => tra 1 e 81
//con difficoltà 3 => tra 1 e 49




let container = document.querySelector('.container_1')

for (let index = 0; index < 100; index++) {
    const elGriglia = document.createElement('div')
    elGriglia.className = 'cella'
    console.log(elGriglia);
    container.append(elGriglia)
    elGriglia.addEventListener("click", function () {
        elGriglia.classList.add("azzurro");
    })

}



//Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.





