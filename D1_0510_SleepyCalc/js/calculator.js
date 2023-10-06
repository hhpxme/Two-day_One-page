const calcWakeup = document.getElementById("calc-wakeup");
const calcSleep = document.getElementById("calc-sleep");
const calcSleepNow = document.getElementById("calc-sleep-now");

const firstText = document.getElementById("first-text");
const timeText = document.getElementById("time-text");
const lastText = document.getElementById("last-text");

const tbValue = document.getElementsByClassName("tb-value");

calcWakeup.addEventListener("click", () => {
    firstText.innerText = "Wake up at ";
    lastText.innerText = "Sleep at:"

    var h = document.getElementById("hour-wakeup").value;
    var m = document.getElementById("minute-wakeup").value;
    var ap = document.getElementById("am-pm-wakeup").value;
    timeText.innerText = h + ":" + m + " " + ap;
});

calcSleep.addEventListener("click", () => {
    firstText.innerText = "Sleep at ";
    lastText.innerText = "Wake up at:"

    var h = document.getElementById("hour-sleep").value;
    var m = document.getElementById("minute-sleep").value;
    var ap = document.getElementById("am-pm-sleep").value;
    timeText.innerText = h + ":" + m + " " + ap;

    var hour = parseInt(h);
    var minute = parseInt(m);
    if (ap == 'PM') {
        hour += 12;
    }
    if (hour == 24) {
        hour = 0;
    }

    var totalMinutes = hour*60 + minute;
    var cycle = 90;
    var sCycle = totalMinutes + 15 + cycle;
    var dCycle = sCycle + cycle;
    var tCycle = dCycle + cycle;
    var qCycle = tCycle + cycle;
    var pCycle = qCycle + cycle;
    var hCycle = pCycle + cycle;

    for (var i = 1; i <= 6; i++) {
        tbValue[i-1].cells[0].innerText = i.toString();
        tbValue[i-1].cells[1].innerText = (cycle*i/60).toString() + "h" + (cycle*i%60).toString();
        tbValue[i-1].cells[2].innerText = "dadw";
    };

    var x = calcSleepTime(hour, minute);
    lastText.innerText = x[0].c_time;
});

function calcSleepTime(hour, minute) {
    var res = [];

    var totalMinutes = hour * 60 + minute;
    var cycle = 90;
    var totalTime = totalMinutes + 15;
    var h = 0;
    var m = 0;
    var h_text = '';
    var m_text = '';
    var ap = '';
    
    for (var i = 1; i <= 6; i++) {
        if (i%2==0) {
            cTime = parseInt(cycle*i/60) + "h";
        } else {
            cTime = parseInt(cycle*i/60) + "h" + parseInt(cycle%60);
        }

        totalTime += cycle;
        h = parseInt(totalTime / 60);
        m = parseInt(totalTime % 60);

        if (h >= 24) {
            h -= 24;
        }

        if (h <= 12) {
            ap = "AM";
        } else {
            ap = 'PM'
        }

        if (h < 10) {
            h_text = '0' + h.toString();
        }
        else {
            h_text = h.toString();
        }

        if (m < 10) {
            m_text = '0' + m.toString();
        } else {
            m_text = m.toString();
        }

        
        var obj = {
            c_time:cTime,
            time:h_text + ":" + m_text + " " + ap,
        };

        res.join(obj);
    };

    return res;
}


