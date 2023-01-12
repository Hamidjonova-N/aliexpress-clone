const productsAPI = "https://fakestoreapi.com/products";
let productsContainer = document.getElementById("products-container");

function gettingProducts() {
  fetch(productsAPI)
    .then((response) => response.json())
    .then((item) => {
      console.log(item);

      let production = "";

      for (let i = 0; i < item.length; i++) {
        production += `<div class="product">
              <img src=${item[i].image} >
              <h1>${item[i].title.slice(0, 25)}...</h1>
              <p>${item[i].description.slice(0, 60)}...</p>
              <div>
               <button><img src="./img/cart.png">ADD TO CART</button>
               <ul>
                  <li><img src="./img/star.png" /></li>
                  <li><img src="./img/star.png"" /></li>
                  <li><img src="./img/star.png"" /></li>
                  <li><img src="./img/star.png"" /></li>
                  <li><img src="./img/star.png"" /></li>
               </ul>
              </div>
          </div>`;
      }
      productsContainer.innerHTML = production;
    });
}

gettingProducts();
