
function Checknames(){
    let uitkomst1 = document.getElementById('naam1').value;
    let uitkomst2 = document.getElementById('naam2').value;
    
    console.table(uitkomst1)

    if (uitkomst1 == 'frans'){
        console.log("dit is frans")
    }
    else {
        console.log("dit is niet frans")
    }

    if (uitkomst2 == "kees"){
        console.log("dit is kees")
    }
    else {
        console.log("dit is niet kees")
    }
    if (uitkomst1 == "frans" & uitkomst2 == "kees"){
        console.log("gelukkig zijn buurman en buurman er")
    }
    else {
        console.log("wat jammer dat er geen buurman en buurman zijn")
    }
}


