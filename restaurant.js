window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
    // TODO: Complete the function
    document.querySelector("#submit").addEventListener("click", clickHandler);
    document.querySelector("#reset").addEventListener("click", resetFormHandler);
 }

 function resetFormHandler()
 {
    document.getElementById("errorMessage").innerHTML="";
    document.getElementById("name").value="";
    document.getElementById("phone").value="";
    document.getElementById("email").value="";
    document.getElementById("task").value="Catering";
    document.getElementById("additionalinfo").value="";
    document.getElementById("beenHereNo").checked=true;  
    document.getElementById("M").checked=false;  
    document.getElementById("T").checked=false;  
    document.getElementById("W").checked=false;  
    document.getElementById("Th").checked=false;  
    document.getElementById("F").checked=false;  

    
 }

function clickHandler()
{
    let myphone = document.getElementById("phone").value; 
    if(isNaN(myphone) || myphone.length>9 ){

        let myerror= "phone number is not valid.";
        document.getElementById("errorMessage").innerHTML=myerror;
     }
     else{
        document.getElementById("errorMessage").innerHTML="";
     }


}


// carousel  
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
