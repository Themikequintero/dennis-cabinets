// Initialize Animations
AOS.init({
    duration: 1000,
    once: true
});

// Toggle Collections
function toggleCollections() {
    const extraItems = document.querySelectorAll('.extra-collection');
    const btn = document.getElementById('toggle-collections');
    
    extraItems.forEach(item => {
        if (item.style.display === "block") {
            item.style.display = "none";
            btn.innerText = "View All Series";
        } else {
            item.style.display = "block";
            btn.innerText = "Show Less";
        }
    });
}

// Simple Mobile Menu Toggle
function toggleMenu() {
    const links = document.querySelector('.nav-links');
    links.style.display = links.style.display === 'flex' ? 'none' : 'flex';
    links.style.flexDirection = 'column';
    links.style.position = 'absolute';
    links.style.top = '70px';
    links.style.left = '0';
    links.style.width = '100%';
    links.style.background = 'white';
}
