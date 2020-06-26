// GET THE DOM ELEMENTS
const day= document.getElementById("day"),
 time =document.getElementById("time"),
 greetings =document.getElementById("greetings"),
name =document.getElementById("name"),
focus =document.getElementById("focus");

// OPTIONS ---TO SHOW THE TIME IN AM/PM
const showAmPm = true;

// GET THE DAYS OF THE WEEK
let daysofWeek =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// GET THE MONTHS OF THE YEAR
let months =["January","February","March","April","May","June",
"July","August","September","October","November","December"];

// SHOW DATE
function showDate(){
    // let today =new Date(2019,03,04,21,34,05),-- how one sets the date!
    let today = new Date(),
    weekDay = today.getDay(),
    date = today.getDate(),
    month = today.getMonth(),
    year = today.getFullYear(),
    // GETTING A SPECIFIC DAY FROM THE ARRAY
    specificDay = daysofWeek[weekDay],
    specificMonth = months[month];
   
    // OUTPUT THE DATE
  day.innerHTML = `${specificDay}<span> ; </span>${date}<span>-</span>${specificMonth}<span>-</span>${year}`;
  day.style.opacity=".7";
}
showDate();

// SHOW TIME
function showTime(){
    // let Today =new Date(2019,03,04,21,34,05),-- how one sets the date!
    let Today = new Date(),
    hour = Today.getHours(),
    min = Today.getMinutes(),
    sec =Today.getSeconds();
    
 
    // SHOW AM OR PM
    const amPm = hour <= 12 ? 'AM' : 'PM';
 
    // SHOW IN 12-HR-CLOCK SYSTEM
   hour = hour % 12 || 12;

//    OUTPUT TIME

time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}
<span> </span>${showAmPm ? amPm : " "}`;

// SHOW TIME AT INTERVAL
setTimeout(showTime, 1000);
}
 
// ADD A ZERO BEFORE THE TIME
function addZero(num){
    return (parseInt(num, 10) < 10 ? '0' : '') + num;
}

// ADD BACKGROUND AND DIFFERENT GREETINGS DEPENDING ON THE TIME
function setBackground(){
    // let today =new Date(2019,03,04,21,34,05),-- how one sets the date!
    let today = new Date(),
    hour = today.getHours();

    if(hour < 12){
        // Morning
        document.body.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.4),rgba(231,64,64,0.3)),url(./images/morning.jfif)";
        greetings.innerHTML = "Good Morning";
    }
    else if(hour < 16){
    //  Afternoon
    document.body.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0.5)),url(./images/afternoon.jfif)";
    greetings.innerHTML = "Good Afternoon";
   
    }
    else if(hour < 19){
        //Evening
        document.body.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.5)),url(./images/evening.jfif)";
        greetings.innerHTML = "Good Evening";
    }
    else{
        // Night
        document.body.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.7)),url(./images/night.jfif)";
        greetings.innerHTML = "Good Night";
    }
}
// GET/SET THE NAME
function getName(){
    if(localStorage.getItem("name") === null){
        name.textContent = "[Enter Name]";
    }
    else{
        name.textContent = localStorage.getItem("name");
    }
}
// SET TO SAVE ON ENTER/KEYPRESS AND BLUR.... SO AS TO SHOW WHEN PAGE IS REFRESHED
function setName(value){
    if(value.type === 'keypress'){
      if(value.which == 13 || value.keyCode == 13){
        localStorage.setItem("name", value.target.innerHTML);
      name.blur();
      }
    }else{
       localStorage.setItem("name", value.target.innerHTML);
    }
}

    // GET/SET THE FOCUS
function getFocus(){
    if(localStorage.getItem("focus") === null){
        focus.textContent = "[Enter Your Focus]";
    }
    else{
        focus.textContent = localStorage.getItem("focus");
    }
}

// SET TO SAVE ON ENTER/KEYPRESS AND BLUR.... SO AS TO SHOW WHEN PAGE IS REFRESHED
function setFocus(value){
    if(value.type === 'keypress'){
         if(value.which == 13 || value.keyCode == 13){
       localStorage.setItem('focus',value.target.innerHTML);
             focus.blur();
         }
    }else{
       localStorage.setItem('focus',value.target.innerHTML);
    }
}

// SET TO SAVE ON KEYPRES/ENTER/BLUR --ON NAME
name.addEventListener('keypress',setName);
name.addEventListener('blur',setName);

// SET TO SAVE ON KEYPRES/ENTER/BLUR --ON THE FOCUS
focus.addEventListener('keypress',setFocus);
focus.addEventListener('blur',setFocus);


// RUN
showTime();
setBackground();
getName();
getFocus();