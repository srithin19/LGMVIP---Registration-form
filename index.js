const form = document.querySelector(".form");
const btn = document.querySelector(".button");
const firstname = document.querySelector(".first-name");
const email = document.querySelector(".email");
const rollno = document.querySelector(".rollno");
const contact = document.querySelector(".contact");
const address = document.querySelector(".address");
const college = document.querySelector(".college");


form.addEventListener("submit", function (e) {
  e.preventDefault();
  check();
  result();
  e.target.reset();
});

function result() {
  let newEl = document.createElement("div");
  document.body.appendChild(newEl);

  let newPara1 = document.createElement("p");
  let newPara2 = document.createElement("p");
  let newPara3 = document.createElement("p");
  let newPara4 = document.createElement("p");
  let newPara5 = document.createElement("p");
  let newPara6 = document.createElement("p");

  newPara1.className = "para";
  newPara2.className = "para";
  newPara3.className = "para";
  newPara4.className = "para";
  newPara5.className = "para";
  newPara6.className = "para";
 

  newEl.appendChild(newPara1);
  newEl.appendChild(newPara2);
  newEl.appendChild(newPara3);
  newEl.appendChild(newPara4);
  newEl.appendChild(newPara5);
  newEl.appendChild(newPara6);
 

  newPara1.innerHTML = firstname.value;
  newPara2.innerText = email.value;
  newPara3.innerHTML = rollno.value;
  newPara4.innerHTML = contact.value;
  newPara5.innerHTML = address.value;
  newPara6.innerHTML = college.value;
}

function check() {
  
  const address = document.queryCommandIndeterm(".address");
 
  if (firstname.value == 0) {
    window.alert("Enter your First Name");
    firstName.focus();
    return false;
  }

  if (email.value == 0) {
    window.alert("Enter your Email");
    email.focus();

    return false;
  }
  if (rollno.value == 0) {
    window.alert("Enter your Roll no");
    username.focus();

    return false;
  }
  if (contact.value == 0) {
    window.alert("Enter your Contact Details");
    contact.focus();

    return false;
  }
  if (address.value == 0) {
    window.alert("Enter your Address");
    address.focus();

    return false;
  }
  if (college.value == 0) {
    window.alert("Enter your College Name");
    college.focus();

    return false;
  }

  return true;
}