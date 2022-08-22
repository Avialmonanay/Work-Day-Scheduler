var hourElement = $(".frow")
var backgroundColor = $(".hour")
const hour0 = JSON.parse(localStorage.getItem("item1"))
const hour1 = JSON.parse(localStorage.getItem("item2"))
const hour2 = JSON.parse(localStorage.getItem("item3"))
const hour3 = JSON.parse(localStorage.getItem("item4"))
const hour4 = JSON.parse(localStorage.getItem("item5"))
const hour5 = JSON.parse(localStorage.getItem("item6"))
const hour6 = JSON.parse(localStorage.getItem("item7"))
const hour7 = JSON.parse(localStorage.getItem("item8"))
const hour8 = JSON.parse(localStorage.getItem("item9"))
const hour9 = JSON.parse(localStorage.getItem("item10"))




// pulls moment then sets date on top of screen
var currentDate = moment();
$("#time").text(currentDate.format("MMMM Do, YYYY"))
//pulls current hour from Moment
var currentHour = moment().format("HH")



//pulls items from local storage and assigns them to appropriate time slot.
function getLS(){
    for (let i = 0; i < hourElement.length; i++) {
        var lsInput = hourElement.children("textarea")[i]
        var lsText = lsInput.getAttribute("data-text")



        if (lsText == "1"){
            lsInput.innerText = hour0
        }
        else if (lsText == "2"){
            lsInput.innerText = hour1
        }
        else if (lsText == "3"){
            lsInput.innerText = hour2
        }
        else if (lsText == "4"){
            lsInput.innerText = hour3
        }
        else if (lsText == "5"){
            lsInput.innerText = hour4
        }
        else if (lsText == "6"){
            lsInput.innerText = hour5
        }
        else if (lsText == "7"){
            lsInput.innerText = hour6
        }
        else if (lsText == "8"){
            lsInput.innerText = hour7
        }
        else if (lsText == "9"){
            lsInput.innerText = hour8
        }
        else if (lsText == "10"){
            lsInput.innerText = hour9
        }

        
    }
}




// updates the background color of text area based on current time.
function updateColor() {
    for (let i = 0; i < hourElement.length; i++) {

        var htmlHour = hourElement[i].getAttribute("data-hour")
        var newinput = hourElement.children("textarea")[i]
        

        //checks if current hour has passed. If so it changes the background color of the element to Grey
        if (htmlHour < currentHour) {
            newinput.classList.remove('text')
            newinput.classList.add('textpast')
        }

        //checks if element equals current hour. If so changes element color to orange.
        else if (htmlHour == currentHour) {
            newinput.classList.remove('text')
            newinput.classList.add('textcurrent')

        }

    }
}



//when an item is saved it pulls the textarea value and saves it to the appropriate local storage item
$(".frow").click(function (event) {
    var element = event.target
    if (element.matches("button")) {
        var input = $(this).children("textarea").val()
        var ID = element.getAttribute("data-number")
        
        
        if (ID == "1") {
            localStorage.setItem("item1", JSON.stringify(input))
        }

        else if (ID == "2") {
            localStorage.setItem("item2", JSON.stringify(input))
        }
        else if (ID == "3") {
            localStorage.setItem("item3", JSON.stringify(input))
        }
        else if (ID == "4") {
            localStorage.setItem("item4", JSON.stringify(input))
        }
        else if (ID == "5") {
            localStorage.setItem("item5", JSON.stringify(input))
        }
        else if (ID == "6") {
            localStorage.setItem("item6", JSON.stringify(input))
        }
        else if (ID == "7") {
            localStorage.setItem("item7", JSON.stringify(input))
        }
        else if (ID == "8") {
            localStorage.setItem("item8", JSON.stringify(input))
        }
        else if (ID == "9") {
            localStorage.setItem("item9", JSON.stringify(input))
        }
        else if (ID == "10") {
            localStorage.setItem("item10", JSON.stringify(input))
        }
    }
})
updateColor()
getLS()