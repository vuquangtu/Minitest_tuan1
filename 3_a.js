function getPerimeter() {
  let a = parseFloat(document.getElementById("numA").value);
  let periMeter = 4 * a;
  let area = a * a;
  document.getElementById("result").innerText =
    "chu vi của hình vuông là = " +
    periMeter +
    " và diện tích hình vuông là = " +
    area;
}
