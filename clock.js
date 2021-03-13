function washingtonTimeClock(){
    var washingtonTime = new Date().toLocaleString("en-US", {timeZone: "America/New_York", timeStyle: "medium", hourCycle: "h23"});
    
    document.getElementById("washingtonClock").innerText = washingtonTime;
    document.getElementById("washingtonClock").textContent = washingtonTime;
    
    setTimeout(washingtonTimeClock, 1000);
    
}
washingtonTimeClock();

function euCommandTimeClock(){
    var euCommandTime = new Date().toLocaleString("en-US", {timeZone: "Europe/Berlin", timeStyle: "medium", hourCycle: "h23"});

    document.getElementById("euCommandClock").innerText = euCommandTime;
    document.getElementById("euCommandClock").textContent = euCommandTime;

    setTimeout(euCommandTimeClock, 1000);
}
euCommandTimeClock();

function tehranTimeClock(){
    var tehranTime = new Date().toLocaleString("en-US", {timeZone: "Asia/Tehran", timeStyle: "medium", hourCycle: "h23"});
    
    document.getElementById("tehranClock").innerText = tehranTime;
    document.getElementById("tehranClock").textContent = tehranTime;

    setTimeout(tehranTimeClock, 1000);
}
tehranTimeClock();

function kabulTimeClock(){
    var kabulTime = new Date().toLocaleString("en-US", {timeZone: "Asia/Kabul", timeStyle: "medium", hourCycle: "h23"});

    document.getElementById("kabulClock").innerText = kabulTime;
    document.getElementById("kabulClock").textContent = kabulTime;

    setTimeout(kabulTimeClock, 1000);
}
kabulTimeClock();

function beijingTimeClock(){
    var beijingTime = new Date().toLocaleString("en-US", {timeZone: "Asia/Shanghai", timeStyle: "medium", hourCycle: "h23"});

    document.getElementById("beijingClock").innerText = beijingTime;
    document.getElementById("beijingClock").textContent = beijingTime;

    setTimeout(beijingTimeClock, 1000);
}
beijingTimeClock();

function tokyoTimeClock(){
    var tokyoTime = new Date().toLocaleString("en-US", {timeZone: "Asia/Tokyo", timeStyle: "medium", hourCycle: "h23"});

    document.getElementById("tokyoClock").innerText = tokyoTime;
    document.getElementById("tokyoClock").textContent = tokyoTime;

    setTimeout(tokyoTimeClock, 1000);
}
tokyoTimeClock();

function zuluTimeClock(){
    var zuluTime = new Date().toLocaleString("en-US", {timeZone: "Pacific/Midway", timeStyle: "medium", hourCycle: "h23"});

    document.getElementById("zuluClock").innerText = zuluTime;
    document.getElementById("zuluClock").textContent = zuluTime;

    setTimeout(zuluTimeClock, 1000);
}
zuluTimeClock();

function pacificTimeClock(){
    var pacificTime = new Date().toLocaleString("en-US", {timeZone: "America/Los_Angeles", timeStyle: "medium", hourCycle: "h23"});

    document.getElementById("pacificClock").innerText = pacificTime;
    document.getElementById("pacificClock").textContent = pacificTime;

    setTimeout(pacificTimeClock, 1000);
}
pacificTimeClock();