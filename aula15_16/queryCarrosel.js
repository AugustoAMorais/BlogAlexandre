$(document).ready(function() {
    // Índice da imagem atual
    let currentIndex = 0;

    // Todas as imagens no carrossel
    const images = $('.imagem');
    
    // Número total de imagens
    const imageCount = images.length;

    // Largura do contêiner do carrossel
    const containerWidth = $('.container-carrosel').width();

    // Exibe a imagem conforme o índice
    function showImage(index) {
        // Deslocamento horizontal para a imagem desejada
        const newTransform = -index * containerWidth + 'px';

        // Move as imagens horizontalmente
        $('.imagem-carrosel').css('transform', `translateX(${newTransform})`);
    }

    // Próxima imagem no clique
    $('.next').click(function() {
        // Índice da próxima imagem
        currentIndex = (currentIndex + 1) % imageCount;
        
        // Exibe a próxima imagem
        showImage(currentIndex);
    });

    // Imagem anterior no clique
    $('.prev').click(function() {
        // Índice da imagem anterior
        currentIndex = (currentIndex - 1 + imageCount) % imageCount;
        
        // Exibe a imagem anterior
        showImage(currentIndex);
    });

    // Função para avançar as imagens automaticamente
    function autoPlay() {
        currentIndex = (currentIndex + 1) % imageCount;
        showImage(currentIndex);
    }

    // Inicia a troca automática de imagens
    setInterval(autoPlay, 3000); // Muda a cada 3 segundos

    // Ajusta o carrossel ao redimensionar a janela
    $(window).resize(function() {
        containerWidth = $('.container-carrosel').width();
        showImage(currentIndex);
    });

    // Exibe a primeira imagem ao carregar a página
    showImage(currentIndex);
});
