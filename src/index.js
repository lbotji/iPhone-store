
    const modal = document.getElementById("profileModal");
    const btn = document.getElementById("profileTrigger"); // We'll add this ID to your icon
    const closeBtn = document.querySelector(".close-modal");

    // Open modal when icon is clicked
    btn.onclick = function(e) {
        e.preventDefault(); // Prevents page jump
        modal.classList.add("active");
    }

    // Close modal when (X) is clicked
    closeBtn.onclick = function() {
        modal.classList.remove("active");
    }

    // Close modal if user clicks anywhere outside the white box
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.classList.remove("active");
        }
    }


    // Elements
const cartSidebar = document.getElementById("cartSidebar");
const cartBtn = document.getElementById("cartTrigger");
const closeCart = document.querySelector(".close-cart");
const favBtn = document.getElementById("favTrigger");

// 1. Toggle Favorites (Heart)
favBtn.onclick = function(e) {
    e.preventDefault();
    const heartIcon = this.querySelector('i');
    heartIcon.classList.toggle('fa-regular'); // Outline
    heartIcon.classList.toggle('fa-solid');   // Solid
    heartIcon.classList.toggle('active');
    
    // Add temporary animation class
    heartIcon.classList.add('heart-animate');
    setTimeout(() => heartIcon.classList.remove('heart-animate'), 300);
};

// 2. Open/Close Cart Sidebar
cartBtn.onclick = function(e) {
    e.preventDefault();
    cartSidebar.classList.add("open");
};

closeCart.onclick = function() {
    cartSidebar.classList.remove("open");
};

// Close cart if clicking outside
window.addEventListener('click', function(event) {
    if (event.target !== cartSidebar && !cartSidebar.contains(event.target) && event.target !== cartBtn && !cartBtn.contains(event.target)) {
        cartSidebar.classList.remove("open");
    }
});

// 3. Add to Cart Functionality

let cart = [];
const cartCountElement = document.querySelector('.cart-count');
const cartItemsContainer = document.getElementById('cart-items-list');

// Function to add item to cart
function addToCart(name, price, image) {
    const item = { name, price: parseInt(price), image };
    cart.push(item);
    updateCartUI();
    
    // Automatically open the cart sidebar so the user sees it added
    document.getElementById("cartSidebar").classList.add("open");
}

// Function to update the visual cart
function updateCartUI() {
    // 1. Update the red bubble count
    cartCountElement.innerText = cart.length;

    // 2. Clear the current list
    cartItemsContainer.innerHTML = '';

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p style="text-align:center; color:#666;">Your bag is empty.</p>';
        return;
    }

    // 3. Build the list of items
    let total = 0;
    cart.forEach((item, index) => {
        total += item.price;
        cartItemsContainer.innerHTML += `
            <div class="cart-item" style="display: flex; align-items: center; gap: 10px; margin-bottom: 15px; border-bottom: 1px solid #eee; padding-bottom: 10px;">
                <img src="${item.image}" style="width: 50px; height: 50px; object-fit: cover; border-radius: 5px;">
                <div style="flex-grow: 1;">
                    <p style="margin: 0; font-weight: 600; font-size: 0.9rem;">${item.name}</p>
                    <p style="margin: 0; color: #007AFF;">R${item.price.toLocaleString()}</p>
                </div>
                <button onclick="removeFromCart(${index})" style="background:none; border:none; color:red; cursor:pointer;">&times;</button>
            </div>
        `;
    });

    // 4. Add the total price at the bottom
    cartItemsContainer.innerHTML += `
        <div style="margin-top: 20px; font-weight: 800; display: flex; justify-content: space-between;">
            <span>Total:</span>
            <span>R${total.toLocaleString()}</span>
        </div>
    `;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
}

// Attach Event Listeners to all "Add to Cart" buttons
document.querySelectorAll('.add-to-cart-btn').forEach(button => {
    button.addEventListener('click', () => {
        const name = button.getAttribute('data-name');
        const price = button.getAttribute('data-price');
        const img = button.getAttribute('data-img');
        addToCart(name, price, img);
    });
});
