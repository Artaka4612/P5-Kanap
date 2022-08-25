function getCart() {
  let cart = localStorage.getItem("cart"); // récupère la clé
  if (cart == null) {
    // le panier est vide
    return []; // tableau vide
  } else {
    return JSON.parse(cart);
  }
}
function addCart(article) {
  let cart = getCart(); // 1-recup panier
  // find : cherche element ds tableau par rapport à condition
  let foundArticle = cart.find((p) => p.id == article.id); // recherche si id identique
  if (foundArticle != undefined) {
    foundArticle.quantity++;
  } else {
    article.quantity = 1;
    cart.push(article); // 2-ajoute article
  }

  saveCart(cart); // 3- enregistre nouveau panier
}
