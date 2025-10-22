// --- CONSTANTES ---
const THEME_SWITCH_ID = "theme_switch";
const DARK_MODE_CLASS = "darkmode";
const DARK_MODE_VALUE = "dark";
const LOCAL_STORAGE_KEY = "color-theme";
const LOGO_ID = "logo";
const DARK_LOGO_SRC = "./assets/svg/titulo-dark.svg";
const LIGHT_LOGO_SRC = "./assets/svg/titulo-clear.svg";
const HEADER_IMG = "headerImg";
const DARK_HEADER_IMG_SRC = "./assets/svg/header.svg";
const LIGHT_HEADER_IMG_SRC = "./assets/svg/header-white.svg";
const TUCAN_ID = "tucan";
const DARK_TUCAN_SRC = "./assets/svg/toucan.svg";
const LIGHT_TUCAN_SRC = "./assets/svg/toucan-white.svg";
const GRAFIC_ID = "grafic";
const DARK_GRAFIC_SRC = "./assets/svg/grafica.svg";
const LIGHT_GRAFIC_SRC = "./assets/svg/grafica-white.svg";
const GRAFIC_TWO_ID = "graficTwo";
const DARK_GRAFIC_TWO_SRC = "./assets/svg/grafica2.svg";
const LIGHT_GRAFIC_TWO_SRC = "./assets/svg/grafica2-white.svg";
const TUCAN_TWO_ID = "tucanTwo";
const DARK_TUCAN_TWO_SRC = "./assets/svg/toucan2.svg";
const LIGHT_TUCAN_TWO_SRC = "./assets/svg/toucan2-white.svg";

// 1. Elementos recuperados del DOM
const themeSwitch = document.getElementById(THEME_SWITCH_ID);
const logo = document.getElementById(LOGO_ID);
const headerImg = document.getElementById(HEADER_IMG);
const tucan = document.getElementById(TUCAN_ID);
const grafic = document.getElementById(GRAFIC_ID);
const graficTwo = document.getElementById(GRAFIC_TWO_ID);
const tucanTwo = document.getElementById(TUCAN_TWO_ID);

// 2. Función principal para cambiar el tema
const toggleTheme = () => {
  const isDarkMode = document.body.classList.contains(DARK_MODE_CLASS);

  if (isDarkMode) {
    // Quitar clase y actualizar llave en localStorage
    document.body.classList.remove(DARK_MODE_CLASS);
    localStorage.setItem(LOCAL_STORAGE_KEY, "light");

    // ------ (a). Aplicando el logo para Modo Claro ------
    if (logo) {
      logo.src = DARK_LOGO_SRC;
    }
    if (headerImg) {
      headerImg.src = DARK_HEADER_IMG_SRC;
    }
    if (tucan) {
      tucan.src = DARK_TUCAN_SRC;
    }
    if (grafic) {
      grafic.src = DARK_GRAFIC_SRC;
    }
    if (graficTwo) {
      graficTwo.src = DARK_GRAFIC_TWO_SRC;
    }
    if (tucanTwo) {
      tucanTwo.src = DARK_TUCAN_TWO_SRC;
    }
  } else {
    // Agrego la clase y actualizo la llave localStorage que está definida por defecto
    document.body.classList.add(DARK_MODE_CLASS);
    localStorage.setItem(LOCAL_STORAGE_KEY, DARK_MODE_VALUE);

    // ------ (b). Aplicando el logo para Modo Oscuro ------
    if (logo) {
      logo.src = LIGHT_LOGO_SRC;
    }
    if (headerImg) {
      headerImg.src = LIGHT_HEADER_IMG_SRC;
    }
    if (tucan) {
      tucan.src = LIGHT_TUCAN_SRC;
    }
    if (grafic) {
      grafic.src = LIGHT_GRAFIC_SRC;
    }
    if (graficTwo) {
      graficTwo.src = LIGHT_GRAFIC_TWO_SRC;
    }
    if (tucanTwo) {
      tucanTwo.src = LIGHT_TUCAN_TWO_SRC;
    }
  }
};

