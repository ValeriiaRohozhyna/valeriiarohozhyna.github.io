
    btnShow.addEventListener("click", showTime, false);

    function showTime () {
        var timeNow = document.createElement("span");
        timeNow = new Date();
        var timeNowSec = timeNow.getSeconds();
        var timeNowMin = timeNow.getMinutes();
        var timeNowH = timeNow.getHours();
        timeNow = `${timeNowH}:${timeNowMin}:${timeNowSec}`;
        time.innerText = timeNow;

        setTimeout(showTime, 1000);
    };
