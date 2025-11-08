// Variaveis
let valorAtual = 0;
let valorDoClique = 1;

var clicker = 0.1;
var custocliker = 5;

var vovo = 1;
var custovovo = 10;

var fabrica = 8;
var custofabrica = 50;

var magico = 47;
var customagico = 100;

var laboratorio = 260;
var custolaboratorio = 500;

var gerador = 1400;
var custogerador = 2000;

var nave = 7800;
var custonave = 10000;

var templo = 44000;
var custotemplo = 70000;

var buraco = 260000;
var custoburaco = 300000;

var universo = 50000000000000000;
var custouniverso = 50000000000;
document.getElementById("valorNaTela").innerHTML = valorAtual.toFixed(1);


// Funções
function clique() {
    valorAtual = valorAtual + valorDoClique;
    document.getElementById("valorNaTela").innerHTML = valorAtual.toFixed(1); // Função de clique que adiciona o numero de
                                                                               // clique
}

function buff01() {                                         // Buff do cliker pro cois la
    function custo01() {                                      // Funçao pra mostrar q tu gastou o cukiie
        if (valorAtual < custocliker) {
            document.getElementById("erro").innerHTML = "Voçê não tem dinheiro pra isso"
            setTimeout(() => {
                document.getElementById("erro").innerHTML = "";
            }, 5000);
        }else if (valorAtual >= custocliker) {
            valorAtual = valorAtual - custocliker;
            document.getElementById("valorNaTela").innerHTML = valorAtual.toFixed(1);
            valorDoClique = valorDoClique + clicker;
        }
    }
    custo01();
}


function buff02() {                                         // Buff do cliker pro cois la
    function custo02() {                                      // Funçao pra mostrar q tu gastou o cukiie
        if (valorAtual < custovovo) {
            document.getElementById("erro").innerHTML = "Voçê não tem dinheiro pra isso"
            setTimeout(() => {
                document.getElementById("erro").innerHTML = "";
            }, 5000);
        }else if (valorAtual >= custovovo) {
            valorAtual = valorAtual - custovovo;
            document.getElementById("valorNaTela").innerHTML = valorAtual.toFixed(1);
            valorDoClique = valorDoClique + vovo;
        }
    }
    custo02();
}

function buff03() {                                         // Buff do cliker pro cois la
    function custo03() {                                      // Funçao pra mostrar q tu gastou o cukiie
        if (valorAtual < custofabrica) {
            document.getElementById("erro").innerHTML = "Voçê não tem dinheiro pra isso"
            setTimeout(() => {
                document.getElementById("erro").innerHTML = "";
            }, 5000);
        }else if (valorAtual >= custofabrica) {
            valorAtual = valorAtual - custofabrica;
            document.getElementById("valorNaTela").innerHTML = valorAtual.toFixed(1);
            valorDoClique = valorDoClique + fabrica;
        }
    }
    custo03();
}

function buff04() {                                         // Buff do cliker pro cois la
    function custo04() {                                      // Funçao pra mostrar q tu gastou o cukiie
        if (valorAtual < customagico) {
            document.getElementById("erro").innerHTML = "Voçê não tem dinheiro pra isso"
            setTimeout(() => {
                document.getElementById("erro").innerHTML = "";
            }, 5000);
        }else if (valorAtual >= customagico) {
            valorAtual = valorAtual - customagico;
            document.getElementById("valorNaTela").innerHTML = valorAtual.toFixed(1);
            valorDoClique = valorDoClique + magico;
        }
    }
    custo04();
}

function buff05() {                                         // Buff do cliker pro cois la
    function custo05() {                                      // Funçao pra mostrar q tu gastou o cukiie
        if (valorAtual < custolaboratorio) {
            document.getElementById("erro").innerHTML = "Voçê não tem dinheiro pra isso"
            setTimeout(() => {
                document.getElementById("erro").innerHTML = "";
            }, 5000);
        }else if (valorAtual >= custolaboratorio) {
            valorAtual = valorAtual - custolaboratorio;
            document.getElementById("valorNaTela").innerHTML = valorAtual.toFixed(1);
            valorDoClique = valorDoClique + laboratorio;
        }
    }
    custo05();
}

function buff06() {                                         // Buff do cliker pro cois la
    function custo06() {                                      // Funçao pra mostrar q tu gastou o cukiie
        if (valorAtual < custogerador) {
            document.getElementById("erro").innerHTML = "Voçê não tem dinheiro pra isso"
            setTimeout(() => {
                document.getElementById("erro").innerHTML = "";
            }, 5000);
        }else if (valorAtual >= custogerador) {
            valorAtual = valorAtual - custogerador;
            document.getElementById("valorNaTela").innerHTML = valorAtual.toFixed(1);
            valorDoClique = valorDoClique + gerador;
        }
    }
    custo06();
}

function buff07() {                                         // Buff do cliker pro cois la
    function custo07() {                                      // Funçao pra mostrar q tu gastou o cukiie
        if (valorAtual < custonave) {
            document.getElementById("erro").innerHTML = "Voçê não tem dinheiro pra isso"
            setTimeout(() => {
                document.getElementById("erro").innerHTML = "";
            }, 5000);
        }else if (valorAtual >= custonave) {
            valorAtual = valorAtual - custonave;
            document.getElementById("valorNaTela").innerHTML = valorAtual.toFixed(1);
            valorDoClique = valorDoClique + nave;
        }
    }
    custo07();
}

function buff08() {                                         // Buff do cliker pro cois la
    function custo08() {                                      // Funçao pra mostrar q tu gastou o cukiie
        if (valorAtual < custotemplo) {
            document.getElementById("erro").innerHTML = "Voçê não tem dinheiro pra isso"
            setTimeout(() => {
                document.getElementById("erro").innerHTML = "";
            }, 5000);
        }else if (valorAtual >= custotemplo) {
            valorAtual = valorAtual - custotemplo;
            document.getElementById("valorNaTela").innerHTML = valorAtual.toFixed(1);
            valorDoClique = valorDoClique + templo;
        }
    }
    custo08();
}

function buff09() {                                         // Buff do cliker pro cois la
    function custo09() {                                      // Funçao pra mostrar q tu gastou o cukiie
        if (valorAtual < custoburaco) {
            document.getElementById("erro").innerHTML = "Voçê não tem dinheiro pra isso"
            setTimeout(() => {
                document.getElementById("erro").innerHTML = "";
            }, 5000);
        }else if (valorAtual >= custoburaco) {
            valorAtual = valorAtual - custoburaco;
            document.getElementById("valorNaTela").innerHTML = valorAtual.toFixed(1);
            valorDoClique = valorDoClique + buraco;
        }
    }
    custo09();
}

function buff10() {                                         // Buff do cliker pro cois la
    function custo10() {                                      // Funçao pra mostrar q tu gastou o cukiie
        if (valorAtual < custouniverso) {
            document.getElementById("erro").innerHTML = "Voçê não tem dinheiro pra isso"
            setTimeout(() => {
                document.getElementById("erro").innerHTML = "";
            }, 5000);
        }else if (valorAtual >= custouniverso) {
            valorAtual = valorAtual - custouniverso;
            document.getElementById("valorNaTela").innerHTML = valorAtual.toFixed(1);
            valorDoClique = valorDoClique + universo;
        }
    }
    custo10();
}