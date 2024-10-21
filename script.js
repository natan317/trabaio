function trocarImagem() {
    const imagem = document.getElementById('imagem');
    imagem.style.animation = "rotateY 1s ease";
    const imagens = ("imagem1.jpg", "imagem2.jpg", "imagem3.jpg");
    const src = imagem.src.split('/').pop();
    let index = imagens.indexOf(src);
    index = (index + 1)% imagens.length;
    imagem.src = imagens(index);

    setTimeout( () => {
        imagem.style.animation = "";
    }, 1000);
}