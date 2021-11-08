const toggleBar = document.querySelector("#menu-icon");
const hiddenAside = document.querySelector("aside");
const iconArrowMenu = document.querySelector("#menu-icon-arrow");
const iconBarwMenu = document.querySelector("#menu-icon");

function hideBar() {
  if (hiddenAside.classList.contains("hide")) {
    hiddenAside.classList.add("hide");
    hiddenAside.classList.remove("hide");
    // button show
    iconBarwMenu.classList.add("hidden");
    iconBarwMenu.classList.remove("show");

    iconArrowMenu.classList.add("show");
    iconArrowMenu.classList.remove("hidden");
  } else {
    hiddenAside.classList.add("hide");
  }
}

toggleBar.addEventListener("click", hideBar);
