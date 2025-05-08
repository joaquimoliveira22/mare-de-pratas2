document.addEventListener('DOMContentLoaded', function() {
    const formCadastro = document.getElementById('formCadastro');
    if (formCadastro) {
        formCadastro.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nomeCompleto = document.getElementById('nomeCompleto').value;
            const telefone = document.getElementById('telefone').value;
            const email = document.getElementById('email').value;
            const endereco = document.getElementById('endereco').value;
            
            if (!/^[\d\s()-]{10,}$/.test(telefone)) {
                alert('Por favor, insira um número de telefone válido');
                return;
            }
            
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                alert('Por favor, insira um e-mail válido');
                return;
            }
            
            const cliente = {
                nome: nomeCompleto,
                telefone: telefone,
                email: email,
                endereco: endereco,
                dataCadastro: new Date().toLocaleDateString()
            };
            
            console.log('Cliente cadastrado:', cliente);
            alert(`Cadastro realizado com sucesso!\nBem-vindo(a) à Maré de Pratas, ${nomeCompleto.split(' ')[0]}!`);
            this.reset();
        });
    }

    const telefoneInput = document.getElementById('telefone');
    if (telefoneInput) {
        telefoneInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 0) {
                value = `(${value.substring(0, 2)}) ${value.substring(2, 7)}-${value.substring(7, 11)}`;
            }
            e.target.value = value;
        });
    }

    document.querySelectorAll('.botao-comprar').forEach(botao => {
        botao.addEventListener('click', function() {
            const produto = this.closest('.produto');
            const nome = produto.querySelector('h3').textContent;
            alert(`Você adicionou ${nome} ao seu carrinho!`);
        });
    });
});