const timer = document.getElementById('stopwatch');

var hr = 0;
var min = 4;
var sec = 59;
var stoptime = true;

function startTimer() {
  if (stoptime == true) {
        stoptime = false;
        timerCycle();
    }
}
function stopTimer() {
  if (stoptime == false) {
    stoptime = true;
  }
}

function timerCycle() {
    if (stoptime == false) {
    sec = parseInt(sec);
    min = parseInt(min);
    hr = parseInt(hr);

    sec = sec - 1;

    if (sec == 0) {
      min = min - 1;
      sec = 59;
    }
    if (min == 0) {
      hr = hr - 1;
      min = 59;
      sec = 59;
    }
    if(sec==0 && min==0 && hr==0){
        stoptime=true
        window.location.assign('../end/end.html')
    }

    if (sec < 10 || sec == 0) {
      sec = '0' + sec;
    }
    if (min < 10 || min == 0) {
      min = '0' + min;
    }
    if (hr < 10 || hr == 0) {
      hr = '0' + hr;
    }

    timer.innerHTML = hr + ':' + min + ':' + sec;

    setTimeout("timerCycle()", 1000);
  }
}

startTimer()

// function resetTimer() {
//     timer.innerHTML = '00:00:00';
// }