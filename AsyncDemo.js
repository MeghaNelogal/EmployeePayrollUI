function showTime()
{
    const date=new Date();
    return date.getHours()+" Hrs: "+date.getMinutes()+" Mins: "+date.getSeconds()+" secs: ";
}

function showSessionExpire()
{
    console.log("Activity B: your session expired at "+showTime());
  
}
 console.log("Activity -A :Triggering Activity - B at " +showTime());
 setTimeout(showSessionExpire,5000);
 console.log("Activity -A :Triggering Activity - B " +showTime());