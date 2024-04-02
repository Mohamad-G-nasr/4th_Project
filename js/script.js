var Name = document.getElementById("Name");
var login = document.getElementById("login");
var register = document.getElementById("register");
var ShoppingCart = document.querySelector(".ShoppingCart");
var logout = document.getElementById("logout");

if (localStorage.getItem("username") && localStorage.getItem("password")) {
  login.remove(); /* or login.style.display="none"*/
  register.remove();
  ShoppingCart.style.display = "block";
  logout.style.display = "block";
  Name.innerHTML = "Hi " + localStorage.getItem("username");
}

logout.addEventListener("click", function Logout() {
  localStorage.clear();
});

var data = [
  {
    id: 1,
    img: "images/apple-watch-series-5.png",
    title: "Apple Watch Ser-5",
  },
  {
    id: 2,
    img: "images/2500OpelGrandland113.jpg",
    title: "Opel GrandLand",
  },
  {
    id: 3,
    img: "images/iphone-15-pro-gray.jpg",
    title: "Iphone 15 Pro",
  },
  {
    id: 4,
    img: "images/s24-3-1.jpg",
    title: "Samsung S24 Ultra",
  },
];

var container = document.querySelector(".container");

data.forEach((item) => {
  container.innerHTML += `
  <div class="product">
    <img src="${item.img}">
    <h2>${item.title}</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. .Nobis minus ea, officia</p>
    <button onClick = "addToCart(${item.id})">Add to Cart</button>
  </div>
  `;
});

var Products = document.querySelector("#Products");
var DivProducts = document.querySelector(".Products");
var Prod_num = document.querySelector(".Prod_num");

// declare allItem out side function to store in it the value of allItem that
// will get out from the function

// var allItem = [];  this only code will cause a problem

// to solve the problem of refreshing page, i don't want refresh to remove all products
// that i ordered

if (localStorage.getItem("AllProd")) {
  var allItem = JSON.parse(localStorage.getItem("AllProd"));
  // also i need to inject products in the cart
  allItem.forEach((item) => {
    Products.innerHTML += `<p>${item.title}</p><hr>`
  });
  // also i need to correct the cart number
  var Counter = document.querySelectorAll("#Products p").length;

    if (Counter >= 1) {
      Prod_num.style.display = "block";
      Prod_num.innerHTML = Counter;
    }
    
} else {
  var allItem = [];
}

function addToCart(id) {
  if (!localStorage.getItem("username")) {
    window.location = "register.html";
  } else {
    var clickedItem = data.find((item) => item.id == id);
    /* Make sure of the == two equal sign not 1 also take 
    care of the syntax */

    Products.innerHTML += `<p>${clickedItem.title}</p><hr>`;

    setTimeout(function () {
      DivProducts.style.display = "block";
    }, 1);

    setTimeout(function () {
      DivProducts.style.display = "none";
    }, 700);

    // don't redeclare allItem it will cause error
    allItem = [...allItem, clickedItem];
    // Data Stored at local Storage as String
    localStorage.setItem("AllProd", JSON.stringify(allItem));

    var Counter = document.querySelectorAll("#Products p").length;

    if (Counter >= 1) {
      Prod_num.style.display = "block";
      Prod_num.innerHTML = Counter;
    }
  }
}

var theCart = document.getElementById("theCart");

theCart.addEventListener("click", function open() {
  if (Products.innerHTML != "" && DivProducts.style.display == "none") {
    /* second time to forget two == equal signs */
    DivProducts.style.display = "block";
  } else {
    DivProducts.style.display = "none";
  }
});
