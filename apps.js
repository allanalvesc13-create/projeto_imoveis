document.addEventListener('DOMContentLoaded', () => {
    const inputCep = document.getElementById('cep');
    const inputEndereco = document.getElementById('endereco');
    const inputBairro = document.getElementById('bairro');
    const inputCidade = document.getElementById('cidade');
    const inputNumero = document.getElementById('numero');
    const formulario = document.querySelector('form');

    // 2. VALIDAÇÃO DA SENHA
    const inputPassword = document.getElementById('password');
    inputPassword.addEventListener('input', () => {
        const senha = inputPassword.value;
        const temMaiuscula = /[A-Z]/.test(senha);
        const temMinuscula = /[a-z]/.test(senha);
        const temTamanhoCorreto = senha.length <= 8 && senha.length > 0;

        if (senha.length > 0) {
            if (!temMaiuscula || !temMinuscula || !temTamanhoCorreto) {
                inputPassword.style.borderColor = '#d32f2f';
            } else {
                inputPassword.style.borderColor = '#1a6c3f';
            }
        }
    });

    // 3. BUSCA AUTOMÁTICA AO DIGITAR O CEP
    inputCep.addEventListener('input', () => {
        // Remove qualquer caractere que não seja número (ex: traços ou espaços)
        let cep = inputCep.value.replace(/\D/g, '');
        
        // Atualiza o valor do input apenas com números (ajuda visualmente)
        inputCep.value = cep;

        // Quando atingir exatamente 8 números, faz a busca sozinho
        if (cep.length === 8) {
            const url = `https://viacep.com.br/ws/${cep}/json/`;

            // Coloca um aviso temporário nos campos enquanto busca
            inputEndereco.value = 'Buscando...';
            inputBairro.value = 'Buscando...';
            inputCidade.value = 'Buscando...';

            fetch(url)
                .then(response => response.json())
                .then(dados => {
                    if (dados.erro) {
                        alert('CEP não encontrado!');
                        limparCamposEndereco();
                        inputCep.focus();
                    } else {
                        // Preenche os campos com o retorno da API
                        inputEndereco.value = dados.logradouro;
                        inputBairro.value = dados.bairro;
                        inputCidade.value = dados.localidade;
                        
                        // Joga o foco direto para o Número (próximo campo livre)
                        inputNumero.focus();
                    }
                })
                .catch(error => {
                    console.error('Erro ao buscar o CEP:', error);
                    alert('Erro ao buscar o CEP. Verifique sua conexão.');
                    limparCamposEndereco();
                });
        } else {
            // Se o usuário apagar o CEP e ficar com menos de 8 dígitos, limpa os endereços
            limparCamposEndereco();
        }
    });

    // 2. VALIDAÇÃO COMPLEMENTAR AO ENVIAR O FORMULÁRIO (OBRIGATÓRIO)
    formulario.addEventListener('submit', (evento) => {
        const cepLimpo = inputCep.value.replace(/\D/g, '');

        // Garante que o formulário não seja enviado com CEP incompleto ou inválido
        if (cepLimpo.length !== 8) {
            alert('Por favor, insira um CEP válido com 8 dígitos.');
            inputCep.focus();
            evento.preventDefault(); // Impede o envio do formulário
            return;
        }

        // Garante que o endereço foi preenchido pela API antes de enviar
        if (inputEndereco.value.trim() === "" || inputEndereco.value === 'Buscando...') {
            alert('Por favor, insira um CEP válido para carregar o endereço.');
            inputCep.focus();
            evento.preventDefault();
            return;
        }

        // Se o navegador passar por aqui, o atributo 'required' do HTML faz o resto!
        alert('Cadastro realizado com sucesso!');
    });

    // Função auxiliar para limpar os campos
    function limparCamposEndereco() {
        inputEndereco.value = '';
        inputBairro.value = '';
        inputCidade.value = '';
    }
});