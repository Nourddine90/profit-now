function calculate() {
  let capital = document.getElementById("capital").value;
  let profit = document.getElementById("profit").value;

  let result = capital * (profit / 100);

  document.getElementById("result").innerText =
    "الربح المتوقع: " + result + " درهم";
}
