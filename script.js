function calculateAge() {
  const dob = document.getElementById("dob").value;
  const result = document.getElementById("result");

  if (!dob) {
    result.innerText = "Please enter your date of birth.";
    return;
  }

  const dobDate = new Date(dob);
  const today = new Date();
  let age = today.getFullYear() - dobDate.getFullYear();
  const m = today.getMonth() - dobDate.getMonth();

  if (m < 0 || (m === 0 && today.getDate() < dobDate.getDate())) {
    age--;
  }

  result.innerText = `Your age is ${age} years.`;
}