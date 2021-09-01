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


ScrollReveal().reveal('.knowledge h1', {delay: 500});
ScrollReveal().reveal('.about-me', {delay: 500});
ScrollReveal().reveal('.icon-box', { interval: 200, reset: true });
ScrollReveal().reveal('.projects', {delay: 500});
ScrollReveal().reveal('.certificates', {delay: 500});