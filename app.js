var hourjs=document.getElementById("hour");
var minute=document.getElementById("min");
var second=document.getElementById("sec");
var millisec=document.getElementById("msec");
hour=0;
min=0;
sec=0;
msec=0;
var interval;

function timer(){
    msec++;
    millisec.innerHTML=msec;
    if(msec==100){
        sec++;
        second.innerHTML=sec;
        msec=0;
    }
    else if(sec==60){
        min++;
        minute.innerHTML=min;
        sec=0;
    }
    else if(min==60){
        hour++;
        hourjs.innerHTML=hour;
        min=0;
    }
}

function start(){
    var btn=document.getElementById("btn");
    interval=setInterval(timer,10);
    btn.disabled=true;
}

function stop(){
    var btn=document.getElementById("btn");
    clearInterval(interval);
    btn.disabled=false;
}

function reset(){
    msec="0"+0;
    sec="0"+0;
    minute="0"+0;
    hour="0"+0;
    millisec.innerHTML=msec;
    second.innerHTML=sec;
    minute.innerHTML=min;
    hourjs.innerHTML=hour;
    stop();
}