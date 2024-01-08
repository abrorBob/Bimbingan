// Toggle & Responsive Navigation
const navSlide = () => {
    const burger = document.querySelector(".burger");
    const navlists = document.querySelector("nav");

    burger.addEventListener("click", () => {
      // Toggle nav list and burger class
    navlists.classList.toggle("nav-active");
    burger.classList.toggle("toggle-burger");

    });
};

navSlide();



// Clear form before unload
window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName("form")) {
        form.reset();
    }
};

// model html
const navigation = document.querySelector(".primary-navigation");

const navigationHeight = navigation.offsetHeight;

document.documentElement.style.setProperty(
  "--scroll-padding",
  navigationHeight + "px"
);

