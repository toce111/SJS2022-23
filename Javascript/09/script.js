// function ClickEvent () {
//     alert("Hello World")
// }


// function HandleInputFieldValue(event) {
//     console.log(event.target.value);
//     var inputValue = event.target.value;
// }

// var todos = [
//     'Walk the dog',
//     'Renew drivers license',
//     'Read a book'
// ];

// var inputFieldValue = "";

// function TodoValue (event) {
//     inputFieldValue = event.target.value;
// }

// function SaveToDo() {
//     todos.push(inputFieldValue);
//     console.log(todos);
// }

// Classes

// class Movie {
//     constructor(name, year) {
//         this.name = name;
//         this.year = year;
//     }

//     get oscarWins() {
//         return this.ReturnOscarWins();
//     }

//     ReturnOscarWins() {
//         return `${this.name} has won 2 Oscars. It was released in ${this.year}.`;
//     }

// }

// const myMovie = new Movie("Pulp Fiction", 1994);

// console.log(myMovie.oscarWins);




class Calculator {
    constructor(firstNumber, secondNumber) {
        this.firstNumber = firstNumber;
        this.secondNumber = secondNumber;
    }

    Calculated() {
        return `${this.firstNumber} + ${this.secondNumber} is equal to ${this.firstNumber + this.secondNumber}.`
    }

    get Calculate() {
        return this.Calculated();
    }
}

const result = new Calculator(15, 22);
console.log(result.Calculate);



class SecondCalculator {
    constructor(theRealFirst, theRealSecond) {
        this.theRealFirst = theRealFirst;
        this.theRealSecond = theRealSecond;
    }

    reallyCalculated() {
        return `${this.theRealFirst} + ${this.theRealSecond} is really EQUAL to ${this.theRealFirst + this.theRealSecond}.`
    }

    get reallyCalculate() {
        return this.reallyCalculated();
    }
}

const therealResult = new SecondCalculator(23, 15);
console.log(therealResult.reallyCalculate);