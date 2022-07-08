// Write your JavaScript code here!

const { pickPlanet, addDestinationInfo } = require("./scriptHelper");

window.addEventListener("load", function() {
   
    
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        //VARIABLES
        const pilotName = document.querySelector('input[name=pilotName]');
        const copilotName = document.querySelector('input[name=copilotName]');
        const fuelLevel = document.querySelector('input[name=fuelLevel');
        const cargoMass = document.querySelector('input[name=cargoMass');
        const list = document.getElementById('faultyItems');

        //Add alert to notify the user that all fields are required
             if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
            alert("All fields are required.");
            event.preventDefault();
            }
    
        //Use formSubmission function to validate input and update shuttle requirements
             formSubmission(document, list, pilotName, copilotName, fuelLevel, cargoMass);
  
        
    })

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet from the list of planets and add that information to your destination.
       const planet = pickPlanet(listedPlanets);
       const name = planet.name;
       const diameter = planet.diameter;
       const star = planet.star;
       const distance = planet.distance;
       const imageUrl = planet.image;
       const moons = planet.moons;
       addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl);
   })
   
});