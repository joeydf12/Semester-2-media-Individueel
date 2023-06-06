function myFunction() {
    alert("Hello world")
}

function checkleeftijd() {
    const uitkomst = document.getElementById('invulleeftijd').value;
    const answer = document.getElementById('answer');
    console.log(uitkomst);

    

    if (uitkomst <17) {
        console.log("jij bent nog niet volwassen");
    }
    else if (uitkomst <49){
        console.log("je bent redelijk oud");
    }
    else if (uitkomst <67 ){
        console.log("je moet nog werken");
    }
    else if (uitkomst <92){
        console.log("je bent een beetje oud");
    }
    else {
        console.log("jij bent oud");
    }

    
    switch(Number(uitkomst)) {
        case 13:
            console.log("Hallo jij bent 13");
            break;
        case 17:
            console.log("17 is ook een leeftijd");
            break;
        case 45:
            console.log("40 + 5 is 45")
            break;
        case 101: 
            console.log("Ja, jij bent oud")
            break;
        default:
            console.log("Je bent geen 13, 17, 45 of 101")
            
    }
}



