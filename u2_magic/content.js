// Find and replace the value of the "Expiration" field
const hoursInput = document.querySelector('input[name="hours"]');

if (hoursInput) {
  hoursInput.value = "24";
}

// Select the "For Myself Only" radio option
const radioLabel = document.querySelector('label[for="s_user_self"]');

if (radioLabel) {
  const radioInput = document.getElementById(radioLabel.getAttribute("for"));

  if (radioInput) {
    radioInput.checked = true;
  }
}

// Click the "Calculate UCoins Need" button
const queryButton = document.querySelector("input#btn_query");

if (queryButton) {
  queryButton.click();
}
