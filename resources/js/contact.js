document
  .getElementById("contact-us-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var fullName = document.getElementById("full-name")
    var email = document.getElementById("email")
    var phone = document.getElementById("phone")
    var message = document.getElementById("message")

    if (fullName.value.trim() === "") {
      displayMessage("Please enter your full name", "error");
      return;
    }

    if (email.value.trim() === "") {
      displayMessage("Please enter your email", "error");
      return;
    }

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
      displayMessage("Please enter a valid email address", "error");
      return;
    }

    if (message.value.trim() === "") {
      displayMessage("Please enter your message", "error");
      return;
    }

    if (fullName.value.toLowerCase() === "ironhack") {
      displayMessage(
        "You cannot be Ironhack, because I am Ironhack.",
        "error"
      );
      return;
    }

    displayMessage("Form submitted successfully.", "success");
    fullName.value = "";
    email.value = "";
    phone.value = "";
    message.value = "";

    // document.getElementById("contact-form").submit();
  });

function displayMessage(message, type) {
  var messageElement = document.createElement("div");
  messageElement.textContent = message;
  messageElement.classList.add("message", type + "-message");

  var messageContainer = document.getElementById("message-container");
  messageContainer.appendChild(messageElement);

  setTimeout(function () {
    messageElement.remove();
  }, 3000);
}

/* MENU */
const btnHamburger = document.querySelector('#btnHamburger');
const btnCross = document.querySelector('#btnCross');
const menu = document.querySelector('.menu');

btnHamburger.addEventListener('click',(e) => {
  e.target.style.opacity = '0';
  e.target.style.zIndex = '0';
  btnCross.style.opacity = '1';
  btnCross.style.zIndex = '1';
  menu.style.height = '210px';
})

btnCross.addEventListener('click',(e) => {
  e.target.style.opacity = '0';
  e.target.style.zIndex = '0';
  btnHamburger.style.opacity = '1';
  btnHamburger.style.zIndex = '1';
  menu.style.height = '0';
})
