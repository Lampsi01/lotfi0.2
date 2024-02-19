


let menuBtn = document.getElementById("menuBar"); 
 
let collapsedLinks = document.getElementsByClassName("collapsed-links")[0]; 

let width = 760 +"px"
 

 
menuBtn.addEventListener("click" , function(){
    collapsedLinks.classList.toggle("show-collapsed-links") ;
     if(menuBtn.getAttribute("class") === "fa-solid fa-bars"){
        menuBtn.setAttribute( "class",  "fa-solid fa-x")
     }else{
        menuBtn.setAttribute( "class",  "fa-solid fa-bars")
     }
   
    
})

let linksTags =document.querySelectorAll(".collapsed-links li a"); 


for(let i=0 ;  i < linksTags.length ; i++){

    linksTags[i].addEventListener("click", function(){
        collapsedLinks.classList.remove("show-collapsed-links");


        if(menuBtn.getAttribute("class") === "fa-solid fa-bars"){
            menuBtn.setAttribute( "class",  "fa-solid fa-x")
         }else{
            menuBtn.setAttribute( "class",  "fa-solid fa-bars")
         }
    })

    
}

let arrowUp = document.getElementById("arrowUp");
 

window.addEventListener('scroll', function() {
   // Calculate the height of the viewport
   var viewportHeight = window.innerHeight; 

   // Calculate the current scroll position
   var scrollTop = window.pageYOffset  

   // Calculate the scroll percentage
   var scrollPercentage = (scrollTop / (document.documentElement.scrollHeight - viewportHeight)) * 100;

   // Check if the scroll percentage is greater than or equal to 50%
   if (scrollPercentage >= 30) {
       // Show your special button
       arrowUp.style.display = 'block';
   } else {
       // Hide your special button
       arrowUp.style.display = 'none';
   }
});
arrowUp.addEventListener("click" , function(){
   window.scrollTo({
      top: 0,
      behavior: 'smooth' // Optional: smooth scrolling
  });
})


 