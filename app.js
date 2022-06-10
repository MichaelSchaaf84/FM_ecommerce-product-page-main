function toggleMenu(icon) {
  icon.classList.toggle("open");
}

let amountCounter = 0;
function addItems() {
  amountCounter += 1;
  document.querySelector(".amount").innerHTML = amountCounter;
  console.log(amountCounter);
}

function subItems() {
  if (amountCounter > 0) {
    amountCounter -= 1;
  }
  document.querySelector(".amount").innerHTML = amountCounter;
}
function showCart() {
  console.log("hello");
  let showCart = document.querySelector(".cart");

  if (showCart.style.display === "none") {
    showCart.style.display = "block";
  } else {
    showCart.style.display = "none";
  }
}
