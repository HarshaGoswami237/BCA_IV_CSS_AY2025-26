//build a countdown Timmer  from a target date(spandan fest : 2026-03-19)
function showRemainingTime(targetDate){
const timenow = new Date().getTime(); //Todays date & time in milliseconds
const targetDateinms = new Date(targetDate).getTime();
function updateRemainingTime(timenow,targetDate){
const remain = targetDate-timenow;

if(remain <0){
    console.log("Target date reached"); return;
}
    //calculate time units 
    let days =  Math.floor( remain / (1000*60 *60 *24));   // days
    let remainDay = remain % (1000*60 *60 *24)


    let hours =  Math.floor(remainDay / (1000*60 *60 ));     // hours
    let remainHour = remain % (1000*60 *60 *24) % (1000*60 *60 )


    let minutes = Math.floor( remainHour/  (1000*60 ) );   //Minutes
    let remainMinutes = remain % (1000*60 *60 *24) % (1000*60 *60 ) %  (1000*60 )


    let sec =  Math.floor( remainMinutes/(1000)) ; //Secons

return {"days": days,"hours":hours , "minutes": minutes ,"sec":sec};

}
return updateRemainingTime(timenow,targetDateinms)
}
console.log( showRemainingTime("2026-03-19") )