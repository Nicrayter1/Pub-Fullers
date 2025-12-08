export function createProductActions() {
  const div = document.createElement('div');
  div.id = 'product-actions';
  div.innerHTML = `
    <button data-target="bar1" class="increase">Бар1 +</button>
    <button data-target="bar1" class="decrease">Бар1 -</button>
    <button data-target="bar2" class="increase">Бар2 +</button>
    <button data-target="bar2" class="decrease">Бар2 -</button>
    <button data-target="keg" class="increase">Бочковая +</button>
    <button data-target="keg" class="decrease">Бочковая -</button>
  `;
  return div;
}
