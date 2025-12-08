export function enableDragDrop(table) {
  let dragged;

  table.querySelectorAll('tbody tr').forEach(row => {
    row.addEventListener('dragstart', e => {
      dragged = row;
      e.dataTransfer.effectAllowed = 'move';
    });

    row.addEventListener('dragover', e => e.preventDefault());
    row.addEventListener('drop', e => {
      e.preventDefault();
      if (dragged !== row) {
        const tbody = table.querySelector('tbody');
        tbody.insertBefore(dragged, row.nextSibling);
      }
    });
  });
}
