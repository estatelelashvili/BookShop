//Submit form

// let orderForm = document.getElementById("order-form");

// let nameN = document.getElementById("input-name");
// let surName = document.getElementById("input-surname");
// let testInputName = document.getElementById("test-input-name");

// orderForm.addEventListener("submit", handleForm);

// function handleForm(event) {
//   event.preventDefault();
// }

// btnSubmit.onclick = function () {

// };

// let popUpWindow = document.getElementById("popup-window");
// let nameCopy = document.getElementById("user");
// let btnComplete = document.getElementById("btn-complete");
// btnComplete.onclick = () =>{
//  popUpWindow.style.display = "block";
// popUpWindow.innerHTML= nameCopy.value;
// }

// let pop = document.getElementById("popup-window");

// pop.innertext = nameCopy.value;

// NEW INJECTION
let btnSubmit = document.getElementById("btn-submit");
let nameField = document.getElementById("field_name");
let SurNameField = document.getElementById("field_surname");
let StreetField = document.getElementById("field_street");
let HouseField = document.getElementById("field_house");
let FlatField = document.getElementById("field_flat");
let PaymentField = document.getElementById("field_payment");
// let validName;
// let validSurName;
// let validDate;
// let validStreet;
// let validHouse;
// let validFlate;
// let validPayment;

let validName = false;
let validSurName = false;
let validDate = false;
let validStreet = false;
let validHouse = false;
let validFlate = false;
let validPayment = false;

window.onload = function () {
  nameField.focus();
};
let warnPopName = document.getElementById("warn-pop-up-name");
nameField.addEventListener("mouseleave", checkBTN);
nameField.addEventListener("input", function () {
  let val = document.getElementById("field_name").value;
  let el = document.getElementById("field_name");
  if (/^[A-Za-z]{4,}$/.test(val)) {
    el.className = "valid";
    warnPopName.style.visibility = "hidden";
    validName = false;
  } else {
    el.className = "invalid";
    warnPopName.style.visibility = "visible";
    validName = false;
  }
});
nameField.addEventListener("blur", checkBTN);
nameField.addEventListener("focusout", function () {
  // SurNameField.focus();
  let val = document.getElementById("field_name").value;
  let el = document.getElementById("field_name");
  if (val.length < 4) {
    el.className = "invalid";
    warnPopName.style.visibility = "visible";
    validName = false;
  } else {
    el.className = "valid";
    warnPopName.style.visibility = "hidden";
    validName = true;
  }
});

let warnPopSurName = document.getElementById("warn-pop-up-surname");
SurNameField.addEventListener("input", checkBTN);
SurNameField.addEventListener("input", function () {
  let val = document.getElementById("field_surname").value;
  let el = document.getElementById("field_surname");
  if (/^[A-Za-z]{5,}$/.test(val)) {
    el.className = "valid";
    warnPopSurName.style.visibility = "hidden";
    validSurName = true;
  } else {
    el.className = "invalid";
    warnPopSurName.style.visibility = "visible";
    validSurName = false;
  }
});
document.addEventListener("mousemove", checkBTN);
SurNameField.addEventListener("mouseleave", checkBTN);
SurNameField.addEventListener("focusout", function () {
  // dateField.focus();
  let val = document.getElementById("field_surname").value;
  let el = document.getElementById("field_surname");
  if (val.length < 5) {
    el.className = "invalid";
    warnPopSurName.style.visibility = "visible";
    validSurName = false;
  } else {
    el.className = "valid";
    warnPopSurName.style.visibility = "hidden";
    validSurName = true;
  }
});

let dateField = document.getElementById("field_date");
let warnPopDate = document.getElementById("warn-pop-up-date");

// let userDate = new Date(datePicked);
// let today = new Date();
// let tomorrow = today.setDate(tomorrow.getDate() + 1);

dateField.addEventListener("input", checkBTN);
dateField.addEventListener("mouseleave", function () {
  let el = document.getElementById("field_date");
  let today = new Date();
  let datePicked = document.getElementById("field_date").value;
  let userDate = new Date(datePicked);
  if (userDate <= today) {
    el.className = "invalid";
    warnPopDate.style.visibility = "visible";
    validDate = false;
  } else {
    el.className = "valid";
    warnPopDate.style.visibility = "hidden";
    validDate = true;
  }
});
dateField.addEventListener("mouseleave", checkBTN);
dateField.addEventListener("focusout", function () {
  // StreetField.focus();
  let el = document.getElementById("field_date");
  let today = new Date();
  let datePicked = document.getElementById("field_date").value;
  let userDate = new Date(datePicked);
  if (datePicked) {
    // console.log(datePicked);
    el.className = "valid";
    warnPopDate.style.visibility = "hidden";
    validDate = true;
  } else {
    el.className = "invalid";
    warnPopDate.style.visibility = "visible";
    validDate = false;
  }
});

let warnPopStreet = document.getElementById("warn-pop-up-street");

StreetField.addEventListener("mouseleave", checkBTN);
StreetField.addEventListener("input", function () {
  let val = document.getElementById("field_street").value;
  let el = document.getElementById("field_street");
  if (/^[0-9a-zA-Z]{5,}$/.test(val)) {
    el.className = "valid";
    warnPopStreet.style.visibility = "hidden";
    validStreet = true;
  } else {
    el.className = "invalid";
    warnPopStreet.style.visibility = "visible";
    validStreet = false;
  }
});
StreetField.addEventListener("mouseleave", checkBTN);
StreetField.addEventListener("focusout", function () {
  // HouseField.focus();
  let val = document.getElementById("field_street").value;
  let el = document.getElementById("field_street");
  if (val.length < 5) {
    el.className = "invalid";
    warnPopStreet.style.visibility = "visible";
    validStreet = false;
  } else {
    el.className = "valid";
    warnPopStreet.style.visibility = "hidden";
    validStreet = true;
  }
});

