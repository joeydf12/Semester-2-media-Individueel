function CreateRandomNumber(){
    let max = parseInt(document.getElementById("invulmax").value);
    let min = parseInt(document.getElementById("invulmin").value);
    
    console.log(min);
    // voor feedback, minimale getal werkt niet
    //document.getElementById("answer").innerHTML = Math.floor(((Math.random()*max+1)+ min) + 1);

    // na feedback
    document.getElementById("answer").innerHTML = min+Math.round( Math.random()*(max-min));
}

