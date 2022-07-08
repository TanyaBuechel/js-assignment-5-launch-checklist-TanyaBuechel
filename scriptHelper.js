// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
   if (testInput.value === "") {
    return("Empty");
   }
   if (isNaN(testInput.value) === true) {
    return("Not a Number");
   }
   if (isNaN(testInput.value) === false) {
    return("Is a Number");
   }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
//Use values in strings to update the shuttle requirements

   //Pilot and Co-pilot Update
    document.getElementById('pilotStatus').innerHTML = `Pilot ${pilot} is ready for launch`;
    document.getElementById('copilotStatus').innerHTML = `Co-pilot ${copilot} is ready for launch`;

   //Fuel Level Update
    if (fuelLevel < 10000) {
        document.getElementByClassName('faultyItems').styles.visibility = "visible";
        document.getElementById('fuelStatus').innerHTML = `Fuel level too low for launch`;
        document.getElementById('launchStatus').innerHTML = `Shuttle Not Ready for Launch`;
        document.getElementById('launchStatus').styles.color = 'red';
    }

   //Cargo Mass Update
    if (cargoLevel > 10000) {
        document.getElementByClassName('faultyItems').style.visibility = "visible";
        document.getElementById('cargoStatus').innerHTML = `Cargo mass is too high for launch`;
        document.getElementById('launchStatus').innerHTML = `Shuttle Not Ready for Launch`;
        document.getElementById('launchStatus').styles.color = 'red';
    }

   //Ready for Launch
    if (fuelLevel >= 10000 && cargoLevel <= 10000) {
        document.getElementById('launchStatus').styles.color = 'green';
        document.getElementById('launchStatus').innerHTML = `Shuttle is Ready for Launch!`;
    }

    //Going to use the validateInput() to complete this function

}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
