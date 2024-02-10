function All(){
    document.getElementById("places").style.display = "flex";
    document.getElementById("books").style.display = "flex";
    document.getElementById("movies").style.display = "flex";
}
function Places(){
    document.getElementById("movies").style.display = "none";
    document.getElementById("books").style.display = "none";
    document.getElementById("places").style.display = "flex";
}
function Books(){
    document.getElementById("places").style.display = "none";
    document.getElementById("movies").style.display = "none";
    document.getElementById("books").style.display = "flex";
}
function Movie(){
    document.getElementById("places").style.display = "none";
    document.getElementById("books").style.display = "none";
    document.getElementById("movies").style.display = "flex";
}