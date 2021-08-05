


const dateEl = document.getElementById('date');
const dayEl = document.getElementById('day');
const hourEl = document.getElementById('hour');
const minsEl = document.getElementById('min');
const secEl = document.getElementById('sec');
const ampmEl = document.getElementById('ampm');


function digitalClock(){
    const yearlyMonth = [ 'Jan', 'Feb','March','April','May','June','July','Aug','Sep','Oct','Nov','Dec'];
    const days = ['Sun','Mon', 'Tue','Wed','Thr','Fri','Sat'];
    const date = new Date();
    const todayDate = date.getDate();
    const todayMonth = yearlyMonth[date.getMonth()];
    const todayYear = date.getFullYear();
    const todayDay = days[date.getDay()];
    const hours = date.getHours() % 12;
    const mins = date.getMinutes();
    const sec = date.getSeconds();

    const todayTotalDate = `  ${todayDate}  ${todayMonth} , ${todayYear}`;

    


    
    console.log(todayDate,todayMonth,todayYear,todayDay,hours,mins,sec)
    // console.log(date)
    dateEl.innerHTML = todayTotalDate;
    dayEl.innerHTML = todayDay;
    hourEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secEl.innerHTML = formatTime(sec);
    ampmEl.innerHTML = amPm();

}

const formatTime = time => time<10 ? (`0${time}`)  : time; 


const amPm = hours => hours >= 12 ? `AM` :`PM`;

digitalClock();
setInterval(digitalClock,1000)