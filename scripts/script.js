


//COVER

const topmenu = document.getElementById("top-nav-menu");
const topoptions = document.getElementById("top-nav-options");
var navstatus = 0;

topmenu.addEventListener("click", () =>{
  if (navstatus ==0 ){
  topoptions.style.display = "flex";
  setTimeout(() => {
    topoptions.style.transform = "scaleY(1)";
  }, 150); 
  navstatus=1;
  }
  else{
    topoptions.style.transform = "scaleY(0)";
    setTimeout(() => {
      topoptions.style.display = "none";
    }, 150);
    navstatus = 0;
  }
})




//PROJECT GALLERY MENU//

var cont = document.querySelector(".img-cont");
var cont2 = document.querySelector(".img-cont2");
var web = document.getElementById("web-box");
var print = document.getElementById("3d-box");
var allmenu = document.querySelector(".project-menu .icon-box");

web.addEventListener("click", () =>{

  cont2.style.transform = "scale(0)";
  setTimeout(() => {
    cont2.style.display = "none";
  }, 400);
  setTimeout(() => {
  cont.style.display = "flex";
  }, 400);
  setTimeout(() => {
    cont.style.transform = "scale(1)";
  }, 500); 

  console.log('clicked');
  web.className= "pro-active";
  print.className= "pro";
  
  console.log(web);
  console.log(print);

})

print.addEventListener("click", () =>{

  cont.style.transform = "scale(0)";
  setTimeout(() => {
    cont.style.display = "none";
  }, 400);
  setTimeout(() => {
  cont2.style.display = "flex";
}, 400);
  setTimeout(() => {
    cont2.style.transform = "scale(1)";
  }, 500); 
 

  web.className= "pro";
  print.className= "pro-active"; 
  console.log(web);
  console.log(print);
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
    document.getElementById("dropdwn").style.transform = "scale(0)";
  
    //LOADER ANIMATION
   /* document.getElementById("loading").style.opacity = "0";
    document.getElementById("loading").style.visibility = "hidden";*/
    document.body.style.overflowY = "auto";
   // window.scrollTo(0, 0);
};



//COVER TYPE
var typed = new Typed(".typing", {
  strings: ["Programmer", "Mechatronic", "Developer","Musician", "Techies player"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});


//SCROLLREVEAL
//knowledge
ScrollReveal().reveal('.knowledge h1', {delay: 500, reset: true});
ScrollReveal().reveal('.knowledge h2', {delay: 500, reset: true});
ScrollReveal().reveal('.about-me .icons .icon-box', { interval: 200, reset: true });
//projects
ScrollReveal().reveal('.project-title', {delay: 500});
ScrollReveal().reveal('.pro-active', {delay: 500});
ScrollReveal().reveal('.pro', {interval: 300});
ScrollReveal().reveal('.img-cont .img-box', {interval: 400, reset: true });
//certificates
//ScrollReveal().reveal('.certificates', {delay: 500});