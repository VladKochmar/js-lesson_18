function converter(usdRate, eurRate) {
   const uah = parseFloat(document.getElementById('uah').value)
   const dollars = uah / usdRate
   const euros = uah / eurRate
   document.getElementById('usd').value = dollars.toFixed(2)
   document.getElementById('eur').value = euros.toFixed(2)
}

const dollarExchangeRate = 37.45, euroExchangeRate = 41.81
document.getElementById('converterButton').onclick = () => converter(dollarExchangeRate, euroExchangeRate)