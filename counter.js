

 var eventday="01/01/2021";
 const newEvent=document.getElementById("newEvent");
 newEvent.addEventListener('submit',event=>{
    event.preventDefault();
    handleEventChange(event);  
 })
 
 function handleEventChange(event){
    const eventName=event.target.elements.eventName.value;
     const eventDate=event.target.elements.eventDate.value;
     if((new Date(eventDate)-new Date())<0){
         alert("Event date is alreasy passed. Please enter an upcoming event")
     }
     else if(eventName && eventDate){
        eventday=eventDate;
        document.getElementById("eventName").innerHTML=eventName;
     }
     else{
         alert("Event name and Event date cannot be empty")
     }
 }

function countDown(){
   
    var eventDate=new Date(eventday);
    var currentDate=new Date();
    var totalSeconsds=(eventDate-currentDate)/1000;
        var daysRemaining=Math.floor(totalSeconsds/3600/24);
        var hoursRemaining=Math.floor(totalSeconsds/3600)%24;
        var minutesRemaining=Math.floor(totalSeconsds/60)%60;
        var seconsdsRemaining=Math.floor(totalSeconsds)%60;
        
        document.getElementById("days").innerHTML=dayCountFormat(daysRemaining);
        document.getElementById("hours").innerHTML=timeCountFormat(hoursRemaining);
        document.getElementById("minutes").innerHTML=timeCountFormat(minutesRemaining) ;
        document.getElementById("seconds").innerHTML=timeCountFormat(seconsdsRemaining) ;  
}

function timeCountFormat(count){
    return count<10 ? `0${count}`:count;
}

function dayCountFormat(count){
    return count<10? `00${count}`:(count<100? `0${count}`:count);
}
countDown();

window.setInterval(countDown,1000)