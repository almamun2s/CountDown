const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
]

const giveaway  = document.querySelector('.cd-giveaway');
const deadline  = document.querySelector('.cd-deadline');
const items     = document.querySelectorAll('.cd-deadline-formate h4');

// Selecting all Deadline items 
const cdDays    = document.querySelector('.cd-days');
const cdHours   = document.querySelector('.cd-hours');
const cdMinutes = document.querySelector('.cd-minutes');
const cdSeconds = document.querySelector('.cd-seconds');


let futureDate = new Date(2024, 1, 3, 20, 0 );

const year      = futureDate.getFullYear();
const hour      = futureDate.getHours();
const minute    = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month];

const date = futureDate.getDate();

let weekDay = futureDate.getDay();
weekDay = weekDays[weekDay];


giveaway.innerText = `giveaway ends on ${weekDay} ${month} ${date}, ${year} , ${hour}:${minute}am `;


// Future time in ms 
const futureTime = futureDate.getTime();

// Remaining Time
function getRemainingTime() {
    let currentTime = new Date().getTime();
    const timeRemain = futureTime - currentTime;

    const oneDay    = 24*60*60*1000 // ms
    const oneHour   = 60*60*1000 // ms
    const oneMinute = 60*1000 // ms
    const oneSecond = 1000 // ms

    // Calculate Remaining Time 
    let days = timeRemain / oneDay ;
    days = Math.floor(days);
    console.log(days);

    let hours   = (timeRemain % oneDay) / oneHour;
    hours = Math.floor(hours);
    console.log(hours);

    let minutes = (timeRemain % oneHour) / oneMinute;
    minutes = Math.floor(minutes);
    console.log(minutes);

    let seconds = (timeRemain % oneMinute ) / oneSecond;
    seconds = Math.floor(seconds);
    console.log(seconds);

    function formateTime(item) {
        if (item < 10) {
            item = `0${item}`;
            return item;
        }else{
            return item;
        }
    }
    formateTime();

    cdDays.innerHTML    = formateTime(days);
    cdHours.innerHTML   = formateTime(hours);
    cdMinutes.innerHTML = formateTime(minutes);
    cdSeconds.innerHTML = formateTime(seconds);
    if (timeRemain < 0) {
        clearInterval(countDown);
        cdDays.innerHTML    = '00';
        cdHours.innerHTML   = '00';
        cdMinutes.innerHTML = '00';
        cdSeconds.innerHTML = '00';
    }
}

let countDown = setInterval(getRemainingTime, 1000);
getRemainingTime();