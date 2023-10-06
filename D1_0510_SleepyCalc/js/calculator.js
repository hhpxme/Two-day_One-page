const calcWakeup = document.getElementById("calc-wakeup");
const calcSleep = document.getElementById("calc-sleep");
const calcSleepNow = document.getElementById("calc-sleep-now");

const firstText = document.getElementById("first-text");
const timeText = document.getElementById("time-text");
const lastText = document.getElementById("last-text");

const tbValue = document.getElementsByClassName("tb-value");

function hourToMinute(hour, minute) {
    return hour * 60 + minute;
}

function minuteToHour(minutes) {
    if (minutes < 0) {
        minutes += 1440;
    }

    var h = parseInt(minutes/60);
    var m = parseInt(minutes%60);

    if (h >= 24) {
        h -= 24;
    }

    var time = {
        hour:h,
        minute:m,
    };

    return time;
}

function clock(time) {
    var ap = '';
    var res = '';

    if (time["hour"] < 12) {
        ap = 'AM';
    } else {
        ap = 'PM';
    }
    if (time["hour"] == 0 && time["minute"] == 0) {
        time["hour"] = 12;
        ap = 'AM';
    }

    var res = time.hour.toString() + ":" + time.minute.toString() + " " + ap;
    
    if (time["minute"] < 10) {
        res = time.hour.toString() + ":0" + time.minute.toString() + " " + ap;
    }

    return res;
}

function calcSleepCycles(hour, minute) {
    var res = [];

    var totalMinutes = hourToMinute(hour, minute);
    var totalTime = totalMinutes + 15;
    var cycle = 90;
    
    for (var i = 1; i <= 6; i++) {
        totalTime += cycle;

        res.push(totalTime);
    };

    return res;
}

function calcWakeupCycles(hour, minute) {
    var res = [];

    var totalMinutes = hourToMinute(hour, minute);
    var cycle = 90;

    for (var i = 1; i <= 6; i++) {
        totalMinutes -= cycle;

        res.push(totalMinutes - 15);
    }

    return res;
}

function cycleTimes() {
    var res = [];

    var cycle = 90;
    var cTime = '';

    for (var i = 1; i <= 6; i++) {
        if (i % 2 == 0) {
            cTime = (parseInt(cycle*i/60)).toString() + 'H';
        } else {
            cTime = (parseInt(cycle*i/60)).toString() + "H" + (parseInt(cycle*i%60)).toString();
        }
        
        res.push(cTime);
    }

    return res;
}

calcWakeup.addEventListener("click", () => {
    firstText.innerText = "Wake up at ";
    lastText.innerText = "Go to bed at one of the following times:"

    var h = document.getElementById("hour-wakeup").value;
    var m = document.getElementById("minute-wakeup").value;
    var ap = document.getElementById("am-pm-wakeup").value;
    timeText.innerText = h + ":" + m + " " + ap;

    var hour = parseInt(h);
    var minute = parseInt(m);

    if (ap == 'PM') {
        hour += 12;
    }
    if (hour == 24) {
        hour = 12;
    }

    const wakeupCycles = calcWakeupCycles(hour, minute);

    for (var i = 1; i <= 6; i++) {
        tbValue[i-1].cells[0].innerText = i.toString();
        tbValue[i-1].cells[1].innerText = cycleTimes()[i-1];
        tbValue[i-1].cells[2].innerText = clock(minuteToHour(wakeupCycles[i-1]));
    };
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
        hour = 12;
    }

    const sleepCycles = calcSleepCycles(hour, minute);

    for (var i = 1; i <= 6; i++) {
        tbValue[i-1].cells[0].innerText = i.toString();
        tbValue[i-1].cells[1].innerText = cycleTimes()[i-1];
        tbValue[i-1].cells[2].innerText = clock(minuteToHour(sleepCycles[i-1]));
    };
});

calcSleepNow.addEventListener("click", () => {
    const today = new Date();
    var hour = today.getHours();
    var minute = today.getMinutes();
    var h = hour.toString();
    var m = minute.toString();
    var ap = '';

    if (hour < 12) {
        ap = 'AM';
    } else {
        ap = 'PM';
    }

    if (hour > 12) {
        h = (hour - 12).toString();
    }
    if (hour == 0) {
        h = '12';
    }
    if (minute < 10) {
        m = '0' + minute.toString();
    }
    
    firstText.innerText = "Sleep at ";
    lastText.innerText = "Wake up at:"
    timeText.innerText = h + ":" + m + " " + ap;

    const sleepCycles = calcSleepCycles(hour, minute);

    for (var i = 1; i <= 6; i++) {
        tbValue[i-1].cells[0].innerText = i.toString();
        tbValue[i-1].cells[1].innerText = cycleTimes()[i-1];
        tbValue[i-1].cells[2].innerText = clock(minuteToHour(sleepCycles[i-1]));
    };
});


