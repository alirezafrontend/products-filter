const listProducts = [
  {
    id: 1,
    name: "کاپشن مردانه جوتی جینز",
    category: "jacket",
    img: "img/img1.jpg",
    color: "مشکی",
    price: 300000,
  },
  {
    id: 2,
    name: "سویشرت مردانه آروما",
    category: "Sweatshirt",
    img: "img/img2.jpg",
    color: "سرمه ای",
    price: 200000,
  },
  {
    id: 3,
    name: "هودی مردانه جوتی جینز ",
    category: "hoodie",
    img: "img/img3.jpg",
    color: "سبز روشن",
    price: 400000,
  },
  {
    id: 4,
    name: "کاپشن مردانه جوتی جینز",
    category: "jacket",
    img: "img/img4.jpg",
    color: "سبز روشن",
    price: 500000,
  },
  {
    id: 5,
    name: "سویشرت مردانه ان سی نو",
    category: "Sweatshirt",
    img: "img/img5.jpg",
    color: "مشکی",
    price: 300000,
  },
  {
    id: 6,
    name: "هودی مردانه جوتی جینز",
    category: "hoodie",
    img: "img/img6.jpg",
    color: "سرمه ای",
    price: 300000,
  },
  {
    id: 7,
    name: "کاپشن مردانه جوتی جینز",
    category: "jacket",
    img: "img/img7.jpg",
    color: "سرمه ای",
    price: 400000,
  },
  {
    id: 8,
    name: "سویشرت مردانه جامه پوش آرا",
    category: "Sweatshirt",
    img: "img/img8.jpg",
    color: "مشکی",
    price: 500000,
  },
  {
    id: 9,
    name: "هودی مردانه جوتی جینز",
    category: "hoodie",
    img: "img/img9.jpg",
    color: "سبز روشن",
    price: 200000,
  },
];

let filter = document.querySelector(".filter");
let productsContainer = document.querySelector(".product_container");

//

let productFilter = listProducts;

// show all product

function showProduct(productFilter) {
  productsContainer.innerHTML = "";

  //
  productFilter.map((item) => {
    // product
    let product = document.createElement("div");
    product.classList.add("product");

    // imgProduct
    let imgProduct = document.createElement("div");
    imgProduct.classList.add("img-product");

    let img = document.createElement("img");
    img.setAttribute("src", item.img);
    imgProduct.appendChild(img);

    // contect product
    let content = document.createElement("div");
    content.classList.add("content");

    let nameProduct = document.createElement("h3");
    nameProduct.classList.add("name-product");
    nameProduct.textContent = item.name;

    let colorProduct = document.createElement("span");
    colorProduct.classList.add("color-product");
    colorProduct.textContent = `رنگ : ${item.color}`;

    let priceProduct = document.createElement("span");
    priceProduct.classList.add("price-product");
    priceProduct.textContent = `قیمت : ${item.price} تومان`;

    // add element content
    content.appendChild(nameProduct);
    content.appendChild(colorProduct);
    content.appendChild(priceProduct);

    //
    product.appendChild(imgProduct);
    product.appendChild(content);

    //
    productsContainer.appendChild(product);
  });
}

showProduct(productFilter);

// filter product

filter.addEventListener("submit", (e) => {
  e.preventDefault();

  let valueFilter = e.target.elements;
  //   console.log(valueFilter);

  productFilter = listProducts.filter((item) => {
    // filter category
    if (valueFilter.category.value != "") {
      if (item.category !== valueFilter.category.value) {
        return false;
      }
    }

    // filter color
    if (valueFilter.color.value != "") {
      if (item.color !== valueFilter.color.value) {
        return false;
      }
    }

    // filter nameProduct
    if (valueFilter.nameProduct.value != "") {
      if (!item.name.includes(valueFilter.nameProduct.value)) {
        return false;
      }
    }

    // filter minPrice
    if (valueFilter.minPrice.value != "") {
      if (item.price < valueFilter.minPrice.value) {
        return false;
      }
    }

    // filter maxPrice
    if (valueFilter.maxPrice.value != "") {
      if (item.price > valueFilter.maxPrice.value) {
        return false;
      }
    }
    return true;
  });
  showProduct(productFilter);
});
