document.addEventListener("DOMContentLoaded", function () {
  let swiper;
  const toggleBtn = document.querySelector(".brands__toggle-btn");
  const toggleText = toggleBtn.querySelector(".brands__toggle__link");
  const slides = document.querySelectorAll(".brands__list .swiper-slide");

  function initSwiper() {
    if (window.innerWidth < 768 && !swiper) {
      swiper = new Swiper(".brands__list", {
        loop: false,
        slidesPerView: "auto",
        spaceBetween: 16,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
      console.log("Swiper включен");
    } else if (window.innerWidth >= 768 && swiper) {
      swiper.destroy(true, true);
      swiper = null;
      console.log("Swiper отключен");
    }
  }

  function getVisibleCount() {
    if (window.innerWidth >= 1440) return 8;
    if (window.innerWidth >= 768) return 6;
    return slides.length; // для мобильных все
  }

  function initGrid() {
    if (window.innerWidth >= 768) {
      const visibleCount = getVisibleCount();
      slides.forEach((slide, index) => {
        slide.classList.toggle("hidden", index >= visibleCount);
      });
      toggleBtn.style.display = "inline-flex";
    } else {
      slides.forEach((slide) => slide.classList.remove("hidden"));
      toggleBtn.style.display = "none";
    }
    toggleText.textContent = "Показать все";
  }

  toggleBtn.addEventListener("click", () => {
    const hidden = document.querySelectorAll(".brands__list .swiper-slide.hidden");
    if (hidden.length) {
      slides.forEach((slide) => slide.classList.remove("hidden"));
      toggleText.textContent = "Скрыть";
    } else {
      initGrid(); // вернуть исходное скрытие
      toggleText.textContent = "Показать все";
    }
  });

  // первый запуск
  initSwiper();
  initGrid();

  // пересоздаём при изменении размера
  window.addEventListener("resize", () => {
    initSwiper();
    initGrid();
  });
});
