// Define a interface Pergunta que descreve a estrutura de uma pergunta no quiz
interface Pergunta {
    pergunta: string; // Texto da pergunta
    respostas: string[]; // Lista de respostas possíveis
    correta: number; // Índice da resposta correta na lista de respostas
}

// Define as perguntas para cada categoria
const perguntasGeografia: Pergunta[] = [ //perguntas de Geografia
    {
        pergunta: "Qual é a capital da França?",
        respostas: [
            "Madri",
            "Berlim",
            "Paris",
            "Londres"
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a capital da Argentina?",
        respostas: [
            "Buenos Aires",
            "Rio de Janeiro",
            "Santiago",
            "Lima"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a capital do Japão?",
        respostas: [
            "Xangai",
            "Hong Kong",
            "Tóquio",
            "Pequim"
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a capital da Austrália?",
        respostas: [
            "Melbourne",
            "Sidney",
            "Camberra",
            "Brisbane"
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a capital do Canadá?",
        respostas: [
            "Vancouver",
            "Ottawa",
            "Toronto",
            "Montreal"
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a capital da Rússia?",
        respostas: [
            "São Petersburgo",
            "Moscovo",
            "Kiev",
            "Novosibirsk"
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a capital da Índia?",
        respostas: [
            "Delhi",
            "Bombaim",
            "Calcutá",
            "Bangalore"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a capital da China?",
        respostas: [
            "Xangai",
            "Hong Kong",
            "Pequim",
            "Cantão"
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a capital do Reino Unido?",
        respostas: [
            "Manchester",
            "Liverpool",
            "Londres",
            "Birmingham"
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a capital da Itália?",
        respostas: [
            "Roma",
            "Milão",
            "Nápoles",
            "Turim"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a capital da Espanha?",
        respostas: [
            "Madrid",
            "Barcelona",
            "Valência",
            "Sevilha"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a capital do Egito?",
        respostas: [
            "Cairo",
            "Alexandria",
            "Luxor",
            "Aswan"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a capital da Turquia?",
        respostas: [
            "Ancara",
            "Istambul",
            "Esmirna",
            "Bursa"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a capital da Alemanha?",
        respostas: [
            "Munique",
            "Hamburgo",
            "Berlim",
            "Colônia"
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a capital do México?",
        respostas: [
            "Buenos Aires",
            "Cidade do México",
            "São Paulo",
            "Rio de Janeiro"
        ],
        correta: 1
    },
];

const perguntasHistoria: Pergunta[] = [ //perguntas de História
    {
        pergunta: "Quem foi o primeiro presidente dos Estados Unidos?",
        respostas: [
            "George Washington",
            "Thomas Jefferson",
            "Abraham Lincoln",
            "John Adams"
        ],
        correta: 0
    },
    {
        pergunta: "Em que ano aconteceu a Revolução Francesa?",
        respostas: [
            "1789",
            "1776",
            "1804",
            "1815"
        ],
        correta: 0
    },
    {
        pergunta: "Quem pintou a Mona Lisa?",
        respostas: [
            "Vincent van Gogh",
            "Leonardo da Vinci",
            "Pablo Picasso",
            "Michelangelo"
        ],
        correta: 1
    },
    {
        pergunta: "Qual foi o nome da primeira civilização a desenvolver escrita?",
        respostas: [
            "Egípcia",
            "Suméria",
            "Babilônica",
            "Persa"
        ],
        correta: 1
    },
    {
        pergunta: "Quem foi o imperador romano durante a crucificação de Jesus Cristo?",
        respostas: [
            "Nero",
            "Augusto",
            "Tibério",
            "César"
        ],
        correta: 2
    },
    {
        pergunta: "Qual era o nome da rota comercial que conectava o Oriente ao Ocidente?",
        respostas: [
            "Rota da Seda",
            "Rota do Ouro",
            "Caminho de Santiago",
            "Rota das Especiarias"
        ],
        correta: 0
    },
    {
        pergunta: "Quem foi o responsável por iniciar a Reforma Protestante em 1517?",
        respostas: [
            "João Calvino",
            "Martinho Lutero",
            "Henrique VIII",
            "John Knox"
        ],
        correta: 1
    },
    {
        pergunta: "Em qual cidade foram realizados os primeiros Jogos Olímpicos da era moderna?",
        respostas: [
            "Paris",
            "Atenas",
            "Roma",
            "Londres"
        ],
        correta: 1
    },
    {
        pergunta: "Qual país foi responsável por colonizar o Brasil?",
        respostas: [
            "Espanha",
            "Portugal",
            "Inglaterra",
            "França"
        ],
        correta: 1
    },
    {
        pergunta: "Quem foi o líder soviético durante a Segunda Guerra Mundial?",
        respostas: [
            "Vladimir Lenin",
            "Mikhail Gorbachev",
            "Leonid Brezhnev",
            "Joseph Stalin"
        ],
        correta: 3
    },
    {
        pergunta: "Em que ano a escravidão foi abolida no Brasil?",
        respostas: [
            "1822",
            "1888",
            "1850",
            "1871"
        ],
        correta: 1
    },
    {
        pergunta: "Quem foi o principal autor da Declaração de Independência dos Estados Unidos?",
        respostas: [
            "George Washington",
            "John Adams",
            "Benjamin Franklin",
            "Thomas Jefferson"
        ],
        correta: 3
    },
    {
        pergunta: "Qual foi o principal líder da independência da Índia?",
        respostas: [
            "Jawaharlal Nehru",
            "Mahatma Gandhi",
            "Subhas Chandra Bose",
            "Indira Gandhi"
        ],
        correta: 1
    },
    {
        pergunta: "Qual evento desencadeou a Primeira Guerra Mundial?",
        respostas: [
            "Assassinato do arquiduque Francisco Ferdinando",
            "Invasão da Polônia",
            "Revolução Russa",
            "Queda da Bolsa de Valores"
        ],
        correta: 0
    },
    {
        pergunta: "Quem foi o primeiro homem a pisar na Lua?",
        respostas: [
            "Buzz Aldrin",
            "Yuri Gagarin",
            "Michael Collins",
            "Neil Armstrong"
        ],
        correta: 3
    }
];

const perguntasMatematica: Pergunta[] = [ //perguntas de Matemática
    {
        pergunta: "Qual é o valor de π (Pi) arredondado a duas casas decimais?",
        respostas: [
            "3,12",
            "3,14",
            "3,16",
            "3,18"
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a raiz quadrada de 144?",
        respostas: [
            "10",
            "11",
            "12",
            "14"
        ],
        correta: 2
    },
    {
        pergunta: "Qual é o resultado de 7 x 8?",
        respostas: [
            "54",
            "56",
            "58",
            "60"
        ],
        correta: 1
    },
    {
        pergunta: "Quanto é 25% de 200?",
        respostas: [
            "25",
            "40",
            "50",
            "75"
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a fórmula para calcular a área de um círculo?",
        respostas: [
            "πr²",
            "2πr",
            "πd²",
            "πd"
        ],
        correta: 0
    },
    {
        pergunta: "Quantos lados tem um decágono?",
        respostas: [
            "6",
            "8",
            "10",
            "12"
        ],
        correta: 2
    },
    {
        pergunta: "Qual é o próximo número na sequência: 2, 4, 8, 16, ...?",
        respostas: [
            "20",
            "24",
            "30",
            "32"
        ],
        correta: 3
    },
    {
        pergunta: "Em um triângulo retângulo, como é chamada a hipotenusa?",
        respostas: [
            "O lado maior",
            "O lado menor",
            "Um dos catetos",
            "O lado oposto ao ângulo reto"
        ],
        correta: 3
    },
    {
        pergunta: "Quanto é 3 elevado à terceira potência?",
        respostas: [
            "9",
            "18",
            "27",
            "81"
        ],
        correta: 2
    },
    {
        pergunta: "Quantos segundos existem em uma hora?",
        respostas: [
            "600",
            "3600",
            "7200",
            "5400"
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a média aritmética de 4, 6, e 8?",
        respostas: [
            "5",
            "6",
            "7",
            "8"
        ],
        correta: 2
    },
    {
        pergunta: "Se um ângulo mede 90 graus, como ele é chamado?",
        respostas: [
            "Obtuso",
            "Agudo",
            "Reto",
            "Reflexo"
        ],
        correta: 2
    },
    {
        pergunta: "Qual é o resultado de 15 dividido por 3?",
        respostas: [
            "3",
            "5",
            "6",
            "7"
        ],
        correta: 1
    },
    {
        pergunta: "Qual é o resultado da expressão 2 + 2 x 2?",
        respostas: [
            "4",
            "6",
            "8",
            "10"
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a forma reduzida da expressão 3x + 4x?",
        respostas: [
            "7x",
            "12x",
            "x",
            "3x²"
        ],
        correta: 0
    }
];

// Inicializa a lista de perguntas com a categoria de Geografia
let perguntasAtuais = perguntasGeografia;

// Obtém os elementos HTML necessários
const quiz = document.querySelector('#quiz') as HTMLDivElement;
const template = document.querySelector('template') as HTMLTemplateElement;

// Conjunto para armazenar as perguntas corretas
const corretas = new Set<Pergunta>();
const mostrarTotal = document.querySelector('#acertos span') as HTMLSpanElement;

// Função para renderizar as perguntas no quiz
function renderizarQuiz(perguntas: Pergunta[]) {
    quiz.innerHTML = ''; // Limpa o quiz atual
    corretas.clear(); // Reseta o número de acertos
    mostrarTotal.textContent = '0 de ' + perguntas.length;

    // Itera sobre cada pergunta na lista de perguntas
    for (const item of perguntas) {
        const quizItem = template.content.cloneNode(true) as DocumentFragment;
        (quizItem.querySelector('h3') as HTMLHeadingElement).textContent = item.pergunta;

        for (let resposta of item.respostas) {
            const dt = quizItem.querySelector('dl dt')!.cloneNode(true) as HTMLTableDataCellElement;
            (dt.querySelector('span') as HTMLSpanElement).textContent = resposta;
            const input = dt.querySelector('input') as HTMLInputElement;
            input.setAttribute('name', 'pergunta-' + perguntas.indexOf(item));
            input.value = item.respostas.indexOf(resposta).toString();
            input.onchange = (event) => {
                const target = event.target as HTMLInputElement;
                const estaCorreta = target.value == item.correta.toString();

                corretas.delete(item);
                if (estaCorreta) {
                    corretas.add(item);
                }

                mostrarTotal.textContent = corretas.size + ' de ' + perguntas.length;
            };
            (quizItem.querySelector('dl') as HTMLDListElement).appendChild(dt);
        }

        (quizItem.querySelector('dl dt') as HTMLTableDataCellElement).remove();

        quiz.appendChild(quizItem);
    }
}

// Inicializa o quiz com a categoria de perguntas atuais
renderizarQuiz(perguntasAtuais);

// Configura os manipuladores de eventos para selecionar diferentes categorias
document.getElementById('geografia')!.onclick = () => {
    perguntasAtuais = perguntasGeografia;
    document.querySelector('.categoria-selecionada')?.classList.remove('categoria-selecionada');
    document.getElementById('geografia')!.classList.add('categoria-selecionada');
    renderizarQuiz(perguntasAtuais);
};

document.getElementById('historia')!.onclick = () => {
    perguntasAtuais = perguntasHistoria;
    document.querySelector('.categoria-selecionada')?.classList.remove('categoria-selecionada');
    document.getElementById('historia')!.classList.add('categoria-selecionada');
    renderizarQuiz(perguntasAtuais);
};

document.getElementById('matematica')!.onclick = () => {
    perguntasAtuais = perguntasMatematica;
    document.querySelector('.categoria-selecionada')?.classList.remove('categoria-selecionada');
    document.getElementById('matematica')!.classList.add('categoria-selecionada');
    renderizarQuiz(perguntasAtuais);
};