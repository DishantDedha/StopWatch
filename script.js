let hours=0,minutes=0,seconds=0,milseconds=0;

let timers=document.querySelector('.timer');
// selects the DOM element

let et=null;
//this variable is used to store intervalId

function displayTime()
{
    milseconds+=10;
    if(milseconds==1000){
        milseconds=0;
        seconds++;
        if(seconds==60)
        {
            seconds=0;
            minutes++;

            if(minutes==60)
            {
                minutes=0;
                hours++;
            }

        }
    }


    let h1= hours<10 ? "0"+hours:hours;
    let m1= minutes<10 ? "0"+minutes:minutes;
    let s1=seconds<10 ? "0"+seconds:seconds;
    let milli=milseconds<10? "00"+milseconds:milseconds <100 ? "0"+milseconds:milseconds;

     timers.innerHTML=`${h1} : ${m1} :${s1} :${milli}`;
     console.log(`${h1} : ${m1} : ${s1} : ${milli}`);
}

// function for startbutton
function startTime()
{
  if(et!==null){
  clearInterval(et);
  }
    et=setInterval(displayTime,10);
}
// function for pause
function pauseTime()
{
    clearInterval(et);
}
// function for resetting
function resetTime()
{
    clearInterval(et);
    hours=0;
    minutes=0;
    seconds=0;
    milseconds=0;
    timers.innerHTML='00 : 00 : 00 : 000';

}
//adding eventlisteners to all buttons
document.getElementById('start_watch').addEventListener('click',startTime);
document.getElementById('pause_watch').addEventListener('click',pauseTime);
document.getElementById('Reset_watch').addEventListener('click',resetTime);

