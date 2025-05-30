let indiceSlide = 1;
let slideIntervalo; // Variável para o intervalo de tempo

mostrarSlides(indiceSlide);
iniciarIntervalo(); // Inicia a transição automática

// Função para avançar ou retroceder os slides
function mudarSlide(n) {
    mostrarSlides(indiceSlide += n);
    reiniciarIntervalo(); // Reinicia o temporizador após navegação manual
}

// Função para mostrar o slide atual clicando no indicador
function slideAtual(n) {
    mostrarSlides(indiceSlide = n);
    reiniciarIntervalo(); // Reinicia o temporizador após navegação manual
}

function mostrarSlides(n) {
    let i;
    let slides = document.getElementsByClassName("carrossel-slide");
    let indicadores = document.getElementsByClassName("indicador");

    if (n > slides.length) {
        indiceSlide = 1; // Volta para o primeiro slide
    }
    if (n < 1) {
        indiceSlide = slides.length; // Vai para o último slide
    }

    // Esconde todos os slides e remove a classe 'slide-ativo'
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides[i].classList.remove("slide-ativo");
    }

    // Remove a classe "ativo" de todos os indicadores
    for (i = 0; i < indicadores.length; i++) {
        indicadores[i].className = indicadores[i].className.replace(" ativo", "");
    }

    // Mostra o slide atual, marca o indicador como ativo e adiciona a classe 'slide-ativo'
    slides[indiceSlide - 1].style.display = "block";
    slides[indiceSlide - 1].classList.add("slide-ativo"); // Adiciona classe para animar o conteúdo
    indicadores[indiceSlide - 1].className += " ativo";
}

// Funções para o carrossel automático
function iniciarIntervalo() {
    pararIntervalo(); // Limpa qualquer intervalo existente para evitar múltiplos intervalos
    slideIntervalo = setInterval(function() {
        mudarSlide(1); // Muda para o próximo slide
    }, 8000); 
}

function pararIntervalo() {
    clearInterval(slideIntervalo);
}

function reiniciarIntervalo() {
    pararIntervalo();
    iniciarIntervalo();
}

// Opcional: Pausa o carrossel quando o mouse está sobre ele
const carrosselContainer = document.querySelector('.carrossel-container');
if (carrosselContainer) {
    carrosselContainer.addEventListener('mouseenter', pararIntervalo);
    carrosselContainer.addEventListener('mouseleave', iniciarIntervalo);
}