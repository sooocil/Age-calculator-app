let Age_day = document.getElementById("Age_day");
let Age_month = document.getElementById("Age_month");
let Age_year = document.getElementById("Age_year");

let button = document.getElementById("btn");

let TDate = new Date();
let d2 = TDate.getDay();
let m2 = TDate.getMonth();
let y2 = TDate.getFullYear();
console.log(d2);
console.log(m2);
console.log(y2);

function run() {
  let field = document.getElementById("field");
  let d1 = document.getElementById("Day").value;
  let m1 = document.getElementById("Month").value;
  let y1 = document.getElementById("Year").value;
  console.log(d1);
  console.log(m1);
  console.log(y1);

  if (d1 > 31 || m1 > 12 || y1 > y2 || d1 < 0 || m1 < 0 || y1 < 0) {
    field.innerHTML = "Invalid date*";
  } else {
    let aged = Math.abs(d2 - d1);
    let agem = Math.abs(m2 - m1);
    let agey = Math.abs(y2 - y1);
    Age_day.innerHTML = aged + " day";
    Age_month.innerHTML = agem + " month";
    Age_year.innerHTML = agey + " year";
  }
}
