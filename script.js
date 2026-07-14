(function () {
  "use strict";

  const CALCULATOR_DISCOUNT_RATE = 0.20;

  function roundToNearestFive(amount) {
    return Math.round(amount / 5) * 5;
  }

  function applyCalculatorDiscount(amount) {
    return roundToNearestFive(amount * (1 - CALCULATOR_DISCOUNT_RATE));
  }

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

    if (stories === "1") {
      lowEstimate = Math.max(lowEstimate, 170);
    } else {
      lowEstimate = Math.max(lowEstimate, 220);
    }

    const highEstimate = lowEstimate + 50;

    const discountedLowEstimate = applyCalculatorDiscount(lowEstimate);
    const discountedHighEstimate = applyCalculatorDiscount(highEstimate);

    estimatedPrice.textContent = `${formatMoney(discountedLowEstimate)} - ${formatMoney(discountedHighEstimate)}`;

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

  function getServiceWheelMarkup() {
    return `
    <div class="radial-menu-center">
      <div class="radial-close"><i class="fas fa-times"></i></div>

      <a href="/services.html#gutter-cleaning-service" class="radial-item item-1">
        <i class="fas fa-broom"></i>
        <span>Gutter Cleaning</span>
      </a>

      <a href="/services.html#gutter-repairs-service" class="radial-item item-2">
        <i class="fas fa-wrench"></i>
        <span>Gutter Repairs</span>
      </a>

      <a href="/services.html#gutter-protection-service" class="radial-item item-3">
        <i class="fas fa-shield-alt"></i>
        <span>Gutter Guards</span>
      </a>

      <a href="/services/gutter-installation.html" class="radial-item item-4">
        <i class="fas fa-tools"></i>
        <span>New Gutter Installation</span>
      </a>

      <a href="/services/dryer-vent-cleaning.html" class="radial-item item-5">
        <i class="fas fa-fire-extinguisher"></i>
        <span>Dryer Vent Cleaning</span>
      </a>

      <a href="/services.html#underground-drainage-service" class="radial-item item-6">
        <i class="fas fa-water"></i>
        <span>Drainage Solutions</span>
      </a>
    </div>
  `;
  }

  function ensureSitewideServiceWheel() {
    let radialOverlay = document.getElementById("radial-menu-overlay");

    if (!radialOverlay) {
      radialOverlay = document.createElement("div");
      radialOverlay.id = "radial-menu-overlay";
      radialOverlay.className = "radial-overlay";
      document.body.appendChild(radialOverlay);
    }

    radialOverlay.classList.add("radial-overlay");
    radialOverlay.innerHTML = getServiceWheelMarkup();

    const existingTriggers = document.querySelectorAll(".floating-service-trigger");

    if (!existingTriggers.length) {
      const floatingServiceTrigger = document.createElement("button");

      floatingServiceTrigger.type = "button";
      floatingServiceTrigger.className = "floating-service-trigger";
      floatingServiceTrigger.setAttribute("data-service-menu-trigger", "true");
      floatingServiceTrigger.setAttribute("aria-label", "Open service wheel");
      floatingServiceTrigger.innerHTML = '<i class="fas fa-th-large"></i><span>Services</span>';

      document.body.appendChild(floatingServiceTrigger);
      return;
    }

    existingTriggers.forEach(function (trigger) {
      trigger.setAttribute("data-service-menu-trigger", "true");
      trigger.setAttribute("aria-label", "Open service wheel");

      if (trigger.tagName.toLowerCase() === "button") {
        trigger.type = "button";
      }

      trigger.innerHTML = '<i class="fas fa-th-large"></i><span>Services</span>';
    });
  }

  function toggleSign(card) {
    if (!card) return;
    card.classList.toggle("active");
  }

  function toggleAccordion(header) {
    if (!header) return;

    const accordionItem = header.closest(".accordion-item");
    const accordion = header.closest(".accordion");
    const content = accordionItem ? accordionItem.querySelector(".accordion-content") : null;

    if (!accordionItem || !content) return;

    const isOpen = header.classList.contains("active");

    if (accordion) {
      accordion.querySelectorAll(".accordion-header").forEach(function (item) {
        item.classList.remove("active");
      });

      accordion.querySelectorAll(".accordion-content").forEach(function (item) {
        item.classList.remove("active");
        item.style.maxHeight = null;
      });
    }

    if (!isOpen) {
      header.classList.add("active");
      content.classList.add("active");
      content.style.maxHeight = content.scrollHeight + 48 + "px";
    }
  }

  window.toggleSign = toggleSign;
  window.toggleAccordion = toggleAccordion;

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

    window.closeMobileMenu = closeMobileMenu;
  }

  function initRadialMenu() {
    const radialOverlay = document.getElementById("radial-menu-overlay");
    const radialClose = document.querySelector(".radial-close");
    const triggers = document.querySelectorAll("[data-service-menu-trigger]");

    if (!radialOverlay) return;

    function openRadialMenu(event) {
      if (event) {
        event.preventDefault();
      }

      radialOverlay.classList.add("active");
      document.body.classList.add("radial-menu-open");

      const navMenu = document.getElementById("nav-menu");

      if (navMenu) {
        navMenu.classList.remove("active");
      }

      document.body.classList.remove("menu-open");
    }

    function closeRadialMenu() {
      radialOverlay.classList.remove("active");
      document.body.classList.remove("radial-menu-open");
    }

    triggers.forEach(function (trigger) {
      trigger.addEventListener("click", openRadialMenu);
    });

    if (radialClose) {
      radialClose.addEventListener("click", closeRadialMenu);
    }

    radialOverlay.addEventListener("click", function (event) {
      if (event.target === radialOverlay) {
        closeRadialMenu();
      }
    });

    radialOverlay.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeRadialMenu);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        closeRadialMenu();
      }
    });

    window.openRadialMenu = openRadialMenu;
    window.closeRadialMenu = closeRadialMenu;
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

        if (target.classList.contains("service-detail-section")) {
          target.classList.add("section-highlight");

          window.setTimeout(function () {
            target.classList.remove("section-highlight");
          }, 1200);
        }
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
        header.classList.toggle("sticky", window.scrollY > 40);
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
    const currentPath = window.location.pathname.replace(/\/$/, "");
    const links = document.querySelectorAll("nav a");

    links.forEach(function (link) {
      const href = link.getAttribute("href");

      if (!href) return;

      link.classList.remove("active");

      if (
        (currentPath === "" && href === "index.html") ||
        (currentPath === "/" && href === "index.html") ||
        currentPath.endsWith(href.replace(".html", "")) ||
        currentPath.endsWith(href) ||
        (currentPath.includes("/services") && href === "services.html")
      ) {
        link.classList.add("active");
      }
    });
  }

  /*
     BATCH 1 ADDITION — Review Carousel
     Self-contained. Exits immediately on pages without the
     carousel. Touches no other feature.
  */

  function initReviewCarousel() {
    const carousel = document.getElementById("review-carousel");

    if (!carousel) return;

    const track = carousel.querySelector(".rc-track");
    const cards = carousel.querySelectorAll(".review-card");
    const prevBtn = carousel.querySelector(".rc-prev");
    const nextBtn = carousel.querySelector(".rc-next");
    const pauseBtn = carousel.querySelector(".rc-pause");
    const dotsWrap = carousel.querySelector(".rc-dots");

    if (!track || !cards.length) return;

    const AUTO_DELAY = 12000;
    const RESUME_DELAY = 15000;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let currentIndex = 0;
    let autoTimer = null;
    let resumeTimer = null;
    let userPaused = false;
    let hovered = false;

    const dots = [];

    if (dotsWrap) {
      cards.forEach(function (card, i) {
        const dot = document.createElement("button");
        dot.type = "button";
        dot.className = "rc-dot" + (i === 0 ? " active" : "");
        dot.setAttribute("aria-label", "Go to review " + (i + 1));
        dot.addEventListener("click", function () {
          goTo(i);
          interactionPause();
        });
        dotsWrap.appendChild(dot);
        dots.push(dot);
      });
    }

    function goTo(index) {
      const clamped = (index + cards.length) % cards.length;
      const card = cards[clamped];
      const offset = card.offsetLeft - (track.clientWidth - card.clientWidth) / 2;

      track.scrollTo({
        left: offset,
        behavior: reducedMotion ? "auto" : "smooth"
      });

      currentIndex = clamped;
      updateDots();
    }

    function updateDots() {
      dots.forEach(function (dot, i) {
        dot.classList.toggle("active", i === currentIndex);
      });
    }

    function nearestIndex() {
      const center = track.scrollLeft + track.clientWidth / 2;
      let best = 0;
      let bestDist = Infinity;

      cards.forEach(function (card, i) {
        const cardCenter = card.offsetLeft + card.clientWidth / 2;
        const dist = Math.abs(cardCenter - center);

        if (dist < bestDist) {
          bestDist = dist;
          best = i;
        }
      });

      return best;
    }

    function startAuto() {
      if (reducedMotion || userPaused || hovered) return;

      stopAuto();

      autoTimer = window.setInterval(function () {
        goTo(currentIndex + 1);
      }, AUTO_DELAY);
    }

    function stopAuto() {
      if (autoTimer) {
        window.clearInterval(autoTimer);
        autoTimer = null;
      }
    }

    function interactionPause() {
      stopAuto();

      if (resumeTimer) {
        window.clearTimeout(resumeTimer);
      }

      resumeTimer = window.setTimeout(function () {
        startAuto();
      }, RESUME_DELAY);
    }

    if (prevBtn) {
      prevBtn.addEventListener("click", function () {
        goTo(currentIndex - 1);
        interactionPause();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener("click", function () {
        goTo(currentIndex + 1);
        interactionPause();
      });
    }

    if (pauseBtn) {
      const icon = pauseBtn.querySelector("i");

      pauseBtn.addEventListener("click", function () {
        userPaused = !userPaused;
        pauseBtn.setAttribute("aria-pressed", String(userPaused));
        pauseBtn.setAttribute("aria-label", userPaused ? "Resume automatic rotation" : "Pause automatic rotation");

        if (icon) {
          icon.className = userPaused ? "fas fa-play" : "fas fa-pause";
        }

        if (userPaused) {
          stopAuto();

          if (resumeTimer) {
            window.clearTimeout(resumeTimer);
            resumeTimer = null;
          }
        } else {
          startAuto();
        }
      });
    }

    carousel.addEventListener("pointerenter", function () {
      hovered = true;
      stopAuto();
    });

    carousel.addEventListener("pointerleave", function () {
      hovered = false;
      startAuto();
    });

    carousel.addEventListener("focusin", function () {
      stopAuto();
    });

    carousel.addEventListener("focusout", function () {
      startAuto();
    });

    track.addEventListener("touchstart", function () {
      interactionPause();
    }, { passive: true });

    track.addEventListener("pointerdown", function () {
      interactionPause();
    });

    let scrollRaf = null;

    track.addEventListener("scroll", function () {
      if (scrollRaf) return;

      scrollRaf = window.requestAnimationFrame(function () {
        currentIndex = nearestIndex();
        updateDots();
        scrollRaf = null;
      });
    }, { passive: true });

    document.addEventListener("visibilitychange", function () {
      if (document.hidden) {
        stopAuto();
      } else {
        startAuto();
      }
    });

    startAuto();
  }

  document.addEventListener("DOMContentLoaded", function () {
    ensureSitewideServiceWheel();
    initAOS();
    initMobileMenu();
    initRadialMenu();
    initCalculator();
    initSeasonTabs();
    initSmoothScrolling();
    initScrollEffects();
    initQuoteFormStatus();
    initActiveNavLinks();
    initReviewCarousel();
  });
})();