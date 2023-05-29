function calculateAge() {
  var inpday = document.getElementById("inpmon").value;
  var inpmon = document.getElementById("inpmon").value;
  var inpyea = document.getElementById("inpyea").value;
  var outday = document.getElementById("day");
  var outmon = document.getElementById("month");
  var outyea = document.getElementById("year");
  var today = new Date();

  var age = today.getFullYear() - inpyea;
  var month = today.getMonth() - inpmon;
  var day = today.getDate() - inpday;

  if (month < 0 || (month === 0 && day < 0)) {
    age--;
    month += 12;
  }

  outyea.innerHTML = age;
  outmon.innerHTML = month;
  outday.innerHTML = day;

  console.log(age);
  console.log(month);
  console.log(day);
}
