/* LOADER */
document.addEventListener("DOMContentLoaded", function () {
  const loader = document.querySelector("#loader");
  const menu = document.querySelector(".menu");

  function showLoader() {
    loader.classList.remove("hidden");
  }

  function hideLoader() {
    loader.classList.add("hidden");
    menu.style.visibility = "visible";
  }

  showLoader();

  setTimeout(hideLoader, 800);
});

/* SCROLL */
const scrollToTopBtn = document.querySelector("#scrollToTopBtn");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    scrollToTopBtn.classList.add("show");
  } else {
    scrollToTopBtn.classList.remove("show");
  }
});

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

/* MENU */
const btnHamburger = document.querySelector("#btnHamburger");
const btnCross = document.querySelector("#btnCross");
const menu = document.querySelector(".menu");

btnHamburger.addEventListener("click", (e) => {
  e.target.style.opacity = "0";
  e.target.style.zIndex = "0";
  btnCross.style.opacity = "1";
  btnCross.style.zIndex = "1";
  menu.style.height = "210px";
});

btnCross.addEventListener("click", (e) => {
  e.target.style.opacity = "0";
  e.target.style.zIndex = "0";
  btnHamburger.style.opacity = "1";
  btnHamburger.style.zIndex = "1";
  menu.style.height = "0";
});

/* FORM VALIDATION */
document
  .getElementById("contact-us-form")
  .addEventListener("submit", (event) => {
    event.preventDefault();

    const fullName = document.querySelector("#full-name");
    const email = document.querySelector("#email");
    const phone = document.querySelector("#phone");
    const message = document.querySelector("#message");

    if (fullName.value.trim() === "") {
      displayMessage("Please enter your full name", "error");
      return;
    }

    if (email.value.trim() === "") {
      displayMessage("Please enter your email", "error");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
      displayMessage("Please enter a valid email address", "error");
      return;
    }

    if (message.value.trim() === "") {
      displayMessage("Please enter your message", "error");
      return;
    }

    if (fullName.value.toLowerCase() === "ironhack") {
      displayMessage("You cannot be Ironhack, because I am Ironhack.", "error");
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
  const messageElement = document.createElement("div");
  messageElement.textContent = message;
  messageElement.classList.add("message", type + "-message");

  const messageContainer = document.querySelector("#message-container");
  messageContainer.appendChild(messageElement);

  setTimeout(() => {
    messageElement.remove();
  }, 3000);
}