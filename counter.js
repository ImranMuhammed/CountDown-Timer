

 var eventday="01/01/2021";

 function handleEventChange(){
     var newEventday=prompt("Please eneter a new event date in format (dd/mm/yyyy)");
     eventday=`"${newEventday}"`
 }
function countDown(){
   
    var eventDate=new Date(eventday);
    var currentDate=new Date();
    var totalSeconsds=(eventDate-currentDate)/1000;

    if(totalSeconsds<0){
        alert("Event had already passed. Please enter a upcoming event date");
    }
    else{
        var daysRemaining=Math.floor(totalSeconsds/3600/24);
        var hoursRemaining=Math.floor(totalSeconsds/3600)%24;
        var minutesRemaining=Math.floor(totalSeconsds/60)%60;
        var seconsdsRemaining=Math.floor(totalSeconsds)%60;
        
        document.getElementById("days").innerHTML=dayCountFormat(daysRemaining);
        document.getElementById("hours").innerHTML=timeCountFormat(hoursRemaining);
        document.getElementById("minutes").innerHTML=timeCountFormat(minutesRemaining) ;
        document.getElementById("seconds").innerHTML=timeCountFormat(seconsdsRemaining) ;
    }
    
    
}

function timeCountFormat(count){
    return count<10 ? `0${count}`:count;
}

function dayCountFormat(count){
    return count<10? `00${count}`:(count<100? `0${count}`:count);
}
countDown();

window.setInterval(countDown,1000)