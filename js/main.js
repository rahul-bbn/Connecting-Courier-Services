
// /* ================= COMMON HTML LOADER ================= */
// function loadHTML(id, file, callback) {
//   fetch(file)
//     .then(res => res.text())
//     .then(data => {
//       document.getElementById(id).innerHTML = data;
//       if (callback) callback();
//     })
//     .catch(err => console.error("Error loading", file, err));
// }
// /* ================= HEADER SCROLL ================= */
// let header = null;

// function handleHeaderScroll() {
//   if (!header) return;

//   if (window.scrollY > 120) {
//     header.classList.add("show");
//   } else {
//     header.classList.remove("show");
//   }
// }

// document.addEventListener("DOMContentLoaded", () => {
//   header = document.getElementById("mainHeader");

//   if (header) {
//     header.classList.add("loaded"); // 👈 prevent flicker
//     handleHeaderScroll();           // 👈 refresh safe
//   }

//   window.addEventListener("scroll", handleHeaderScroll);
// });


// window.addEventListener("scroll", () => {
//   if (window.scrollY > 120) {
//     header.classList.add("show");
//   } else {
//     header.classList.remove("show");
//   }
// });


// /* ================= SLIDER ================= */
// /* ================= HERO TEXT ANIMATION ================= */
// function animateHeroText() {
//   const items = document.querySelectorAll(".hero .animate");

//   items.forEach(el => el.classList.remove("show"));

//   items.forEach((el, i) => {
//     setTimeout(() => {
//       el.classList.add("show");
//     }, i * 300);
//   });
// }


// /* ================= HERO SLIDER ================= */
// function initHeroSlider() {
//   const slides = document.querySelectorAll(".slide");
//   const dots = document.querySelectorAll(".dot");

//   if (!slides.length) return;

//   let current = 0;

//   function showSlide(index) {
//     slides.forEach(s => s.classList.remove("active"));
//     dots.forEach(d => d.classList.remove("active"));

//     slides[index].classList.add("active");
//     dots[index].classList.add("active");

//     animateHeroText();
//     current = index;
//   }

//   dots.forEach(dot => {
//     dot.addEventListener("click", () => {
//       showSlide(Number(dot.dataset.slide));
//     });
//   });

//   setInterval(() => {
//     showSlide((current + 1) % slides.length);
//   }, 4000);
// }

// function initScrollAnimation() {
//   const items = document.querySelectorAll(".animate-on-scroll");

//   const observer = new IntersectionObserver(
//     entries => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add("show");
//         }
//       });
//     },
//     { threshold: 0.3 }
//   );

//   items.forEach(item => observer.observe(item));
// }


// /* ================= SERVICES HEADER SCROLL ================= */
// const servicesHeader = document.querySelector(".services-header");
// const servicesSection = document.getElementById("services");

// window.addEventListener("scroll", () => {
//   const sectionTop = servicesSection.getBoundingClientRect().top;
//   const trigger = window.innerHeight * 0.75;

//   // Animation when section appears
//   if (sectionTop < trigger) {
//     servicesHeader.classList.add("show");
//   }
// });

// /* HOW IT WORKS SCROLL */
// const howItems = document.querySelectorAll(".animate-on-scroll");

// window.addEventListener("scroll", () => {
//   howItems.forEach(item => {
//     const top = item.getBoundingClientRect().top;
//     const trigger = window.innerHeight * 0.8;

//     if (top < trigger) {
//       item.classList.add("show");
//     }
//   });
// });

// // HOW IT'S WORK
// document.addEventListener("DOMContentLoaded", () => {
//   const steps = document.querySelectorAll(".work-step");

//   const observer = new IntersectionObserver(
//     (entries) => {
//       entries.forEach((entry) => {
//         const line = entry.target.querySelector(".step-line");

//         if (entry.isIntersecting) {
//           line.classList.add("active");
//         } else {
//           line.classList.remove("active");
//         }
//       });
//     },
//     {
//       threshold: 0.5 // 50% visible hone par activate
//     }
//   );

//   steps.forEach((step) => observer.observe(step));
// });

// /* ================= LOAD PARTIALS ================= */
// document.addEventListener("DOMContentLoaded", () => {
// function loadHTML(id, file) {
//   fetch(file)
//     .then(res => res.text())
//     .then(data => {
//       document.getElementById(id).innerHTML = data;
//     });
// }

