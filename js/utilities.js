function combinedFunc(target) {
  addToList(target);
  priceCalculation(target);
}

function addToList(target) {
  // if (target.closest('.rating')) {
  //   return;
  // }

  // variables for card titles
  const listTitleContainer = document.getElementById('list-title-container');
  let count = listTitleContainer.childElementCount;
  const cardTitle = target.childNodes[7].childNodes[1].innerText;
  // console.log(target.childNodes[5].className.includes('rating'));
  // const kaka = target.childNodes[7].childNodes[1].innerText;
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
  // let discountValue = parseFloat(discount.innerText);
  const afterDiscount = document.getElementById('after-discount');
  const afterDiscountValue = parseFloat(afterDiscount.innerText);

  // Price Calculations
  const cardPrice = target.childNodes[7].childNodes[3].innerText.split(' ')[0];
  const cardPriceValue = parseFloat(cardPrice);
  const grandTotal = totalPriceValue + cardPriceValue;
  totalPrice.innerText = grandTotal.toFixed(2);
  if (grandTotal > 0) {
    const makePurchase = document.getElementById('make-purchase');
    makePurchase.classList.remove('btn-disabled');
  }
  if (grandTotal >= 200) {
    const couponApply = document.getElementById('coupon-apply');
    const couponInput = document.getElementById('coupon-input');
    couponApply.classList.remove('btn-disabled');
    couponApply.addEventListener('click', function () {
      if (couponInput.value === 'SELL200') {
        discount.innerText = (grandTotal * 0.2).toFixed(2);
        let discountValue = parseFloat(discount.innerText);
        afterDiscount.innerText = (grandTotal - discountValue).toFixed(2);
        console.log(discountValue);
        // couponApply.classList.add('btn-disabled');
        // couponInput.placeholder = 'COUPON USED';
        // couponInput.value = '';
      }
    });
  }
}
