function getPizzom() {
  document.getElementById("logo").style.display = "none";
  fetch("/pizzom")
    .then((response) => response.json())
    .then((pizza) => {

      //Divido gli ingredienti per la lista
      const ingr = pizza.Ingredienti.split(",");
      let list = "";
      ingr.forEach(element => {
        list += "<li>" + element + "</li>"
      });

      //Rimpiazzo l'HTML con la pizza
      document.getElementById("name").innerHTML =
        "<h1> Pigliati una bella " +
        pizza.Nome +
        "</h1>";
      document.getElementById("picture").innerHTML =
        "<img src='/images/" +
        pizza.id +
        ".jpg'></img>";
      document.getElementById("ingredients").innerHTML =
        "<p>Ingredienti: </p><ul>" +
        list + 
        "</ul>";
    })
    .catch((error) => {
      console.log(error);
    });
}
