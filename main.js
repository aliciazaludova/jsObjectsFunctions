console.log("testing 123");

var favAnimal = {
    name: "zoe",
    animal: "cat"
};

console.log("favAnimal", favAnimal.animal);
console.log("favAnimal", favAnimal["animal"]);

var instructorPets = [
    {
        instructorName: "Zoe",
        petName: "Biff",
        animalType: "evil cat",
        isFavorite: false
    },
    {
        instructorName: "Zoe",
        petName: "Whiskey",
        animalType: "cat",
        isFavorite: true
    },
    {
        instructorName: "Callan",
        petName: "Seymour",
        animalType: "one-eyed dog",
        isFavorite: false
    },
    {
        instructorName: "Callan",
        petName: "Wiley",
        animalType: "destructive dog",
        isFavorite: false
    }
];
console.log("instructorpets,", instructorPets);

// div w id="pet-names"
// loop through instructorPets and print petName as h1 tag to that div
var petDiv = document.getElementById('pet-names');
console.log(petDiv);
for (var i = 0; i < instructorPets.length; i++) {
    console.log("animal", instructorPets[i].petName);
    petDiv.innerHTML += "<h2>" + instructorPets[i].petName + "</h2>";

}
