const passwordInput = document.getElementById("password");
const lengthInput = document.getElementById("length");
const lengthValue = document.getElementById("lengthValue");

lengthInput.addEventListener("input", function () {
  lengthValue.textContent = lengthInput.value;
});

function generatePassword() {
  const length = lengthInput.value;

  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()";

  let chars = "";

  if (document.getElementById("lowercase").checked) chars += lowercase;
  if (document.getElementById("uppercase").checked) chars += uppercase;
  if (document.getElementById("numbers").checked) chars += numbers;
  if (document.getElementById("symbols").checked) chars += symbols;

  if (chars === "") {
    alert("Оберіть хоча б один тип символів");
    return;
  }

  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
  }

  passwordInput.value = password;
}

function copyPassword() {
  passwordInput.select();
  document.execCommand("copy");
  alert("Пароль скопійовано");
}

generatePassword();