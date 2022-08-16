// pulls moment then sets date on top of screen
var currentDate = moment();
$("#time").text(currentDate.format("MMMM Do, YYYY"))
//pulls current hour from Moment
var currentHour = moment().format("HH")

console.log(currentHour)
console.log(currentDate)



function trackTime(){
    
}