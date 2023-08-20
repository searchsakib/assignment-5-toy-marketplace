function combinedFunc(target) {
  addToList(target);
  priceCalculation(target);
}

function addToList(target) {
  // variables for card titles
  const listTitleContainer = document.getElementById('list-title-container');
  let count = listTitleContainer.childElementCount;
  const cardTitle = target.parentNode.childNodes[7].childNodes[1].innerText;
  // console.log(cardTitle);

  // creating a p tag and inserting info
  const p = document.createElement('p');
  p.className = 'text-2xl font-medium py-1';
  // console.log(count);
  p.innerHTML = `${count + 1}. ${cardTitle}`;
  listTitleContainer.appendChild(p);
}

function priceCalculation(target) {
  // variables for price calculations
  const totalPrice = document.getElementById('total-price');
  let totalPriceValue = parseFloat(totalPrice.innerText);
  const discount = document.getElementById('discount');
  let discountValue = parseFloat(discount.innerText);
  const afterDiscount = document.getElementById('after-discount');
  const afterDiscountValue = parseFloat(afterDiscount.innerText);

  // Price Calculations
  const cardPrice =
    target.parentNode.childNodes[7].childNodes[3].innerText.split(' ')[0];
  const cardPriceValue = parseFloat(cardPrice);

  const grandTotal = totalPriceValue + cardPriceValue;
  totalPrice.innerText = grandTotal;
}