// loadHTML("topbar", "partials/topbar.html");
// function loadHTML(id, file, callback) {
//   fetch(file)
//     .then(res => res.text())
//     .then(data => {
//       document.getElementById(id).innerHTML = data;
//       if (callback) callback();
//     });
// }

// loadHTML("header", "partials/header.html", () => {
//   header = document.getElementById("mainHeader");
//   if (header) {
//     header.classList.add("loaded");
//     handleHeaderScroll();
//   }
// });
//  loadHTML("hero", "partials/hero.html", () => {
//     animateHeroText();
//     initHeroSlider();
//   });
// loadHTML("hero", "partials/hero.html");
// loadHTML("footer", "partials/footer.html");

// initScrollAnimation();
//   initHowWorkLines();
// });



/* ================= COMMON HTML LOADER ================= */
function loadHTML(id, file, callback) {
  fetch(file)
    .then(res => res.text())
    .then(data => {
      const el = document.getElementById(id);
      if (!el) return;
      el.innerHTML = data;
      if (callback) callback();
    });
}
/* ================= HEADER SCROLL ================= */
let header;

function handleHeaderScroll() {
  if (!header) return;

  if (window.scrollY > 120) {
    header.classList.add("show");
  } else {
    header.classList.remove("show");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  loadHTML("header", "partials/header.html", () => {
    header = document.getElementById("mainHeader");
    if (header) {
      header.classList.add("loaded");
      handleHeaderScroll();
      window.addEventListener("scroll", handleHeaderScroll);
    }
  });
});


/* ================= HERO TEXT ANIMATION ================= */
function animateHeroText() {
  const items = document.querySelectorAll(".hero .animate");

  items.forEach(el => el.classList.remove("show"));

  items.forEach((el, i) => {
    setTimeout(() => {
      el.classList.add("show");
    }, i * 300);
  });
}


/* ================= HERO SLIDER ================= */
function initHeroSlider() {
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");

  if (!slides.length) return;

  let current = 0;

  function showSlide(index) {
    slides.forEach(s => s.classList.remove("active"));
    dots.forEach(d => d.classList.remove("active"));

    document.querySelectorAll('.animate').forEach(el => {
  el.classList.add('show');
});

    slides[index].classList.add("active");
    dots[index].classList.add("active");

    animateHeroText();
    current = index;
  }

  dots.forEach(dot => {
    dot.addEventListener("click", () => {
      showSlide(Number(dot.dataset.slide));
    });
  });

  setInterval(() => {
    showSlide((current + 1) % slides.length);
  }, 4000);
}

/* ================= SCROLL ANIMATION ================= */
function initScrollAnimation() {
  const items = document.querySelectorAll(".animate-on-scroll");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.3 }
  );

  items.forEach(item => observer.observe(item));
}

/* ================= HOW IT WORK LINE ================= */
function initHowWorkLines() {
  const steps = document.querySelectorAll(".work-step");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        const line = entry.target.querySelector(".step-line");
        if (!line) return;

        if (entry.isIntersecting) {
          line.classList.add("active");
        } else {
          line.classList.remove("active");
        }
      });
    },
    { threshold: 0.5 }
  );

  steps.forEach(step => observer.observe(step));
}

/* ================= LOAD PARTIALS ================= */
document.addEventListener("DOMContentLoaded", () => {

  loadHTML("topbar", "partials/topbar.html");

  function loadHTML(id, file, callback) {
  fetch(file)
    .then(res => res.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
      if (callback) callback();
    });
}

loadHTML("header", "partials/header.html", () => {
  header = document.getElementById("mainHeader");
  if (header) {
    header.classList.add("loaded");
    handleHeaderScroll();
  }
});


  loadHTML("hero", "partials/hero.html", () => {
    animateHeroText();
    initHeroSlider();
  });

  loadHTML("footer", "partials/footer.html");
  loadHTML("about-block", "partials/about-block.html");
  loadHTML("service-section", "partials/service-section.html", () => {
    // 🔥 animation runs AFTER HTML loads
    initScrollAnimation();
  });

  initScrollAnimation();
  initHowWorkLines();
});

function toggleMenu() {
  document.getElementById("navMenu").classList.toggle("open");
  document.querySelector(".menu-btn").classList.toggle("active");
}

function toggleSubmenu(el) {
  el.parentElement.classList.toggle("open");
}


