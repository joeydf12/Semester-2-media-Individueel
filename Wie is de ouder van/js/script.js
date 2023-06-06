window.addEventListener("load", function(){
// const kinderenkeesmarie = this.document.querySelector("#kinderen-kees-marie");
// const ouders =this.document.querySelector("#ouders-jorian");
// const kinderenjosannie = this.document.querySelector("#jos-annie")

//    let KeesMarie = ["Daan", "Anouk", "Kevin"];
//    let Jorian =["Henk en Truus"];
//    let josannie = ["jasper","celeste", "luc"];

//    console.log(KeesMarie);
//    console.log(josannie)

//    kinderenkeesmarie.innerHTML = KeesMarie;
//    ouders.innerHTML =Jorian;
//    kinderenjosannie.innerHTML[0]= "ik ben een kind";
//    kinderenjosannie.innerHTML[1]= "ik ben een kind";
//    kinderenjosannie.innerHTML[2]= "ik ben een kind";
// });

   const KeesMarie = this.document.getElementById("kees-marie");
   const kinderenKeesMarieDiv = this.document.getElementById("kinderen-kees-marie");
   const kinderenkeesmarie = KeesMarie.children;
   for (let i = 0; i < kinderenkeesmarie.length; i++){
      kinderenKeesMarie[i].textContent = "ik ben een kind";
      kinderenKeesMarieDiv.appendChild(kinderenkeesmarie[i]);
   }
}
