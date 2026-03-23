const esfera = document.getElementById('esfera');

function gerarCorAleatoria() {
    // Gera três números entre 0 e 255
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

esfera.addEventListener('mouseenter', () => {
    const novaCor = gerarCorAleatoria();
    
    // Aplicamos o gradiente radial para manter o aspecto de esfera
    // O 'circle at 70px 70px' simula o ponto de luz
    esfera.style.background = `radial-gradient(circle at 70px 70px, ${novaCor}, #000)`;
});