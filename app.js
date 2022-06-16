function showImage() {
  const btn = document.querySelector(".thumb-img");
  btn.addEventListener("click", () => {
    console.log("hello");
  });
}

const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");
  burger.addEventListener("click", () => {
    //toogle nav
    nav.classList.toggle("nav-active");
    //animate links
    navLinks.forEach((link, idx) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          idx / 7 + 0.3
        }s`;
      }
    });
    // burger animation
    burger.classList.toggle("toggle");
  });
};

navSlide();

let amountCounter = 0;
function addItems(sum) {
  amountCounter++;
  document.querySelector(".amount").innerHTML = amountCounter;

  console.log(amountCounter);
  //addToCart();
}

function subItems() {
  if (amountCounter > 0) {
    amountCounter--;
  }
  document.querySelector(".amount").innerHTML = amountCounter;
  console.log(amountCounter);
  //  addToCart();
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
function addToCart() {
  console.log(amountCounter);
  updateCart();
  updateCountCircle();
  showCircle();
}

function updateCart() {
  if (amountCounter >= 1) {
    html = ` <div class="closingCart-wrapper">
       <h3>Cart</h3>
       <img  onclick="showCart()"class="closingIcon" src="./images/icon-close.svg" alt="" srcset="">
       </div>
        <hr>
        <div class="cart-body">
          <div class="cart-display">
          <img class="thumpProduct" src="./images/image-product-1-thumbnail.jpg" alt="" srcset="">
          <div class="textCart">
          <p>Autum Limited Edition...</p>
          <p>$125 x ${amountCounter} <span> $${calculate()}</span></p>
           </div>
          <img class="deletCart" onclick="deletCart()" src="./images/icon-delete.svg" alt="">
          </div>
          <button id="checkout">Checkout</button>
        </div>
      `;
  } else {
    html = `  <div class="closingCart-wrapper">
       <h3>Cart</h3>
       <img  onclick="showCart()"class="closingIcon" src="./images/icon-close.svg" alt="" srcset="">
       </div>
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

function updateCountCircle() {
  document.querySelector(".circle").innerHTML = amountCounter;
}
function showCircle() {
  console.log("hello showcircle " + amountCounter);
  let showCircle = document.querySelector(".circle");
  if (showCircle.style.display === "none") {
    showCircle.style.display = "block";
  }
  if (amountCounter === 0) {
    showCircle.style.display = "none";
  }
}
function deletCart() {
  amountCounter = 0;
  document.querySelector(".amount").innerHTML = amountCounter;
  showCircle();
  updateCart();
  updateCountCircle();
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
