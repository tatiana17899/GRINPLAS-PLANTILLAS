document.addEventListener("DOMContentLoaded", function () {
  const hero = document.querySelector(".hero");
  const sliderIcons = document.querySelectorAll(".slider i");
  let currentSlide = 0;

  // Array of background images
  const images = [
    "https://images.unsplash.com/photo-1562280963-8a5475740a42?q=80&w=2069&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1565814636199-ae8133055c1c?q=80&w=2070&auto=format&fit=crop",
  ];

  // Function to update the background image
  function updateSlide(index) {
    hero.style.setProperty("--bg-image", `url(${images[index]})`);
    hero.style.backgroundImage = `url(${images[index]})`;

    // Update active state of slider icons
    sliderIcons.forEach((icon, i) => {
      if (i === index) {
        icon.classList.add("active");
      } else {
        icon.classList.remove("active");
      }
    });
  }

  // Add click event listeners to slider icons
  sliderIcons.forEach((icon, index) => {
    icon.addEventListener("click", () => {
      currentSlide = index;
      updateSlide(currentSlide);
    });
  });

  // Auto-slide functionality
  function autoSlide() {
    currentSlide = (currentSlide + 1) % images.length;
    updateSlide(currentSlide);
  }

  // Set initial background
  updateSlide(currentSlide);

  // Start auto-sliding
  const slideInterval = setInterval(autoSlide, 5000);

  // Stop auto-sliding when user interacts with slider
  sliderIcons.forEach((icon) => {
    icon.addEventListener("click", () => {
      clearInterval(slideInterval);
    });
  });
});
