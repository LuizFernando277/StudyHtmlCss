function showModal(){
    var element = document.getElementById("modal");
    element.classList.add("show-modal")
}

function hideModal() {
    var element = document.getElementById("modal");
    element.classList.remove("show-modal")
}

const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault()
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active)
    
    if (active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu')
    } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu')
    }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);




var nameUser = document.getElementById('nameUser');
var telephoneUser = document.getElementById('telephoneUser');
var emailUser = document.getElementById('emailUser');

// Funções de 'blur' para mostrar os dados no console
nameUser.addEventListener('blur', function() {
    console.log('Nome do Usuário:', this.value);
});

telephoneUser.addEventListener('blur', function() {
    console.log('Telefone do Usuário:', this.value);
});

emailUser.addEventListener('blur', function() {
    console.log('Email do Usuário:', this.value);
});

// Função para salvar dados no localStorage
function saveToLocalStorage() {
    localStorage.setItem('nameUser', nameUser.value);
    localStorage.setItem('telephoneUser', telephoneUser.value);
    localStorage.setItem('emailUser', emailUser.value);
}

// Adiciona os eventos 'blur' para salvar automaticamente
nameUser.addEventListener('blur', saveToLocalStorage);
telephoneUser.addEventListener('blur', saveToLocalStorage);
emailUser.addEventListener('blur', saveToLocalStorage);

// Função para carregar dados do localStorage ao carregar a página
function loadFromLocalStorage() {
    nameUser.value = localStorage.getItem('nameUser') || '';
    telephoneUser.value = localStorage.getItem('telephoneUser') || '';
    emailUser.value = localStorage.getItem('emailUser') || '';
}

// Adiciona o evento 'load' para carregar os dados ao iniciar a página
window.addEventListener('load', loadFromLocalStorage);


// ------------------------------------------------------------


// Função para enviar dados para a API
function sendDataToAPI() {
    // Obter os dados do localStorage
    const userData = {
        nameUser: localStorage.getItem('nameUser'),
        telephoneUser: localStorage.getItem('telephoneUser'),
        emailUser: localStorage.getItem('emailUser')
    };

    // Verificar se os dados estão completos
    if (userData.nameUser && userData.telephoneUser && userData.emailUser) {
        // Fazer a requisição POST para a API
        fetch('https://apigenerator.dronahq.com/api/DmHL8Kz1/Clientes', { // Substitua pelo URL da sua API
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' // Define o formato como JSON
            },
            body: JSON.stringify(userData) // Enviar os dados como JSON
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao enviar dados para a API');
            }
            return response.json(); // Converter a resposta para JSON
        })
        .then(data => {
            console.log('Dados enviados com sucesso:', data);
            // Fazer algo com a resposta da API, se necessário
        })
        .catch(error => {
            console.error('Erro:', error); // Exibir erros no console
        });
    } else {
        console.log("Dados do usuário estão incompletos.");
    }
}


//comando que salva na API
//sendDataToAPI()