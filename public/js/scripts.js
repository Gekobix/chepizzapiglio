function getPizzom() {
    fetch("/pizzom")
    .then(response => response.json())
    .then(pizza => {
        document.getElementById("test").innerHTML = 
        "<p>" + pizza.Nome + " " + pizza.Ingredienti + "</p>" +
        "<img src='/" + pizza.id + "'></img>"
    })
}