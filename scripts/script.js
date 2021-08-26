function myFunction(){
    document.getElementById('demo').innerHTML = Date();
}
function ventana(){
    window.alert("ah te la creiste")
}
document.getElementById('pro-left').addEventListener("click", function change(){
    console.log('click');
    document.getElementById("project-img").src = "multimedia/images/projects/project2.jpeg";
});

document.getElementById('pro-right').addEventListener("click", function change(){
    console.log('click2');
    document.getElementById("project-img").src = "multimedia/images/projects/project3.jpeg";
});
