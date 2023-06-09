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

/* VIDEO LOADER */

async function readJSONFile() {
  try {
    const response = await fetch("./resources/json/my-json.json");
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error:", error);
  }
}

const myJson = await readJSONFile();
const videosContainer = document.querySelector(".videos-container");
const podcastContainer = document.querySelector("#podcast .podcast-frame");

const videosArray = myJson.videos.map((video) => {
  return `<div class="video" id="${video.id}">
    <div class="video-description">
    <h2>Music!</h2>
      <h3 class="video-artist">${video.artist}</h3>
      <a
        class="video-link"
        target="_blank"
        href="${video.link}"
        >${video.title}
        </a
      >
      <p class="video-duration">
        <strong>Duración: </strong>${video.duration} minutes
      </p>
      <p class="video-style">
        <strong>Estilo: </strong>${video.style}
      </p>
      </div>
      <div class="video-frame">
      <iframe
        width="560"
        height="315"
        src="${video.embeddedLink}"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      </div>
    </div>
  </div>`;
});

const podcastArray = myJson.podcast.map((podcast) => {
  return `
    <iframe
      src="${podcast.link}"
      width="560"
      height="380"
      frameborder="0"
      allowtransparency="true"
      allow="encrypted-media"
    ></iframe>`;
});

videosContainer.innerHTML = videosArray.join("");
podcastContainer.innerHTML = podcastArray.join("");
