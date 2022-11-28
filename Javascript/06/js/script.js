// // document.write("Hello World!");

// var heading = document.getElementById("heading");
// console.log(heading.id);

// heading.innerHTML = "Antonio Nestorovski";

// var image = document.getElementsByClassName("image");
// console.log(image);
// image[0].src = "https://media.moddb.com/cache/images/members/5/4550/4549205/thumb_620x2000/duck.jpg";

// var niza = document.getElementsByClassName("h2-tag");
// console.log(niza);

// for(let i = 0; i < niza.length; i++){
//     niza[i].innerHTML = `This is h2 #${i+1}`
// }

// var paragraph = document.getElementsByTagName("p");
// console.log(paragraph);

// querySelector (first element with that target)
// querySelectorAll (every element with that target)
// var paragraph = document.querySelectorAll("#imeto-na-id"); // - za id
// var paragraph = document.querySelectorAll(".imeto-na-klasata"); // - za klasa
// var paragraph = document.querySelectorAll("p"); // - za elementi samo!!!!!!


// var button = document.querySelector("button");
// var result = document.getElementById("result");

// button.addEventListener("click", function(){
//     result.innerHTML = new Date();
// });

var button = document.querySelector("button");
var theimage = document.getElementById("image");
var cuteText = document.getElementById("happyText");

button.addEventListener("click", function(){
    theimage.src = "https://static.wikia.nocookie.net/shrek/images/d/dc/DonkeyTransparent.png/revision/latest?cb=20171218193004 ";
    theimage.style.width = "150px";
    cuteText.innerHTML = `He is cute isn't he? :D`;
})