// 3. Persistencia e inicialización del tema
const storedTheme = localStorage.getItem(LOCAL_STORAGE_KEY);

const initializeTheme = () => {
  if (storedTheme === DARK_MODE_VALUE) {
    document.body.classList.add(DARK_MODE_CLASS);
  }

  // ------ Aplicando las imagenes correctas al cargar la página ------
  if (logo) {
    logo.src = document.body.classList.contains(DARK_MODE_CLASS)
      ? LIGHT_LOGO_SRC
      : DARK_LOGO_SRC;
  }
  if (headerImg) {
    headerImg.src = document.body.classList.contains(DARK_MODE_CLASS)
      ? LIGHT_HEADER_IMG_SRC
      : DARK_HEADER_IMG_SRC;
  }
  if (tucan) {
    tucan.src = document.body.classList.contains(DARK_MODE_CLASS)
      ? LIGHT_TUCAN_SRC
      : DARK_TUCAN_SRC;
  }
  if (grafic) {
    grafic.src = document.body.classList.contains(DARK_MODE_CLASS)
      ? LIGHT_GRAFIC_SRC
      : DARK_GRAFIC_SRC;
  }
  if (graficTwo) {
    graficTwo.src = document.body.classList.contains(DARK_MODE_CLASS)
      ? LIGHT_GRAFIC_TWO_SRC
      : DARK_GRAFIC_TWO_SRC;
  }
  if (tucanTwo) {
    tucanTwo.src = document.body.classList.contains(DARK_MODE_CLASS)
      ? LIGHT_TUCAN_TWO_SRC
      : DARK_TUCAN_TWO_SRC;
  }
};

initializeTheme();

if (themeSwitch) {
  themeSwitch.addEventListener("click", toggleTheme);
}

// ------ JS para el botón del menú ------

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const links = document.querySelectorAll("a");

const svgMenu = `<svg
  class="menu_icon"
    xmlns="http://www.w3.org/2000/svg"
    height="24px"
    viewBox="0 -960 960 960"
    width="24px"
    fill="#010f3c"
>
    <path
        d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"
    />
</svg>`;
const svgClose = `<svg class="menu_icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>`;

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  if (navLinks.classList.contains("active")) {
    menuBtn.innerHTML = svgClose;
    menuBtn.setAttribute("aria-expanded", "true");
  } else {
    menuBtn.innerHTML = svgMenu;
    menuBtn.setAttribute("aria-expanded", "false");
  }
});

if (!navLinks.classList.contains("active")) {
  menuBtn.innerHTML = svgMenu;
}
// Escuchando el evento click en los enlaces del menú y así cerrarlo una vez lo dirija a la página correspondiente
links.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuBtn.innerHTML = svgMenu;
    menuBtn.setAttribute("aria-expanded", "false");
  });
});

// ------- JS para el leer ahora ------

const readNowButton = document.getElementById("readNowButton");
const readMoreContainer = document.getElementById("readMoreContainer");
const backButton = document.getElementById("backButton");
const mainContainer = document.querySelector(".main");

const handleReadNowClick = () => {
  readNowButton.classList.add("hidden")
  readMoreContainer.classList.add("active");
  backButton.classList.add("active");
  readMoreContainer.scrollIntoView({ behavior: "smooth", block: "start" });
}

const handleBackButtonClick = () => {
  readMoreContainer.classList.remove("active");
  backButton.classList.remove("active");
  readNowButton.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
};

if (readNowButton) {
  readNowButton.addEventListener("click", handleReadNowClick);
}

if (backButton) {
  backButton.addEventListener("click", handleBackButtonClick);
}

if (readMoreContainer && !readMoreContainer.classList.contains("active")) {
  backButton.classList.remove("active");
}