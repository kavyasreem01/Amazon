// Toggle sign-in dropdown
document.querySelector('.sign-in').addEventListener('click', function () {
    alert('Sign-in functionality to be implemented!');
});

// Toggle the side panel when "All" is clicked
document.querySelector('.panel-all').addEventListener('click', function () {
    alert('All categories panel will open!');
});

// Add functionality to the cart
let cartCount = 0;
document.querySelector('.nav-cart').addEventListener('click', function () {
    alert('Items in cart: ' + cartCount);
});

// Function to scroll back to top when the "Back to top" button is clicked
document.querySelector('.foot1').addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Simulate adding items to the cart (you can change this logic based on your needs)
let boxes = document.querySelectorAll('.box');
boxes.forEach((box) => {
    box.addEventListener('click', function () {
        cartCount++;
        alert(`Item added to cart! Total items: ${cartCount}`);
    });
});
