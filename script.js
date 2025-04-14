const toggleButton = document.getElementById('darkModeToggle');
const pdfButton = document.getElementById('downloadPDF');
const body = document.body;

// ➤ All'avvio: applica dark mode salvata
const isDarkMode = localStorage.getItem('darkMode') === 'true';
if (isDarkMode) {
  body.classList.add('dark-mode');
  updateDarkButtonText(true);
}

// ➤ Aggiorna testo e icona bottone dark mode
function updateDarkButtonText(isActive) {
  const label = toggleButton.querySelector('.label');
  const icon = toggleButton.querySelector('.icon');
  if (label && icon) {
    label.textContent = isActive ? 'Disattiva Dark Mode' : 'Attiva Dark Mode';
    icon.textContent = isActive ? '☀️' : '🌙';
  }
}

// ➤ Anima barre delle lingue
function restartBarAnimations() {
  const bars = document.querySelectorAll('.lang-bar .fill');
  bars.forEach(bar => {
    bar.style.animation = 'none';
    bar.offsetHeight; // Forza il repaint
    const name = bar.classList.contains('a2') ? 'fillA2' :
                 bar.classList.contains('b1') ? 'fillB1' : '';
    if (name) {
      bar.style.animation = `${name} 1s forwards`;
    }
  });
}

// ➤ Toggle dark mode
toggleButton.addEventListener('click', (e) => {
  e.preventDefault();
  e.stopPropagation();
  const isNowDark = body.classList.toggle('dark-mode');
  localStorage.setItem('darkMode', isNowDark);
  updateDarkButtonText(isNowDark);
  restartBarAnimations();
});

// ➤ Download PDF (usa stampa)
pdfButton.addEventListener('click', (e) => {
  e.preventDefault();
  e.stopPropagation();
  window.print();
});

// ➤ Slide buttons mobile con auto-chiusura (uno alla volta)
const slideButtons = document.querySelectorAll('.slide-btn');
const buttonTimeouts = new Map();

slideButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    const isMobile = window.innerWidth <= 600;
    if (!isMobile) return;

    e.preventDefault();
    e.stopPropagation();

    // Chiudi gli altri
    slideButtons.forEach(btn => {
      if (btn !== button) {
        btn.classList.remove('active');
        if (buttonTimeouts.has(btn)) {
          clearTimeout(buttonTimeouts.get(btn));
          buttonTimeouts.delete(btn);
        }
      }
    });

    // Attiva solo se non già attivo
    const wasActive = button.classList.contains('active');
    if (!wasActive) {
      button.classList.add('active');
      const timeoutId = setTimeout(() => {
        button.classList.remove('active');
        buttonTimeouts.delete(button);
      }, 3000);
      buttonTimeouts.set(button, timeoutId);
    }
  });
});

// ➤ All'avvio: animazioni barre
window.addEventListener('DOMContentLoaded', restartBarAnimations);
