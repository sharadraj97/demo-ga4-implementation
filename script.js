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