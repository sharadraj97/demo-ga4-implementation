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
});
