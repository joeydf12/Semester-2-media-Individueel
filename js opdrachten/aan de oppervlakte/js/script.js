
// function

// function Bereken(breedte,lengte){
    
//     
//     let uitkomst = breedte * lengte;
//     return uitkomst;
   

// }

// let opervlakte = Bereken(10,5);
// alert(opervlakte)
// console.log(opervlakte)

//const function
// const Bereken = function(breedte, lengte){
//     let uitkomst = breedte * lengte;
//     return uitkomst;
// }

// let opervlakte = Bereken(4,3)
// alert (opervlakte);
// console.log(opervlakte);


// cirkel berekening
const Bereken = function(straal){
    let uitkomststraal = straal * straal;
    let pie = Math.PI;
    let uitkomstoppervlakte = uitkomststraal * pie;
    return uitkomstoppervlakte;
}

let opervlakte = Bereken (1)
alert (opervlakte);
console.log(opervlakte);