console.log("hello");

var favAnimal = {
    name: "Mary",
    animal: "dog"
};

console.log("favAnimal", favAnimal.animal);
console.log("favAnimal", favAnimal["animal"]);

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

console.log("instructorPets", instructorPets);

// div wtih id="pet-names"
// loop through instructorPets and print petName as h1 tag to that div

var animalNames = document.getElementById("animal-name-holder");

for (var i=0; i<instructorPets.length; i++) {
    animalNames.innerHTML += "<h1>" + instructorPets[i].petName + "</h1>";
}

console.log("animal names", animalNames);
