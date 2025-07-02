const fs = require('fs');
const path = require('path');

beforeEach(() => {
  jest.resetModules();
  localStorage.clear();
  const html = fs.readFileSync(path.join(__dirname, '../index.html'), 'utf8');
  document.documentElement.innerHTML = html;
  require('../script.js');
});

test('Dark Mode button toggles class and localStorage', () => {
  const toggleButton = document.getElementById('darkModeToggle');
  const body = document.body;

  expect(body.classList.contains('dark-mode')).toBe(false);
  expect(localStorage.getItem('darkMode')).toBeNull();

  toggleButton.click();

  expect(body.classList.contains('dark-mode')).toBe(true);
  expect(localStorage.getItem('darkMode')).toBe('true');

  toggleButton.click();

  expect(body.classList.contains('dark-mode')).toBe(false);
  expect(localStorage.getItem('darkMode')).toBe('false');
});
