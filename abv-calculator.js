const sgOgInput = document.getElementById('sg-og-input');
const platoOgInput = document.getElementById('plato-og-input');
const sgFgInput = document.getElementById('sg-fg-input');
const platoFgInput = document.getElementById('plato-fg-input');
const abvResult = document.getElementById('abv-result');
const abvCalculatorResult = document.getElementById('calculation-result--abv');

sgOgInput.addEventListener('change', (e) => convertSgToPlato(e, 'og'));
platoOgInput.addEventListener('change', (e) => convertPlatoToSg(e, 'og'));
sgFgInput.addEventListener('change', (e) => convertSgToPlato(e, 'fg'));
platoFgInput.addEventListener('change', (e) => convertPlatoToSg(e, 'fg'));

function convertSgToPlato(e, field) {
  const sgValue = e.target.value

  if (!sgValue) {
    return
  }

  const platoValue = Math.round(
    ((135.997 * (Math.pow(sgValue, 3))) - (630.272 * (sgValue * sgValue)) + (1111.14 * sgValue) - 616.868)
    * 10
  ) / 10

  if (field === 'og') {
    platoOgInput.value = platoValue;
  }
  else if (field === 'fg') {
    platoFgInput.value = platoValue;
  }
}

function convertPlatoToSg(e, field) {
  const platoValue = e.target.value

  if (!platoValue) {
    return
  }

  const sgValue = Math.round(
    (1 + (platoValue / (258.6 - (227.1 * (platoValue / 258.2) ) )))
    * 1000
  ) / 1000

  if (field === 'og') {
    sgOgInput.value = sgValue;
  }
  else if (field === 'fg') {
    sgFgInput.value = sgValue;
  }
}

function calculateAbv() {
  const ogValue = sgOgInput.value
  const fgValue = sgFgInput.value

  if (!ogValue || !fgValue) {
    return;
  }

  const abvValue = Math.round(((ogValue - fgValue) * 131.25) * 100) / 100

  abvResult.innerHTML = `${abvValue}%`
  abvCalculatorResult.classList.remove('hidden')
}
