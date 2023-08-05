var myImage = document.querySelector("img");

myImage.onclick = function () {
    var mySrc = myImage.getAttribute("src");
    if (mySrc === "images/image-cat.jpg") {
        myImage.setAttribute("src", "images/image-cat2.jpg");
    } else {
        myImage.setAttribute("src", "images/image-cat.jpg");
    }
};

var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");

function setUserName() {
    var myName = prompt("Пожалуйста, введите ваше имя.");
    localStorage.setItem("name", myName);
    myHeading.textContent = "Коты это круто," + myName;
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    var storedName = localStorage.getItem("name");
    myHeading.textContent = "Коты это круто," + storedName;
}

myButton.onclick = function() {
    setUserName();
}