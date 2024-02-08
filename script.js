function showDate() {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1; // Months are zero indexed, so add 1
    let year = date.getFullYear();

    let fullDate = day + "/" + month + "/" + year;

    document.getElementById("MyDateDisplay").innerText = fullDate;
    document.getElementById("MyDateDisplay").textContent = fullDate;
}

function formatTime(time) {
    return time < 10 ? "0" + time : time;
}

showDate();

function showTime(){
    var date = new Date();
    var h = date.getHours(); 
    var m = date.getMinutes(); 
    var s = date.getSeconds();
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();