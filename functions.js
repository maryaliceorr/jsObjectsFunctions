console.log("Hello");

//function expressions

var a = function () {
    console.log("a", 3);
}

//function declarations

function b () {
    console.log("b",3)
}

var num = 3;

function numPrinter(monkeyButt) {
    //monkeyButt = num =3
    console.log("my number: ", monkeyButt);
}

numPrinter(num);
numPrinter(4);
numPrinter(6);
numPrinter("turtle");

function cat() {
    return "love them"
}

// cat();
// this won't work you have to create a variable

var message = cat ();

console.log("message", message);

var instructorPets = [{
    instructorName: "Zoe",
    petName: "Biff",
    animalType: "evil cat",
    isFavorite: false
},
{
    instructorName: "Callan",
    petName: "Seymour",
    animalType: "one eyed dog",
    isFavorite: true
},
{
    instructorName: "Lauren",
    petName: "Frankie",
    animalType: "sweet dog",
    isFavorite: true
},
{
    instructorName: "Callan",
    petName: "Wiley",
    animalType: "destructive dog",
    isFavorite: false

}];

// My try at this: 

// var stringToPrint = instructorPets.petName;
// var petDiv = document.getElementById("pet-names");

// function domStringMaker (animalArray) {
//     for (var i=0; i<instructorPets; i++) {
//         function printToDom(stringToPrint, divId) {
//             petDiv.innerHTML += "<h3>" + instructorPets + "</h3>"; }
//     }
// }

// function printToDom(stringToPrint, divId) {
//     div.innerHTML = instructorPets;
// }

// domStringMaker(instructorPets); 




//Correct answer:

// function domStringMaker (animalArray) {
// // take pet names and create a dom string
// // call printToDom function
// for (var i=0; i<animalArray.length; i++) {
//     var animalString = "<h1>" + animalArray[i].petName + "</h1>";
//     var animalString2 = "<h3>" + "Owner: " + animalArray[i].instructorName + "</h3>";
//     var animalString3 = "<h3>" + "Type: " + animalArray[i].animalType + "</h3>";
//     var backgroundColor = "<body>" + "</body>"
//     printToDom(animalString, "pet-names");
//     printToDom(animalString2, "owner-names");
//     printToDom(animalString3, "type-names");
//     printToDom(backgroundColor, "body-color")
//     //console.log("animalString", animalString)
//     }
// }

// function printToDom(stringToPrint, divId) {
// // take string and innerHTML to the divID
// var myDiv = document.getElementById(divId);
// console.log("myDiv", myDiv);
// myDiv.innerHTML += stringToPrint;
// }
// domStringMaker(instructorPets); 

// name

// owner: 
// type: 
// if true: green
//if false: red


function domStringMaker (animalArray) {
    // take pet names and create a dom string
    // call printToDom function
    console.log(animalArray.length);
    for (var i=0; i<animalArray.length; i++) {
        var animalString = "";
        if (animalArray[i].isFavorite) {
            animalString += '<div class="pet isFavorite">';
        } else {
            animalString += '<div class="pet isNotFavorite">';
        }
        animalString += '<div class="pet">';
        animalString +=     "<h1>" + animalArray[i].petName + "</h1>";
        animalString +=     "<h3>Owner: " + animalArray[i].instructorName + "</h3>";
        animalString +=     "<h3>Type: " + animalArray[i].animalType + "</h3>";
        animalString += '</div>';
        printToDom(animalString, "pet-names");
        console.log("animalString", animalString)
        }
    }
    
    function printToDom(stringToPrint, divId) {
    // take string and innerHTML to the divID
    var myDiv = document.getElementById(divId);
    console.log("myDiv", myDiv);
    myDiv.innerHTML += stringToPrint;
    }
    domStringMaker(instructorPets); 
