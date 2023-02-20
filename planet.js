// below code is a work in progress for optimization

const sun = docuemnt.getElementById("sunId");
const firstPlanet = document.getElementById("first-planet");
const secondPlanet = document.getElementById("second-planet");
const thirdPlanet = document.getElementById("third-planet");

sun.addEventListener("click", shoutSun);
firstPlanet.addEventListener("click", shoutPlanet1);
secondPlanet.addEventListener("click", shoutPlanet2);
thirdPlanet.addEventListener("click", shoutPlanet3);

function shoutSun(){

    console.log("This is the Sun!")

}
function shoutPlanet1(){

    alert("This is Planet 1")

}
function shoutPlanet2(){

    alert("This is Planet 2")

}
function shoutPlanet3(){

    alert("This is Planet 3")

}