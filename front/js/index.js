//////////// APPEL DES DONNEES DE L' API ///////

//console.log("coucou");
// Récupérer les infos des articles
const main = fetch("http://localhost:3000/api/products")
  .then((response) => response.json())

  .then(function (data) {
    // Insérer dans la page index
    for (i = 0; i < data.length; i++) {
      const sectionProduct = document.getElementById("items");
      //console.log(sectionProduct);
      const cardProduct = `
      <a href="./product.html?id=${data[i]._id}">
              <article>
                <img
                  src="${data[i].imageUrl}"
                  alt="${data[i].altTxt}"
                />
                <h3 class="productName">${data[i].name}</h3>
                <p class="productDescription">
                  ${data[i].description}
                </p>
              </article>
            </a>`;
      //console.log(cardProduct);
      sectionProduct.innerHTML += cardProduct;
    }
  });
