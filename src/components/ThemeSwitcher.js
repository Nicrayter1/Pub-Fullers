export function createThemeSwitcher() {
  const div = document.createElement('div');
  div.id = 'theme-switcher';
  div.innerHTML = `
    <label>Выбор темы:</label>
    <select>
      <option value="light">Светлая</option>
      <option value="dark">Тёмная</option>
      <option value="bar1">Бар1</option>
      <option value="bar2">Бар2</option>
    </select>
  `;
  const select = div.querySelector('select');
  select.addEventListener('change', () => {
    document.body.className = select.value;
  });
  return div;
}
