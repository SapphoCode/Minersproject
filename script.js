// Aguarda o carregamento completo do documento antes de executar o script
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Mensagem de Boas-Vindas Dinâmica (Exemplo)
    // Seleciona o elemento h1 no cabeçalho
    const tituloPrincipal = document.querySelector('header h1');
    
    if (tituloPrincipal) {
        // Altera a cor do título principal temporariamente para chamar a atenção
        tituloPrincipal.style.color = 'gold'; 
        
        // Exibe um alerta de boas-vindas (pode ser substituído por um modal/pop-up)
        setTimeout(() => {
            alert('Boas-vindas, aventureiro! Prepare-se para explorar.');
            tituloPrincipal.style.color = '#ffffff'; // Volta à cor original (branca)
        }, 1500); // Aparece 1.5 segundo após o carregamento
    }
    
    // 2. Funcionalidade de Alternância de Tema Claro/Escuro (Modo Noturno)
    
    // Cria um botão para o modo noturno e adiciona-o ao cabeçalho
    const header = document.querySelector('header');
    if (header) {
        const toggleButton = document.createElement('button');
        toggleButton.textContent = 'Mudar para 🌑 Modo Noturno';
        toggleButton.id = 'theme-toggle';
        
        // Adiciona um estilo simples para o botão
        toggleButton.style.padding = '10px 20px';
        toggleButton.style.margin = '10px 0';
        toggleButton.style.cursor = 'pointer';
        toggleButton.style.backgroundColor = '#008000'; // Verde Minecraft
        toggleButton.style.color = 'white';
        toggleButton.style.border = 'none';
        toggleButton.style.borderRadius = '5px';
        
        header.appendChild(toggleButton);

        // Define a função de alternância
        toggleButton.addEventListener('click', function() {
            // Alterna a classe 'dark-mode' no corpo do documento
            document.body.classList.toggle('dark-mode');
            
            // Atualiza o texto do botão
            if (document.body.classList.contains('dark-mode')) {
                toggleButton.textContent = 'Mudar para ☀️ Modo Diurno';
                toggleButton.style.backgroundColor = '#a0522d'; // Marrom
            } else {
                toggleButton.textContent = 'Mudar para 🌑 Modo Noturno';
                toggleButton.style.backgroundColor = '#008000'; // Verde
            }
        });
    }

    // 3. Adiciona Animação Simples às Seções ao Scrollar (Opcional)
    // Exemplo: Faz com que as seções apareçam levemente (requer CSS adicional)
    const sections = document.querySelectorAll('section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.2 // Dispara quando 20% da seção está visível
    });

    sections.forEach(section => {
        section.classList.add('fade-in-section'); // Adiciona classe inicial para CSS
        observer.observe(section);
    });

});