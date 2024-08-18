// Code your orbitCircumference function here:
//Define a function that returns the circumference (C = 2πr) of the orbit. Round the circumference to an integer.
const orbitCircumference = (radius) => { 
 return Math.round(2 * Math.PI * radius);
}
console.log(orbitCircumference(12));

// Code your missionDuration function here:
/*Define the missionDuration function to take three parameters - the number of orbits completed, the orbit radius, 
and the orbital speed. Set the default radius to 2000 km and the default orbital speed to 28000 km/hr. */
/*Calculate how long it will take our animals to complete a certain number of orbits (time = distance/speed).
 Round the answer to 2 decimal places, then return the result. For example, with the default radius and speed, 
 5 orbits will take about 2.24 hours. */

 const missionDuration = (numOrbits, orbRad=2000, orbSpeed=28000) => { 
  const time = (numOrbits * (orbitCircumference(orbRad))) / orbSpeed
  return Math.round(time * 100) / 100;
}

console.log(missionDuration(5));

// Copy/paste your selectRandomEntry function here:
const selectRandomEntry = (arr) => { 
  // get a random number
  // round down 
 return arr[Math.floor(Math.random()*arr.length)]
};

// Code your oxygenExpended function here:
const oxygenExpended = (crewMember) => { 
  //get missionDuration
  //get o2 per hour 
  //round to 3 decimal places
  const duration = missionDuration(3);
  const o2Used = Math.round(crewMember.o2Used(duration) * 1000) /1000;
  return `${crewMember.name} will perform the spacewalk, which will last ${duration} hours and require ${o2Used}kg of oxygen.`
}

// Candidate data & crew array.
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
 
 //let crew = [candidateA,candidateC,candidateE];
 //array above wouldn't be completely random

 
 let walker = selectRandomEntry(animals)
const o2Statement = oxygenExpended(walker);
console.log(o2Statement);