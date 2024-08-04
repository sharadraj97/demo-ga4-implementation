let currentBanner = 0;
const banners = document.querySelectorAll('.banner');

function nextBanner() {
    banners[currentBanner].style.display = 'none';
    currentBanner = (currentBanner + 1) % banners.length;
    banners[currentBanner].style.display = 'block';
}

document.addEventListener('DOMContentLoaded', () => {
    banners.forEach((banner, index) => {
        if (index !== currentBanner) {
            banner.style.display = 'none';
        }
    });

    // Form submission event handling
    const form = document.getElementById('signup-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent the default form submission

        // Fire a form submission event (you can customize this as needed)
        console.log('Form submitted');

        // Example: Sending the form data using Fetch API or triggering Google Analytics event
        const formData = new FormData(form);
        fetch('/submit', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });

      
        }
    });
});
