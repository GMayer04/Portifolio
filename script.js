const buttons = document.querySelectorAll('.mybutton');

    buttons.forEach(button => {
        button.onclick = function() {
            document.getElementById('overlay').style.display = 'block'; // Mostra o overlay
            document.getElementById('image').src = button.getAttribute('data-img'); // Define o src da imagem
            button.style.display = 'none'; // Esconde o botão clicado
        };
    });

    document.getElementById('closeBtn').onclick = function() {
        document.getElementById('overlay').style.display = 'none'; // Esconde o overlay
        document.getElementById('image').src = ''; // Limpa o src da imagem
        
        // Mostra todos os botões novamente
        buttons.forEach(button => {
            button.style.display = 'block';
        });
    };