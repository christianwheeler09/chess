const alpha2num = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

const lightPawn1 = document.querySelector('#light-pawn1');
console.log(lightPawn1);

lightPawn1.addEventListener('click', e => {
    lightPawn1.classList.toggle('clicked');
});

let squares = new Array(8);
for(let i = 0; i < 8; i++){
    squares[i] = new Array(8);
}

for(let col = 0; col < 8; col++){
    for(let row = 0; row < 8; row++){
        //console.log(`${alpha2num[c]}${r+1} `);
        squares[col][row] = document.querySelector(`#${alpha2num[col]}${row+1}`);
    }
    //console.log('\n');
}

for(let col = 0; col < 8; col++){
    for(let row = 0; row < 8; row++){
        squares[col][row].addEventListener('click', e => {
            squares[col][row].classList.toggle('clicked');
        });
    }

}
