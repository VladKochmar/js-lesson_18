function trip() {
   const transportValue = parseInt(document.querySelector('.items-block__select').value)
   const foodList = document.querySelectorAll('.checkbox__input')
   const guideList = document.querySelectorAll('.options__input')

   let foodValue = 0

   for (let input of foodList) {
      if (input.checked) foodValue += parseInt(input.value)
   }

   let guideValue = 0

   for (let input of guideList) {
      if (input.checked) guideValue += parseInt(input.value)
   }

   const sum = transportValue + foodValue + guideValue

   document.querySelector('.block__result').innerHTML = `Загальна сума: ${sum}грн`
}

document.querySelector('.block__button').onclick = trip