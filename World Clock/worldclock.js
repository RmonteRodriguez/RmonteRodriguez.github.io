function displayTime(){
    var meridiem = "AM";
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var clockDiv = document.getElementById('clock');

    if (hours < 10){
        hours = "0" + hours;
    }

    if (minutes < 10){
        minutes = "0" + minutes;
    }

    if (seconds < 10){
        seconds = "0" + seconds;
    }

    if(hours > 12){
        hours = hours - 12;
        meridiem = "PM";
    }

    if (hours == 0){
        hours = 12;
    }

    clockDiv.innerText = "New York " + hours + ":" + minutes + ":" + seconds + " " + meridiem;
}

function displayTimeLondon(){
    var meridiem = "AM";
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var clockDiv = document.getElementById('londonclock');
    var londonHours = hours + 4;

    if (hours < 10){
        hours = "0" + hours;
    }

    if (minutes < 10){
        minutes = "0" + minutes;
    }

    if (seconds < 10){
        seconds = "0" + seconds;
    }

    if(hours > 12){
        hours = hours - 12;
        meridiem = "PM";
    }

    if (hours == 0){
        hours = 12;
    }

    clockDiv.innerText = "London " + londonHours + ":" + minutes + ":" + seconds + " " + meridiem;
}

function displayTimeTokyo(){
    var meridiem = "AM";
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var clockDiv = document.getElementById('tokyoclock');
    var tokyoHours = hours + 1;

    if (hours < 10){
        hours = "0" + hours;
    }

    if (minutes < 10){
        minutes = "0" + minutes;
    }

    if (seconds < 10){
        seconds = "0" + seconds;
    }

    if(hours > 12){
        hours = hours - 12;
        meridiem = "PM";
    }

    if (hours == 0){
        hours = 12;
    }

    clockDiv.innerText = "Tokyo " + tokyoHours + ":" + minutes + ":" + seconds + " " + meridiem;
}

function displayTimeSydney(){
    var meridiem = "AM";
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var clockDiv = document.getElementById('sydneyclock');
    var sydneyHours = hours + 3;

    if (hours < 10){
        hours = "0" + hours;
    }

    if (minutes < 10){
        minutes = "0" + minutes;
    }

    if (seconds < 10){
        seconds = "0" + seconds;
    }

    if(hours > 12){
        hours = hours - 12;
        meridiem = "PM";
    }

    if (hours == 0){
        hours = 12;
    }

    clockDiv.innerText = "Sydney " + sydneyHours + ":" + minutes + ":" + seconds + " " + meridiem;
}

setInterval(displayTime, 1000);

displayTime();

setInterval(displayTimeLondon, 1000);

displayTimeLondon();

setInterval(displayTimeTokyo, 1000);

displayTimeTokyo();

setInterval(displayTimeSydney, 1000);

displayTimeSydney();
