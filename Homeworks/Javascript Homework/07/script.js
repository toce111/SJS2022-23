// First exercise

var duck = document.querySelector("#duck");
duck.addEventListener("click", function() {
    duck.classList.toggle("border");    
});

// Second exercise
var description = document.querySelectorAll("p");
for (var i = 0; i < description.length; i++) {
    description[i].classList.add('description');
};

// Third exercise
var parent = document.querySelector(".parent h2");
console.log(parent);

// Fourth exercise
var niza = ['Argentina', 'Brazil', 'Croatia', 'France', 'Japan', 'Ecuador', 'Serbia'];

var ul = document.createElement("ul");

document.body.appendChild(ul);

for(var i = 0; i < niza.length; i++){
    var li = document.createElement("li");
    ul.appendChild(li);
    var value = document.createTextNode(niza[i]);
    li.appendChild(value);
}

// Fifth exercise
let box = document.querySelector(".box");
let increase = document.getElementById("increase");
let decrease = document.getElementById("decrease");

increase.addEventListener("click", function() {
    localStorage.setItem("changeBox", "increase");
    let type = localStorage.getItem("changeBox");
    HandleBoxChange(type);
});

decrease.addEventListener("click", function() {
    localStorage.setItem("changeBox", "decrease");
    let type = localStorage.getItem("changeBox");
    HandleBoxChange(type);
});

const HandleBoxChange = (type) => {
    if(type === "increase") {
        box.classList.add("boxed-increased");
    } else {
        box.classList.remove("boxed-increased");
    }
}

let type = localStorage.getItem("changeBox");
HandleBoxChange(type);