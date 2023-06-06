function myFunction() {
    alert("Hello world")
}

function checkheks(){
    let heks = document.getElementById("invulheks").value;
    let zombie = document.getElementById("invulzombie").value;

    if (heks == 'weg' & zombie == 'weg'){
        alert("alles veilig")
    }
    
    if (heks == 'weg' & zombie == 'in zicht'){
        alert("brrrrrrr")
    }
    if (heks == 'in de lucht' & zombie == 'weg'){
        alert("hihihihihi")
    }
    if (zombie == 'voor me' & heks == 'weg'){
        alert("auw mijn brein!")
    }
    if (heks == 'doet een spreuk'){
        alert("OOh nee ik word een kikker")
    }
    if (heks == 'ze komt me halen'){
        alert("Shit rennen")
    }
}


