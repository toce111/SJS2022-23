// JSON -> Javascript Object Notation

// API -> Application Programming Interface

// let person = `{
//     "name": "Antonio Nestorovski",
//     "location": "Aerodrom, Skopje, Macedonia",
//     "age": 19,
//     "hobbies": ["javascript", "film", "photography"],
//     "address": {
//         "street": "Bul. Riste Ristov 1000",
//         "apartment": 68
//     },
//     "has_drivers_license": true
// }`;

// console.log(JSON.parse(person));

// const promise = new Promise((resolve, reject) => {
//     let result = 5;
//     if(2 + 3 === result) {
//         resolve("Promise RESOLVED.");
//     } else {
//         reject("Promise REJECTED.");
//     }
// });

// promise.then(res => {
//     console.log(res);
// }).catch(err => {
//     console.log(err);
// })




// var vacancy = new Promise((resolve, reject) => {
//     let vacancy = true;
//     if(vacancy) {
//         resolve("The room is free.");
//     } else {
//         reject("The room is booked. We are terribly sorry.");
//     }
// });

// vacancy.then(res => {
//     console.log(res);
// }).catch(err => {
//     console.log(err);
// })







// Fetch
fetch("https://www.boredapi.com/api/activity/")
    .then(res => {
        if(res.ok) {
            return res.json();
        }
    }).then(data => {
        console.log(data.activity0);
    })
    .catch(err => {
        console.log(err);
    })