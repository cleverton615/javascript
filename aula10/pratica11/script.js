//Seletor manual de tema

const elemSelect = document.querySelector("#selectModo");

elemSelect.addEventListener("change", function () {
  if (elemSelect.value == "light") {
    document.documentElement.setAttribute("modo-light-dark", "light");
  } else if (elemSelect.value == "dark") {
    document.documentElement.setAttribute("modo-light-dark", "dark");
  } else {
    document.documentElement.removeAttribute("modo-light-dark");
  }
});


// Selecionando elementos
const botao = document.querySelector('#meuBotao')
const paragrafo = document.querySelector('#meuParagrafo')
const lista = document.querySelector('#minhaLista ul')
const novoItemTexto = document.getElementById('novoItemTexto')
const adicionarItem = document.getElementById('adicionarItem')

// Evento de clique do botão (altera o parágrafo)
botao.addEventListener('click', function() {
    paragrafo.textContent = 'Texto Alterado!'
})

// Evento de clique para adicionar itens à lista
adicionarItem.addEventListener('click', function() {
    const texto = novoItemTexto.value.trim() //obtém o texto do input

    if (texto !== '') {
        const novoItem = document.createElement('li') // Cria um novo elemento <li>
        novoItem.textContent = texto // Define o texto do novo item
        lista.appendChild(novoItem) // Adiciona o novo item à lista

        novoItemTexto.value = '' // Limpa o input
    }

})