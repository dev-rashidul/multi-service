// JavaScript For Sticky Header

window.addEventListener("scroll", function () {
  const header = document.querySelector(".navbar");
  header.classList.toggle("sticky", window.scrollY > 100);
});

// Function to toggle active class on menu links
function toggleActiveClass() {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(
    ".navbar-nav .nav-item .nav-link, .footer__links li a"
  );

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    const scrollPosition = window.scrollY;

    if (
      scrollPosition >= sectionTop - 100 &&
      scrollPosition < sectionTop + sectionHeight - 100
    ) {
      const targetId = section.getAttribute("id");
      navLinks.forEach((link) => {
        if (link.getAttribute("href") === `#${targetId}`) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });
    }
  });
}

// Add click event listeners to all menu links
document
  .querySelectorAll(".navbar-nav .nav-item .nav-link, .footer__links li a")
  .forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      const targetId = this.getAttribute("href").slice(1);
      const targetSection = document.getElementById(targetId);

      window.scrollTo({
        top: targetSection.offsetTop - 100, // Adjust offset as needed
        behavior: "smooth",
      });
    });
  });

// Add scroll event listener
window.addEventListener("scroll", toggleActiveClass);

// Add scroll event listener
window.addEventListener("scroll", toggleActiveClass);

// JavaScript For Sticky Mobile Header

window.addEventListener("scroll", function () {
  const header = document.querySelector(".mobile-navbar");
  header.classList.toggle("sticky", window.scrollY > 100);
});

// JavaScript For Mobile Navbar

document.addEventListener("DOMContentLoaded", function () {
  const menuItems = document.querySelectorAll(".mobile__nav ul li a");
  const navbarToggler = document.querySelector(".navbar-toggler");

  navbarToggler.addEventListener("click", function () {
    navbarToggler.classList.toggle("active");
    document.querySelector(".mobile__nav").classList.toggle("active");
  });

  menuItems.forEach(function (menuItem) {
    menuItem.addEventListener("click", function () {
      document.querySelector(".mobile__nav").classList.remove("active");
      navbarToggler.classList.add("active");
    });
  });
});
