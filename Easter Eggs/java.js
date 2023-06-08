//EASTER EGG 1

function checkzoekbalk() {
  //als in zoekbalk redbull theme staat wordt functie uitgevoerd. 
  let zoekbalkuitkomst = document.getElementById("zoekbalk").value;

  if (zoekbalkuitkomst == "redbull theme") {
    redbulltheme();
    console.log("het werkt");
  }


  if (zoekbalkuitkomst == "terug") {
    location.reload();
  }
}



function redbulltheme() {
  let navbarboven = document.getElementsByClassName("nav1")[0];
  let navbaronder = document.getElementsByClassName("nav3")[0];
  let navbarmidden = document.getElementsByClassName("nav2")[0];
  let helepagina = document.getElementById("maincontainer");

  let teamsbutton = document.getElementsByClassName("teams")[0];
  let coureursbutton = document.getElementsByClassName("coureurs")[0];
  let fotologo = document.getElementById("fotonav1");
  let fotonav2 = document.getElementById("fotonav2");
  let footer = document.getElementsByClassName("footer")[0];
  let navtekst = document.getElementById("fotonav3");


  navbarboven.style.backgroundColor = "#23326A";
  navbaronder.style.backgroundColor = "#FABB23";
  navbarmidden.style.backgroundColor = "#23326A";
  helepagina.style.backgroundColor = "#23326A";
  fotologo.src = "https://i512203.hera.fhict.nl/redbullf1.png";
  fotologo.style.height = "10vh"
  fotonav2.src = "images/redbulllogo3.png";
  teamsbutton.style.backgroundColor = "#ED1E36";
  coureursbutton.style.backgroundColor = "#ED1E36";
  footer.style.backgroundColor = "#FABB23";
  let teamsfoto = document.getElementById("teamsfoto");
  teamsfoto.src = "https://i512203.hera.fhict.nl/afbeeldingteams1.png";
  teamsfoto.style.height = "100%"
  teamsfoto.style.border = "2px solid white"
  let coureursfoto = document.getElementById("coureursfoto");
  coureursfoto.src = "https://i512203.hera.fhict.nl/afbeeldingcoureurs1.png";
  coureursfoto.style.height = "100%";
  coureursfoto.style.border = "2px solid white";
  let footerfoto = document.getElementById("footerfoto");
  footerfoto.src = "https://i512203.hera.fhict.nl/footertheme.png";
  footerfoto.style.height = "100%";
  footerfoto.style.width = "100%";
  navtekst.style.display = "none";


  //haalt alle blok1 op van de pagina en veranderd deze naar een witte kleur.
  let blok1 = document.getElementsByClassName('rechts');
  for (var i = 0; i < blok1.length; i++) {
    blok1[i].style.color = "white"
  }

  //haalt alle blok2 op van de pagina en veranderd deze naar een witte kleur.
  let blok2 = document.getElementsByClassName('textblok');
  for (var i = 0; i < blok2.length; i++) {
    blok2[i].style.color = "white"
  }

  //haalt alle h2 tags op en veranderd deze naar een rode achtergrond.
  let h2 = document.getElementsByTagName('h2');
  for (var i = 0; i < h2.length; i++) {
    h2[i].style.backgroundColor = "#FABB23"
  }

  let h3 = document.getElementsByTagName('h3');
  for (var i = 0; i < h2.length; i++) {
    h3[i].style.backgroundColor = "#ED1E36"
  }
}



let coureursfoto = document.getElementById('coureursfoto');
let teamsfoto = document.getElementById('teamsfoto');

//aanpassen van de foto met knop teams
function changetabelc() {
  let teamsfoto = document.getElementById("teamsfoto");
  let coureursfoto = document.getElementById("coureursfoto")
  if (teamsfoto) {
    teamsfoto.style.display = "none";
    coureursfoto.style.display = "block"
    console.log("Het werkt");
  } else {

  }

}

