var Name = document.getElementById("Name");
var logout = document.getElementById("logout");


if (localStorage.getItem("username") && localStorage.getItem("password")) {
    logout.style.display = "block";
    Name.innerHTML = "Hi " + localStorage.getItem("username");
}
  
logout.addEventListener("click", function Logout() {
    localStorage.clear();
});

var allProducts = JSON.parse(localStorage.getItem("AllProd"))
var container = document.querySelector(".container");

allProducts.forEach((item) => {
  container.innerHTML += `
  <div class="product">
    <img src="${item.img}">
    <h2>${item.title}</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. .Nobis minus ea, officia</p>
    <button onClick = "removeFromCart(${item.id})">Remove From Cart</button>
  </div>
  `;
});

function removeFromCart(id) {
    var index = allProducts.map(
        function (para) {
            return para.id
        }
    ).indexOf(id);

    allProducts.splice(index, 1)

    localStorage.setItem("AllProd" , JSON.stringify(allProducts))

    location.reload()
}

if (allProducts.length <= 0) {
    window.location = "index.html"
}
