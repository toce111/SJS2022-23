// var, let, const
// if(5 === 5) {
//     var MyName = "Antonio";
// }

// console.log(MyName);

// if(true) {
//     let MyLastName = "Nestorovski";
//     const e_mail = "nestorovantonio@icloud.com";    
// }

// // console.log(MyLastName);
// // console.log(e_mail);

// var movie = "Strangers on a train";


// ===============================================================================

// function SayHello() {
//     return "Hello World!";
// }
// console.log(SayHello());

// var CalculateNumbers = function() {
//     return 10 + 10;
// }
// console.log(CalculateNumbers());


// var PuppyCalculator = function () {
//     dogAge = parseInt(prompt("Enter your dog age: "));
//     return `My dog is ${dogAge*7} in human years.`;
// }

// console.log(PuppyCalculator());

// function SayHello(name) {
//     return `Hello World, my name is ${name}.`;
// }


// console.log(SayHello("Antonio"));
// console.log(SayHello("Nikol4e"));
// console.log(SayHello("Vlat4e"));
// console.log(SayHello("Mishel4e TaZ"));
// console.log(SayHello("Traj4e"));
// console.log(SayHello("Martin4e"));

// function tellFortune (jobTitle, geoLocation, partnerName, children) {
//     return `You will be a ${jobTitle} in ${geoLocation}, and married to ${partnerName} with ${children} kids.`
// }

// console.log(tellFortune("Javascript Developer", "Skopje", "Ivonka", 2));


// setTimeout(function() {
//     console.log("I will execute in five seconds.");
// }, 5000);

// setTimeout(() => {
//     console.log("I will execute in two seconds.");
// }, 2000);

// var SayHello = () => {
//     return "Hello World!";
// }

// console.log(SayHello());

var movies = [
    {title: "Mildred Pierce", year: 1945},
    {title: "Odd Man Out", year: 1957},
    {title: "Kiss me Deadly", year: 1960},
    {title: "Psycho", year: 1958}
];

var filteredMovies = movies.filter(movie => {               // ---------- samo za nizi se koristi filter. -------- /
    return movie.year === 1960;
});

console.log(filteredMovies);

