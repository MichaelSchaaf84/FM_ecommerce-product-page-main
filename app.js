function toggleMenu(icon) {
  icon.classList.toggle("open");
}

let amountCounter = 0;
function addItems(sum) {
  amountCounter += 1;
  document.querySelector(".amount").innerHTML = amountCounter;

  console.log(amountCounter);

  //return amountCounter;
}

function subItems() {
  if (amountCounter > 0) {
    amountCounter -= 1;
  }
  document.querySelector(".amount").innerHTML = amountCounter;
  console.log(amountCounter);
  // return amountCounter;
}
function showCart() {
  let showCart = document.querySelector(".cart");
  console.log(showCart);

  if (showCart.style.display === "none") {
    showCart.style.display = "block";
  } else {
    showCart.style.display = "none";
  }
}
function addToCart(add) {
  add = amountCounter;
  console.log(amountCounter);
  updateCart();
}

function updateCart() {
  if (amountCounter >= 1) {
    html = `<h3>Cart</h3>
        <hr>
        <div class="cart-body">
          <div class="cart-display">
          <img class="thumpProduct" src="./images/image-product-1-thumbnail.jpg" alt="" srcset="">
          <div class="textCart">
          <p>Autum Limited Edition...</p>
          <p>$125 x ${amountCounter} $${calculate()}</p>
           </div>
          <img src="./images/icon-delete.svg" alt="">
          </div>
          <button id="checkout">Checkout</button>
        </div>
      `;
  } else {
    html = ` <h3>Cart</h3>
        <hr>
        <div class="cart-body">
          <p>Your cart is empty.</p>
        </div>`;
  }
  document.getElementById("cart").innerHTML = html;

  console.log(amountCounter + " from upDateCart");
}

function calculate() {
  const price = 125;
  let sum = price * amountCounter;
  return sum;
}
