const sudokuBoard = document.querySelector(".sudoku-board");

for (var i = 0; i < 9; i++) {
    for (var j = 0; j < 9; j++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        const inp = document.createElement("inp");
        inp.classList.add("number-input");
        inp.nodeName = i.toString() + '-' + j.toString();
        inp.nodeValue = 0;
        inp.innerText = i.toString() + '-' + j.toString() - '0';
        cell.appendChild(inp);
        sudokuBoard.appendChild(cell);
    }
}













