let click = 0;

//Alarm sound
let alarmmusic = document.getElementById('alarm-audio');

alarmmusic.load();


//Current Date
let runningtime = '';
function Currentdate() {
    let date = new Date;
    let hour = date.getHours()
    let minute = date.getMinutes()
    let second = date.getSeconds();
    region();
    if (second < 10) {
        second = '0' + second;
    }
    if (minute < 10) {
        minute = '0' + minute;
    }
    if (hour < 10) {
        hour = '0' + hour;
    }
    if (hour == '0' + 0) {
        hour = 12;
    }
    runningtime = hour + ":" + minute + ":" + second + ' ' + zone;
    document.getElementById('clock').innerHTML = hour + ":" + minute + ":" + second + ' ' + zone;

    function region() {
        if (hour >= 12) {
            zone = 'PM'
        }
        else { zone = 'AM' }
    }
}
Currentdate()
setInterval(Currentdate, 1000)
console.log(runningtime)
let settedTime = ''
//Alarm
function set() {


    let settedhour = document.getElementsByTagName('input')[0].value;
    let settedminute = document.getElementsByTagName('input')[1].value;
    let settedsecond = document.getElementsByTagName('input')[2].value;

    let settedzone = document.getElementById('ampm').value;
    if (settedsecond < 10) {
        settedsecond = '0' + settedsecond;
    }
    if (settedminute < 10) {
        settedminute = '0' + settedminute;
    }
    if (settedhour < 10) {
        settedhour = '0' + settedhour;
    }
    if (settedhour == '0' + 0) {
        settedhour = 12;
    }

    if (settedhour == 0) {
        alert('You have to enter time to set ')
    }
    else {
        let settedTime = settedhour + ":" + settedminute + ":" + settedsecond + ' ' + settedzone
        console.log(settedTime);

        localStorage.setItem(`setted-alarm time`, settedTime);

    }
}
//Alarm timing
setInterval(() => {
    if (runningtime === localStorage.getItem(`setted-alarm time`)) {

        alarmmusic.play();
        document.getElementById('music-stopper').style.visibility = 'visible';
    }
}, 1000);
function shutit() {
    alarmmusic.pause();
}
function remove() {
    localStorage.clear()
}