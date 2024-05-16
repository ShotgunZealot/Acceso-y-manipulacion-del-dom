function showImage(imageUrl, description){
    var mainIMG= document.getElementById("mainImg");
    var newDescription = document.getElementById("description");

    mainIMG.src = imageUrl;
    newDescription.textContent= description;
}