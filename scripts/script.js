function myFunction(){
    document.getElementById('demo').innerHTML = Date();
}
function ventana(){
    window.alert("ah te la creiste")
}

document.getElementById('icon-cad').addEventListener("click", ()=>{
    console.log('click');
    document.getElementsByClassName("cad").style.visibility='visible' ;
    document.getElementsByClassName("web").style.visibility='hidden';
 
});

//PROJECT GALLERY MENU//



document.getElementById("gallery-web").addEventListener("click", () =>{
  document.querySelector(".img-cont").style.display = "flex";
  document.querySelector(".img-cont2").style.display = "none";
})
document.getElementById("gallery-3d").addEventListener("click", () =>{
  document.querySelector(".img-cont").style.display = "none";
  document.querySelector(".img-cont2").style.display = "flex";
})








//ASIDE NAV ANIMATIONS//
window.onscroll = () => {
    let scroll = document.documentElement.scrollTop;
    if (scroll > 700) {
      document.getElementById("dropdwn").style.transform = "scale(1)";
      console.log('transform 1');
    } else {
      document.getElementById("dropdwn").style.transform = "scale(0)";
    }
};
//Aparición de las opciones//

document.querySelector(".dropbtn").addEventListener("mouseover", () => {
  document.getElementById("span").style.transform = "scaleY(1)";
  document.getElementById("drop-icon").style.transform = "rotate(135deg)";
  document.querySelector(".dropbtn").style.animation = "corner 0.15s normal both";
});
document.querySelector(".dropdown-content").addEventListener("mouseover", () => {
  document.getElementById("span").style.transform = "scaleY(1)";
  document.getElementById("drop-icon").style.transform = "rotate(135deg)";
  document.querySelector(".dropbtn").style.animation = "corner 0.15s normal both";
});
document.querySelector(".dropdown-content").addEventListener("mouseout", () => {
  document.getElementById("span").style.transform = "scaleY(0)";
  document.getElementById("drop-icon").style.transform = "rotate(0deg)";
  document.querySelector(".dropbtn").style.animation = "corner-reverse 0.15s normal 0.3s both";
});
document.querySelector(".dropbtn").addEventListener("mouseout", () => {
  document.getElementById("span").style.transform = "scaleY(0)";
  document.getElementById("drop-icon").style.transform = "rotate(0deg)";
  document.querySelector(".dropbtn").style.animation = "corner-reverse 0.15s normal 0.3s both";
});
  

window.onload = () => {
    // SHOW ASIDE NAV
    document.getElementsByid("dropdwn").style.transform = "scale(0)";
  
    //LOADER ANIMATION
   /* document.getElementById("loading").style.opacity = "0";
    document.getElementById("loading").style.visibility = "hidden";*/
    document.body.style.overflowY = "auto";
    window.scrollTo(0, 0);
};



//COVER TYPE
var typed = new Typed(".typing", {
  strings: ["Programmer", "Designer", "Developer", "Engineer","Musician"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});


//SCROLLREVEAL
//knowledge
ScrollReveal().reveal('.knowledge h1', {delay: 500, reset: true});
ScrollReveal().reveal('.knowledge h2', {delay: 500, reset: true});
ScrollReveal().reveal('.icon-box', { interval: 200, reset: true });
//projects
ScrollReveal().reveal('.project-title', {delay: 500, reset: true});
ScrollReveal().reveal('.carousel slide web', {delay: 500, reset: true});
ScrollReveal().reveal('.pro-active', {delay: 500, reset: true});
ScrollReveal().reveal('.pro', {delay: 500, reset: true});
//certificates
ScrollReveal().reveal('.certificates', {delay: 500});