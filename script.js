
var plusIcons = document.querySelectorAll(".fa-plus-circle");
var minusIcons = document.querySelectorAll(".fa-minus-circle");
var deleteIcons = document.querySelectorAll(".fa-trash-alt");
var heartIcons = document.querySelectorAll(".fa-heart");

var totalDisplay = document.querySelector(".total");

// recalcul total
function updateTotal() {
  let cards = document.querySelectorAll(".card");
  let total = 0;

  cards.forEach(card => {
    let quantity = Number(card.querySelector(".quantity").innerHTML);
    let unitPrice = Number(card.querySelector(".unit-price span").innerHTML);

    total += quantity * unitPrice;
  });

  totalDisplay.innerHTML = total + " $";
}

//  PLUS
plusIcons.forEach(icon => {
  icon.addEventListener("click", function () {
    let card = this.closest(".card");
    let quantity = card.querySelector(".quantity");

    quantity.innerHTML = Number(quantity.innerHTML) + 1;

    updateTotal();
  });
});

// ➖ MINUS
minusIcons.forEach(icon => {
  icon.addEventListener("click", function () {
    let card = this.closest(".card");
    let quantity = card.querySelector(".quantity");

    if (Number(quantity.innerHTML) > 0) {
      quantity.innerHTML = Number(quantity.innerHTML) - 1;
    }

    updateTotal();
  });
});

//  DELETE ITEM
deleteIcons.forEach(icon => {
  icon.addEventListener("click", function () {
    let card = this.closest(".card");

    card.remove(); // supprime produit

    updateTotal(); // recalcul total
  });
});

//  LIKE BUTTON
heartIcons.forEach(icon => {
  icon.addEventListener("click", function () {
    icon.classList.toggle("liked");
  });
});
