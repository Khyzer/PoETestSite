var myImage = document.querySelector("img");
var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");

if (!localStorage.getItem("name")){
    setUserName();
} else {
    var storedName = localStorage.getItem("name");
    myHeading.textContent = "Moin " +storedName+ "! Hier ist deine PoE Seite";
}


myButton.onclick = function(){
    setUserName();
}

myImage.onclick = function() {
    var mySrc = myImage.getAttribute("src");
    if (mySrc === "bilder/poe_logo.png"){
        myImage.setAttribute("src", "bilder/poe_logo_ascendancy.png");
    } else {
        myImage.setAttribute("src", "bilder/poe_logo.png");
    }
}

function setUserName(){
    var myName = prompt("Bitte geben Sie Ihren Namen ein.");
    localStorage.setItem("name", myName);
    myHeading.textContent = ("Moin " +myName+ "! Hier ist deine PoE Seite")
}
