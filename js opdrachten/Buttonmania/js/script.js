function buttonmania() {


    for (let i = 0; i < 10; i++) {

        let button = document.createElement('button')
        button.id = 'content';
        button.style.backgroundColor = 'green';
        button.style.width = '100px';
        button.style.height = '100px';
        // button.addEventListener("click", alert())
        document.querySelector(".container").appendChild(button);
        // button[i].addEventListener('click', alert, false);

        document.addEventListener("click", gaalert);
    }

}

// const content = document.getElementById("content");  
// content.addEventListener("click", alert());

function gaalert() {
    alert("Maina");
    console.log("het werkt")
}
