let tirarHidden = document.querySelector('#tirarHidden');

tirarHidden.addEventListener('click', () => {
    const feedbackElements = document.querySelectorAll('.feedback-hidden');
    feedbackElements.forEach(feedbackElement => {
        const currentDisplay = window.getComputedStyle(feedbackElement).display;
        if (currentDisplay === 'none') {
            feedbackElement.style.display = 'flex';
            tirarHidden.textContent = 'Ver Menos Avaliações';
            tirarHidden.style.backgroundColor = 'darkred';
        } else {
            feedbackElement.style.display = 'none';
            tirarHidden.textContent = 'Ver Mais Avaliações';
            tirarHidden.style.backgroundColor = 'var(--color-6)';
        }
    });
});
let coracao = document.querySelectorAll('.dish-heart');

coracao.forEach((item) => {
    item.addEventListener('click', () => {
        const currentColor = getComputedStyle(item).backgroundColor;

        // Verifica se a cor é a inicial (ou seja, não 'darkred').
        if (currentColor === 'rgb(139, 0, 0)' || currentColor === 'darkred') {
            item.style.backgroundColor = 'var(--color-5)';
        } else {
            item.style.backgroundColor = 'darkred';
        }
    });
});
