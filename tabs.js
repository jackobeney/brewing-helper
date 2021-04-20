const abvTab = document.getElementById('abv-tab');
const abvCalculator = document.getElementById('abv-calculator');
const hydrometerTab = document.getElementById('hydrometer-tab');
const hydrometerCorrectionCalculator = document.getElementById('hydrometer-correction');
const primingTab = document.getElementById('priming-tab');
const primingSugarCalculator = document.getElementById('priming-calculator');

// Set ABV calculator to show by default.
abvTab.classList.add('tab-selection__option--selected');
document.body.classList.add('green');
abvCalculator.classList.remove('hidden');

function switchTab(element, tab) {
  const currentTab = document.getElementsByClassName('tab-selection__option--selected')[0];

  if (currentTab.id === element.id) {
    return;
  }

  abvTab.classList.remove('tab-selection__option--selected');
  hydrometerTab.classList.remove('tab-selection__option--selected');
  primingTab.classList.remove('tab-selection__option--selected');
  abvCalculator.classList.add('hidden');
  hydrometerCorrectionCalculator.classList.add('hidden');
  primingSugarCalculator.classList.add('hidden');
  document.body.classList.remove('green');
  document.body.classList.remove('blue');
  document.body.classList.remove('pink');

  switch(tab) {
    case 'hydrometer':
      document.body.classList.add('blue');
      hydrometerTab.classList.add('tab-selection__option--selected');
      hydrometerCorrectionCalculator.classList.remove('hidden');
      break;
    case 'priming':
      document.body.classList.add('pink');
      primingTab.classList.add('tab-selection__option--selected');
      primingSugarCalculator.classList.remove('hidden');
      break;
    default:
    case 'abv':
      document.body.classList.add('green');
      abvTab.classList.add('tab-selection__option--selected');
      abvCalculator.classList.remove('hidden');
      break;
  }

}
