

    window.onload = function(e)
        {
            var img_object = document.getElementById("img1");
            img_object.addEventListener("mouseenter",dataLayerOps);
            
        }

    function dataLayerOps()
        {
            dataLayer.push({event : "image_hover" , img_no = 1 });
        }
    

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
