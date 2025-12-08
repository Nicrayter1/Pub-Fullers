import { createProductTable } from './components/ProductTable.js';
import { createProductActions } from './components/ProductActions.js';
import { createThemeSwitcher } from './components/ThemeSwitcher.js';
import { getProducts, updateProductColumn } from './services/productsService.js';
import { clamp } from './utils/helpers.js';

async function init() {
  const products = await getProducts();

  const table = createProductTable(products);
  document.body.appendChild(table);

  const actions = createProductActions();
  document.body.appendChild(actions);

  const themeSwitcher = createThemeSwitcher();
  document.body.appendChild(themeSwitcher);

  let selectedRow = null;

  table.querySelectorAll('tbody tr').forEach(row => {
    row.addEventListener('click', () => {
      if (selectedRow) selectedRow.classList.remove('selected');
      selectedRow = row;
      row.classList.add('selected');
    });
  });

  actions.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', async () => {
      if (!selectedRow) return;
      const col = btn.dataset.target;
      const colIndex = col === 'bar1' ? 1 : col === 'bar2' ? 2 : 3;
      let currentValue = parseInt(selectedRow.cells[colIndex].textContent);
      currentValue = clamp(currentValue + (btn.classList.contains('increase') ? 1 : -1), 0, Infinity);
      selectedRow.cells[colIndex].textContent = currentValue;
      await updateProductColumn(selectedRow.dataset.id, col, currentValue);
    });
  });
}

init();
