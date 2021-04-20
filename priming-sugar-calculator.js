const beerStylesCo2 = {
  'American Amber Ale': 2.3,
  'American Barley Wine': 2.1,
  'American Brown Ale': 2.4,
  'American Pale Ale': 2.4,
  'American Wheat Beer': 2.6,
  'Baltic Porter': 2.2,
  'Barley Wine': 2.2,
  'Bavarian Dunkel': 2.4,
  'Bavarian Hefe Weizen': 3.6,
  'Bavarian Helles': 2.4,
  'Belgian Blond': 2.9,
  'Belgian Dubbel': 3.0,
  'Belgian Strong Golden Ale': 3.3,
  'Belgian Tripel': 3.3,
  'Bière de Garde': 3.3,
  'Bock': 2.5,
  'Breakfast Stout': 2.0,
  'British Bitter': 1.5,
  'British Old Ale': 2.2,
  'California Common': 2.6,
  'Cream Ale': 2.6,
  'Czech Pilsner': 2.3,
  'Dopplebock': 2.4,
  'Double IPA': 2.2,
  'Dry Irish Stout': 1.9,
  'Dunkelweizen': 3.2,
  'English Brown Ale': 2.1,
  'English Pale Ale': 1.9,
  'Extra Special Bitter': 1.7,
  'German Alt': 2.3,
  'Imperial Stout': 2.2,
  'India pale ale': 2.4,
  'Irish Red Ale': 2.2,
  'Kölsch': 2.7,
  'Maibock': 2.3,
  'Mild Ale': 1.8,
  'Oktoberfest': 2.5,
  'Phat Tyre Amber Ale': 2.5,
  'Porter': 2.1,
  'Rauchbier': 2.3,
  'Roggenbier': 3.1,
  'Saison': 3.2,
  'Schwarzbier': 2.3,
  'Scottish 60/': 1.9,
  'Scottish 80/': 2.0,
  'Scottish Wee Heavy': 2.1,
  'Stout': 2.1,
  'Winter Ale': 2.2,
  'Witbier': 3.0,
}

const enteredCo2VolumeInput = document.getElementById('co2-input');
const beerVolumeInput = document.getElementById('beer-volume-input');
const roomTemperatureInput = document.getElementById('room-temperature-input');
const beerStyleSelector = document.getElementById('beer-style');
const dextroseResult = document.getElementById('dextrose-result');
const sucroseResult = document.getElementById('sucrose-result');
const honeyResult = document.getElementById('honey-result');
const sugarCalculatorResult = document.getElementById('calculation-result--priming-sugar');

for (style in beerStylesCo2) {
  option = document.createElement("option");
  option.text = `${style} - ${beerStylesCo2[style]}`
  option.value = beerStylesCo2[style]

  beerStyleSelector.add(option)
}

function calculateSugarAmounts() {
  const co2Volume = enteredCo2VolumeInput.value || beerStyleSelector.value
  const beerVolume = beerVolumeInput.value
  const roomTemperature = roomTemperatureInput.value

  if (!co2Volume || !beerVolume || !roomTemperature) {
    return;
  }

  const dextroseAmount =
    15.195 *
    (beerVolume / 3.785411784) *
    (co2Volume - 3.0378 + 0.050062 * (roomTemperature * 1.8 + 32) - 0.00026555 * (roomTemperature * 1.8 + 32) ** 2);
  const sucroseAmount = (dextroseAmount * 42) / 46
  const honeyAmount = (dextroseAmount * 42) / 38 / 0.95

  dextroseResult.innerHTML = `${dextroseAmount.toFixed(2)}g`
  sucroseResult.innerHTML = `${sucroseAmount.toFixed(2)}g`
  honeyResult.innerHTML = `${honeyAmount.toFixed(2)}g`
  sugarCalculatorResult.classList.remove('hidden')
}


