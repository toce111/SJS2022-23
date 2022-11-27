// Warmup exercise
function exclaim(string) {
    return `${string}!`;
}

var tekst = prompt("Vnesi tekst: ");
console.log(exclaim(tekst)); 
document.write(exclaim(tekst)); // ------ da ispecati na ekranot.


// Second exercise
var books = [
    {title: "Zoki Poki", author: "Olivera Nikolova", price: 400},
    {title: "Grdoto pajche", author: "Hans Christian Andersen", price: 500},
    {title: "Skazni", author: "Brakjata Grim", price: 300},
    {title: "Kasni Porasni", author: "Petre M. Andreeski", price: 400},
    {title: "Pesni", author: "Vasil Kunovski", price: 550}
];

var filteredBooks = books.filter(books =>{
    return books.price <= 400;
});

console.log(filteredBooks);

// Third exercise
function CountMs(String){
    let howMany = 0;
    for(i = 0; i<String.length; i++)
    {
        if(String[i] === "M"){
            howMany++;
        }
    };
    return `Vo sledniot string ${String} bukvata M ja ima ${howMany}.`;
}

console.log(CountMs("JSAUWMFHFKVMSHUWDMMMSGDUYWDNDMDHSUWM"));

// Fourth exercise
function CountCharacters(StrinG, letter){
    let HowMany = 0;
    for(i = 0; i<StrinG.length; i++)
    {
        if(StrinG[i] === letter){
            HowMany++;
        }
    };
    return `Vo sledniot string ${StrinG} bukvata ${letter} ja ima ${HowMany}.`;
}

console.log(CountCharacters("JSAUWMFHFKVMSHUWDMMMSGDUYWDNDMDHSUWM", "W"));

// Fifth exercise