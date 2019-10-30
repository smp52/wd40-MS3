
// TIME
var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var monthsInYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var currentTime = {
    raw: undefined,
    month: undefined,
    day: undefined,
    weekday: undefined,
    year: undefined,
    hours: undefined,
    minutes: undefined,
    suffix: "",
    greeting: undefined,
    date: ""
}

function getCurrentTime(){
    currentTime.raw = new Date();
    currentTime.hours = currentTime.raw.getHours();
    currentTime.minutes = currentTime.raw.getMinutes();
    currentTime.month = currentTime.raw.getMonth() + 1;
    currentTime.day = currentTime.raw.getDate();
    currentTime.weekday = currentTime.raw.getDay();
    currentTime.year = currentTime.raw.getFullYear();
    
    if (currentTime.hours >= 4 && currentTime.hours < 12) {
    currentTime.greeting = 'Good Morning';
    }
    // Afternoon
    else if (currentTime.hours >= 12 && currentTime.hours < 17) {
        currentTime.greeting = 'Good Afternoon';
    }
    // Evening
    else if (currentTime.hours >= 17 && currentTime.hours < 22) {
        currentTime.greeting = 'Good Evening';
    }

    else {
        currentTime.greeting = 'Welcome';
    }
    
    if (currentTime.minutes < 10) {
        currentTime.minutes = "0" + currentTime.minutes;
    }
    
    if(currentTime.hours < 12) {
        currentTime.suffix = "am";
    }
    else {
        currentTime.hours = currentTime.hours - 12;
        currentTime.suffix = "pm";
    }
    
    currentTime.date = daysOfWeek[currentTime.weekday] + ", " + monthsInYear[currentTime.month - 1] + " " + currentTime.day + ", " + currentTime.year;
    

}

user.first = "arjun";
user.first = user.first.charAt(0).toUpperCase() + user.first.slice(1);

// Change Clock Name


getCurrentTime();
$(".clock__clock-hours").text(currentTime.hours);
$(".clock__clock-mins").text(currentTime.minutes);
$(".clock__clock--suffix").text(currentTime.suffix);
$(".clock__date").text(currentTime.date);
$(".clock__name").text(currentTime.greeting + " " + user.first);

setInterval(function(){
    getCurrentTime();
    $(".clock__clock-hours").text(currentTime.hours);
    $(".clock__clock-mins").text(currentTime.minutes);
    $(".clock__clock--suffix").text(currentTime.suffix);
    $(".clock__date").text(currentTime.date);
    $(".clock__name").text(currentTime.greeting + " " + user.first);
},1000);