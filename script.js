window.onload = function () {
  document.getElementById("age-prompt").classList.add("visible");
};

function checkAge() {
  let age = parseInt(document.getElementById("age-input").value);
  if (age >= 18) {
    document.getElementById("age-prompt").classList.remove("visible");
    document.getElementById("calculator").classList.add("visible");
  } else {
    document.getElementById("age-prompt").classList.remove("visible");
    document.getElementById("apology").classList.add("visible");
  }
}

/*********************  داله العرض */

let display = document.getElementById("display");

function appendToDisplay(value) {
  display.value += value;
}
/*********************  الحذف */
function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

/*********************  العمليات الحسابية */
function calculate() {
  display.value = eval(display.value);
}
