// Creo la variabile di collegamento al div nell'html che fa da contenitore per i quadrati
const gridContainer = document.getElementById('grid-container');

// Funzione per la creazione di nuovi quadrati
function createNewSquare(){
    const currentSquare = document.createElement('div');
    currentSquare.classList.add('square');
    return currentSquare;
}

// Creo la variabile di collegamento al bottone nell'html
let buttonStart = document.getElementById('button-start');

buttonStart.addEventListener('click', function(){
    // Ciclo per l'inserimento dei quadrati nella griglia con relativo numero crescente
    for (let i = 1; i <= 100; i++) {
        const newSquare = createNewSquare();
        newSquare.innerHTML = i;
        gridContainer.append(newSquare);    
    }
})




