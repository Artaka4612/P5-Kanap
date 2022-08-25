/// stocker des données localStorage.setItem("cle", valeur);
/// récupérer une donnée localStorage.getItem(cle);
/// effacer une donnée localStorage.clear();
/***************/
// dans le local storage on ne peut pas enregistrer de données complexe
//JSON.stringify : prend un objet et le transforme en string
//JSON.parse :prend string et transforme en objet ici en tableau
/****************/
/*
if (id != null) {
  let PriceItem = 0;
}
*/
//Enregistrer le panier
function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart)); // clé, valeur
}

// recup articles du LocalStorage
function getCart() {
  let cart = localStorage.getItem("cart"); // récupère la clé
  if (cart == null) {
    // le panier est vide
    return []; // tableau vide
  } else {
    return JSON.parse(cart);
  }
}
// Ajouter au panier
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

//retirer du panier
function removeFromCart(article) {
  let cart = getCart();
  // filtre par rapport à condition
  cart = cart.filter((p) => p.id != article.id);
  saveCart(cart);
}

//changer la quantité en retirant

function changeQuantity(article, quantity) {
  let cart = getCart();
  let foundArticle = cart.find((p) => p.id == article.id);
  if (foundArticle != undefined) {
    foundArticle.quantity += quantity;
    if (foundArticle.quantity <= 0) {
      // si qty <0 alors oust du panier
      removeFromCart(foundArticle);
    }
  } else {
    saveCart(cart);
  }
}

// calcul de quantitée  total d' article
function getNumberArticle() {
  let cart = getCart();
  let number = 0;
  for (let article of cart) {
    number += article.quantity;
  }
  return number;
}

// calcul total du prix
function getTotalPrice() {
  let cart = getCart();
  let total = 0;
  for (let article of cart) {
    // on parcours le panier
    total += article.quantity * article.price;
  }
  return total;
}
