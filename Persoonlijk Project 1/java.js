function afbeeldingverdwijn(){
var buttonstats = document.getElementById("buttonstats");
var buttonprofile = document.getElementById("buttonprofile");
var seasonstats = document.querySelector(".seasonstats");
var playersstats = document.querySelector(".playersstats");
var seasonstatsp1 = document.querySelectorAll(".seasonstats p1");
var playersstatsp1 = document.querySelectorAll(".playersstats p1");

buttonstats.addEventListener("click", function(){
    document.getElementById("buttonprofile").style.backgroundColor = "#0061AA"
    document.getElementById("buttonprofile").style.color = "white"
    document.getElementById("buttonstats").style.backgroundColor = "white"
    document.getElementById("buttonstats").style.color ="#0061AA"
    document.getElementById("playersstats").style.display = "flex"
    document.getElementById("playerprofile").style.display = "none"
    window.scrollTo(0, 550);
    window.scrollTo({down: 0, left: 0, behavior: 'smooth' });
    return;
    
});



buttonprofile.addEventListener("click", function(){
    document.getElementById("buttonprofile").style.backgroundColor = "white"
    document.getElementById("buttonprofile").style.color = "#0061AA"
    document.getElementById("buttonstats").style.backgroundColor = "#0061AA"
    document.getElementById("buttonstats").style.color ="white"
    document.getElementById("playersstats").style.display = "none"
    document.getElementById("playerprofile").style.display = "flex"


    window.scrollTo(0, 550);
    return;
   

});
}




function test (){
    console.log ("joey")
}
var hoverhomepage = document.getElementById("hoverhomepage")
var navbar = document.getElementById("header")

function scrolwedstrijd (){
    console.log("scrol werkt");
    document.getElementById("hoverhomepage").style.display = "flex";
    // document.getElementById("header").style.display ="none";
        window.scrollTo(0, 550);
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
}

function gaterug(){
    console.log("ga terug werkt")
    document.getElementById("hoverhomepage").style.display = "none";
    document.getElementById("header").style.display ="flex";
}

  
  