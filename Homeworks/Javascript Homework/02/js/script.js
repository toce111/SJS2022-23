// Objects

var recipe = {
    title: "Capricciosa",
    servings: 2,
    ingredients: ["flour", "ketchup", "mushrooms", "ham", "cheese"]
}
console.log(recipe.title);
console.log("Serves: " + recipe.servings);
console.log("Ingredients: ")
console.log(recipe.ingredients[0]);
console.log(recipe.ingredients[1]);
console.log(recipe.ingredients[2]);
console.log(recipe.ingredients[3]);
console.log(recipe.ingredients[4]);


// Arrays

var programmingLanguages = ["C", "C++", "Python", "Delphi", "Java", "JavaScript", "Snap!", "Ada"];

console.log(programmingLanguages);
console.log("Length of the array is " + programmingLanguages.length + " languages.");

var removeLast = programmingLanguages.pop();
console.log(programmingLanguages);

var removeNadd = programmingLanguages.splice(2, 1, "MySQL");
console.log(programmingLanguages);