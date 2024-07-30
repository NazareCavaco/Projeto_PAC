document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Obrigado por entrar em contato!');
});

// Animation for scrolling to sections
document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function myFunction(imgs) {
    var expandImg = document.getElementById("expandedImg");
    var imgText = document.getElementById("imgtext");
    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = "block";
}

const images = [
    'imagens/1.png',
    'imagens/2.png',
    'imagens/3.png',
];

const galleryContainer = document.getElementById('gallery');

images.forEach(src => {
    const col = document.createElement('div');
    col.className = 'col-lg-4 col-md-6 mb-4';

    const img = document.createElement('img');
    img.src = src;
    img.className = 'img-fluid';

    col.appendChild(img);
    galleryContainer.appendChild(col);
});