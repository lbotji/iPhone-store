
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