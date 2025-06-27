## Spiegazione completa e approfondita del progetto "CV Online" di Alessandro Marici

Questo documento raccoglie la spiegazione tecnica **completa e dettagliata** dell'intero progetto HTML/CSS/JavaScript del curriculum online realizzato da Alessandro Marici. L'obiettivo è fornire una **guida passo passo** per comprendere e ricostruire il progetto anche senza l'ausilio di un assistente AI.

---

### 📄 **1. HTML - Struttura del contenuto e semantica**

#### Dichiarazione iniziale e metadati
```html
<!DOCTYPE html>
<html lang="it">
```
- `<!DOCTYPE html>`: indica che il documento usa HTML5.
- `lang="it"`: aiuta la SEO e i lettori di schermo specificando la lingua.

```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="...">
<meta name="author" content="...">
<meta name="keywords" content="...">
<meta name="robots" content="index, follow">
<title>Alessandro Marici | Web Developer Junior – CV Online</title>
```
- Impostazioni SEO: meta tag per descrizione, parole chiave, autore.
- `viewport`: essenziale per design responsive.

```html
<link rel="stylesheet" href="style.css">
<link rel="stylesheet" href="font-awesome">
<script src="jspdf"></script>
<link rel="icon" href="data:,"> 
<meta property="og:title" content="...">
```
- Collegamenti a risorse esterne: CSS, icone, jsPDF.
- Open Graph per anteprime social.

#### Corpo pagina `<body>`

##### Pulsanti laterali (slide buttons):
Due bottoni fluttuanti laterali:
- Attiva/disattiva Dark Mode
- Scarica il PDF (attiva la stampa)

Sono gestiti via JavaScript e CSS. Hanno icona, etichetta testuale e tooltip.

##### Struttura principale:
```html
<div class="container">
  <header>
    <h1>Alessandro Marici</h1>
    <p class="subtitle">Web Developer in formazione</p>
    <div class="links">...</div>
  </header>

  <main>
    <section class="bio">...</section>
    <section>Competenze...</section>
    <section>Progetti...</section>
    <section class="esperienza">...</section>
    <section>Formazione...</section>
    <section class="lingue-section">...</section>
  </main>
</div>
```
- Layout centrato in `.container`.
- Header con nome, sottotitolo e link social.
- Main diviso in sezioni chiare e semantiche.

##### Sezioni principali:

- **Bio**: breve presentazione personale.
- **Competenze**: linguaggi di programmazione con icone e status.
- **Progetti**: link ai progetti personali reali.
- **Esperienza**: timeline delle esperienze lavorative con icone.
- **Formazione**: istituti e corsi seguiti.
- **Lingue**: italiano e inglese con barre animate.

##### Inclusione script
```html
<script src="script.js"></script>
```

---

### 🎨 **2. CSS - Stile visivo, animazioni e responsive design**

#### Struttura base
```css
body {
  margin: 0;
  font-family: Arial;
  background-color: #eaeaea;
  color: #333;
}
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
}
```
- Imposta margini nulli e font base.
- `.container`: layout centrato, max 800px.

#### Header e Social
```css
.links {
  position: fixed (desktop) / static (mobile);
  display: flex (colonna o riga);
  icone animate (hover personalizzati);
}
```
- GitHub: animazione a scatto.
- LinkedIn: effetto respiro.
- Email: effetto busta che si apre.
- WhatsApp: zoom leggero.

#### Sezioni e tipografia
- `.section-title`: titolo sezione con colore blu e bordino.
- `.skills`, `.project`, `.esperienza`, `.education-item`: blocchi ben separati.
- `.project-btn`: bottone stile link con hover.

#### Dark Mode
```css
.dark-mode body { background: #1e1e1e; color: #f1f1f1; }
.dark-mode .project { background: #2b2b2b; }
.dark-mode .project-btn { background: #00b4d8; color: black; }
```
- Colori invertiti su tutta l'interfaccia.
- Applicabile tramite JS con `.classList.toggle('dark-mode')`

#### Responsive e stampa
- Media query per schermi sotto i 600px:
  - Riduzione padding, font, layout.
  - Slide buttons adattati per mobile.
- Media query `@media print`:
  - Rimuove bottoni, sfondi e ombre.
  - Ottimizza il contenuto per esportazione PDF.

#### Animazioni e accessibilità
- `.fill.a2` e `.fill.b1`: barre animate via keyframes.
- Animazioni soft per hover e dark mode.

---

### 🔧 **3. JavaScript - Comportamento e interazioni utente**

#### Selezione elementi
```js
const toggleButton = document.getElementById('darkModeToggle');
const pdfButton = document.getElementById('downloadPDF');
const body = document.body;
```

#### Dark Mode (con memoria locale)
```js
const isDarkMode = localStorage.getItem('darkMode') === 'true';
if (isDarkMode) {
  body.classList.add('dark-mode');
  updateDarkButtonText(true);
}
```
Salva lo stato nella memoria locale del browser. Se attivo, viene riapplicato all'avvio.

```js
function updateDarkButtonText(isActive) {
  // Cambia testo e icona del bottone in base allo stato attuale
}
```

```js
toggleButton.addEventListener('click', () => {
  const isNowDark = body.classList.toggle('dark-mode');
  localStorage.setItem('darkMode', isNowDark);
  updateDarkButtonText(isNowDark);
  restartBarAnimations();
});
```

#### Barre delle lingue animate
```js
function restartBarAnimations() {
  // Riavvia l'animazione rimuovendo e riapplicando l'animazione CSS
}
```

#### Download PDF (stampa)
```js
pdfButton.addEventListener('click', () => {
  window.print();
});
```
Stampa l'intero CV in formato PDF. Lo stile è già ottimizzato via CSS.

#### Slide buttons mobile
- Sui dispositivi con larghezza <= 600px:
  - Solo un bottone attivo alla volta
  - Auto-chiusura dopo 3 secondi
  
```js
button.addEventListener('click', () => {
  // Controlla se è mobile, attiva bottone, imposta timeout per chiuderlo
});
```

#### Al caricamento
```js
window.addEventListener('DOMContentLoaded', restartBarAnimations);
```

---

### 📖 **4. Considerazioni finali e miglioramenti possibili**

- Separazione dei ruoli: HTML (struttura), CSS (stile), JS (comportamento).
- Design moderno, semplice e leggibile.
- Animazioni leggere ma efficaci.
- Modalità scura con memoria locale.
- Responsive e pronto per stampa PDF.

#### Possibili estensioni future:
- Animazioni più avanzate.
- Sezione "Contattami" con form.
- Integrazione Analytics per tracciamento.
- Multilingua dinamico con JS.

---

### 📅 **Autore**
Alessandro Marici - 2025  
Versione: 1.0  
File analizzato: `index.html` + `style.css` + `script.js`

---
