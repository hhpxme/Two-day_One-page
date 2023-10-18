const numpad = document.querySelector(".numpad");

function createNumpad(numpad) {
    for (var i = 1; i <= 9; i++) {
        var numDiv = document.createElement("div");
        numDiv.classList.add("number");
        numDiv.id = i;
        numDiv.appendChild(document.createTextNode(i.toString()));
        numpad.appendChild(numDiv);
    };
}

createNumpad(numpad);




