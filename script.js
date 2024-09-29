const empresaInfo = `
    <h2>Sobre a Yourself Coffee & More</h2>
    <p>Bem-vindo à Yourself Coffee & More! Nossa cafeteria oferece uma experiência única com sabores deliciosos e um ambiente acolhedor.</p>
    <br>
    <p>Endereço: Rua São Paulo, 123, Blumenau</p>
    <br>
    <p>Telefone: (11) 98765-4321</p>
`;

const cafes = [
    {
        nome: "Expresso",
        descricao: "Um café forte e encorpado, preparado com grãos selecionados.",
        preco: "R$ 5,00",
        imagem: "https://github.com/ericaregina/kikacoffee/blob/main/cafe1.jpg?raw=true" 
    },
    {
        nome: "Cappuccino",
        descricao: "Café com leite vaporizado e espuma cremosa.",
        preco: "R$ 7,00",
         imagem: "https://github.com/ericaregina/kikacoffee/blob/main/cafe2.jpg?raw=true" 
    },
    {
        nome: "Latte",
        descricao: "Leite vaporizado misturado com café expresso.",
        preco: "R$ 6,50",
       imagem: "https://github.com/ericaregina/kikacoffee/blob/main/cafe3.jpg?raw=true" 
    }
];

function mostrarInformacoesDaEmpresa() {
    document.getElementById('content').innerHTML = empresaInfo;
    document.getElementById('background-img').classList.remove('hidden');
}

function mostrarMenuDeCafes() {
    let menuHtml = '<h2>Menu de Cafés</h2>';
    cafes.forEach(cafe => {
        menuHtml += `
            <div class="cafe-item">
                <img src="${cafe.imagem}" alt="${cafe.nome}">
                <div>
                    <h3>${cafe.nome}</h3>
                    <p>${cafe.descricao}</p>
                    <span>Preço: ${cafe.preco}</span>
                </div>
            </div>
        `;
    });
    document.getElementById('content').innerHTML = menuHtml;
    document.getElementById('background-img').classList.add('hidden'); // Esconde a imagem
}

document.getElementById('info-btn').addEventListener('click', mostrarInformacoesDaEmpresa);
document.getElementById('menu-btn').addEventListener('click', mostrarMenuDeCafes);

// Exibir informações da empresa ao carregar a página
mostrarInformacoesDaEmpresa();
