const country = "India";
const continent = "Asia";
let population = 1450;
let isIsland = false;
const language = "hindi";

console.log(country);
console.log(continent);
console.log(population);
console.log(isIsland);

console.log(population / 2);

population++;
console.log(population);

console.log(population > 6);
console.log(population < 33);

let descripion = `${country} is in ${continent}, and its ${population} million people speak ${language}.`;
decription =
  country +
  " is in " +
  continent +
  ", and its " +
  population +
  " million people speak " +
  language +
  ".";
console.log(descripion);

if (population > 33) {
  let answer = `${country}'s population is above average.`;
  console.log(answer);
} else {
  let otherAnswer = `${country}'s population is ${
    1450 - population
  } million below average.`;
  console.log(otherAnswer);
}

console.log("9" - "5"); //4
console.log("19" - "13" + "17"); //617
console.log("19" - "13" + 17); //23
console.log("123" < 57); //false
console.log(5 + 6 + "4" + 9 - 4 - 2); //1143

/*
const numNeighbours = Number(
  prompt("How many neighbour countries does your country have?")
);


if (numNeighbours === 1) {
  console.log("Only 1 border!");
} else if (numNeighbours > 1) {
  console.log("More than 1 border!");
} else {
  console.log("No borders");
  1;
}*/

if (language === "english" && population < 50 && !isIsland) {
  console.log("You should live in India :)");
} else {
  console.log("India does not meet your criteria :(");
}

switch (language) {
  case "chinese":
  case "mandarin":
    console.log("MOST number of native speakers");
    break;

  case "spanish":
    console.log("2nd place in number of native speakers");
    break;

  case "english":
    console.log("3rd place");
    break;

  case "hindi":
    console.log("Number 4");
    break;

  case "arabic":
    console.log("5th most spoken language");
    break;

  default:
    console.log("What is that?");
}

population > 33
  ? console.log(`${country}'s population is above average.`)
  : console.log(`${country}'s population is below average.`);

//OR
console.log(
  `${country}'s population is ${
    population > 33 ? "above average." : "below average."
  }`
);
