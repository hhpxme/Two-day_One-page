const hourWakeup = document.getElementById("hour-wakeup");
const minuteWakeup = document.getElementById("minute-wakeup");

for (var i = 1; i <= 12; i++) {
    const h = document.createElement("option");
    const h_text = document.createTextNode(i.toString());
    h.appendChild(h_text);
    h.value = i;
    hourWakeup.appendChild(h);
};

for (var i = 0; i < 10; i+=5) {
    const m = document.createElement("option");
    const m_text = document.createTextNode("0" + i.toString());
    m.appendChild(m_text);
    m.value = "0" + i.toString();
    minuteWakeup.appendChild(m);
};

for (var i = 10; i <= 55; i+=5) {
    const m = document.createElement("option");
    const m_text = document.createTextNode(i.toString());
    m.appendChild(m_text);
    m.value = i;
    minuteWakeup.appendChild(m);
};


const hourSleep = document.getElementById("hour-sleep");
const minuteSleep = document.getElementById("minute-sleep");

for (var i = 1; i <= 12; i++) {
    const h = document.createElement("option");
    const h_text = document.createTextNode(i.toString());
    h.appendChild(h_text);
    h.value = i;
    hourSleep.appendChild(h);
};

for (var i = 0; i < 10; i+=5) {
    const m = document.createElement("option");
    const m_text = document.createTextNode("0" + i.toString());
    m.appendChild(m_text);
    m.value = "0" + i.toString();
    minuteSleep.appendChild(m);
};

for (var i = 10; i <= 55; i+=5) {
    const m = document.createElement("option");
    const m_text = document.createTextNode(i.toString());
    m.appendChild(m_text);
    m.value = i;
    minuteSleep.appendChild(m);
};





