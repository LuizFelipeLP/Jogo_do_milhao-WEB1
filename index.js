const readline = require("readline-sync");

console.log("🟡 Bem-vindo ao Show do Milhão!");
const nome = readline.question("Digite seu nome: ");

console.log(`\nOlá, ${nome}! Vamos começar o jogo!\n`);

const perguntas = [
  [ 
    // Rodada 1
    {
        pergunta: "Qual a capital do Brasil?",
        opcoes: ["1) Rio de Janeiro", "2) Brasília", "3) São Paulo"],
        respostaCerta: 2
    },
    {
        pergunta: "Quem fundou a Igreja Católica?",
        opcoes: ["1) Jesus Cristo", "2) Pedro Apóstolo", "3) Imperador Constantino"],
        respostaCerta: 1
    },
    {
        pergunta: "Quanto é 5 x 7?",
        opcoes: ["1) 30", "2) 35", "3) 40"],
        respostaCerta: 2
    }
  ],
  [ 
    // Rodada 2
    {
        pergunta: "Qual planeta é conhecido como planeta vermelho?",
        opcoes: ["1) Marte", "2) Vênus", "3) Júpiter"],
        respostaCerta: 1
    },
    {
        pergunta: "Em que continente está o Egito?",
        opcoes: ["1) Europa", "2) África", "3) Ásia"],
        respostaCerta: 2
    },
    {
        pergunta: "Quantos segundos há em 1 minuto?",
        opcoes: ["1) 60", "2) 100", "3) 90"],
        respostaCerta: 1
    }
  ],
  [
    // Rodada 3
    {
        pergunta: "Qual a capital da Áustria?",
        opcoes: ["1) Moscow", "2) Lisboa", "3) Viena"],
        respostaCerta: 3
    }
    {
        pergunta: "Quem é o autor de O Hobbit?",
        opcoes: ["1) Tolkien", "2) Martin", "3) Rosling"],
        respostaCerta: 1
    }
    {
        pergunta: "Qual desses países é uma teocracia?",
        opcoes: ["1) Japão", "2) Argentina", "3) Vaticano"],
        respostaCerta: 3
    }
  ],
  [
    // Rodada 4
    {
        pergunta: "Qual desses reis é considerado Santo pela Igreja?",
        opcoes: ["1) Luís IX", "2) Carlos V", "3) Ricardo Coração de Leão"],
        respostaCerta: 1
    }
    {
        pergunta: "Quem era o Papa no ano de 2016?",
        opcoes: ["1) Bento XVI", "2) Francisco I", "3) Leão XIV"],
        respostaCerta: 2
    }
    {
        pergunta: "1238 em algorismos romanos é:",
        opcoes: ["1) CMMXXXIIX", "2) MCCXXXVIII", "3) LMCXXXXVIII"],
        respostaCerta: 2
    }
  ]
  [
    // Rodada 5
    {
        pergunta: "Onde fica o acento na palavra 'Maximo'?",
        opcoes: ["1) a", "2) i", "3) o"],
        respostaCerta: 1
    }
    {
        pergunta: "Em que ano aconteceu a Batalha de Lepanto?",
        opcoes: ["1) 1565", "2) 1568", "3) 1571"],
        respostaCerta: 3
    }
    {
        pergunta: "Quanto é 409 + 2398 / 2 x 5?",
        opcoes: ["1) 6308", "2) 6404", "3) 6501"],
        respostaCerta: 2
    }
  ]
];
