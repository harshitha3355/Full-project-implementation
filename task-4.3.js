const products = [
    {
      id: 1,
      name: "Black Nike Sports Shoes",
      category: "sports",
      price: 120,
      brand: "Nike",
      image: "https://i.pinimg.com/736x/90/d3/2f/90d32fa96583dfdbd2eec386a2fcb5c2.jpg",
    },
    {
      id: 2,
      name: "Brown Nike Sports Shoes",
      category: "sports",
      price: 130,
      brand: "Nike",
      image: "https://i.pinimg.com/736x/67/b5/b2/67b5b2976489d3449ccacb9af92aff5d.jpg",
    },
    {
      id: 3,
      name: "Cobalt Blue Nike Shoes",
      category: "sports",
      price: 180,
      brand: "Nike",
      image: "https://i.pinimg.com/736x/8b/ed/85/8bed85a214cf3c356cebd3170df67fba.jpg",
    },
    {
      id: 4,
      name: "Peach and Black Nike Shoes",
      category: "sports",
      price: 350,
      brand: "Nike",
      image: "https://i.pinimg.com/236x/48/c5/e2/48c5e283b76e9e5cda424d62b8f1c158.jpg",
    },
    {
      id: 5,
      name: "Yellow and Black Nike Shoes",
      category: "sports",
      price: 260,
      brand: "Nike",
      image: "https://i.pinimg.com/736x/9e/22/22/9e22226bb3a1bddb3a136da20540e618.jpg",
    },
    {
      id: 6,
      name: "Grey Louboutin Heels",
      category: "luxury",
      price: 1600,
      brand: "Louboutin",
      image: "https://i.pinimg.com/736x/d2/74/18/d27418053661a228afdaa9ff9290d387.jpg",
    },
    {
      id: 7,
      name: "Black Leather Louboutin Heels",
      category: "luxury",
      price: 1600,
      brand: "Louboutin",
      image: "https://i.pinimg.com/736x/4c/6c/3c/4c6c3cc1308a461e17ae0c09cd8bcde8.jpg",
    },
    {
      id: 8,
      name: "Brown Louboutin Heels",
      category: "luxury",
      price: 1600,
      brand: "Louboutin",
      image: "https://i.pinimg.com/736x/5a/2b/d6/5a2bd6438a675b94376ef9150fa8e3e2.jpg",
    },
    {
      id: 9,
      name: "White YSL Heels",
      category: "luxury",
      price: 1600,
      brand: "YSL",
      image: "https://i.pinimg.com/236x/8a/e0/52/8ae05278afb5f495750dd04605b6ab15.jpg",
    },
    {
      id: 10,
      name: "Black YSL Heels",
      category: "luxury",
      price: 1700,
      brand: "YSL",
      image: "https://i.pinimg.com/474x/50/c6/cb/50c6cb9b426d78f8e11b797343ed815d.jpg",
    },
    {
      id: 11,
      name: "Gold YSL Heels",
      category: "luxury",
      price: 1750,
      brand: "YSL",
      image: "https://i.pinimg.com/474x/11/8d/5d/118d5d3bc0d16da729fc3f85e762200f.jpg",
    },
    {
      id: 12,
      name: "Beige Converse Shoes",
      category: "sports",
      price: 90,
      brand: "Converse",
      image: "https://i.pinimg.com/736x/71/d6/5b/71d65b3161ab989f09a77aa48695e871.jpg",
    },
    {
      id: 13,
      name: "Ethnic Flats for Festivals",
      category: "ethnic",
      price: 80,
      brand: "Others",
      image: "https://i.pinimg.com/236x/1d/00/84/1d0084ed9befeee18300f4bb1d78fd7c.jpg",
    },
    {
      id: 14,
      name: "Ethnic Block Heels",
      category: "ethnic",
      price: 200,
      brand: "Others",
      image: "https://i.pinimg.com/736x/d7/5d/63/d75d63815c0c5f18bc0c76792e0744a2.jpg",
    },
    {
      id: 15,
      name: "Beige Flats",
      category: "casuals",
      price: 50,
      brand: "Others",
      image: "https://i.pinimg.com/736x/70/f5/df/70f5df7ec78f63149cf5fcd96e18973e.jpg",
    },
    {
      id: 16,
      name: "Women Slippers",
      category: "slippers",
      price: 40,
      brand: "Others",
      image: "https://i.pinimg.com/236x/ce/c7/83/cec783401c764bb034469235b737c01e.jpg",
    },
    {
      id: 17,
      name: "Pink Slippers",
      category: "slippers",
      price: 45,
      brand: "Others",
      image: "https://i.pinimg.com/474x/e7/3e/5b/e73e5b36c9583e05c70a79b8dc3c5eca.jpg",
    },
    {
      id: 18,
      name: "Navy Blue Slippers",
      category: "slippers",
      price: 50,
      brand: "Others",
      image: "https://i.pinimg.com/736x/9d/36/07/9d360722c809b479afa6b21ea13a5a8c.jpg",
    },
    {
      id: 19,
      name: "Painted Converse",
      category: "specialized",
      price: 140,
      brand: "Converse",
      image: "https://i.pinimg.com/236x/8d/c1/d6/8dc1d66eb65602462d11e3627bac5f08.jpg",
    },
  ];
  
  function displayProducts(products) {
    const productGrid = document.getElementById("productGrid");
    productGrid.innerHTML = "";
    products.forEach(product => {
      const productCard = document.createElement("div");
      productCard.classList.add("product-card");
      productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h4>${product.name}</h4>
        <p>Price: $${product.price}</p>
        <p>Category: ${product.category}</p>
        <p>Brand: ${product.brand}</p>
      `;
      productGrid.appendChild(productCard);
    });
  }
  
  function filterProducts() {
    const selectedCategories = Array.from(document.querySelectorAll(".filter-category:checked")).map(el => el.value);
    const selectedPrices = Array.from(document.querySelectorAll(".filter-price:checked")).map(el => el.value);
    const selectedBrands = Array.from(document.querySelectorAll(".filter-brand:checked")).map(el => el.value);
  
    let filteredProducts = products.filter(product => {
      const matchesCategory = !selectedCategories.length || selectedCategories.includes(product.category);
      const matchesPrice = !selectedPrices.length || selectedPrices.some(range => {
        const [min, max] = range.split("-").map(Number);
        return product.price >= min && product.price <= max;
      });
      const matchesBrand = !selectedBrands.length || selectedBrands.includes(product.brand);
      return matchesCategory && matchesPrice && matchesBrand;
    });
  
    displayProducts(filteredProducts);
  }
  
  function sortProducts(event) {
    const sortOption = event.target.value;
    const sortedProducts = [...products].sort((a, b) => {
      if (sortOption === "priceAsc") return a.price - b.price;
      if (sortOption === "priceDesc") return b.price - a.price;
      return 0;
    });
    displayProducts(sortedProducts);
  }
  
  document.getElementById("applyFilters").addEventListener("click", filterProducts);
  document.getElementById("sort").addEventListener("change", sortProducts);
  
  displayProducts(products);