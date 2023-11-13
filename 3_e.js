let a = +prompt("nhập chiều dài cạnh a:");
let b = +prompt("nhập chiều dài cạnh  b:");
let c = +prompt("nhập chiều dài cạnh c:");
function checkTriangleType(a, b, c) {
  if (a + b > c && b + c > a && a + c > b) {
    if (a === b && b === c) {
      alert("là tam giác đều");
    } else if (a === b || b === c || a === c) {
      alert("là tam giác cân");
    } else if (
      a ** 2 + b ** 2 === c ** 2 ||
      b ** 2 + c ** 2 === a ** 2 ||
      a ** 2 + c ** 2 === b ** 2
    ) {
      alert("là tam giác vuông");
    } else {
      alert("là tam giác thường");
    }
  } else {
    alert("không phải là tam giác");
  }
}

checkTriangleType(a, b, c);
