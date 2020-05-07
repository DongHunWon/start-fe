const board = document.getElementById("board");

function chessboard() {
  let index = 0
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 4; i++) {
    // eslint-disable-next-line no-plusplus
    for (let j = 0; j < 4; j++) {
      const span = document.createElement('span');
      let color = ''

      if (i % 2 === 0) {
        if (j % 2 === 0) {
          color = 'black';
        } else {
          color = 'white';
        }
      } else if (j % 2 === 0) {
        color = 'white';
      } else {
        color = 'black';
      }

      span.setAttribute('id', `span${  index}`);
      span.setAttribute('class', color)
      board.appendChild(span);
      index += 1;
    }
  }
}

function boardreset() {
  let index = 0;
  let color = ''
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 4; i++) {
    // eslint-disable-next-line no-plusplus
    for (let j = 0; j < 4; j++) {
      const span = document.getElementById(`span${  index}`);
      // eslint-disable-next-line eqeqeq
      if (i % 2 === 0) {
        if (j % 2 === 0) {
          color = 'black';
        } else {
          color = 'white';
        }
      } else if (j % 2 === 0) {
        color = 'white';
      } else {
        color = 'black';
      }
      span.className = color;
      index += 1;
    }
  }
}

chessboard();

board.addEventListener('click', (event) => {
  boardreset();
  const chess = document.getElementById(event.target.id);
  chess.className = 'red';
});