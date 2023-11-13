function getPerimeter() {
  let a = parseFloat(document.getElementById("numA").value);
  let b = parseFloat(document.getElementById("numB").value);
  let c = a ** 2;
  let d = a ** b;
  document.getElementById("result").innerText =
    "A bình phương là = " + c + " Và A^B là = " + d;
}
