<script>
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
</script>