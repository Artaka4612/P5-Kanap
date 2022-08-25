//console.log("hello");

const url = new URL(window.location.href);
const id = url.searchParams.get("id");

/// récupération des données et accroche sur les balises
let getInfoCard = function () {
  fetch(`http://localhost:3000/api/products/${id}`)
    .then((response) => response.json())

    .then(function (data) {
      //image
      let itemImg = document.querySelector(".item__img");
      let imgCanap = `<img src =${data.imageUrl} ${data.altTxt} />`;
      itemImg.innerHTML = imgCanap;

      /////////////////titre
      let itemTitle = document.getElementById("title");
      let titleCanap = `${data.name}`;
      itemTitle.innerText = titleCanap;

      ////////////////prix
      let itemPrice = document.getElementById("price");
      let priceCanap = `${data.price}`;
      itemPrice.innerText = priceCanap;

      //////////////description
      let description = document.getElementById("description");
      let descriptionCanap = `${data.description}`;
      description.innerText = descriptionCanap;

      ////////////// Couleurs -- menu deroulant
      let color = document.getElementById("colors");
      for (i = 0; i < data.colors.length; i++) {
        color.innerHTML += `<option value="${data.colors[i]}"> ${data.colors[i]}</option>`;
      }
    })
    .catch(() => {
      alert("erreur"); /// ????? autre possibilité
    });
};
getInfoCard();

// btn envois les articles dans le localStorage
const btn = document.getElementById("addToCart");

/// recupération de :  id, choice, color, quantity
btn.addEventListener("click", function (e) {
  e.preventDefault();
  const color = document.getElementById("colors").value;
  const quantity = document.getElementById("quantity").value;

  if (color == null || quantity == 0) {
    alert("erreur"); ////// ??????? autre possibilité
  } else {
    let cart = [id, color, Number(quantity), price];
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  window.location.href = "./cart.html";

  ///////////PROBLEME NE CUMUL PAS LES ARTICLES????/////////
});
