const loadCategory = () => {
    const selectBtn = document.getElementById("select-btn");

    selectBtn.addEventListener("click", () => {
        selectBtn.classList.toggle("open");
    });

    fetch("https://fakestoreapi.com/products/categories")
        .then((res) => res.json())
        .then((data) => {
            data.forEach((category) => {
                const parent = document.getElementById("list-items");
                const li = document.createElement("li");
                li.classList.add("item");
                li.innerHTML = `
                    
                    <span class="item-text" onclick="loadProducts('${category.replace("'", "\\'")}')">${category}</span>
                `;
                parent.appendChild(li);
            });
        });
};

const loadProducts = (category = "") => {
    fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => {
            const filteredProducts = category
                ? data.filter((product) => product.category === category)
                : data;
            displayProducts(filteredProducts);
        });
};

const displayProducts = (products) => {
    const parent = document.getElementById("product-container");
    parent.innerHTML = "";
    products?.forEach((product) => {
        const div = document.createElement("div");
        div.classList.add("product");
        div.innerHTML = `
            <a target="_blank" href="productDetails.html?productId=${product.id}">
                <img src="${product.image}" alt="">
                <p>${product.title}</p>
                <h5>$${product.price}</h5>
            </a>
        `;
        parent.appendChild(div);
    });
};


loadCategory();
loadProducts();