//aanpassen van de foto met knop teams
function changetabelt() {
  let coureursfoto = document.getElementById("coureursfoto");
  let teamsfoto = document.getElementById("teamsfoto")
  if (coureursfoto) {
    coureursfoto.style.display = "none";
    teamsfoto.style.display = "block";
  } else {

  }
}

//EASTER EGG 2

function dartbord() {
  //veranderen van het logo naar een dartbord.
  var redbullimage2 = document.getElementById("fotonav1");
  redbullimage2.style.height = "30vh"
  redbullimage2.src = "https://i512203.hera.fhict.nl/dartlogo.png";
  console.log("het werkt")


}

document.addEventListener("DOMContentLoaded", function (event) {
  // zorgt ervoor dat als je op enter klikt de button wordt geactiveerd naast het zoekveld.
  let inputveld = document.getElementById("zoekbalk");
  let buttonderzoek = document.getElementById("zoek");

  inputveld.addEventListener('keydown', function (event) {
    if (event.key == 'Enter') {
      event.preventDefault();
      buttonderzoek.click();
    }
  });

  buttonderzoek.addEventListener('click', function () {
    console.log('De knop is geklikt!');
  });
})

function addDartFunction() {
  //elementen

  // document.addEventListener("DOMContentLoaded", function (event) {
  // bovenstaande code is code waar ik op vast liep
  const gifid = document.getElementById("gifid");
  // de start positie van waar de animatie begint.
  startx = 1000
  starty = 750
  document.addEventListener("click", function (event) {

    //de positie waar met de muis wordt geklikt, gepositioneerd op het puntje van de pijl.
    let x = event.pageX;
    let y = event.pageY;
    let juisty = y - 10;
    let juistx = x - 27;

    //toevoeging dat getallen worden gezien als pixel
    muispositiex = juistx + "px"
    muispositiey = juisty + "px"
    startpositiex = startx + "px"
    startpositiey = starty + "px"
    gifid.style.backgroundImage = "url(images/dartpijl3.png)";
    gifid.style.transition = "top 2s, left 2s";

    //start van animatie op startpostiie
    gifid.style.left = startpositiex;
    gifid.style.top = startpositiey;

    setTimeout(function(){
      gifid.style.top = muispositiey;
      gifid.style.left = muispositiex;
    }, 1000);

    console.log("het werkt333")
    let target = event.target;
    setTimeout(Afterdart(target), 5000);
    
  });

  function Afterdart(target) {
    //hier kijkt hij naar wat het target is. 
    console.log(target)

    let raakgegooid2 = document.getElementById("fotonav1");
    // als het target waarop geklikt wordt hetzelfde is als fotonav1 gooit hij raak anders gooit hij mis.
    if(target == raakgegooid2)
    {
      console.log("hij gooit raak");
        setTimeout(function() {
          alert("Raak!");
          location.reload();
        }, 4000); // 3000 milliseconden = 4 seconden
    }

    else {
      console.log("hij gooit mis")
      setTimeout(function() {
        alert("Mis!");
        location.reload();
      }, 4000); // 4000 milliseconden = 4 seconden
    }
  }
}

let dartpatroon = ['i', 'k', 'w', 'i', 'l', 'd', 'a', 'r', 't', 'e', 'n'];
let huidige = 0;
let keyhandler = function (event) {
  // als de key er niet in zit of het is niet zoals de huidige dan wordt het gereset naar 0;
  if (dartpatroon.indexOf(event.key) < 0 || event.key !== dartpatroon[huidige]) {
    huidige = 0;
    return;
  }

  // deze houdt bij hoevaak het patroon wordt gedaan
  huidige++;

  // als het dartpatroon is uitgevoerd dan voert hij functie redbull uit.
  if (dartpatroon.length === huidige) {
    huidige = 0;
    console.log('You found it!');
    dartbord();
    addDartFunction();
  }

};
