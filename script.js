// script.js

document.addEventListener('DOMContentLoaded', () => {
  // 1. Funcionalidade dos Pop-ups (Modals)
  const modal = document.getElementById('myModal');
  const modalTitle = document.getElementById('modal-title');
  const modalText = document.getElementById('modal-text');
  const closeBtn = document.querySelector('.close-btn');

  // Abre o modal ao clicar em links com a classe 'popup-link'
  document.querySelectorAll('.popup-link').forEach(link => {
      link.addEventListener('click', (e) => {
          e.preventDefault();
          
          // Pega os dados do atributo data-*
          const title = link.getAttribute('data-tiktle') || 'Information';
          const content = link.getAttribute('data-content') || 'No information available.';

          // Preenche o modal
          modalTitle.textContent = title;
          modalText.innerHTML = `<p>${content}</p>`; // Usa innerHTML para aceitar quebras de linha/tags
          
          // Exibe o modal
          modal.style.display = 'flex';
      });
  });

  // Fecha o modal ao clicar no 'x'
  closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
  });

  // Fecha o modal ao clicar fora dele
  window.addEventListener('click', (e) => {
      if (e.target === modal) {
          modal.style.display = 'none';
      }
  });

  // 2. Animação Fade-in (Reveal.js simplificado)
  const revealElements = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('active');
              // Opcional: Para que a animação ocorra apenas uma vez
              // observer.unobserve(entry.target); 
          } else {
              // Remove a classe para a animação ocorrer novamente ao rolar para cima e para baixo
              entry.target.classList.remove('active');
          }
      });
  }, {
      threshold: 0.1 // O elemento se torna visível quando 10% dele estiver na viewport
  });

  revealElements.forEach(el => {
      observer.observe(el);
  });
});