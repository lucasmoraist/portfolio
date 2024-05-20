import codechella from '../assets/codechella.svg';
import grafico from '../assets/grafico.svg';
import certificate from '../assets/api-certificate.png';
import ecomarket from '../assets/ecomarket.png';
import viacep from '../assets/api-viacep.jpeg';
import jornada from '../assets/api-jornada.jpeg';

const Projetos = [
    {
        id: 1,
        nome: "Codechella",
        descricao: "O Festival CodeChella é uma celebração anual da música alternativa que se destaca por sua diversidade de gêneros e sua missão de proporcionar uma experiência verdadeiramente encantadora e inesquecível para todos os seus visitantes.",
        img: codechella,
        link: "https://github.com/lucasmoraist/CodeChella"
    },
    {
        id: 2,
        nome: "Gráfico com Chart.js",
        descricao: "Este projeto foi um desafio proposto pelo cubo do itau, e a ideia era criar uma tabela e gráfico dinâmico, onde o gráfico iria pegar as informações da tabela e ia devolver em forma de gráfico as informações.",
        img: grafico,
        link: "https://github.com/lucasmoraist/Participation-Graph"
    },
    {
        id: 3,
        nome: "EcoMarket",
        descricao: "O EcoMarket é um e-commerce centralizado, onde os consumidores podem encontrar uma ampla variedade de produtos ecológicos, sustentáveis e éticos.",
        img: ecomarket,
        link: "https://github.com/lucasmoraist/EcoMarket"
    },
    {
        id: 4,
        nome: "Gerador de Certificado",
        descricao: "API Rest desenvolvida, junto a Rockseat no NLW, para apresentar o resultado do exame prestato pelo aluno. Também rankeando eles através de query na interface do projeto.",
        img: certificate,
        link: "https://github.com/lucasmoraist/certificate-generator"
    },
    {
        id: 5,
        nome: "API ViaCep",
        descricao: "Esta API pode ser utilizada por desenvolvedores que necessitam de uma solução para consultar detalhes de endereço utilizando um CEP ou para gerenciar o cadastro de usuários em seus sistemas.",
        img: viacep,
        link: "https://github.com/lucasmoraist/API-ViaCep"
    },
    {
        id: 6,
        nome: "Jornada Milhas API",
        descricao: "A API de Destinos de Viagem é uma plataforma que ajuda os usuários a descobrir e explorar possíveis destinos de viagem. Ela fornece informações detalhadas sobre os destinos e depoimentos de turistas anteriores.",
        img: jornada,
        link: "https://github.com/lucasmoraist/jornada-milhas-api"
    }
]

export default Projetos;