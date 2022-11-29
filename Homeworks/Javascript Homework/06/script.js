// First exercise
var emptyParagraph = document.getElementsByTagName("p");
emptyParagraph[0].innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

// Second exercise
var minusButton = document.querySelector("#minus");
var plusButton = document.querySelector("#plus");
var counter = document.querySelector("#counter");
count = 0;

plusButton.addEventListener("click", function(){
    count += 1;
    if(count >= 10){
        count = 10;
    }
    counter.innerHTML = count;
});
minusButton.addEventListener("click", function(){
    count -= 1;
    if (count <= 0){
        count = 0;
    }
    counter.innerHTML = count;
});

// Third exercise

var ListItems = document.getElementsByClassName("list-item");

ListItems[0].innerHTML = "Python";
ListItems[1].innerHTML = "C++";
ListItems[3].innerHTML = "Javascript";
ListItems[2].innerHTML = "React";
ListItems[4].innerHTML = "Haskell";


// Fourth exercise

var theimage = document.querySelector("img");

theimage.addEventListener("click", function(){
    theimage.src = "https://marcianosmx.com/wp-content/uploads/2013/08/Random-Access-21.jpg.webp";
    theimage.style.width = "300px";
})