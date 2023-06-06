window.addEventListener("load", function(){

   let hotitems = document.getElementById("hotitems");
   hotitems.style.background = "yellow";
   

   let list = document.getElementsByClassName("item");
   list[0].style.background = "red";
   console.log(list)

    let extra = document.getElementById("extra");
    extra.style.background = "grey";
    

    let test = document.getElementsByClassName("test");
    test[2].style.background = "brown";
});
