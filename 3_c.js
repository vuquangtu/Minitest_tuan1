function getPerimeter() {
  let a = parseFloat(document.getElementById("numA").value);
  let b = parseFloat(document.getElementById("numB").value);
  let result = 0;
  if (a > b) {
    document.getElementById("result").innerText =
      "hãy nhập lại a phải nhỏ hơn b";
  } else {
    for (i = a; i <= b; i++) {
      result += i;
    }
    document.getElementById("result").innerText =
      "tổng từ A đến B là = " + result;
  }
}
