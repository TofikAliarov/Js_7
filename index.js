const btns = document.getElementsByTagName("span");
const operators = ["+", "-", "*", "/"];
let endOnPoint = false;
for (let i = 0; i < btns.length; i++) {
  btns[i].onclick = function (e) {
    const input = document.querySelector(".screen-input");
    const inputVal = input.innerHTML;
    const btnVal = this.innerHTML;

    if (btnVal == "C") {
      input.innerHTML = "";
      endOnPoint = false;
    } else if (btnVal == "=") {
      let equation = inputVal;
      const lastChar = equation[equation.length - 1];

      if (operators.indexOf(lastChar) > -1 || lastChar == ".")
        equation = equation.replace(/.$/, "");

      if (equation) {
        input.innerHTML = parseFloat(eval(equation).toFixed(8));
      }

      endOnPoint = false;
    } else if (operators.indexOf(btnVal) > -1) {
      const lastChar = inputVal[inputVal.length - 1];

      if (inputVal != "" && operators.indexOf(lastChar) == -1) {
        input.innerHTML += btnVal;
      } else if (inputVal == "" && btnVal == "-") {
        input.innerHTML += btnVal;
      }

      if (operators.indexOf(lastChar) > -1 && inputVal.length > 1) {
        console.log(lastChar);
        input.innerHTML = inputVal.replace(/.$/, btnVal);
      }

      endOnPoint = false;
    } else if (btnVal == ".") {
      if (!endOnPoint) {
        input.innerHTML += btnVal;
        endOnPoint = true;
      }
    } else {
      input.innerHTML += btnVal;
    }

    e.preventDefault();
  };
}
