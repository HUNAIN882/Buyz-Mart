const categoryTitle = document.getElementById('category-title');
const productList = document.getElementById('product-list');
const pageNum = document.getElementById('page-num');

let category = localStorage.getItem('category');
let currentPage = 1;
const productsPerPage = 15;
const totalPages = 12;

if(category === 'electronics') {
    categoryTitle.textContent = 'Electronics & Accessories';
} else if(category === 'fashion') {
    categoryTitle.textContent = 'Fashion & Apparel';
} else if(category === 'hoodies') {
    categoryTitle.textContent = 'Hoodies & Sweatshirts';
} else if(category === 'Watches') {
    categoryTitle.textContent = 'Watches';
} else if(category === 'Food') {
    categoryTitle.textContent = 'Food & Cooking';
} else {
    categoryTitle.textContent = 'Products';
}

let products = [];
for (let i = 1; i <= totalPages * productsPerPage; i++) {
    let imageUrl;
    if(category === 'electronics') {
        imageUrl = `https://via.placeholder.com/400x300?text=Electronics+${i}`;
    } else if(category === 'fashion') {
        imageUrl = `https://via.placeholder.com/400x300?text=Fashion+${i}`;
    } else if(category === 'hoodies') {
        imageUrl = `https://via.placeholder.com/400x300?text=Hoodies+${i}`;
    } else {
        imageUrl = `https://via.placeholder.com/400x300?text=Product+${i}`;
    }

    products.push({
        id: i,
        name: `${category} Product ${i}`,
        image: imageUrl,
        description: `This is a high quality ${category} product number ${i}.`
    });
}

function renderProducts() {
    productList.innerHTML = '';
    let start = (currentPage - 1) * productsPerPage;
    let end = start + productsPerPage;

    products.slice(start, end).forEach(prod => {
        const div = document.createElement('div');
        div.className = 'card';
        div.innerHTML = `
            <img src="${prod.image}">
            <h3>${prod.name}</h3>
        `;

        
        div.onclick = () => {
            localStorage.setItem('selectedProduct', JSON.stringify(prod));
            window.location.href = 'product.html';
        };

        productList.appendChild(div);
    });

    pageNum.textContent = currentPage;
}

function nextPage() {
    if (currentPage < totalPages) {
        currentPage++;
        renderProducts();
    }
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        renderProducts();
    }
}

renderProducts();
