function calculate() {
  var a = document.getElementById("inputA").value;
  var b = document.getElementById("inputB").value;

  a = parseFloat(a);
  b = parseFloat(b);

  var result = a * b;
  document.getElementById("result").innerText = "a nhân với b = " + result;
}
