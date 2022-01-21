const formbtn = document.querySelector("#form-btn");
const output = document.querySelector("#output");


formbtn.addEventListener("submit", (e) => {

    e.preventDefault();

    let date = document.querySelector("input[type = 'date']").value;
    let time = document.querySelector("input[type = 'time']").value;
setInterval(() => {
    
    let first_time = new Date();
    let end_time = new Date(date + " " + time)

    let allsec = Math.floor(Math.abs(end_time.getTime() - first_time.getTime() )/ 1000);

    let min = Math.floor(allsec / 60);
    let hr = Math.floor(min / 60);
    let day = Math.floor(hr / 24);
    let month = Math.floor(day / 30);


    let total_hr = hr - (day * 24);
    let total_min = min - (day * 24 * 60) - (total_hr * 60);
    let total_sec = allsec - (day * 24 * 60 * 60) - (total_hr * 60 * 60) - (total_min * 60);

    output.innerHTML =` ${zeroTime(month)} ${zeroTime(day)} : ${zeroTime(total_hr)} : ${zeroTime(total_min)}: ${zeroTime(total_sec)}`
},1000);



})