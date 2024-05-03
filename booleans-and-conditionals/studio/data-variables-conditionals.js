// Initialize Variables below
let date = "Monday 2019-03-18"; 
let time = "10:05:34 AM"; 
let astronautCount = 7; 
let astronautStatus = "ready"; 
let averageAstronautMassKg = 80.7; 
let crewMassKg = astronautCount * averageAstronautMassKg
let fuelMassKg = 760000
let shuttleMassKg = 74842.31
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg
let maximumMassLimit = 850000; 
let fuelTempCelsius = -225
let minimumFuelTemp = -300
let maximumFuelTemp = -150
let fuelLevel = "100%"; 
let weatherStatus = "clear"; 
let preparedForLiftOff = true; 

// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if (astronautCount <= 7) { 
    console.log("We have enough astronauts.")
} else if (astronautCount > 7) { 
    console.log("We have too many astronauts.")
} 

// add logic below to verify all astronauts are ready
if (astronautStatus === 'ready') { 
    console.log("Let's continue on!")
} else {
   console.log("We are not ready, let's finish getting ready before moving forward.");
}

// add logic below to verify the total mass does not exceed the maximum limit of 850000
if (totalMassKg <= maximumMassLimit) { 
    console.log("We are within the Maximum Mass range."); 
}  else if (totalMassKg > maximumMassLimit) { 
    console.log("We are over limit. We cannot go on!"); 
}
// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
if (fuelTempCelsius < -300 || fuelTempCelsius > -150) { 
    console.log("We are outside the range.");
} else if (fuelTempCelsius >= -300 && fuelTempCelsius <= -150) { 
    console.log("We are within the Fuel Temp range."); 
}
// add logic below to verify the fuel level is at 100%
if (fuelLevel === "100%") { 
    console.log("We have a full tank for liftoff.");
} else { 
    console.log("We should probably fill up before taking off."); 
}
// add logic below to verify the weather status is clear
if (weatherStatus === 'clear') { 
    console.log("Let's take off!");
}
console.log("-------------------------------------------------");
// Verify shuttle launch can proceed based on above conditions */
console.log("All systems are a go! Initiating space shuttle launch sequence.");
console.log("-------------------------------------------------");
console.log("Date: " + date);
console.log("Time: " + time); 
console.log("Astronaut Count: "); 
console.log("Crew Mass: " + crewMassKg)
console.log("Fuel Mass: " + fuelMassKg); 
console.log("Shuttle Mass: " + shuttleMassKg); 
console.log("Total Mass: " + totalMassKg); 
console.log("Fuel Temperature: " + fuelTempCelsius + "°C");
console.log("Weather Status: " + weatherStatus); 
console.log("-------------------------------------------------");
console.log("Have a safe trip astronauts!");