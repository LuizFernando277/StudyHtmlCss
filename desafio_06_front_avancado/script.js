// Seleciona o elemento input
var nomeLoja = document.getElementById('nomeLoja');
var enderecoLoja = document.getElementById('enderecoLoja');
var checkboxes = document.querySelectorAll('input[name="diasFuncionamentoLoja"]')
var horaAbertura = document.getElementById('horaAbertura');
var horaFechamento = document.getElementById('horaFechamento');

// Adiciona um evento input para registrar o valor atualizado no console
nomeLoja.addEventListener('blur', function() {
    console.log('Nome da Loja:', this.value);
});

enderecoLoja.addEventListener('blur', function() {
    console.log('Endereço da Loja:', this.value);
});

function logSelectedCheckboxes() {
    var selectedValues = [];
    checkboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            selectedValues.push(checkbox.value);
        }
    });
    console.log('Checkboxes selecionadas:', selectedValues);
}

// Adiciona um ouvinte de evento de mudança a cada checkbox
checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener('change', logSelectedCheckboxes);
});

horaAbertura.addEventListener('blur', function() {
    console.log('Hora de Abertura:', this.value);
});

horaFechamento.addEventListener('blur', function() {
    console.log('Hora de Fechamento:', this.value);
});

function salvar() {
    console.log(`Preparando envio...`)
}

// -------------------------------------------

function saveToLocalStorage() {
    localStorage.setItem('nomeLoja', nomeLoja.value);
    localStorage.setItem('enderecoLoja', enderecoLoja.value);
    
    var selectedValues = [];
    checkboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            selectedValues.push(checkbox.value);
        }
    });
    localStorage.setItem('diasFuncionamentoLoja', JSON.stringify(selectedValues));
    
    localStorage.setItem('horaAbertura', horaAbertura.value);
    localStorage.setItem('horaFechamento', horaFechamento.value);
}

// Função para recuperar dados do localStorage
function loadFromLocalStorage() {
    nomeLoja.value = localStorage.getItem('nomeLoja') || '';
    enderecoLoja.value = localStorage.getItem('enderecoLoja') || '';
    
    var savedDays = JSON.parse(localStorage.getItem('diasFuncionamentoLoja')) || [];
    checkboxes.forEach(function(checkbox) {
        checkbox.checked = savedDays.includes(checkbox.value);
    });
    
    horaAbertura.value = localStorage.getItem('horaAbertura') || '';
    horaFechamento.value = localStorage.getItem('horaFechamento') || '';
}

// Seleciona os elementos input
var nomeLoja = document.getElementById('nomeLoja');
var enderecoLoja = document.getElementById('enderecoLoja');
var checkboxes = document.querySelectorAll('input[name="diasFuncionamentoLoja"]');
var horaAbertura = document.getElementById('horaAbertura');
var horaFechamento = document.getElementById('horaFechamento');

// Adiciona um evento blur para registrar o valor atualizado no localStorage
nomeLoja.addEventListener('blur', saveToLocalStorage);
enderecoLoja.addEventListener('blur', saveToLocalStorage);
horaAbertura.addEventListener('blur', saveToLocalStorage);
horaFechamento.addEventListener('blur', saveToLocalStorage);

// Adiciona um evento change para checkboxes para salvar no localStorage
checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener('change', saveToLocalStorage);
});

// Carrega dados do localStorage quando a página é carregada
window.addEventListener('load', loadFromLocalStorage);