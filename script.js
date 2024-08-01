body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
}

header {
    background-color: #007bff;
    color: white;
    padding: 20px;
    text-align: center;
}

.hero-banner h1 {
    margin: 0;
    font-size: 2.5em;
}

.hero-banner p {
    margin: 10px 0 0;
    font-size: 1.2em;
}

nav {
    background-color: #343a40;
    color: white;
    padding: 10px;
}

nav ul {
    list-style: none;
    margin: 0;
    padding: 0;
    text-align: center;
}

nav ul li {
    display: inline;
    margin: 0 15px;
}

nav ul li a {
    color: white;
    text-decoration: none;
    font-weight: bold;
}

main {
    padding: 20px;
}

section {
    margin-bottom: 20px;
}

h2 {
    border-bottom: 2px solid #007bff;
    padding-bottom: 10px;
}

ul {
    list-style: none;
    padding: 0;
}

ul li {
    margin-bottom: 10px;
}

.experience-slider {
    position: relative;
    overflow: hidden;
    max-width: 600px;
    margin: 0 auto;
}

.slides {
    display: flex;
    transition: transform 0.5s ease-in-out;
}

.slide {
    min-width: 100%;
    box-sizing: border-box;
    padding: 20px;
    background-color: #f8f9fa;
    border: 1px solid #ddd;
    border-radius: 5px;
}

.slider-controls {
    text-align: center;
    margin-top: 10px;
}

.slider-controls button {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;
    margin: 0 5px;
}

footer {
    background-color: #343a40;
    color: white;
    text-align: center;
    padding: 10px;
    position: fixed;
    width: 100%;
    bottom: 0;
}
