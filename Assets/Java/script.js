var savebtn = $(".savebtn")



// pulls moment then sets date on top of screen
var currentDate = moment();
$("#time").text(currentDate.format("MMMM Do, YYYY"))
//pulls current hour from Moment
var currentHour = moment().format("HH")

console.log(currentHour)
console.log(currentDate)



function trackTime(){
    
}


$(".frow").click(function (event){

    var element = event.target
    if (element.matches("button")){
    const hourEl = $(this).children("p").innerHTML
    var input = $(this).children("textarea")

    console.log(hourEl)
    console.log(input)
    



    }
})
