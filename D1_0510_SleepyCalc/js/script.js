const btnBack = document.querySelector(".btn-back");
const btnCalc = document.querySelectorAll(".btn-calc");
const btnSleepNow = document.querySelector(".btn-sleep-now");
const container = document.getElementById("container");
const resultContainer = document.getElementById("result-container");

btnCalc[0].addEventListener("click", () => {
    container.style.display = 'none';
    resultContainer.style.display = 'flex';
});
btnCalc[1].addEventListener("click", () => {
    container.style.display = 'none';
    resultContainer.style.display = 'flex';
});

btnSleepNow.addEventListener("click", () => {
    container.style.display = 'none';
    resultContainer.style.display = 'flex';
});

btnBack.addEventListener("click", () => {
    container.style.display = 'flex';
    resultContainer.style.display = 'none';
});


const tbody = document.querySelector('tbody');
for (var i = 1; i <= 6; i++) {
    var tr = document.createElement("tr");
    tr.classList.add("tb-value");

    for (var j = 1; j <= 3; j++) {
        var td = document.createElement("td");
        tr.appendChild(td);
    }
    tbody.appendChild(tr);
};


