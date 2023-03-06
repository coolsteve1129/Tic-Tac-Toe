const gameBoard = () => {
    const container = document.getElementById('gameBoardContainer');
    const gridLength = 3;
    let playerTurn = true;   
    
    for(let i = 1; i < gridLength+1; i++){
        const column = document.createElement('div');
       column.classList.add('grid-column')

       for(let j = 1; j < gridLength+1; j++){
            const widthAndHeight = 80;
            const gridBox = document.createElement('button');
            gridBox.classList.add('grid-box');
            gridBox.id = 'c' +i +'r' +j;
            gridBox.style.width = `${widthAndHeight}px`
            gridBox.style.height = `${widthAndHeight}px`;
            gridBox.style.backgroundColor = 'indigo'
           
            gridBox.addEventListener('click', () => {
                if (playerTurn == true){
                gridBox.innerHTML = "x"
                checkForWinner();
                playerTurn = false;
                gridBox.style.color = "#39ff14"
                
                }
                else{
                    gridBox.innerHTML = "o"
                    checkForWinner();
                    playerTurn = true;
                    gridBox.style.color = "#F72119"
                }
            });

            gridBox.style.fontSize = "50px"

            column.appendChild(gridBox);
      
       }
    container.append(column);

   }
}
const checkForWinner = () => {
    let isWinner = false;
    const box11 = document.getElementById('c1r1');
    const box12 = document.getElementById('c1r2');
    const box13 = document.getElementById('c1r3');
    const box21 = document.getElementById('c2r1');
    const box22 = document.getElementById('c2r2');
    const box23 = document.getElementById('c2r3');
    const box31 = document.getElementById('c3r1');
    const box32 = document.getElementById('c3r2');
    const box33 = document.getElementById('c3r3');    
    
    if(box11.innerHTML === box12.innerHTML  && box11.innerHTML === box13.innerHTML){
        if(box11.innerHTML  !== '' && box12.innerHTML  !== '' && box13.innerHTML  !== '')
        isWinner = true;
    }
    if(box21.innerHTML === box22.innerHTML  && box21.innerHTML === box23.innerHTML){
        if(box21.innerHTML  !== '' && box22.innerHTML  !== '' && box23.innerHTML  !== '')
        isWinner = true;
    }
    if(box31.innerHTML === box32.innerHTML  && box31.innerHTML === box33.innerHTML){
        if(box31.innerHTML  !== '' && box32.innerHTML  !== '' && box33.innerHTML  !== '')        
        isWinner = true;
    }
    if(box11.innerHTML === box21.innerHTML  && box11.innerHTML === box31.innerHTML){
        if(box11.innerHTML  !== '' && box21.innerHTML  !== '' && box31.innerHTML  !== '')
        isWinner = true;
    }
    if(box12.innerHTML === box22.innerHTML  && box12.innerHTML === box32.innerHTML){
        if(box12.innerHTML  !== '' && box22.innerHTML  !== '' && box32.innerHTML  !== '')
        isWinner = true;
    }
    if(box13.innerHTML === box23.innerHTML  && box13.innerHTML === box33.innerHTML){
        if(box13.innerHTML  !== '' && box23.innerHTML  !== '' && box33.innerHTML  !== '')
        isWinner = true;
    }
    if(box11.innerHTML === box22.innerHTML && box11.innerHTML == box33.innerHTML){
        if(box11.innerHTML  !== '' && box22.innerHTML  !== '' && box33.innerHTML  !== '')
        isWinner = true;
    }
    if(box31.innerHTML === box22.innerHTML && box31.innerHTML == box13.innerHTML){
        if(box31.innerHTML  !== '' && box22.innerHTML  !== '' && box13.innerHTML  !== '')
        isWinner = true;
    }
    if(isWinner == true){
        alert("you win")
    }

}
gameBoard();
