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

//ASIDE NAV
window.onscroll = () => {
    let scroll = document.documentElement.scrollTop;
    if (scroll > 400) {
      document.getElementById("show-nav").style.transform = "scale(1)";
      console.log('transform 1');
    } else {
      document.getElementById("show-nav").style.transform = "scale(0)";
      document.getElementById("span").classList.remove("menu-visible");
      document.querySelector(".menu-icon").classList.remove("spin-menu");
    }
  };
  // ANIMATION MENU
document.querySelector(".show-menu").addEventListener("click", () => {
    document.getElementById("span").classList.toggle("menu-visible");
    document.querySelector(".menu-icon").classList.toggle("spin-menu");
  });
  
  window.onload = () => {
    // SHOW MENU
    document.getElementById("show-nav").style.transform = "scale(0)";
  
    //LOADER ANIMATION
   /* document.getElementById("loading").style.opacity = "0";
    document.getElementById("loading").style.visibility = "hidden";*/
    document.body.style.overflowY = "auto";
    window.scrollTo(0, 0);
  };

ScrollReveal().reveal('.knowledge h1', {delay: 500});
ScrollReveal().reveal('.about-me', {delay: 500});
ScrollReveal().reveal('.icon-box', { interval: 200, reset: true });
ScrollReveal().reveal('.projects', {delay: 500});
ScrollReveal().reveal('.certificates', {delay: 500});