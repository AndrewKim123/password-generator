var caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "0123456789";
var specialchar = "@!?$%#_";
var temp = "";
var password = "";

document.querySelector("button").addEventListener("click", handleClick);

function handleClick() {
  var count = prompt("How long do you want your password to be (8-128)?");
  if (isNaN(count) || count > 128 || count < 8) {
    alert("Please add a valid number (8-128)!");
    return handleClick();
  };

  var upper = confirm("Do you want uppercase letters?");
  if (upper) {
    temp += caps;
  };

  var lower = confirm("Do you want lowercaes letters?");
  if (lower) {
    temp += caps.toLowerCase();
  };

  var special = confirm("Do you want special characters?");
  if (special) {
    temp += specialchar;
  };

  var num = confirm("Do you want numbers?");
  if (num) {
    temp += number;
  };

  for (let i = 0; i < count; i++) {
    password += temp[Math.floor(Math.random() * temp.length)];
  };

  document.querySelector('#password').innerText = password;
}
