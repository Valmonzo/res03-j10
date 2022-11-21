let formulaire1 = document.getElementById("form1");
let formulaire2 = document.getElementById("form2");
let formulaire3 = document.getElementById("form3");

formulaire1.addEventListener("click", function(){
    formulaire1.style.opacity = 1;
    formulaire2.style.opacity = 0.35;
    formulaire3.style.opacity = 0.35;

})

formulaire2.addEventListener("click", function(){
    formulaire2.style.opacity = 1;
    formulaire1.style.opacity = 0.35;
    formulaire3.style.opacity = 0.35;

})

formulaire3.addEventListener("click", function(){
    formulaire3.style.opacity = 1;
    formulaire1.style.opacity = 0.35;
    formulaire2.style.opacity = 0.35;

})

