document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form submitted!');
});

const cartItems = [];
const cartList = document.getElementById('cart-items');
const totalElement = document.getElementById('total');

function addToCart(service, price) {
    cartItems.push({ service, price });
    updateCart();
}

function updateCart() {
    cartList.innerHTML = '';
    let total = 0;
    cartItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.service} - $${item.price}`;
        cartList.appendChild(listItem);
        total += item.price;
    });
    totalElement.textContent = `Total: $${total}`;
}

// Example: Adding event listeners for sliders
document.addEventListener('DOMContentLoaded', (event) => {
    const slider1 = document.getElementById('slider1');
    const slider2 = document.getElementById('slider2');

    slider1.addEventListener('input', function() {
        console.log('Slider 1 value:', this.value);
    });

    slider2.addEventListener('input', function() {
        console.log('Slider 2 value:', this.value);
    });
});
