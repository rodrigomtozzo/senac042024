// Função para rolar até a seção desejada
function scrollToSection(sectionId) {
    const section = document.querySelector(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  }
  
  // Simulação de alerta de reposição
  document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
      alert("Não se esqueça de repor seu Medicamento A!");
    }, 5000); // Exibe o alerta após 5 segundos
  });
  