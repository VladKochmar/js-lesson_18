function findAge() {
   const CURRENT_YEAR = new Date().getFullYear()
   const userBirthYear = parseInt(document.getElementById('userYears').value)
   const userAge = CURRENT_YEAR - userBirthYear
   document.querySelector('.block__result').innerHTML = userAge
}

const input = document.getElementById('userYears').oninput = findAge
