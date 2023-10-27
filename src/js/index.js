const verResposta = document.querySelectorAll('.item')

verResposta.forEach(pergunta => {
    pergunta.addEventListener('click', () => {
        const item = document.querySelector('.ativo')
        if (item) {
            item.classList.remove('ativo')
            pergunta.classList.add('ativo')
        } else {
            pergunta.classList.add('ativo')
            item.classList.remove('ativo')
        }
    })
})