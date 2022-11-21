// Boolean -- can be either true or false
console.log(5 == 6);
// Checks value only
console.log(5 == 5);
// Checks value AND data type
console.log(5 === "5");

// ============================================================
// if statement


if(5 == 5) {
    console.log("Five is equal to five.");
}

if(5 > 2) {
    console.log("Five is larger than two.");
}

// if else if

var today = "Monday";

if(today === "Friday") {
    console.log("Bingo. Today is Friday.");
} else if(today === "Monday") {
    console.log("Unfortunately, today is Monday.");
} else {
    console.log("Unknown day. Try again later.")
}


var _str = "String";
if(5 === 5 || 5 < 2) {
    console.log("MADE WITH ||: String is not equal to Test.");
}

if(5 === 5 && 5 < 2) {
    console.log("MADE WITH &&: I will run this code.");
}

// Make a variable called height and store a number of your height
// Make a variable called limit and store a number of value: 1.40
// Make an if statement that checks whatever your height is larger or than the limit height and output the following in the console:
// if higher or equal -> You are tall enough to ride the roller coaster.
// if smaller -> You are NOT tall enough to ride the roller coaster. Go home

var height = 1.92;
var limit = 1.40;
if (height >= limit) {
    console.log("You are tall enough to ride the roller coaster.")
} else {
    console.log("You are NOT tall enough to ride the roller coaster. Go home.")
}

// ============================================================================
// Make an Object called Hotel that holds two properties:
// Name: string, RoomNumber: number, HasVacancy: boolean.
// Output in the console (based on the HasVacancy property):
// Room number ROOM NUMBER is free in HOTEL NAME
// Room number ROOM NUMBER is NOT free in HOTEL NAME

var Hotel = {
    Name: "Pamporovo",
    RoomNumber: 10,
    HasVacancy: true
};

if(Hotel.HasVacancy == true) {
    console.log("Room number " + Hotel.RoomNumber + " is free in " + Hotel.Name);
} else {
    console.log("Room number " + Hotel.RoomNumber + " is NOT free in " + Hotel.Name);
};

// ============================================================================

// Switch

// var _today = prompt("What day is today?");

// switch (_today) {
//     case "Monday" :
//         console.log("Happy Monday!");
//         document.write("Happy Monday!");
//     break;
//     case "Tuesday" :
//         console.log("Happy Tuesday!");
//         document.write("Happy Tuesday!");
//     break;
//     case "Wednesday" :
//         console.log("Happy Wednesday!");
//         document.write("Happy Wednesday!");
//     break;
//     case "Thursday" :
//         console.log("Happy Thursday!");
//         document.write("Happy Thursday!");
//     break;
//     case "Friday" :
//         console.log("Happy Friday!");
//         document.write("Happy Friday!");
//     break;
//     case "Saturday" :
//         console.log("Happy Saturday!");
//         document.write("Happy Saturday!");
//     break;
//     case "Sunday" :
//         console.log("Happy Sunday!");
//         document.write("Happy Sunday!");
//     break;
//     default: console.log("Check your spelling please, because " + _today + " definitely is not a day.");
//     document.write("Check your spelling please, because " + _today + " definitely is not a day.");
// };


// var a = 2;
// var b = 4;

// if (a > b) {
//     console.log(a + " is higher than " + b);
// }
// else if (a < b) {
//     console.log(b + " is higher than " + a);
// }
// else {
//     console.log(a + " and " + b + " are equal.");
// }



// Grade exercise

// 0 - 20 = 1
// 21 - 40 = 2
// 41 - 60 = 3
// 61 - 80 = 4
// 81 - 100 = 5

var grade = parseInt(prompt("Vnesi gi bodovite: "));
if (grade >= 0 && grade <= 20) {
    console.log("Your grade is 1: Nedovolen");
}
else if (grade >= 21 && grade <= 40) {
    console.log("Your grade is 2: Dovolen");
}
else if (grade >= 41 && grade <= 60) {
    console.log("Your grade is 3: Dobar");
}
else if (grade >= 61 && grade <= 80) {
    console.log("Your grade is 4: Mnogu dobar");
}
else if (grade >= 81 && grade <= 100) {
    console.log("Your grade is 5: Odlicen");
}
else {
    alert("Vnesi gi bodovite povtorno.");
}



