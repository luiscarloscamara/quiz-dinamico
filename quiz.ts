interface Pergunta {
    pergunta: string;
    respostas: string[];
    correta: number;
}

const perguntas: Pergunta[] = [
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

const quiz = document.querySelector('#quiz') as HTMLDivElement;
const template = document.querySelector('template') as HTMLTemplateElement;

const corretas = new Set<Pergunta>();
const totalDePerguntas = perguntas.length;
const mostrarTotal = document.querySelector('#acertos span') as HTMLSpanElement;
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas;

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

            mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas;
        };
        (quizItem.querySelector('dl') as HTMLDListElement).appendChild(dt);
    }

    (quizItem.querySelector('dl dt') as HTMLTableDataCellElement).remove();

    quiz.appendChild(quizItem);
}
