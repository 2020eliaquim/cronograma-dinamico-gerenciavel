const hiddenAside = document.querySelector("aside");
const iconArrowMenu = document.querySelector("#menu-icon-arrow");
const iconBarwMenu = document.querySelector("#menu-icon");

function ShowHideBar() {
  if (hiddenAside.classList.contains("hide")) {
    hiddenAside.classList.add('show');
    hiddenAside.classList.remove('hide');

    iconBarwMenu.classList.remove('show');
    iconBarwMenu.classList.add('hidden');

    iconArrowMenu.classList.add('show');
    iconArrowMenu.classList.remove('hidden');
  } else {
    hiddenAside.classList.add('hide');
    hiddenAside.classList.remove('show');

    iconArrowMenu.classList.add('hidden');
    iconArrowMenu.classList.remove('show');

    iconBarwMenu.classList.add('show');
    iconBarwMenu.classList.remove('hidden');
  }
}

iconBarwMenu.addEventListener("click", ShowHideBar);
iconArrowMenu.addEventListener("click", ShowHideBar);