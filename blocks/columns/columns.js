export default function decorate(block) {
  const cols = [...block.firstElementChild.children];
  console.log(cols);
  block.classList.add(`columns-${cols.length}-cols`);
}
