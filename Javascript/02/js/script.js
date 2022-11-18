// /// Objects

// var car = new Object();

// car.model = "Fiat Lancia";
// car.year = 1994;
// car.color = "Grey";

// // Accessing object properties
// console.log(car);
// console.log(car.model);
// console.log(car.year);

// // console.log(car['model']);

// var user = {
//     firstName: "Antonio",
//     lastName: "Nestorovski",
//     favoriteNumber: 17
// };

// console.log(user);



// // Create an object called Course that will hold: 
// // CourseName, 
// // CourseSpan,

// // Create an object called Course teacher, that will hold:
// // TeacherName,
// // Teacher E-mail,

// // Then output in the console:

// // I'm currently studying COURSE NAME for COURSE SPAN days, and my teacher is TEACHER NAME. You can reach him at TEACHER EMAIL


// var course = {
//     CourseName: "JavaScript Web Developer",
//     CourseSpan: 180,
// }
// console.log(course);

// var courseTeacher = {
//     TeacherName: "Mario",
//     TeacherMail: "mariopetkoski@semos.com",
// }
// console.log(courseTeacher);

// console.log("I am currently studying " + course.CourseName + " for " + course.CourseSpan + " days, and my teacher is " + courseTeacher.TeacherName + ". You can reach him at " + courseTeacher.TeacherMail + ".");

// // var userRegister = {
// //     username: prompt("Enter your username: "),
// //     Name: prompt("Enter your name: "),
// //     LastName: prompt("Enter your last name: "),
// //     userMail: prompt("Enter your mail: ")
// // }

// // console.log(userRegister)

// var Movie = {
//     title: "His Girl Friday",
//     releaseDate: 1940,
//     genre: "Comedy"
// }

// var { title: movieTitle, genre } = Movie;

// console.log(movieTitle);
// console.log(Movie);

// // console.log(movie.title + " is released on " + movie.releaseDate + " and is classified as " + movie.genre + ".")

// // Create an object called actor, that will hold ACTOR NAME, ACTOR LAST NAME, OSCAR WINS
// // Create an object called movie, taht will hold MOVIE NAME, RELEASE DATE

// // Output:

// // "ACTOR FIRST NAME ACTOR LAST NAME, stars in the movie MOVIE NAME released in RELEASE DATE, and the movie went on to win OSCAR WINS."

// var actor = {
    //     actorName: "Sylvester",
    //     actorLastName: "Stallone",
    //     oscarWins: 3
    // }
    
    // var movie = {
        //     movieName: "Rocky",
        //     ReleaseDate: 1976
        // }
        
        // var {actorName, actorLastName, oscarWins} = actor
// var {movieName, ReleaseDate} = movie

// console.log(actorName + " " + actorLastName + ", stars in the movie " + movieName + " released in " + ReleaseDate + ", and the movie went on to win " + oscarWins + " oscars.")


/////// ***** //////////

// Arrays

var colors = [
    "red", "green", "blue"
];

var new_colors = [
    "cyan", "magenta", "yellow", "karbon"
];

var combinedArray = colors.concat(new_colors);
// var combinedArray = [...colors, ...new_colors]
console.log(combinedArray);
// console.log("Length of combined colors is " + combinedArray.length);


// console.log(colors[0]);
// console.log(colors[1]);
// console.log(colors[2]);

// console.log(colors.length);

// var [ firstColor, , tretaBoja ] = colors;

// console.log(firstColor);
// console.log(tretaBoja);

// add items to array at last position
new_colors.push("brown");
// add items to array at first position
new_colors.unshift("black");
// remove last item of array
var last_item = colors.pop();
// remove specific elements (with the help of index number)
var mutated_array = new_colors.slice(1, 4);

new_colors.splice(2, 1, "Pink");

console.log(colors);
console.log(new_colors);
console.log(last_item);
console.log(mutated_array);