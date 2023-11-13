function showTime() {
    var date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let session = "AM";

    if(hours>=12? session = "PM" : session);
    if(hours<= 9? hours = "0"+ hours : hours);
    if(minutes<= 9? minutes = "0"+ minutes : minutes);
    if(seconds<= 9? seconds = "0"+ seconds : seconds);
    if(hours > 12? hours = hours - 12 : hours);
    
    document.getElementById("timeVariable").innerText =
    hours + " : " + minutes + " : " + seconds + " " + session;

    setTimeout(showTime,1000);
}
