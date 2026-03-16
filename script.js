document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menuBtn");
  const mobileNav = document.getElementById("mobileNav");
  const navbar = document.querySelector(".navbar");
  const revealItems = document.querySelectorAll(".reveal");
  const navLinks = document.querySelectorAll(".nav-links a, .mobile-nav a");
  const sections = document.querySelectorAll("section[id], header[id]");

  if (menuBtn && mobileNav) {
    menuBtn.addEventListener("click", () => {
      mobileNav.classList.toggle("active");
    });

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mobileNav.classList.remove("active");
      });
    });
  }

  const revealOnScroll = () => {
    const triggerPoint = window.innerHeight * 0.88;

    revealItems.forEach((item) => {
      const itemTop = item.getBoundingClientRect().top;
      if (itemTop < triggerPoint) {
        item.classList.add("visible");
      }
    });
  };

  const updateNavbar = () => {
    if (!navbar) return;

    if (window.scrollY > 20) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  };

  const setActiveLink = () => {
    let currentId = "";

    sections.forEach((section) => {
      const top = section.offsetTop - 140;
      const height = section.offsetHeight;

      if (window.scrollY >= top && window.scrollY < top + height) {
        currentId = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentId}`) {
        link.classList.add("active");
      }
    });
  };

  window.addEventListener("scroll", () => {
    revealOnScroll();
    updateNavbar();
    setActiveLink();
  });

  window.addEventListener("load", () => {
    revealOnScroll();
    updateNavbar();
    setActiveLink();
  });

  revealOnScroll();
  updateNavbar();
  setActiveLink();
});
