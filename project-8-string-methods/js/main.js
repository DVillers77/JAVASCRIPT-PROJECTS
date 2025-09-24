function greetingOne() {
  const welcome = "Welcome, ";
  let user = "UserName ";
  const school = "to The Tech Academy.";
  let entireGreetingOne = welcome.concat(user, school);
  document.getElementById("greeting-one").innerHTML = entireGreetingOne;
}
