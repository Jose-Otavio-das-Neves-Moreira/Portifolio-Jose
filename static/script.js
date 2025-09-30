        const menuMobile = document.querySelector('.menu-mobile');
        const linksNavegacao = document.querySelector('.links-navegacao');
        
        menuMobile.addEventListener('click', () => {
            linksNavegacao.classList.toggle('ativo');
            menuMobile.innerHTML = linksNavegacao.classList.contains('ativo') ? 
                '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        });

        window.addEventListener('scroll', () => {
            const cabecalho = document.querySelector('.cabecalho');
            cabecalho.classList.toggle('rolado', window.scrollY > 50);
        });

        document.querySelectorAll('.links-navegacao a').forEach(link => {
            link.addEventListener('click', () => {
                linksNavegacao.classList.remove('ativo');
                menuMobile.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });

        const observador = new IntersectionObserver((entradas) => {
            entradas.forEach(entrada => {
                if (entrada.isIntersecting) {
                    entrada.target.style.opacity = 1;
                    entrada.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.habilidade, .cartao-projeto, .item-contato, .item-linguagem').forEach(el => {
            el.style.opacity = 0;
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            observador.observe(el);
        });