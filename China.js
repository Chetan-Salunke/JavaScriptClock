let a;
let date;
let time;
const options = {weekday:'long', year:'numeric', month:'long', day:'numeric'};  
setInterval(() => {
a = new Date();
date = a.toLocaleDateString(options, { timeZone: 'Europe/London' }); 
time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
document.getElementById('time').innerHTML = time + " <br>on " + date; 
}, 1000);

console.log(a.toLocaleString('ko-KR', { timeZone: 'UTC' }));