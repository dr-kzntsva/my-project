document.addEventListener("DOMContentLoaded", function () {
  let brandSwiper;
  let techSwiper;
  let priceSwiper;

  const BrandToggleBtn = document.querySelector(".brands__toggle-btn");
  const BrandTogglText = BrandToggleBtn.querySelector(".brands__toggle__link");
  const BrandTogglIcon = BrandToggleBtn.querySelector(".brands__toggle__icon");
  const slides = document.querySelectorAll(".brands__list .swiper-slide");

  const TechToggleBtn = document.querySelector(".technology__toggle-btn");
  const TechTogglText = TechToggleBtn.querySelector(
    ".technology__toggle__link"
  );
  const TechTogglIcon = TechToggleBtn.querySelector(
    ".technology__toggle__icon"
  );
  const Tslides = document.querySelectorAll(".technology__list .swiper-slide");

  const Pslides = document.querySelectorAll(".technology__list .swiper-slide");

  const mobile = window.matchMedia("(min-width: 0px) and (max-width: 767px)");
  const tablet = window.matchMedia(
    "(min-width: 768px) and (max-width: 1439px)"
  );
  const desktop = window.matchMedia("(min-width: 1440px)");
  const menuBtn = document.querySelector(".header__menu-btn");
  const menu = document.querySelector(".menu");
  const menuCloseBtn = document.querySelector(".menu__close-btn");
  const layout = document.querySelector(".layout");
  const menuLang = document.querySelector(".menu__lang-switcher");
  const menuOverlay = document.querySelector(".menu-overlay");

  const menuCallBtn = document.querySelector(".menu__call-btn");
  const menuChatCloseBtn = document.querySelector(".chat-form__close-btn");
  const menuChatBtn = document.querySelector(".menu__chat-btn");
  const menuCallCloseBtn = document.querySelector(".call-form__close-btn");
  const menuCallForm = document.querySelector(".call-form");
  const menuChatForm = document.querySelector(".chat-form");
  const headerCallBtn = document.querySelector(".header__call-btn");
  const headerChatBtn = document.querySelector(".header__chat-btn");

  const readMoreBtn = document.querySelector(".read-more__btn");
  const readMoreLink = document.querySelector(".read-more__link");
  const readMoreIcon = document.querySelector(".read-more__icon");
  const promoHighlight = document.querySelector(".promo__highlight--wide");
  const promoParagraph = document.querySelector(".promo__paragraph--expanded");
  const promoFully = document.querySelector(".promo__content--expanded");

  readMoreBtn.addEventListener("click", () => {
    if (window.innerWidth <= 767) {
      promoFully.classList.toggle("active");
      promoHighlight.classList.toggle("active");
      promoParagraph.classList.toggle("active");
      if (promoFully.classList.contains("active")) {
        readMoreLink.textContent = "Скрыть";
        readMoreIcon.style.transform = "rotate(180deg)";
      } else {
        readMoreLink.textContent = "Читать далее";
        readMoreIcon.style.transform = "rotate(360deg)";
      }
    } else if (window.innerWidth >= 768 && window.innerWidth <= 1439) {
      promoFully.classList.toggle("active");
      promoHighlight.classList.toggle("active");
      if (promoFully.classList.contains("active")) {
        readMoreLink.textContent = "Скрыть";
        readMoreIcon.style.transform = "rotate(180deg)";
      } else {
        readMoreLink.textContent = "Читать далее";
        readMoreIcon.style.transform = "rotate(360deg)";
      }
    } else if (window.innerWidth >= 1440) {
      promoFully.classList.toggle("active");
      if (promoFully.classList.contains("active")) {
        readMoreLink.textContent = "Скрыть";
        readMoreIcon.style.transform = "rotate(180deg)";
      } else {
        readMoreLink.textContent = "Читать далее";
        readMoreIcon.style.transform = "rotate(360deg)";
      }
    }
  });

  function BrandInitSwiper() {
    if (window.innerWidth < 768 && !brandSwiper) {
      brandSwiper = new Swiper(".brands__list", {
        loop: true,
        slidesPerView: "auto",
        spaceBetween: 16,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
      console.log("Swiper включен");
    } else if (window.innerWidth >= 768 && brandSwiper) {
      brandSwiper.destroy(true, true);
      brandSwiper = null;
      console.log("Swiper отключен");
    }
  }

  function TechInitSwiper() {
    if (window.innerWidth < 768 && !techSwiper) {
      techSwiper = new Swiper(".technology__list", {
        loop: true,
        slidesPerView: "auto",
        spaceBetween: 16,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
      console.log("Swiper включен");
    } else if (window.innerWidth >= 768 && techSwiper) {
      techSwiper.destroy(true, true);
      techSwiper = null;
      console.log("Swiper отключен");
    }
  }

  function PriceInitSwiper() {
    if (window.innerWidth < 768 && !priceSwiper) {
      priceSwiper = new Swiper(".prices__list", {
        loop: true,
        slidesPerView: "auto",
        spaceBetween: 16,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
      console.log("Swiper включен");
    } else if (window.innerWidth >= 768 && priceSwiper) {
      priceSwiper.destroy(true, true);
      priceSwiper = null;
      console.log("Swiper отключен");
    }
  }

  function getVisibleCount() {
    if (window.innerWidth >= 1440) return 8;
    if (window.innerWidth >= 768) return 6;
    return slides.length; // для мобильных все
  }

  function TechnologyGetVisibleCount() {
    if (window.innerWidth >= 1440) return 4;
    if (window.innerWidth >= 768) return 3;
    return Tslides.length;
  }

  function BrandInitGrid() {
    if (window.innerWidth >= 768) {
      const visibleCount = getVisibleCount();
      slides.forEach((slide, index) => {
        slide.classList.toggle("hidden", index >= visibleCount);
      });
      BrandToggleBtn.style.display = "inline-flex";
    } else {
      slides.forEach((slide) => slide.classList.remove("hidden"));
      BrandToggleBtn.style.display = "none";
    }
    BrandTogglText.textContent = "Показать все";
  }

  BrandToggleBtn.addEventListener("click", () => {
    const hidden = document.querySelectorAll(
      ".brands__list .swiper-slide.hidden"
    );
    if (hidden.length) {
      slides.forEach((slide) => slide.classList.remove("hidden"));
      BrandTogglText.textContent = "Скрыть";
      BrandTogglIcon.style.transform = "rotate(180deg)";
    } else {
      BrandInitGrid();
      BrandTogglText.textContent = "Показать все";
      BrandTogglIcon.style.transform = "rotate(360deg)";
    }
  });

  function TechIinitGrid() {
    if (window.innerWidth >= 768) {
      const visibleCount = TechnologyGetVisibleCount();
      Tslides.forEach((slide, index) => {
        slide.classList.toggle("hidden", index >= visibleCount);
      });
      TechToggleBtn.style.display = "inline-flex";
    } else {
      Tslides.forEach((slide) => slide.classList.remove("hidden"));
      TechToggleBtn.style.display = "none";
    }
    TechTogglText.textContent = "Показать все";
  }

  TechToggleBtn.addEventListener("click", () => {
    const hidden = document.querySelectorAll(
      ".technology__list .swiper-slide.hidden"
    );
    if (hidden.length) {
      Tslides.forEach((slide) => slide.classList.remove("hidden"));
      TechTogglText.textContent = "Скрыть";
      TechTogglIcon.style.transform = "rotate(180deg)";
    } else {
      TechIinitGrid();
      TechTogglText.textContent = "Показать все";
      TechTogglIcon.style.transform = "rotate(360deg)";
    }
  });

  function handleDeviceChange() {
    if (mobile.matches || tablet.matches) {
      menuBtn.addEventListener("click", () => {
        menu.classList.toggle("active");
        menuOverlay.classList.toggle("active");
      });

      menuCloseBtn.addEventListener("click", () => {
        menu.classList.toggle("active");
        menuOverlay.classList.toggle("active");
      });

      menuOverlay.addEventListener("click", () => {
        if (
          menuCallForm.classList.contains("active") ||
          menuChatForm.classList.contains("active")
        ) {
          menuCallForm.classList.remove("active");
          menuChatForm.classList.remove("active");

          if (menu.classList.contains("active")) {
            menuOverlay.style.zIndex = "20";
          } else {
            menuOverlay.classList.remove("active");
          }
        } else {
          menu.classList.toggle("active");
          menuOverlay.classList.toggle("active");
        }
      });

      menuCallBtn.addEventListener("click", () => {
        menuCallForm.classList.add("active");
        menuOverlay.style.zIndex = "40";
      });

      menuCallCloseBtn.addEventListener("click", () => {
        menuCallForm.classList.toggle("active");

        if (menu.classList.contains("active")) {
          menuOverlay.style.zIndex = "20";
        } else {
          menuOverlay.classList.remove("active");
        }
      });

      menuChatBtn.addEventListener("click", () => {
        menuChatForm.classList.add("active");
        menuOverlay.style.zIndex = "40";
      });

      menuChatCloseBtn.addEventListener("click", () => {
        menuChatForm.classList.toggle("active");

        if (menu.classList.contains("active")) {
          menuOverlay.style.zIndex = "20";
        } else {
          menuOverlay.classList.remove("active");
        }
      });

      headerCallBtn.addEventListener("click", () => {
        menuCallForm.classList.toggle("active");
        menuOverlay.classList.toggle("active");
      });

      headerChatBtn.addEventListener("click", () => {
        menuChatForm.classList.toggle("active");
        menuOverlay.classList.toggle("active");
      });
    } else if (desktop.matches) {
      menuOverlay.classList.remove("menu-overlay");

      menuCallBtn.addEventListener("click", () => {
        menuCallForm.classList.add("active");
        menuOverlay.classList.add("menu-overlay");
        menuOverlay.classList.add("active");
      });

      menuCallCloseBtn.addEventListener("click", () => {
        menuCallForm.classList.toggle("active");
        menuOverlay.classList.remove("active");
      });

      menuChatBtn.addEventListener("click", () => {
        menuChatForm.classList.add("active");
        menuOverlay.classList.add("menu-overlay");
        menuOverlay.classList.add("active");
      });

      menuChatCloseBtn.addEventListener("click", () => {
        menuChatForm.classList.remove("active");
        menuOverlay.classList.remove("active");
      });
    }
  }

  // первый запуск
  BrandInitSwiper();
  TechInitSwiper();
  PriceInitSwiper();
  BrandInitGrid();
  TechIinitGrid();
  handleDeviceChange();

  // пересоздаём при изменении размера
  window.addEventListener("resize", () => {
    BrandInitSwiper();
    TechInitSwiper();
    PriceInitSwiper();
    BrandInitGrid();
    TechIinitGrid();
  });

  mobile.addEventListener("change", handleDeviceChange);
  tablet.addEventListener("change", handleDeviceChange);
  desktop.addEventListener("change", handleDeviceChange);
});
