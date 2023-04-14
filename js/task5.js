function getRandomNum(minNum, maxNum) {
   return Math.floor(Math.random() * (maxNum - minNum + 1) + minNum)
}

document.querySelector('.block__table').innerHTML = `
<table class="table">
   <tr class="table__row">
      <th class="table__column">${getRandomNum(0, 9)}</th>
      <th class="table__column">${getRandomNum(0, 9)}</th>
      <th class="table__column">${getRandomNum(0, 9)}</th>
   </tr>
   <tr class="table__row">
      <td class="table__column">${getRandomNum(0, 9)}</td>
      <td class="table__column">${getRandomNum(0, 9)}</td>
      <td class="table__column">${getRandomNum(0, 9)}</td>
   </tr>
   <tr class="table__row">
      <td class="table__column">${getRandomNum(0, 9)}</td>
      <td class="table__column">${getRandomNum(0, 9)}</td>
      <td class="table__column">${getRandomNum(0, 9)}</td>
   </tr>
   <tr class="table__row">
      <td class="table__column">${getRandomNum(0, 9)}</td>
      <td class="table__column">${getRandomNum(0, 9)}</td>
      <td class="table__column">${getRandomNum(0, 9)}</td>
   </tr>
</table>
`