var card1= ["goat", "goat"]
var card2 = ["cat", "goat"]
var card3 = ["cat", "cat"]
//var card4 = ["cat", "goat"]
var cardArr= [card1, card2, card3]
catimg='https://i.imgur.com/AMTogc2.png'
goatimg='https://i.imgur.com/DNNNCrn.png'
var numCats = 0
var numGoats = 0
var rand = 0

function show() {
    var side2 = document.getElementById("side2")
    side2.style.opacity= "0"
    var side1 = document.getElementById("side1")
    var side2 = document.getElementById("side2")

    // get a card from the hat 
    rand= Math.floor((Math.random() * 3));
    // get the side of the card (goat or cat)
    if(cardArr[rand][0] === 'cat'){
        side1.setAttribute("src",catimg)
    }
    if(cardArr[rand][1] === 'cat'){
        side2.setAttribute("src",catimg)
    }
    if(cardArr[rand][0] === 'goat'){
        side1.setAttribute("src", goatimg)
    }
    if(cardArr[rand][1] === 'goat'){
        side2.setAttribute("src", goatimg)
    }
}

function reveal() {
    var catCount = document.getElementById("catCount")
    var goatCount = document.getElementById("goatCount")
    var side2 = document.getElementById("side2")
    side2.style.opacity= "100%"
    if(cardArr[rand][1] === "cat") {
        numCats = numCats+1
        catCount.innerText = numCats
    }
     if(cardArr[rand][1] === "goat") {    
        numGoats = numGoats + 1;
        goatCount.innerText = numGoats
    }
}

function resetCount (){
    var catCount = document.getElementById("catCount")
    var goatCount = document.getElementById("goatCount")
    numCats = 0
    numGoats = 0
    catCount.innerText = numCats
    goatCount.innerText = numGoats
}