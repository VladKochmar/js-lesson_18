function getTable() {
   let table, tr
   if (!document.querySelector('.table')) {
      table = document.createElement('table')
      table.classList.add('table')
      tr = document.createElement('tr')
      tr.classList.add('table__row')
      document.querySelector('.block__table').append(table)
      table.append(tr)
   } else {
      table = document.querySelector('.table')
      tr = document.querySelector('.table__row')
      tr.innerHTML = ''
   }
   const marksNum = parseInt(document.getElementById('marksNum').value)

   for (let i = 0; i < marksNum; i++) {
      const td = document.createElement('td')
      td.classList.add('table__column')
      td.innerHTML = `<input type="text" class="table__input">`
      tr.append(td)
   }
}

function getSum() {
   marksList = document.querySelectorAll('.table__input')

   let sum = 0

   for (const input of marksList) {
      sum += parseInt(input.value)
   }

   document.querySelector('.block__sum').innerHTML = `Сума оцінок: ${sum}`
}

document.getElementById('getTable').onclick = getTable
document.getElementById('getSum').onclick = getSum