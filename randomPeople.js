const fs = require('fs');

const genders = ['M', 'F'];

const maleNames = ['Marek', 'Jarek', 'Adam', 'Michał', 'Mateusz', 'Karol', 'Bartłomiej', 'Bonifacy', 'Antoni', 'Franciszek', 'Anzelm', 'Adrian', 'Albert', 'Jakub', 'Jan', 'Szymon', 'Kacper', 'Piotr', 'Nikodem', 'Wojciech', 'Mikołaj', 'Filip', 'Tymon', 'Oliwier', 'Oskar', 'Gabriel', 'Hubert', 'Eryk', 'Daniel', 'Stefan'];

const femaleNames = ['Zuzanna', 'Julia', 'Maja', 'Zofia', 'Hanna', 'Lena', 'Alicja', 'Maria', 'Amelia', 'Oliwia', 'Aleksandra', 'Wiktoria', 'Balbina', 'Hermenegilda', 'Emilia', 'Laura', 'Gabriela', 'Milena', 'Kornelia', 'Marcelina', 'Iga', 'Liliana', 'Łucja', 'Jagoda', 'Eliza', 'Rozalia', 'Dominika', 'Patrycja', 'Urszula', 'Wanda'];

const lastNames = ['Kot', 'Nowak', 'Lipa', 'Sosna', 'Gąsior', 'Kaczor', 'Skrzyp', 'Bąk', 'Wilk', 'Szpak']

const randChoice = (arr) => arr[Math.floor(Math.random()*arr.length)];

const people = [];

let i;
for (i=0; i<20; i++){
    const randomPerson = new Object();
    randomPerson.gender = randChoice(genders);
    randomPerson.firstName = randomPerson.gender === 'M' ? randChoice(maleNames) : randChoice(femaleNames);
    randomPerson.lastName = randChoice(lastNames);
    randomPerson.age = Math.floor(Math.random()*(78-18+1)+18);
    randomPerson.email = `${(randomPerson.firstName).toLowerCase()}.${(randomPerson.lastName).toLowerCase()}@gmail.com`;
    people.push(randomPerson);
}

console.log(people);

var myJSON = JSON.stringify(people);

fs.writeFile('people.json', myJSON, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });


