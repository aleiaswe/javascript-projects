// Code your selectRandomEntry function here:

const selectRandomEntry = (arr) => { 
  // get a random number
  // round down 
 return arr[Math.floor(Math.random()*arr.length)]
};

// Code your buildCrewArray function here:

const buildCrewArray = (ids, candidates) => { 
  const crew = [];
  // loop through ids 
  // loop through candidates
  // check id against each candidate 
  // if a match, add to crew array
  for (let i = 0; i < ids.length; i++) { 
    for (let j = 0; j < candidates.length; j++) { 
      if (ids[i] === candidates[j].astronautID) { 
        crew.push(candidates[j]);
      }
    }
  }
  return crew;
};


let idNumbers = [291, 414, 503, 599, 796, 890];

const chosenNumbers = [];

while (chosenNumbers.length < 3) { 
  
  const chosenNumber = selectRandomEntry(idNumbers);
  if (!chosenNumbers.includes(chosenNumbers)) { 
    chosenNumbers.push(chosenNumber)
  }
}
// Here are the candidates and the 'animals' array:
let candidateA = {
  'name':'Gordon Shumway',
  'species':'alf',
  'mass':90,
  'o2Used':function(hrs){return 0.035*hrs},
  'astronautID':414
};
let candidateB = {
  'name':'Lassie',
  'species':'dog',
  'mass':19.1,
  'o2Used':function(hrs){return 0.030*hrs},
  'astronautID':503
};
let candidateC = {
  'name':'Jonsey',
  'species':'cat',
  'mass':3.6,
  'o2Used':function(hrs){return 0.022*hrs},
  'astronautID':796
};
let candidateD = {
  'name':'Paddington',
  'species':'bear',
  'mass':31.8,
  'o2Used':function(hrs){return 0.047*hrs},
  'astronautID':291
};
let candidateE = {
  'name':'Pete',
  'species':'tortoise',
  'mass':417,
  'o2Used':function(hrs){return 0.010*hrs},
  'astronautID':599
};
let candidateF = {
  'name':'Hugs',
  'species':'ball python',
  'mass':2.3,
  'o2Used':function(hrs){return 0.018*hrs},
  'astronautID':890
};

let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];

// Code your template literal and console.log statements:
console.log(selectRandomEntry(idNumbers));
console.log(chosenNumbers);

const spaceAnimals = buildCrewArray(chosenNumbers, animals);
console.log(`${spaceAnimals[0].name},${spaceAnimals[1].name}, and ${spaceAnimals[2].name} are going to space!`);