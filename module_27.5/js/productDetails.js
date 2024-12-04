const getParams = () => {
    const param = new URLSearchParams(window.location.search).get("productId");

    // console.log(param);

    fetch(`https://fakestoreapi.com/products/${param}`)
        .then((res) => res.json())
        // .then((data) => console.log(data));
        .then((data) => productDetails(data));
};

const productDetails = (product) => {
    // console.log(product);

    const parent = document.getElementById("single-product-container");
    const div = document.createElement("div");
    div.classList.add("single-product-container");
    div.innerHTML = `
        <div class="single-product-img">
            <img src="${product.image}" alt="">
        </div>

        <div class="single-product-info">
            <div class="title-price-container">
                <div class="title">
                    <h3>${product.title}</h3>
                    <p>Reviews: ${product.rating.rate}</p>
                </div>
                <div class="price">
                    <h2>$${product.price}</h2>
                    <p>${product.rating.count}</p>
                </div>
            </div>

            <div class="description-container">
                <div class="description-area">
                    <div id="description-btn" class="description-btn">
            
                        <span class="description-text">
                            Description
                        </span>
            
                        <span class="description-arrow-dwn">
                            <i class="fa-solid fa-chevron-down"></i>
                        </span>
            
                    </div>
            
                    <div class="description">
                        <p>${product.description}</p>
                    </div>
                </div>
            </div>

            <div class="add-btn">
            
                <span class="add-text">
                    Add to Bag
                </span>
    
            </div>
            
            
        </div>
    `;
    parent.appendChild(div);

    const descriptionBtn = document.getElementById("description-btn");

    descriptionBtn.addEventListener("click", () => {
        descriptionBtn.classList.toggle("open");
    });
};

getParams();