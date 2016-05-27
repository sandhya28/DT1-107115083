var deadline;

function init() {

    //string of variables to extract and store the value inputted by the user

  var timerem;
  var n1=document.getElementById('yr').value;
  var n2=document.getElementById('dat').value;
  var n3=document.getElementById('hrs').value;
  var n4=document.getElementById('min').value;
  var n5=document.getElementById('sec').value;
  var n6=document.getElementById('mon').value;
 //deadline.setHours(n3,n4,n5);
  deadline = n6+"/"+n2+"/"+n1+" "+n3+":"+n4+":"+n5; 
   //Converting the input into usable date format
  
  init1();       
}

        function init1(){

            //Date.parse()converts into milliseconds and the result of the subtraction is time remaining for the event in seconds

  var time_rem = Date.parse(deadline) - Date.parse(new Date());   
  
        //string of logical statements which convert milliseconds into no. of days, hours, minutes and seconds using floor()

  var seconds = Math.floor( (time_rem/1000) % 60 );
  var minutes = Math.floor( (time_rem/(1000*60) ) % 60 );
  var hours = Math.floor( (time_rem/(1000*60*60) ) % 24 );
  var days = Math.floor( time_rem/(1000*60*60*24) );
  
  /*if(deadline.getSeconds()<10)
    deadline.setSeconds('0'+deadline.getSeconds());
  if(deadline.getHours()<10)
    deadline.setHours('0'+deadline.getHours());
  if(deadline.getMinutes()<10)
    deadline.setMinutes('0'+deadline.getMinutes());
*/
  if(seconds<10)
    seconds="0"+seconds;
  if(hours<10)
    hours="0"+hours;
  if(minutes<10)
    minutes="0"+minutes;

 
  if(time_rem<=0)     //If time remaining is equal to zero, the time is up alerts the user and refreshes the page 
   {
      alert("time over"); 
     history.go(0);
     
    }
 
  else  
   {
     
    if(!(isNaN(seconds)&&isNaN(minutes)&&isNaN(hours)&&isNaN(days)))  //If all of the user info is valid remaining time and no. of days is printed using innerHTML
  
   {    
        document.getElementById('txt').innerHTML =
        "DEADLINE : " + deadline + "  , " + days + "  DAYS  " + hours + ":" + minutes + ":" + seconds + " REMAINING"; 
        setInterval(init1, 1000);  //the function init() is invoked every 1000 millisec
   }
     
    else
      {
       alert("INVALID ENTRY");
       history.go(0);  //if the entered information is invalid, the page is refreshed after an alert message
       }
}
}