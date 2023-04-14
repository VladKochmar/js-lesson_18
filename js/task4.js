function threeWishes(wishesList) {
   for (let i = 0; i < 3; i++) {
      const randomIndex = Math.floor(Math.random() * wishesList.length)
      const div = document.createElement('div')
      div.classList.add('block__text')
      div.textContent = wishesList[randomIndex]
      document.querySelector('.block__wishes').append(div)
   }
}

window.onload = () => {
   const wishesList = ['Мир', 'Грощі', 'Здоров\'я', 'Щастя', 'Перемога']
   threeWishes(wishesList)
}