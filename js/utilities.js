function addToList(target) {
  const listTitleContainer = document.getElementById('list-title-container');
  let count = listTitleContainer.childElementCount;
  const cardTitle = target.parentNode.childNodes[7].childNodes[1].innerText;

  console.log(cardTitle);
  const p = document.createElement('p');
  p.className = 'text-2xl font-medium py-1';
  console.log(count);
  p.innerHTML = `${count + 1}. ${cardTitle}`;
  listTitleContainer.appendChild(p);
}
