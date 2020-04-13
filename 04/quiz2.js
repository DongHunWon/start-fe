var board = document.getElementById("board");

function chessboard(){
    var index = 0
    for(var i=0; i<4; i++){
        for(var j=0; j<4; j++){
            var span = document.createElement('span');
            var color = '';

            if (i%2 == 0){
                if (j%2 == 0){
                    color = 'black';
                } else {
                    color = 'white';
                }
            } else {
                if (j%2 == 0){
                    color = 'white';
                } else {
                    color = 'black';
                }
            }

            span.setAttribute('id', 'span'+index);
            span.setAttribute('class', color);
            board.appendChild(span);
            index += 1;
        }
    }
}

function boardreset(){
    var index = 0;
    for(var i=0; i<4; i++){
        for(var j=0; j<4; j++){
            var span = document.getElementById('span'+index);
            if (i%2 == 0){
                if (j%2 == 0){
                    color = 'black';
                } else {
                    color = 'white';
                }
            } else {
                if (j%2 == 0){
                    color = 'white';
                } else {
                    color = 'black';
                }
            }
            span.className = color;
            index += 1;
        }
    }
}

chessboard();

board.addEventListener('click', function(event){
    boardreset();
    var chess = document.getElementById(event.target.id);
    chess.className = 'red';
});