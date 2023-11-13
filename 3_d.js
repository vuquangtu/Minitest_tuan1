function getPerimeter() {
  let a = parseFloat(document.getElementById("numA").value);
  let periMeter = a / 100;
  let b = Math.ceil(periMeter);

  document.getElementById("result").innerText = "Thế kỷ của năm trên là " + b;
}
