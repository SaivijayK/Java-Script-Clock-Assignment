let a
var hours
let date
let minutes
let seconds
let meridiem
const day_obj = {1:"Monday",2:"Tuesday",3:"Wednesday",4:"Thursday",5:"Friday",6:"Saturday"}
const month_obj = {0:"January",1:"February",2:"March",3:"April",4:"May",5:"June",6:"July",7:"August",8:"September",9:"October",10:"November",11:"December"}
clr = setInterval(() => {
    a = new Date();
    console.log(a.getMonth())
    date = month_obj[a.getMonth()]+" "+a.getDate()+" "+a.getFullYear()+" "+day_obj[a.getDay()]
    hours = a.getHours()
    if(a.getHours()>12){
        meridiem = "PM"
    }else{
        meridiem = "AM"
    }
    if(hours > 12){
        hours = hours-12
    }
    if(hours<10){
        hours = "0"+hours
    }
    if(a.getMinutes()<10){
        minutes = "0"+a.getMinutes()
    }else{
        minutes = a.getMinutes()
    }
    if(a.getSeconds()<10){
        seconds = "0"+a.getSeconds()
    }else{
        seconds = a.getSeconds()
    }
    document.getElementById("time").innerText = "Time: "+String(hours)+":"+minutes+":"+seconds+" "+meridiem+"\n"+"Date :"+date
},1000);
