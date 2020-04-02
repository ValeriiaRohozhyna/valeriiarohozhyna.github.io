btnShow.addEventListener("click", showTime, false);

function showTime() {
    var timeNow = new Date();

    var second = timeNow.getSeconds();
    var minute = timeNow.getMinutes();
    var hour = timeNow.getHours();
    
    if (hour.length < 2) {
        hour = `0${hour}`;
    };
    if (minute.length < 2) {
        minute = `0${minute}`;
    };
    if (second.length < 2) {
        second = `0${second}`;
    };
    timeNow = `${hour}:${minute}:${second}`;
    time.innerText = timeNow;
    setInterval(showTime, 1000);
};

btnShow.addEventListener("click", hideTime, false);

function hideTime() {
    if(btnShow.value != "Hide time"){
        btnShow.value = "Hide time";
        time.style.display = "block";
        showTime();
    } else {
        btnShow.value = "Show time";
        time.style.display = "none";
    }
};