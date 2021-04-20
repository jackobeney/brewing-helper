const readingInput = document.getElementById('reading-input');
const temperatureInput = document.getElementById('temperature-input');
const calibrationInput = document.getElementById('calibration-input');
const hydrometerCorrectionResult = document.getElementById('hydrometer-correction-result');
const hydrometerCalculatorResult = document.getElementById('calculation-result--hydrometer');


function calculateHydrometerReading() {
  const readingValue = readingInput.value
  const temperatureValue = temperatureInput.value
  const calibrationValue = calibrationInput.value

  if (!readingValue || !temperatureValue || !calibrationValue) {
    return;
  }

  let hydrometerCorrectedValue =
    readingValue * ((
      1.00130346 -
      0.000134722124 * (temperatureValue * (9 / 5) + 32) +
      0.00000204052596 * (temperatureValue * (9 / 5) + 32) ** 2 -
      0.00000000232820948 * (temperatureValue * (9 / 5) + 32) ** 3
    ) / (
      1.00130346 -
      0.000134722124 * (calibrationValue * (9 / 5) + 32) +
      0.00000204052596 * (calibrationValue * (9 / 5) + 32) ** 2 -
      0.00000000232820948 * (calibrationValue * (9 / 5) + 32) ** 3
    ));
  hydrometerCorrectedValue = Math.round(hydrometerCorrectedValue * 1000) / 1000

  hydrometerCalculatorResult.classList.remove('hidden')
  hydrometerCorrectionResult.innerHTML = hydrometerCorrectedValue
}
