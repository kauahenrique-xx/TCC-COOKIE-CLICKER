// Variaveis
let valorAtual = 0;
let valorDoClique = 1;

// Funções
function clique() {
    valorAtual = valorAtual + valorDoClique;
    document.getElementById("valorNaTela").innerHTML = valorAtual   // Função de clique que adiciona o numero de
                                                                    // clique
}


    