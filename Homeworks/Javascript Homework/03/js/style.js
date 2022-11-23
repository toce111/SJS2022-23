// THE HELLO WORLD EXERCISE (if statement)

var code = (prompt("Enter the language you want to display Hello World: \nes - espanyol \nde - german \nen - english\nmk - macedonian\n "));
if(code == "es") {
    console.log("Hola Mundo!");
    document.write("Hola Mundo!");
} else if(code == "de") {
    console.log("Hallo Welt!");
    document.write("Hallo Welt!");
} else if(code == "en") {
    console.log("Hello World!");
    document.write("Hello World!");
} else if(code == "mk") {
    console.log("Zdravo svetu?!");
    document.write("Zdravo svetu?!");
} else {
    console.log("Check your spelling and try again.");
    document.write("Check your spelling and try again.");
};

// SEASONS (if statement)

var seasons = prompt("Enter any month of the year and i will tell you the season: ")
if (seasons === "september" || seasons === "october" || seasons === "november"){
    console.log("The season is autumn.");
    alert("\nThe season is autumn.\n");
} else if (seasons === "december" || seasons === "january" || seasons === "february"){
    console.log("The season is winter.");
    alert("\nThe season is winter.\n");
} else if (seasons === "march" || seasons === "april" || seasons === "may"){
    console.log("The season is spring.");
    alert("\nThe season is spring.\n");
} else if (seasons === "june" || seasons === "july" || seasons === "august"){
    console.log("The season is summer.");
    alert("\nThe season is summer.\n");
} else {
    console.log("\nPlease check your spelling make sure everything is smaller lowercase and try again.\n");
    alert("\nPlease check your spelling make sure everything is smaller lowercase and try again.\n");
};

// MUSICIANS (switch statement)

var band_members_num = prompt("Enter the number to check what kind of a music group it is:");
switch (band_members_num) {
    case "1":
        console.log("The band is uno.");
        alert("The band is uno.");
        document.write("The band is uno.");
    break;
    case "2":
        console.log("The band is duo.");
        alert("The band is dos.");
        document.write("The band is dos.");
    break;
    case "3":
        console.log("The band is trio.");
        alert("The band is tres.");
        document.write("The band is tres.");
    break;
    case "4":
        console.log("The band is quartet.");
        alert("The band is cuatro.");
        document.write("The band is cuatro.");
    break;
    case "5":
        console.log("The band is quintet.");
        alert("The band is cinco.");
        document.write("The band is cinco.");
    break;
    case "6":
        console.log("The band is sextet.");
        alert("The band is seis.");
        document.write("The band is seis.");
    break;
    case "7":
        console.log("The band is septet.");
        alert("The band is siete.");
        document.write("The band is siete.");
    break;
    case "8":
        console.log("The band is octet.");
        alert("The band is ocho.");
        document.write("The band is ocho.");
    break;
    case "9":
        console.log("The band is nonet.");
        alert("The band is nueve.");
        document.write("The band is nueve.");
    break;
    case "10":
        console.log("The band is decet.");
        alert("The band is diez.");
        document.write("The band is diez.");
    break;
    default: alert("Check your spelling maybe your number is above 10.");
}