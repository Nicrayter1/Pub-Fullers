import { enableDragDrop } from '../utils/dragDrop.js';

export function createProductTable(products) {
  const table = document.createElement('table');
  table.id = 'products-table';
  table.innerHTML = `
    <thead>
      <tr>
        <th>Продукт</th>
        <th>Бар1</th>
        <th>Бар2</th>
        <th>Бочковая</th>
      </tr>
    </thead>
    <tbody>
      ${products.map(p => `
        <tr data-id="${p.id}" draggable="true">
          <td>${p.name}</td>
          <td>${p.bar1}</td>
          <td>${p.bar2}</td>
          <td>${p.keg || 0}</td>
        </tr>`).join('')}
    </tbody>
  `;
  enableDragDrop(table);
  return table;
}
