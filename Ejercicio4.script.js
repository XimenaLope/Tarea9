function abrirRegalo(event) {
    const image = event.currentTarget;
    image.src = 'https://i.postimg.cc/W3fLzgKd/pastel.gif';
    image.removeEventListener('click', abrirRegalo);
}

const image = document.querySelector('img');
image.addEventListener('click', abrirRegalo);
