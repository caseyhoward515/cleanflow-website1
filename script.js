(function () {
  "use strict";

  function formatMoney(amount) {
    return "$" + Math.round(amount).toLocaleString("en-US");
  }

  function getSizeAdjustment(linearFeet) {
    if (linearFeet <= 160) return 0;
    if (linearFeet <= 220) return 20;
    if (linearFeet <= 280) return 40;
    if (linearFeet <= 350) return 70;
    return 110;
  }

  function getDebrisAdjustment(debrisLevel) {
    const debrisAdjustments = {
      light: -15,
      medium: 0,
      heavy: 45
    };

    return debrisAdjustments[debrisLevel] || 0;
  }

  function calculateGutterEstimate() {
    const linearFeetInput = document.getElementById("linearFeet");
    const storiesInput = document.getElementById("stories");
    const debrisInput = document.getElementById("debris");
    const resultBox = document.getElementById("resultBox");
    const estimatedPrice = document.getElementById("estimatedPrice");

    if (!linearFeetInput || !storiesInput || !debrisInput || !resultBox || !estimatedPrice) {
      return;
    }

    const linearFeet = Number(linearFeetInput.value);
    const stories = storiesInput.value;
    const debrisLevel = debrisInput.value;

    if (!linearFeet || linearFeet < 50) {
      estimatedPrice.textContent = "Enter at least 50 linear feet";
      resultBox.style.display = "block";
      resultBox.classList.add("active");
      return;
    }

    const basePrice = stories === "2" ? 235 : 185;
    const sizeAdjustment = getSizeAdjustment(linearFeet);
    const debrisAdjustment = getDebrisAdjustment(debrisLevel);

    let lowEstimate = basePrice + sizeAdjustment + debrisAdjustment;

    // Keep the calculator lead-friendly but not unrealistically low.
    if (stories === "1") {
      lowEstimate = Math.max(lowEstimate, 170);
    } else {
      lowEstimate = Math.max(lowEstimate, 220);
    }

    const highEstimate = lowEstimate + 50;

    estimatedPrice.textContent = `${formatMoney(lowEstimate)} - ${formatMoney(highEstimate)}`;

    const resultTitle = resultBox.querySelector(".result-title");
    const resultNote = resultBox.querySelector(".result-note");

    if (resultTitle) {
      resultTitle.textContent = "Estimated Starting Range";
    }

    if (resultNote) {
      resultNote.innerHTML = 'This is a starting estimate. Final pricing may vary depending on access, roof height, gutter guards, debris level, roof pitch, downspout clogs, and overall job difficulty. For an accurate quote, call or text <a href="tel:9374780689" style="color: var(--accent);">937-478-0689</a>.';
    }

    resultBox.style.display = "block";
    resultBox.classList.add("active");

    resultBox.scrollIntoView({
      behavior: "smooth",
      block: "nearest"
    });
  }

  function toggleSign(card) {
    if (!card) return;
    card.classList.toggle("active");
  }

  window.toggleSign = toggleSign;

  function initAOS() {
    if (window.AOS) {
      window.AOS.init({
        duration: 800,
        once: true,
        offset: 80
      });
    }
  }

  function initMobileMenu() {
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");
    const closeMenu = document.getElementById("close-menu");

    if (!menuToggle || !navMenu) return;

    function openMenu() {
      navMenu.classList.add("active");
      document.body.classList.add("menu-open");
    }

    function closeMobileMenu() {
      navMenu.classList.remove("active");
      document.body.classList.remove("menu-open");
    }

    menuToggle.addEventListener("click", openMenu);

    if (closeMenu) {
      closeMenu.addEventListener("click", closeMobileMenu);
    }

    navMenu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeMobileMenu);
    });
  }

  function initRadialMenu() {
    const radialOverlay = document.getElementById("radial-menu-overlay");
    const radialClose = document.querySelector(".radial-close");

    if (!radialOverlay) return;

    function closeRadialMenu() {
      radialOverlay.classList.remove("active");
      document.body.classList.remove("radial-menu-open");
    }

    if (radialClose) {
      radialClose.addEventListener("click", closeRadialMenu);
    }

    radialOverlay.addEventListener("click", function (event) {
      if (event.target === radialOverlay) {
        closeRadialMenu();
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        closeRadialMenu();
      }
    });
  }

  function initCalculator() {
    const calculateBtn = document.getElementById("calculateBtn");

    if (!calculateBtn) return;

    calculateBtn.addEventListener("click", function (event) {
      event.preventDefault();
      calculateGutterEstimate();
    });

    const inputs = ["linearFeet", "stories", "debris"]
      .map(function (id) {
        return document.getElementById(id);
      })
      .filter(Boolean);

    inputs.forEach(function (input) {
      input.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
          event.preventDefault();
          calculateGutterEstimate();
        }
      });
    });
  }

  function initSeasonTabs() {
    const tabs = document.querySelectorAll(".season-tab");
    const contents = document.querySelectorAll(".season-content");

    if (!tabs.length || !contents.length) return;

    tabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        const season = tab.getAttribute("data-season");

        tabs.forEach(function (item) {
          item.classList.remove("active");
        });

        contents.forEach(function (content) {
          content.classList.remove("active");
        });

        tab.classList.add("active");

        const activeContent = document.getElementById(season + "-content");
        if (activeContent) {
          activeContent.classList.add("active");
        }
      });
    });
  }

  function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
      link.addEventListener("click", function (event) {
        const href = link.getAttribute("href");

        if (!href || href === "#") return;

        const target = document.querySelector(href);

        if (!target) return;

        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      });
    });
  }

  function initScrollEffects() {
    const header = document.getElementById("header");
    const backToTop = document.getElementById("back-to-top");
    const floatingCta = document.getElementById("floating-cta");

    function handleScroll() {
      const scrolled = window.scrollY > 120;

      if (header) {
        header.classList.toggle("scrolled", window.scrollY > 40);
      }

      if (backToTop) {
        backToTop.classList.toggle("active", scrolled);
      }

      if (floatingCta) {
        floatingCta.classList.toggle("active", scrolled);
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    if (backToTop) {
      backToTop.addEventListener("click", function () {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      });
    }
  }

  function initQuoteFormStatus() {
    const formMessage = document.getElementById("formMessage");

    if (!formMessage) return;

    const params = new URLSearchParams(window.location.search);
    const submitted = params.get("submitted");

    if (submitted === "true") {
      formMessage.textContent = "Thank you. Your quote request was sent successfully. We will follow up as soon as possible.";
      formMessage.classList.add("success");
      formMessage.style.display = "block";
    }

    if (submitted === "error") {
      formMessage.textContent = "Something went wrong. Please call or text 937-478-0689 for the fastest response.";
      formMessage.classList.add("error");
      formMessage.style.display = "block";
    }
  }

  function initActiveNavLinks() {
    const currentPath = window.location.pathname;
    const links = document.querySelectorAll("nav a");

    links.forEach(function (link) {
      const href = link.getAttribute("href");

      if (!href) return;

      link.classList.remove("active");

      if (
        (currentPath === "/" && href === "index.html") ||
        currentPath.endsWith(href)
      ) {
        link.classList.add("active");
      }
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initAOS();
    initMobileMenu();
    initRadialMenu();
    initCalculator();
    initSeasonTabs();
    initSmoothScrolling();
    initScrollEffects();
    initQuoteFormStatus();
    initActiveNavLinks();
  });
})();