let warnPopHouse = document.getElementById("warn-pop-up-house");
HouseField.addEventListener("mouseleave", checkBTN);
HouseField.addEventListener("input", function () {
  let val = document.getElementById("field_house").value;
  let el = document.getElementById("field_house");
  if (/^[1-9]+[0-9]*$/.test(val)) {
    el.className = "valid";
    warnPopHouse.style.visibility = "hidden";
    validHouse = true;
  } else {
    el.className = "invalid";
    warnPopHouse.style.visibility = "visible";
    validHouse = false;
  }
});
HouseField.addEventListener("mouseleave", checkBTN);
HouseField.addEventListener("focusout", function () {
  // FlatField.focus();
  let val = document.getElementById("field_house").value;
  let el = document.getElementById("field_house");
  if (val.length === 0) {
    el.className = "invalid";
    warnPopHouse.style.visibility = "visible";
    validHouse = false;
  } else {
    el.className = "valid";
    warnPopHouse.style.visibility = "hidden";
    validHouse = true;
  }
});

let warnPopFlat = document.getElementById("warn-pop-up-flat");
FlatField.addEventListener("mouseleave", checkBTN);
FlatField.addEventListener("input", function () {
  let val = document.getElementById("field_flat").value;
  let el = document.getElementById("field_flat");
  if (/^[1-9–]+[-0-9–]*$/.test(val)) {
    el.className = "valid";
    warnPopFlat.style.visibility = "hidden";
    validFlate = true;
  } else {
    el.className = "invalid";
    warnPopFlat.style.visibility = "visible";
    validFlate = false;
  }
});

FlatField.addEventListener("mouseleave", checkBTN);
FlatField.addEventListener("focusout", function () {
  PaymentField.focus();
  let val = document.getElementById("field_flat").value;
  let el = document.getElementById("field_flat");
  if (val.length === 0) {
    el.className = "invalid";
    warnPopFlat.style.visibility = "visible";
    validFlate = false;
  } else {
    el.className = "valid";
    warnPopFlat.style.visibility = "hidden";
    validFlate = true;
  }
});

let cashSelected = false;
let cardSelected = false;
let cashField = document.getElementById("cash-radio");
let cardField = document.getElementById("card-radio");
let warnPopPayment = document.getElementById("warn-pop-up-payment");

cashField.addEventListener("mouseleave", checkBTN);
cashField.addEventListener("change", function () {
  if (cashField.checked) {
    cashSelected = true;
    cardField.checked = false;
    warnPopPayment.style.visibility = "hidden";
    validPayment = true;
  }
});

cardField.addEventListener("mouseleave", checkBTN);
cardField.addEventListener("change", function () {
  if (cardField.checked) {
    cardSelected = true;
    cashField.checked = false;
    warnPopPayment.style.visibility = "hidden";
    validPayment = true;
  }
});

PaymentField.addEventListener("mouseleave", checkBTN);
PaymentField.addEventListener("focusout", checkBTN);

PaymentField.addEventListener("focusout", function () {
  if (cashField.checked === false && cardField.checked === false) {
    warnPopPayment.style.visibility = "visible";
    // validPayment = false;
  }
});

var checks = document.querySelectorAll(".check");
var max = 2;
for (var i = 0; i < checks.length; i++) checks[i].onclick = selectiveCheck;
function selectiveCheck(event) {
  var checkedChecks = document.querySelectorAll(".check:checked");
  if (checkedChecks.length >= max + 1) {
    return false;
  }
}

let fieldArr = [
  nameField.value,
  SurNameField.value,
  dateField.value,
  HouseField.value,
  StreetField.value,
  FlatField.value,
  cardField.value,
  cashField.value,
];

function checkBTN() {
  console.log(validName);
  console.log(validSurName);
  console.log(validDate);
  console.log(validStreet);
  console.log(validHouse);
  console.log(validFlate);
  console.log(validPayment);
  if (
    validName &&
    validDate &&
    validSurName &&
    validStreet &&
    validHouse &&
    validFlate &&
    validPayment
  ) {
    btnSubmit.disabled = false;
    btnSubmit.style.cursor = "not-allowed;";
  } else {
    btnSubmit.disabled = true;
    btnSubmit.style.cursor = "pointer";
  }
}

let closePopUpBtn = document.getElementById("close-btn");
let addressInfo = document.getElementById("address-summary");
let customerInfo = document.getElementById("customer-summary");
let PopUp = document.getElementById("popM");

btnSubmit.addEventListener("click", (ev) => {
  // alert("good so far");
  addressInfo.innerText = `The delivery address is ${StreetField.value} ${HouseField.value} ${FlatField.value}.`;
  customerInfo.innerText = `Customer ${nameField.value} ${SurNameField.value}.`;
  PopUp.style.display = "block";
  ev.preventDefault();
});

closePopUpBtn.addEventListener("click", () => {
  PopUp.style.display = "none";
  // location.href = "./OrderForm.html";
  nameField.focus();
});
