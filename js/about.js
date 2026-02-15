document.addEventListener("DOMContentLoaded", () => {
  loadHTML("about-block", "partials/about-block.html", () => {
    initScrollAnimation(); // 🔥 re-init AFTER load
  });
});

/* SCROLL ANIMATION FUNCTION */
function initScrollAnimation() {
  const items = document.querySelectorAll(
    ".animate-on-scroll, .animate-left, .animate-right"
  );

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

// scroll triger
const animatedSection = document.querySelector(".animate-content");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animatedSection.classList.add("active");
      }
    });
  },
  { threshold: 0.3 }
);

observer.observe(animatedSection);

const airContent = document.querySelector(".animate-air");

const airObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        airContent.classList.add("active");
      }
    });
  },
  { threshold: 0.3 }
);

airObserver.observe(airContent);

const plane = document.querySelector(".animate-plane");

const planeObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        plane.classList.add("active");
      }
    });
  },
  { threshold: 0.35 }
);

planeObserver.observe(plane);