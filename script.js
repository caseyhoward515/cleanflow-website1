(function () {
  "use strict";

  /**
   * Gutter-cleaning estimate model.
   *
   * Anchors supplied by the business owner:
   *   - a genuinely small, simple, easy-access one-story home can
   *     reach a $150 low end
   *   - a typical smaller one-story home centres near $185
   *   - a typical two-story home centres near $235
   *
   * Size, debris, access difficulty and height all move the estimate
   * up. The output is always a range and is never a binding quote.
   */
  const CALCULATOR_MIN_LINEAR_FEET = 50;
  const CALCULATOR_MAX_LINEAR_FEET = 500;
  const CALCULATOR_FLOOR_PRICE = 150;
  const CALCULATOR_RANGE_HALF_WIDTH = 20;

  const CALCULATOR_STORY_BASE = {
    "1": 185,
    "2": 235
  };

  const CALCULATOR_TYPICAL_LINEAR_FEET = 160;

  function roundToNearestFive(amount) {
    return Math.round(amount / 5) * 5;
  }

  function formatMoney(amount) {
    return "$" + Math.round(amount).toLocaleString("en-US");
  }

  function getSizeAdjustment(linearFeet) {
    if (linearFeet <= 120) {
      return -25;
    }

    if (linearFeet <= CALCULATOR_TYPICAL_LINEAR_FEET) {
      return 0;
    }

    if (linearFeet <= 200) {
      return 20;
    }

    if (linearFeet <= 250) {
      return 45;
    }

    if (linearFeet <= 320) {
      return 80;
    }

    if (linearFeet <= 400) {
      return 120;
    }

    return 170;
  }

  function getDebrisAdjustment(debrisLevel) {
    const debrisAdjustments = {
      light: -15,
      medium: 0,
      heavy: 45
    };

    return debrisAdjustments[debrisLevel] || 0;
  }

  function getAccessAdjustment(accessLevel) {
    const accessAdjustments = {
      easy: -10,
      typical: 0,
      difficult: 45
    };

    return accessAdjustments[accessLevel] || 0;
  }

  function getEstimateRange(options) {
    const base =
      CALCULATOR_STORY_BASE[options.stories] ||
      CALCULATOR_STORY_BASE["1"];

    const centre =
      base +
      getSizeAdjustment(options.linearFeet) +
      getDebrisAdjustment(options.debris) +
      getAccessAdjustment(options.access);

    let low = centre - CALCULATOR_RANGE_HALF_WIDTH;
    let high = centre + CALCULATOR_RANGE_HALF_WIDTH;

    if (low < CALCULATOR_FLOOR_PRICE) {
      // Shift the whole range up to the published starting price
      // instead of quietly reducing anyone else's estimate.
      high += CALCULATOR_FLOOR_PRICE - low;
      low = CALCULATOR_FLOOR_PRICE;
    }

    return {
      low: roundToNearestFive(low),
      high: roundToNearestFive(high)
    };
  }

  function showCalculatorMessage(resultBox, estimatedPrice, message) {
    estimatedPrice.textContent = message;

    const resultTitle =
      resultBox.querySelector(".result-title");

    if (resultTitle) {
      resultTitle.textContent = "Estimated Range";
    }

    resultBox.style.display = "block";
    resultBox.classList.add("active");
  }

  function calculateGutterEstimate() {
    const linearFeetInput = document.getElementById("linearFeet");
    const storiesInput = document.getElementById("stories");
    const debrisInput = document.getElementById("debris");
    const accessInput = document.getElementById("access");
    const resultBox = document.getElementById("resultBox");
    const estimatedPrice = document.getElementById("estimatedPrice");

    if (
      !linearFeetInput ||
      !storiesInput ||
      !debrisInput ||
      !resultBox ||
      !estimatedPrice
    ) {
      return;
    }

    const rawLinearFeet = Number(linearFeetInput.value);

    if (
      !linearFeetInput.value.trim() ||
      !isFinite(rawLinearFeet) ||
      rawLinearFeet < CALCULATOR_MIN_LINEAR_FEET
    ) {
      showCalculatorMessage(
        resultBox,
        estimatedPrice,
        "Enter at least " +
          CALCULATOR_MIN_LINEAR_FEET +
          " linear feet"
      );

      return;
    }

    if (rawLinearFeet > CALCULATOR_MAX_LINEAR_FEET) {
      showCalculatorMessage(
        resultBox,
        estimatedPrice,
        "For more than " +
          CALCULATOR_MAX_LINEAR_FEET +
          " linear feet, call or text 937-478-0689 for a measured quote"
      );

      return;
    }

    const linearFeet = rawLinearFeet;

    const range = getEstimateRange({
      linearFeet: linearFeet,
      stories: storiesInput.value,
      debris: debrisInput.value,
      access: accessInput ? accessInput.value : "typical"
    });

    estimatedPrice.textContent =
      formatMoney(range.low) + " - " + formatMoney(range.high);

    const resultTitle =
      resultBox.querySelector(".result-title");

    const resultNote =
      resultBox.querySelector(".result-note");

    if (resultTitle) {
      resultTitle.textContent = "Estimated Range";
    }

    if (resultNote) {
      resultNote.innerHTML =
        'This is an estimate, not a binding quote. Gutter cleaning starts at $150, and final pricing depends on onsite conditions including home size, height, gutter length, access, debris level, system condition, and safety. For an exact price, call or text <a href="tel:9374780689">937-478-0689</a>.';
    }

    resultBox.style.display = "block";
    resultBox.classList.add("active");

    resultBox.scrollIntoView({
      behavior: scrollBehaviour(),
      block: "nearest"
    });
  }


  function getServiceWheelMarkup() {
    return `
      <div class="radial-menu-center">
        <button
          type="button"
          class="radial-close"
          aria-label="Close the service menu"
        >
          <i class="fas fa-times" aria-hidden="true"></i>
        </button>

        <a
          href="/services/gutter-cleaning"
          class="radial-item item-1"
        >
          <i class="fas fa-broom" aria-hidden="true"></i>
          <span>Gutter Cleaning</span>
        </a>

        <a
          href="/services#gutter-repairs-service"
          class="radial-item item-2"
        >
          <i class="fas fa-wrench" aria-hidden="true"></i>
          <span>Gutter Repairs</span>
        </a>

        <a
          href="/services#gutter-protection-service"
          class="radial-item item-3"
        >
          <i class="fas fa-shield-alt" aria-hidden="true"></i>
          <span>Gutter Guards</span>
        </a>

        <a
          href="/services/gutter-installation"
          class="radial-item item-4"
        >
          <i class="fas fa-tools" aria-hidden="true"></i>
          <span>New Gutter Installation</span>
        </a>

        <a
          href="/services/dryer-vent-cleaning"
          class="radial-item item-5"
        >
          <i class="fas fa-fire-extinguisher" aria-hidden="true"></i>
          <span>Dryer Vent Cleaning</span>
        </a>

        <a
          href="/services#underground-drainage-service"
          class="radial-item item-6"
        >
          <i class="fas fa-water" aria-hidden="true"></i>
          <span>Drainage Solutions</span>
        </a>
      </div>
    `;
  }

  /**
   * Progressive enhancement for the site-wide service wheel.
   *
   * Every page ships a complete six-service static fallback, so this
   * function never destroys markup that is already correct. It only
   * fills an overlay that shipped empty (or is missing entirely),
   * normalises the accessibility attributes, and guarantees exactly
   * one floating trigger.
   */
  function ensureSitewideServiceWheel() {
    let radialOverlay =
      document.getElementById("radial-menu-overlay");

    if (!radialOverlay) {
      radialOverlay = document.createElement("div");
      radialOverlay.id = "radial-menu-overlay";

      document.body.appendChild(radialOverlay);
    }

    radialOverlay.classList.add("radial-overlay");

    if (!radialOverlay.getAttribute("role")) {
      radialOverlay.setAttribute("role", "dialog");
      radialOverlay.setAttribute("aria-modal", "true");

      radialOverlay.setAttribute(
        "aria-label",
        "CleanFlow service menu"
      );
    }

    const existingItems =
      radialOverlay.querySelectorAll(".radial-item");

    if (!existingItems.length) {
      radialOverlay.innerHTML =
        getServiceWheelMarkup();
    }

    const existingTriggers = Array.prototype.slice.call(
      document.querySelectorAll(
        "[data-service-menu-trigger], .floating-service-trigger"
      )
    );

    if (!existingTriggers.length) {
      const floatingServiceTrigger =
        document.createElement("button");

      floatingServiceTrigger.type = "button";

      floatingServiceTrigger.className =
        "floating-service-trigger";

      floatingServiceTrigger.setAttribute(
        "data-service-menu-trigger",
        "true"
      );

      floatingServiceTrigger.setAttribute(
        "aria-label",
        "Open the service menu"
      );

      floatingServiceTrigger.setAttribute(
        "aria-haspopup",
        "dialog"
      );

      floatingServiceTrigger.innerHTML =
        '<i class="fas fa-th-large" aria-hidden="true"></i>' +
        "<span>Services</span>";

      document.body.appendChild(
        floatingServiceTrigger
      );

      return;
    }

    existingTriggers.forEach(function (trigger, index) {
      if (index > 0) {
        // Guard against duplicate triggers stacking up.
        trigger.parentNode.removeChild(trigger);

        return;
      }

      trigger.setAttribute(
        "data-service-menu-trigger",
        "true"
      );

      trigger.setAttribute("aria-haspopup", "dialog");

      if (!trigger.getAttribute("aria-label")) {
        trigger.setAttribute(
          "aria-label",
          "Open the service menu"
        );
      }

      if (trigger.tagName.toLowerCase() === "button") {
        trigger.type = "button";
      }
    });
  }

  function toggleSign(element) {
    if (!element) {
      return;
    }

    const card =
      element.classList &&
      element.classList.contains("sign-card")
        ? element
        : element.closest
        ? element.closest(".sign-card")
        : null;

    if (!card) {
      return;
    }

    const isActive = card.classList.toggle("active");

    const toggle =
      card.querySelector(".sign-toggle");

    if (toggle) {
      toggle.setAttribute(
        "aria-expanded",
        String(isActive)
      );
    }
  }

  function toggleAccordion(header) {
    if (!header) {
      return;
    }

    const accordionItem =
      header.closest(".accordion-item");

    const accordion =
      header.closest(".accordion");

    const content = accordionItem
      ? accordionItem.querySelector(".accordion-content")
      : null;

    if (!accordionItem || !content) {
      return;
    }

    const isOpen =
      header.classList.contains("active");

    if (accordion) {
      accordion
        .querySelectorAll(".accordion-header")
        .forEach(function (item) {
          item.classList.remove("active");
          item.setAttribute("aria-expanded", "false");
        });

      accordion
        .querySelectorAll(".accordion-content")
        .forEach(function (item) {
          item.classList.remove("active");
          item.style.maxHeight = null;
        });
    }

    if (!isOpen) {
      header.classList.add("active");
      header.setAttribute("aria-expanded", "true");

      content.classList.add("active");

      content.style.maxHeight =
        content.scrollHeight + 48 + "px";
    }
  }

  window.toggleSign = toggleSign;
  window.toggleAccordion = toggleAccordion;

  function scrollBehaviour() {
    return prefersReducedMotion() ? "auto" : "smooth";
  }

  function prefersReducedMotion() {
    return (
      typeof window.matchMedia === "function" &&
      window
        .matchMedia("(prefers-reduced-motion: reduce)")
        .matches
    );
  }

  function initAOS() {
    if (prefersReducedMotion()) {
      document
        .querySelectorAll("[data-aos]")
        .forEach(function (element) {
          element.removeAttribute("data-aos");
          element.removeAttribute("data-aos-delay");
          element.removeAttribute("data-aos-duration");
        });

      return;
    }

    if (window.AOS) {
      window.AOS.init({
        duration: 800,
        once: true,
        offset: 80
      });
    }
  }

  function initMobileMenu() {
    const menuToggle =
      document.getElementById("menu-toggle");

    const navMenu =
      document.getElementById("nav-menu");

    const closeMenu =
      document.getElementById("close-menu");

    if (!menuToggle || !navMenu) {
      return;
    }

    if (!navMenu.id) {
      navMenu.id = "nav-menu";
    }

    menuToggle.setAttribute("aria-controls", navMenu.id);
    menuToggle.setAttribute("aria-expanded", "false");

    if (!menuToggle.getAttribute("aria-label")) {
      menuToggle.setAttribute(
        "aria-label",
        "Open navigation menu"
      );
    }

    let lastFocusedBeforeMenu = null;

    function isMenuOpen() {
      return navMenu.classList.contains("active");
    }

    function openMenu() {
      lastFocusedBeforeMenu = document.activeElement;

      navMenu.classList.add("active");
      document.body.classList.add("menu-open");

      menuToggle.setAttribute("aria-expanded", "true");

      const firstFocusable =
        closeMenu || navMenu.querySelector("a");

      if (firstFocusable) {
        firstFocusable.focus();
      }
    }

    function closeMobileMenu(restoreFocus) {
      const wasOpen = isMenuOpen();

      navMenu.classList.remove("active");
      document.body.classList.remove("menu-open");

      menuToggle.setAttribute("aria-expanded", "false");

      if (!wasOpen || restoreFocus === false) {
        return;
      }

      const target =
        lastFocusedBeforeMenu &&
        document.contains(lastFocusedBeforeMenu)
          ? lastFocusedBeforeMenu
          : menuToggle;

      target.focus();
    }

    menuToggle.addEventListener(
      "click",
      function () {
        if (isMenuOpen()) {
          closeMobileMenu();
        } else {
          openMenu();
        }
      }
    );

    if (closeMenu) {
      closeMenu.addEventListener(
        "click",
        function () {
          closeMobileMenu();
        }
      );
    }

    navMenu
      .querySelectorAll("a")
      .forEach(function (link) {
        link.addEventListener(
          "click",
          function () {
            closeMobileMenu(false);
          }
        );
      });

    document.addEventListener(
      "keydown",
      function (event) {
        if (
          event.key === "Escape" &&
          isMenuOpen()
        ) {
          closeMobileMenu();
        }
      }
    );

    window.closeMobileMenu = closeMobileMenu;
  }

  function initRadialMenu() {
    const radialOverlay =
      document.getElementById("radial-menu-overlay");

    if (!radialOverlay) {
      return;
    }

    const radialClose =
      radialOverlay.querySelector(".radial-close");

    const triggers =
      document.querySelectorAll(
        "[data-service-menu-trigger]"
      );

    let lastFocusedBeforeWheel = null;

    function isRadialOpen() {
      return radialOverlay.classList.contains("active");
    }

    function openRadialMenu(event) {
      if (event) {
        event.preventDefault();
      }

      lastFocusedBeforeWheel = document.activeElement;

      radialOverlay.classList.add("active");
      radialOverlay.removeAttribute("aria-hidden");

      document.body.classList.add(
        "radial-menu-open"
      );

      const navMenu =
        document.getElementById("nav-menu");

      if (navMenu) {
        navMenu.classList.remove("active");
      }

      const navToggle =
        document.getElementById("menu-toggle");

      if (navToggle) {
        navToggle.setAttribute("aria-expanded", "false");
      }

      document.body.classList.remove("menu-open");

      const firstFocusable =
        radialClose ||
        radialOverlay.querySelector("a");

      if (firstFocusable) {
        firstFocusable.focus();
      }
    }

    function closeRadialMenu(restoreFocus) {
      const wasOpen = isRadialOpen();

      radialOverlay.classList.remove("active");
      radialOverlay.setAttribute("aria-hidden", "true");

      document.body.classList.remove(
        "radial-menu-open"
      );

      if (!wasOpen || restoreFocus === false) {
        return;
      }

      const target =
        lastFocusedBeforeWheel &&
        document.contains(lastFocusedBeforeWheel)
          ? lastFocusedBeforeWheel
          : document.querySelector(
              "[data-service-menu-trigger]"
            );

      if (target) {
        target.focus();
      }
    }

    radialOverlay.setAttribute("aria-hidden", "true");

    const FOCUSABLE_SELECTOR =
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

    function focusableItems() {
      return Array.prototype.slice.call(
        radialOverlay.querySelectorAll(FOCUSABLE_SELECTOR)
      );
    }

    // Keep Tab inside the dialog while it is open.
    radialOverlay.addEventListener(
      "keydown",
      function (event) {
        if (event.key !== "Tab" || !isRadialOpen()) {
          return;
        }

        const items = focusableItems();

        if (!items.length) {
          return;
        }

        const first = items[0];
        const last = items[items.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (
          !event.shiftKey &&
          document.activeElement === last
        ) {
          event.preventDefault();
          first.focus();
        }
      }
    );

    triggers.forEach(function (trigger) {
      trigger.addEventListener(
        "click",
        openRadialMenu
      );
    });

    if (radialClose) {
      radialClose.addEventListener(
        "click",
        function () {
          closeRadialMenu();
        }
      );
    }

    radialOverlay.addEventListener(
      "click",
      function (event) {
        if (event.target === radialOverlay) {
          closeRadialMenu();
        }
      }
    );

    radialOverlay
      .querySelectorAll("a")
      .forEach(function (link) {
        link.addEventListener(
          "click",
          function () {
            closeRadialMenu(false);
          }
        );
      });

    document.addEventListener(
      "keydown",
      function (event) {
        if (
          event.key === "Escape" &&
          isRadialOpen()
        ) {
          closeRadialMenu();
        }
      }
    );

    window.openRadialMenu = openRadialMenu;
    window.closeRadialMenu = closeRadialMenu;
  }

  function initCalculator() {
    const calculateBtn =
      document.getElementById("calculateBtn");

    if (!calculateBtn) {
      return;
    }

    calculateBtn.addEventListener(
      "click",
      function (event) {
        event.preventDefault();
        calculateGutterEstimate();
      }
    );

    const inputs = [
      "linearFeet",
      "stories",
      "debris",
      "access"
    ]
      .map(function (id) {
        return document.getElementById(id);
      })
      .filter(Boolean);

    inputs.forEach(function (input) {
      input.addEventListener(
        "keydown",
        function (event) {
          if (event.key === "Enter") {
            event.preventDefault();
            calculateGutterEstimate();
          }
        }
      );
    });
  }

  function initSeasonTabs() {
    const tabList =
      document.querySelector(".season-tabs");

    const tabs = Array.prototype.slice.call(
      document.querySelectorAll(".season-tab")
    );

    const panels = Array.prototype.slice.call(
      document.querySelectorAll(".season-content")
    );

    if (!tabs.length || !panels.length) {
      return;
    }

    if (tabList) {
      tabList.setAttribute("role", "tablist");
      tabList.setAttribute(
        "aria-label",
        "Seasonal gutter maintenance guide"
      );
    }

    function panelForTab(tab) {
      const season =
        tab.getAttribute("data-season");

      return season
        ? document.getElementById(season + "-content")
        : null;
    }

    tabs.forEach(function (tab, index) {
      const panel = panelForTab(tab);

      if (tab.tagName.toLowerCase() === "button") {
        tab.type = "button";
      }

      tab.setAttribute("role", "tab");

      if (!tab.id) {
        tab.id =
          "season-tab-" +
          (tab.getAttribute("data-season") || index);
      }

      if (panel) {
        tab.setAttribute("aria-controls", panel.id);

        panel.setAttribute("role", "tabpanel");
        panel.setAttribute("tabindex", "0");
        panel.setAttribute("aria-labelledby", tab.id);
      }
    });

    function activate(index, moveFocus) {
      const tab = tabs[index];

      if (!tab) {
        return;
      }

      tabs.forEach(function (item) {
        item.classList.remove("active");
        item.setAttribute("aria-selected", "false");
        item.setAttribute("tabindex", "-1");
      });

      panels.forEach(function (panel) {
        panel.classList.remove("active");
      });

      tab.classList.add("active");
      tab.setAttribute("aria-selected", "true");
      tab.setAttribute("tabindex", "0");

      const activePanel = panelForTab(tab);

      if (activePanel) {
        activePanel.classList.add("active");
      }

      if (moveFocus) {
        tab.focus();
      }
    }

    tabs.forEach(function (tab, index) {
      tab.addEventListener(
        "click",
        function () {
          activate(index, false);
        }
      );

      tab.addEventListener(
        "keydown",
        function (event) {
          let nextIndex = null;

          if (
            event.key === "ArrowRight" ||
            event.key === "ArrowDown"
          ) {
            nextIndex = (index + 1) % tabs.length;
          } else if (
            event.key === "ArrowLeft" ||
            event.key === "ArrowUp"
          ) {
            nextIndex =
              (index - 1 + tabs.length) % tabs.length;
          } else if (event.key === "Home") {
            nextIndex = 0;
          } else if (event.key === "End") {
            nextIndex = tabs.length - 1;
          }

          if (nextIndex === null) {
            return;
          }

          event.preventDefault();
          activate(nextIndex, true);
        }
      );
    });

    let initialIndex = tabs.findIndex(function (tab) {
      return tab.classList.contains("active");
    });

    if (initialIndex < 0) {
      initialIndex = 0;
    }

    activate(initialIndex, false);
  }

  function initSmoothScrolling() {
    document
      .querySelectorAll('a[href^="#"]')
      .forEach(function (link) {
        link.addEventListener(
          "click",
          function (event) {
            const href =
              link.getAttribute("href");

            if (!href || href === "#") {
              return;
            }

            const target =
              document.querySelector(href);

            if (!target) {
              return;
            }

            event.preventDefault();

            target.scrollIntoView({
              behavior: scrollBehaviour(),
              block: "start"
            });

            if (
              target.classList.contains(
                "service-detail-section"
              )
            ) {
              target.classList.add(
                "section-highlight"
              );

              window.setTimeout(
                function () {
                  target.classList.remove(
                    "section-highlight"
                  );
                },
                1200
              );
            }
          }
        );
      });
  }

  function initScrollEffects() {
    const header =
      document.getElementById("header");

    const backToTop =
      document.getElementById("back-to-top");

    const floatingCta =
      document.getElementById("floating-cta");

    function handleScroll() {
      const scrolled =
        window.scrollY > 120;

      if (header) {
        header.classList.toggle(
          "scrolled",
          window.scrollY > 40
        );

        header.classList.toggle(
          "sticky",
          window.scrollY > 40
        );
      }

      if (backToTop) {
        backToTop.classList.toggle(
          "active",
          scrolled
        );
      }

      if (floatingCta) {
        floatingCta.classList.toggle(
          "active",
          scrolled
        );
      }
    }

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true
      }
    );

    handleScroll();

    if (backToTop) {
      backToTop.addEventListener(
        "click",
        function () {
          window.scrollTo({
            top: 0,
            behavior: scrollBehaviour()
          });
        }
      );
    }
  }

  function initQuoteFormStatus() {
    const formMessage =
      document.getElementById("formMessage");

    if (!formMessage) {
      return;
    }

    const params =
      new URLSearchParams(
        window.location.search
      );

    if (params.get("submitted") === "true") {
      formMessage.textContent =
        "Thank you. Your quote request was sent successfully. We will follow up as soon as possible.";

      formMessage.classList.add("success");
      formMessage.style.display = "block";
    }
  }

  /**
   * Normalise a pathname so the clean routes, the .html forms that still
   * resolve, and any trailing slash all compare equal.
   *   /index.html -> /   ;   /services.html -> /services
   *   /services/gutter-cleaning/ -> /services/gutter-cleaning
   */
  function normalisePath(path) {
    let normalised = String(path || "/")
      .split("#")[0]
      .split("?")[0]
      .replace(/\/index\.html$/, "/")
      .replace(/\.html$/, "");

    if (normalised.length > 1) {
      normalised = normalised.replace(/\/+$/, "");
    }

    return normalised === "" ? "/" : normalised;
  }

  function initActiveNavLinks() {
    const currentPath = normalisePath(
      window.location.pathname
    );

    document
      .querySelectorAll("nav a")
      .forEach(function (link) {
        const href = link.getAttribute("href");

        link.classList.remove("active");
        link.removeAttribute("aria-current");

        if (!href || href.charAt(0) !== "/") {
          return;
        }

        const linkPath = normalisePath(href);

        // The home link matches only the home page. Every other nav
        // link also matches its descendants, so a dedicated service
        // page keeps "Services" highlighted.
        const isActive =
          linkPath === "/"
            ? currentPath === "/"
            : currentPath === linkPath ||
              currentPath.indexOf(linkPath + "/") === 0;

        if (isActive) {
          link.classList.add("active");
          link.setAttribute("aria-current", "page");
        }
      });
  }

  function initReviewCarousel() {
    const carousel =
      document.getElementById("review-carousel");

    if (!carousel) {
      return;
    }

    const track =
      carousel.querySelector(".rc-track");

    const cards =
      carousel.querySelectorAll(".review-card");

    const prevBtn =
      carousel.querySelector(".rc-prev");

    const nextBtn =
      carousel.querySelector(".rc-next");

    const pauseBtn =
      carousel.querySelector(".rc-pause");

    const dotsWrap =
      carousel.querySelector(".rc-dots");

    if (!track || !cards.length) {
      return;
    }

    const AUTO_DELAY = 12000;
    const RESUME_DELAY = 15000;

    const reducedMotion =
      window
        .matchMedia(
          "(prefers-reduced-motion: reduce)"
        )
        .matches;

    let currentIndex = 0;
    let autoTimer = null;
    let resumeTimer = null;
    let userPaused = false;
    let hovered = false;

    const dots = [];

    if (dotsWrap) {
      cards.forEach(function (card, index) {
        const dot =
          document.createElement("button");

        dot.type = "button";

        dot.className =
          "rc-dot" +
          (index === 0 ? " active" : "");

        dot.setAttribute(
          "aria-label",
          "Go to review " + (index + 1)
        );

        if (index === 0) {
          dot.setAttribute("aria-current", "true");
        }

        dot.addEventListener(
          "click",
          function () {
            goTo(index);
            interactionPause();
          }
        );

        dotsWrap.appendChild(dot);
        dots.push(dot);
      });
    }

    function goTo(index) {
      const clamped =
        (index + cards.length) %
        cards.length;

      const card =
        cards[clamped];

      const offset =
        card.offsetLeft -
        (
          track.clientWidth -
          card.clientWidth
        ) /
          2;

      track.scrollTo({
        left: offset,
        behavior: reducedMotion
          ? "auto"
          : "smooth"
      });

      currentIndex = clamped;
      updateDots();
    }

    function updateDots() {
      dots.forEach(function (dot, index) {
        const isCurrent = index === currentIndex;

        dot.classList.toggle("active", isCurrent);

        if (isCurrent) {
          dot.setAttribute("aria-current", "true");
        } else {
          dot.removeAttribute("aria-current");
        }
      });
    }

    function nearestIndex() {
      const center =
        track.scrollLeft +
        track.clientWidth / 2;

      let best = 0;
      let bestDistance = Infinity;

      cards.forEach(function (card, index) {
        const cardCenter =
          card.offsetLeft +
          card.clientWidth / 2;

        const distance =
          Math.abs(cardCenter - center);

        if (distance < bestDistance) {
          bestDistance = distance;
          best = index;
        }
      });

      return best;
    }

    function startAuto() {
      if (
        reducedMotion ||
        userPaused ||
        hovered
      ) {
        return;
      }

      stopAuto();

      autoTimer = window.setInterval(
        function () {
          goTo(currentIndex + 1);
        },
        AUTO_DELAY
      );
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

      resumeTimer = window.setTimeout(
        function () {
          startAuto();
        },
        RESUME_DELAY
      );
    }

    if (prevBtn) {
      prevBtn.addEventListener(
        "click",
        function () {
          goTo(currentIndex - 1);
          interactionPause();
        }
      );
    }

    if (nextBtn) {
      nextBtn.addEventListener(
        "click",
        function () {
          goTo(currentIndex + 1);
          interactionPause();
        }
      );
    }

    if (pauseBtn) {
      const icon =
        pauseBtn.querySelector("i");

      pauseBtn.addEventListener(
        "click",
        function () {
          userPaused = !userPaused;

          pauseBtn.setAttribute(
            "aria-pressed",
            String(userPaused)
          );

          pauseBtn.setAttribute(
            "aria-label",
            userPaused
              ? "Resume automatic rotation"
              : "Pause automatic rotation"
          );

          if (icon) {
            icon.className = userPaused
              ? "fas fa-play"
              : "fas fa-pause";
          }

          if (userPaused) {
            stopAuto();

            if (resumeTimer) {
              window.clearTimeout(
                resumeTimer
              );

              resumeTimer = null;
            }
          } else {
            startAuto();
          }
        }
      );
    }

    carousel.addEventListener(
      "pointerenter",
      function () {
        hovered = true;
        stopAuto();
      }
    );

    carousel.addEventListener(
      "pointerleave",
      function () {
        hovered = false;
        startAuto();
      }
    );

    carousel.addEventListener(
      "focusin",
      function () {
        stopAuto();
      }
    );

    track.addEventListener(
      "touchstart",
      function () {
        interactionPause();
      },
      {
        passive: true
      }
    );

    track.addEventListener(
      "pointerdown",
      function () {
        interactionPause();
      }
    );

    let scrollRaf = null;

    track.addEventListener(
      "scroll",
      function () {
        if (scrollRaf) {
          return;
        }

        scrollRaf =
          window.requestAnimationFrame(
            function () {
              currentIndex =
                nearestIndex();

              updateDots();
              scrollRaf = null;
            }
          );
      },
      {
        passive: true
      }
    );

    document.addEventListener(
      "visibilitychange",
      function () {
        if (document.hidden) {
          stopAuto();
        } else {
          startAuto();
        }
      }
    );

    startAuto();
  }

  function initCleanFlowCheckup() {
    const checkup =
      document.querySelector(
        "[data-cleanflow-checkup]"
      );

    const invite =
      document.getElementById("gcInvite");

    const startBtn =
      document.getElementById("gcStartBtn");

    if (!checkup || !invite || !startBtn) {
      return;
    }

    const questionPanel =
      document.getElementById(
        "gcQuestionPanel"
      );

    const stepLabel =
      document.getElementById(
        "gcStepLabel"
      );

    const questionTitle =
      document.getElementById(
        "gcQuestion"
      );

    const questionHint =
      document.getElementById(
        "gcHint"
      );

    const optionsWrap =
      document.getElementById(
        "gcOptions"
      );

    const progressFill =
      document.getElementById(
        "gcProgressFill"
      );

    const progressBar =
      document.getElementById(
        "gcProgressBar"
      );

    const backBtn =
      document.getElementById(
        "gcBack"
      );

    const resetBtn =
      document.getElementById(
        "gcReset"
      );

    const resultPanel =
      document.getElementById(
        "gcResult"
      );

    const checkupForm =
      document.getElementById(
        "checkupForm"
      );

    const resultIcon =
      document.getElementById(
        "gcResultIcon"
      );

    const resultService =
      document.getElementById(
        "gcResultService"
      );

    const resultSummary =
      document.getElementById(
        "gcResultSummary"
      );

    const reviewList =
      document.getElementById(
        "gcReviewList"
      );

    const submitStatus =
      document.getElementById(
        "gcSubmitStatus"
      );

    const hiddenMessage =
      document.getElementById(
        "gcHiddenMessage"
      );

    const checkupName =
      document.getElementById(
        "checkupName"
      );

    const checkupPhone =
      document.getElementById(
        "checkupPhone"
      );

    const checkupAddress =
      document.getElementById(
        "checkupAddress"
      );

    const checkupNotes =
      document.getElementById(
        "checkupNotes"
      );

    const checkupPhotos =
      document.getElementById(
        "checkupPhotos"
      );

    if (
      !questionPanel ||
      !stepLabel ||
      !questionTitle ||
      !questionHint ||
      !optionsWrap ||
      !progressFill ||
      !backBtn ||
      !resetBtn ||
      !resultPanel ||
      !checkupForm ||
      !resultService ||
      !resultSummary ||
      !reviewList ||
      !hiddenMessage ||
      !checkupName ||
      !checkupPhone ||
      !checkupAddress ||
      !checkupNotes ||
      !checkupPhotos
    ) {
      return;
    }

    const serviceOrder = [
      "repairs",
      "drainage",
      "installation",
      "cleaning",
      "guards",
      "dryer"
    ];

    const services = {
      cleaning: {
        title: "Gutter Cleaning",
        icon: "fas fa-broom",
        serviceName: "Gutter Cleaning",
        nextStep:
          "Cleaning and downspout flow check",
        quoteValue: "Gutter Cleaning"
      },

      repairs: {
        title: "Gutter Repairs",
        icon: "fas fa-wrench",
        serviceName: "Gutter Repairs",
        nextStep:
          "Repair-focused inspection",
        quoteValue: "Gutter Repairs"
      },

      guards: {
        title: "Gutter Guard Installation",
        icon: "fas fa-shield-alt",
        serviceName: "Gutter Guards",
        nextStep:
          "Clean, inspection, and guard recommendation if the system is a good candidate",
        quoteValue: "Gutter Guards"
      },

      installation: {
        title: "Seamless Gutter Installation",
        icon: "fas fa-tools",
        serviceName: "Gutter Installation",
        nextStep:
          "Gutter installation estimate",
        quoteValue: "Gutter Installation"
      },

      drainage: {
        title:
          "Drainage & Downspout Solutions",
        icon: "fas fa-water",
        serviceName:
          "Underground Drainage / Downspout Extensions",
        nextStep:
          "Drainage and downspout assessment",
        quoteValue:
          "Underground Drainage / Downspout Extensions"
      },

      dryer: {
        title: "Dryer Vent Cleaning",
        icon: "fas fa-fire-extinguisher",
        serviceName: "Dryer Vent Cleaning",
        nextStep:
          "Dryer vent cleaning and airflow check",
        quoteValue: "Dryer Vent Cleaning"
      }
    };

    /* ============================================================
       ADAPTIVE CHECKUP ROUTING MODEL

       Questions form a directed graph keyed by stable ids. Each
       option names the question that follows it, so a customer's
       route is a pure function of the answers they have given.
       Nothing about the flow lives in click handlers.

       `projectedNext` is used only to project how long the route
       will be while later questions are still unanswered. A value
       of null means "route ends here"; omitting it means "cannot
       be known yet", which is how the opening triage is handled.
       ============================================================ */

    const ENTRY_QUESTION_ID = "start";

    const QUESTIONS = {
      start: {
        id: "start",
        theme: "Main concern",
        title: "What is the main thing you want checked?",
        hint: "Start with the concern that brought you here today.",
        projectedNext: "g_intent",
        options: [
          {
            id: "gutters",
            icon: "fas fa-home",
            title: "Gutters, downspouts, or drainage",
            detail: "Overflow, leaks, clogs, guards, new gutters, or water near the home.",
            echo: "Main concern: Gutters, downspouts, or drainage",
            track: "gutter",
            next: "g_intent",
            scores: {}
          },
          {
            id: "dryer",
            icon: "fas fa-fire-extinguisher",
            title: "Dryer vent airflow or lint buildup",
            detail: "Long dry times, hot dryer, lint concern, or vent cleaning.",
            echo: "Main concern: Dryer vent airflow or lint buildup",
            track: "dryer",
            next: "dr_symptom",
            scores: { dryer: 6 }
          }
        ]
      },

      /* ---------- gutter triage ---------- */
      g_intent: {
        id: "g_intent",
        theme: "What you need",
        title: "What best describes what you'd like help with?",
        hint: "Pick the closest match. We will narrow it down from here.",
        options: [
          {
            id: "clean",
            icon: "fas fa-broom",
            title: "Cleaning or clogged gutters",
            detail: "Routine cleaning, visible debris, or gutters that look full.",
            echo: "Looking for: Cleaning or clogged gutters",
            next: "c_history",
            scores: { cleaning: 4 }
          },
          {
            id: "overflow",
            icon: "fas fa-water",
            title: "Overflow or a downspout that will not drain",
            detail: "Water spills over, or a downspout backs up during rain.",
            echo: "Looking for: Overflow or a downspout that will not drain",
            next: "o_where",
            scores: { cleaning: 2, drainage: 1 }
          },
          {
            id: "repair",
            icon: "fas fa-wrench",
            title: "A leak, sag, loose or damaged section",
            detail: "Something is physically wrong with the gutter itself.",
            echo: "Looking for: A leak, sag, loose or damaged section",
            next: "r_condition",
            scores: { repairs: 4 }
          },
          {
            id: "drainage",
            icon: "fas fa-arrow-down",
            title: "Buried downspout, backup, or standing water",
            detail: "Underground pipe, water pooling, or a yard drainage concern.",
            echo: "Looking for: Buried downspout, backup, or standing water",
            next: "d_where",
            scores: { drainage: 4 }
          },
          {
            id: "guards",
            icon: "fas fa-shield-alt",
            title: "Recurring debris or gutter guards",
            detail: "They fill up again quickly, or you are considering guards.",
            echo: "Looking for: Recurring debris or gutter guards",
            next: "gu_debris",
            scores: { guards: 4 }
          },
          {
            id: "replace",
            icon: "fas fa-tools",
            title: "Old, undersized, or replacement gutters",
            detail: "You are thinking about replacing the gutters.",
            echo: "Looking for: Old, undersized, or replacement gutters",
            next: "rp_reason",
            scores: { installation: 4 }
          },
          {
            id: "unsure",
            icon: "fas fa-question-circle",
            title: "Not sure, please assess it",
            detail: "Something is off and you would like CleanFlow to look.",
            echo: "Looking for: Not sure, would like an assessment",
            next: "u_symptom",
            scores: {}
          }
        ]
      },

      /* ---------- cleaning route ---------- */
      c_history: {
        id: "c_history",
        theme: "Cleaning history",
        title: "When were the gutters last cleaned?",
        hint: "This tells us how much is likely sitting in the system.",
        projectedNext: "c_downspout",
        options: [
          { id: "recent_refill", icon: "fas fa-redo-alt", title: "Recently, but they fill again fast",
            detail: "Cleaned within the last year and already filling up.",
            echo: "Cleaning history: Recent, but refills quickly",
            next: "c_downspout", scores: { cleaning: 1, guards: 5 } },
          { id: "within_year", icon: "fas fa-calendar-alt", title: "Within the last year",
            detail: "Serviced fairly recently.",
            echo: "Cleaning history: Within the last year",
            next: "c_downspout", scores: { cleaning: 2 } },
          { id: "one_two", icon: "fas fa-history", title: "One to two years ago",
            detail: "It has been a while.",
            echo: "Cleaning history: One to two years ago",
            next: "c_downspout", scores: { cleaning: 3 } },
          { id: "long_never", icon: "fas fa-exclamation-circle", title: "Over two years, or never",
            detail: "Debris has had a long time to build up.",
            echo: "Cleaning history: Over two years or never",
            next: "c_downspout", scores: { cleaning: 5 } },
          { id: "unknown", icon: "fas fa-question-circle", title: "I am not sure",
            detail: "You do not know when they were last done.",
            echo: "Cleaning history: Not sure",
            next: "c_downspout", scores: { cleaning: 3 } }
        ]
      },

      c_downspout: {
        id: "c_downspout",
        theme: "Downspout flow",
        title: "During heavy rain, what do the downspouts do?",
        hint: "Water movement tells us whether the problem stops at the gutter.",
        projectedNext: null,
        options: [
          { id: "flows_fine", icon: "fas fa-check", title: "Water runs out normally",
            detail: "The downspouts appear to drain the way they should.",
            echo: "Downspout flow: Runs out normally",
            next: null, scores: { cleaning: 4 } },
          { id: "backs_up_top", icon: "fas fa-arrow-up", title: "It backs up at the top",
            detail: "Water pools where the gutter meets the downspout.",
            echo: "Downspout flow: Backs up at the top of a downspout",
            next: null, scores: { cleaning: 5 } },
          { id: "buried", icon: "fas fa-arrow-down", title: "It goes into the ground",
            detail: "The downspout enters a buried pipe and you cannot see the outlet.",
            echo: "Downspout flow: Enters an underground line",
            next: null, scores: { cleaning: 1, drainage: 5 } },
          { id: "pools_base", icon: "fas fa-water", title: "Water pools at the bottom",
            detail: "It drains out but collects right beside the house.",
            echo: "Downspout flow: Pools at the base of the downspout",
            next: null, scores: { drainage: 6 } },
          { id: "not_watched", icon: "fas fa-question-circle", title: "I have not watched",
            detail: "You have not seen them during a real downpour.",
            echo: "Downspout flow: Not observed",
            next: null, scores: { cleaning: 2 } }
        ]
      },

      /* ---------- overflow route ---------- */
      o_where: {
        id: "o_where",
        theme: "Where it backs up",
        title: "Where does the water back up or spill?",
        hint: "This locates where the system stops moving water.",
        projectedNext: "o_discharge",
        options: [
          { id: "front_edge", icon: "fas fa-water", title: "Over the front edge",
            detail: "Water sheets over the outside of the gutter.",
            echo: "Backup location: Over the front edge",
            next: "o_discharge", scores: { cleaning: 5 } },
          { id: "downspout_top", icon: "fas fa-arrow-up", title: "At the top of a downspout",
            detail: "It pools where the gutter feeds into the downspout.",
            echo: "Backup location: Top of a downspout",
            next: "o_discharge", scores: { cleaning: 5 } },
          { id: "behind", icon: "fas fa-home", title: "Behind the gutter",
            detail: "Water gets behind the gutter or runs down the fascia.",
            echo: "Backup location: Behind the gutter or fascia",
            next: "o_discharge", scores: { repairs: 6, installation: 1 } },
          { id: "bottom", icon: "fas fa-arrow-down", title: "At the bottom of the downspout",
            detail: "The top drains but water backs up where it discharges.",
            echo: "Backup location: Bottom of the downspout",
            next: "o_discharge", scores: { drainage: 6 } }
        ]
      },

      o_discharge: {
        id: "o_discharge",
        theme: "Downspout discharge",
        title: "What does the downspout do at the bottom?",
        hint: "Where the water goes next matters as much as the gutter itself.",
        projectedNext: "o_cleaned",
        options: [
          { id: "onto_ground", icon: "fas fa-check", title: "Runs out onto the ground",
            detail: "It discharges above ground and flows away.",
            echo: "Downspout discharge: Onto the ground, flows away",
            next: "o_cleaned", scores: { cleaning: 2 } },
          { id: "into_ground", icon: "fas fa-arrow-down", title: "Goes into a buried pipe",
            detail: "It disappears into the ground.",
            echo: "Downspout discharge: Into a buried pipe",
            next: "o_cleaned", scores: { drainage: 5 } },
          { id: "pools", icon: "fas fa-water", title: "Water pools right there",
            detail: "It collects beside the foundation instead of draining away.",
            echo: "Downspout discharge: Pools beside the home",
            next: "o_cleaned", scores: { drainage: 6 } },
          { id: "unknown", icon: "fas fa-question-circle", title: "I am not sure",
            detail: "You have not looked at where it ends up.",
            echo: "Downspout discharge: Not sure",
            next: "o_cleaned", scores: { cleaning: 1, drainage: 1 } }
        ]
      },

      o_cleaned: {
        id: "o_cleaned",
        theme: "Has cleaning helped",
        title: "Has a cleaning fixed this before?",
        hint: "If cleaning has already been tried, the cause is usually elsewhere.",
        projectedNext: null,
        options: [
          { id: "yes_returns", icon: "fas fa-redo-alt", title: "Yes, but it comes back",
            detail: "Cleaning helps for a while, then the problem returns.",
            echo: "Cleaning outcome: Helps, but the problem returns",
            next: null, scores: { guards: 4, drainage: 3 } },
          { id: "no_change", icon: "fas fa-ban", title: "No, it did not help",
            detail: "It was cleaned and the problem stayed the same.",
            echo: "Cleaning outcome: Cleaning did not resolve it",
            next: null, scores: { repairs: 4, drainage: 3, installation: 1 } },
          { id: "never_tried", icon: "fas fa-broom", title: "It has not been cleaned",
            detail: "No recent cleaning to compare against.",
            echo: "Cleaning outcome: Not cleaned recently",
            next: null, scores: { cleaning: 5 } },
          { id: "unknown", icon: "fas fa-question-circle", title: "I am not sure",
            detail: "You do not know the service history.",
            echo: "Cleaning outcome: Not sure",
            next: null, scores: { cleaning: 2 } }
        ]
      },

      /* ---------- repair route ---------- */
      r_condition: {
        id: "r_condition",
        theme: "Visible condition",
        title: "What can you see?",
        hint: "Describe the part that looks wrong.",
        projectedNext: "r_extent",
        options: [
          { id: "leak_seam", icon: "fas fa-tint", title: "A leak at a seam, corner, or end cap",
            detail: "Water drips from a joint rather than over the edge.",
            echo: "Visible condition: Leaking seam, corner, or end cap",
            next: "r_extent", scores: { repairs: 6 } },
          { id: "sagging", icon: "fas fa-weight-hanging", title: "Sagging or pulling away",
            detail: "A section droops or has separated from the fascia.",
            echo: "Visible condition: Sagging or pulling away",
            next: "r_extent", scores: { repairs: 5, installation: 2 } },
          { id: "loose", icon: "fas fa-unlink", title: "Loose or missing fasteners",
            detail: "Hangers, spikes, or brackets have come out.",
            echo: "Visible condition: Loose or missing fasteners",
            next: "r_extent", scores: { repairs: 6 } },
          { id: "damaged", icon: "fas fa-exclamation-circle", title: "Dented or damaged section",
            detail: "Physical damage from ice, a ladder, or a branch.",
            echo: "Visible condition: Dented or damaged section",
            next: "r_extent", scores: { repairs: 5, installation: 3 } },
          { id: "fascia", icon: "fas fa-home", title: "Water damage behind the gutter",
            detail: "Staining or soft wood on the fascia or soffit.",
            echo: "Visible condition: Water damage behind the gutter",
            next: "r_extent", scores: { repairs: 5, installation: 2 } }
        ]
      },

      r_extent: {
        id: "r_extent",
        theme: "How widespread",
        title: "Is it one area or much of the home?",
        hint: "Scope is what separates a repair from a replacement.",
        projectedNext: null,
        options: [
          { id: "one_spot", icon: "fas fa-map-marker-alt", title: "One spot",
            detail: "A single section or corner.",
            echo: "Extent: One spot",
            next: null, scores: { repairs: 5 } },
          { id: "few_spots", icon: "fas fa-stream", title: "A few separate spots",
            detail: "More than one area, but not everywhere.",
            echo: "Extent: A few separate spots",
            next: null, scores: { repairs: 4, installation: 2 } },
          { id: "most", icon: "fas fa-house-user", title: "Most of the gutters",
            detail: "The whole system looks tired or is failing in several places.",
            echo: "Extent: Most of the gutters",
            next: null, scores: { installation: 11, repairs: 1 } },
          { id: "unknown", icon: "fas fa-question-circle", title: "I am not sure",
            detail: "Hard to tell from the ground.",
            echo: "Extent: Not sure",
            next: null, scores: { repairs: 3 } }
        ]
      },

      /* ---------- drainage route ---------- */
      d_where: {
        id: "d_where",
        theme: "Where water collects",
        title: "Where does the water show up?",
        hint: "This tells us where the water is stopping.",
        projectedNext: "d_outlet",
        options: [
          { id: "foundation", icon: "fas fa-home", title: "Against the foundation",
            detail: "Water pools right beside the house.",
            echo: "Water collects: Against the foundation",
            next: "d_outlet", scores: { drainage: 6 } },
          { id: "downspout_base", icon: "fas fa-arrow-down", title: "At the base of a downspout",
            detail: "It backs up where the downspout meets the ground.",
            echo: "Water collects: At the base of a downspout",
            next: "d_outlet", scores: { drainage: 6 } },
          { id: "yard", icon: "fas fa-seedling", title: "Standing water in the yard",
            detail: "Puddles that sit for a long time after rain.",
            echo: "Water collects: Standing water in the yard",
            next: "d_outlet", scores: { drainage: 6 } },
          { id: "low_area", icon: "fas fa-mountain", title: "A low area away from the house",
            detail: "Water gathers somewhere downhill.",
            echo: "Water collects: A low area away from the house",
            next: "d_outlet", scores: { drainage: 5 } },
          { id: "indoors", icon: "fas fa-exclamation-circle", title: "Damp basement or crawlspace",
            detail: "Moisture is showing up inside.",
            echo: "Water collects: Damp basement or crawlspace",
            next: "d_outlet", scores: { drainage: 7 } }
        ]
      },

      d_outlet: {
        id: "d_outlet",
        theme: "Underground line",
        title: "Does the downspout go into the ground?",
        hint: "Buried lines behave very differently from open discharge.",
        projectedNext: "d_rain",
        options: [
          { id: "buried_unknown", icon: "fas fa-arrow-down", title: "Yes, and I do not know where it goes",
            detail: "It enters a buried pipe with no visible outlet.",
            echo: "Underground line: Buried, outlet unknown",
            next: "d_rain", scores: { drainage: 6 } },
          { id: "buried_known", icon: "fas fa-route", title: "Yes, and I know where it comes out",
            detail: "There is a visible outlet or pop-up.",
            echo: "Underground line: Buried, outlet known",
            next: "d_rain", scores: { drainage: 5 } },
          { id: "above_ground", icon: "fas fa-check", title: "No, it discharges on the ground",
            detail: "The downspout ends above ground.",
            echo: "Underground line: None, discharges above ground",
            next: "d_rain", scores: { drainage: 4 } },
          { id: "unknown", icon: "fas fa-question-circle", title: "I am not sure",
            detail: "You have not looked closely.",
            echo: "Underground line: Not sure",
            next: "d_rain", scores: { drainage: 4 } }
        ]
      },

      d_rain: {
        id: "d_rain",
        theme: "During heavy rain",
        title: "What happens during heavy rain?",
        hint: "How the system behaves under load points to the cause.",
        projectedNext: null,
        options: [
          { id: "backs_out", icon: "fas fa-arrow-up", title: "Water backs up out of the ground",
            detail: "It surfaces at the connection instead of draining.",
            echo: "Heavy rain: Backs up out of the ground connection",
            next: null, scores: { drainage: 6 } },
          { id: "drains_slow", icon: "fas fa-clock", title: "It pools, then drains slowly",
            detail: "The water eventually goes away.",
            echo: "Heavy rain: Pools, then drains slowly",
            next: null, scores: { drainage: 5 } },
          { id: "never_drains", icon: "fas fa-ban", title: "It never really drains",
            detail: "Water sits there for days.",
            echo: "Heavy rain: Never really drains",
            next: null, scores: { drainage: 6 } },
          { id: "gutters_overflow", icon: "fas fa-water", title: "The gutters overflow too",
            detail: "Water is coming over the gutters as well as collecting below.",
            echo: "Heavy rain: Gutters overflow as well",
            next: null, scores: { cleaning: 8, drainage: 3 } },
          { id: "not_watched", icon: "fas fa-question-circle", title: "I have not watched",
            detail: "You have only seen the aftermath.",
            echo: "Heavy rain: Not observed",
            next: null, scores: { drainage: 4 } }
        ]
      },

      /* ---------- gutter guard route ---------- */
      gu_debris: {
        id: "gu_debris",
        theme: "Debris type",
        title: "What keeps filling the gutters?",
        hint: "Debris type decides whether guards will actually help.",
        projectedNext: "gu_existing",
        options: [
          { id: "leaves", icon: "fas fa-leaf", title: "Leaves",
            detail: "Mostly broad leaves in autumn.",
            echo: "Debris type: Leaves",
            next: "gu_existing", scores: { guards: 6 } },
          { id: "needles", icon: "fas fa-tree", title: "Pine needles or seeds",
            detail: "Fine material that packs down.",
            echo: "Debris type: Pine needles or seeds",
            next: "gu_existing", scores: { guards: 5, cleaning: 2 } },
          { id: "grit", icon: "fas fa-mountain", title: "Roof grit or shingle granules",
            detail: "Sandy material washing off the roof.",
            echo: "Debris type: Roof grit or shingle granules",
            next: "gu_existing", scores: { cleaning: 6 } },
          { id: "mixed", icon: "fas fa-stream", title: "A mix of everything",
            detail: "Leaves, needles, grit, and whatever blows in.",
            echo: "Debris type: Mixed",
            next: "gu_existing", scores: { guards: 5, cleaning: 2 } }
        ]
      },

      gu_existing: {
        id: "gu_existing",
        theme: "Existing guards",
        title: "Do you already have gutter guards?",
        hint: "Existing guards change what we would recommend.",
        projectedNext: "gu_condition",
        options: [
          { id: "none", icon: "fas fa-ban", title: "No guards",
            detail: "The gutters are open.",
            echo: "Existing guards: None",
            next: "gu_condition", scores: { guards: 3 } },
          { id: "yes_clog", icon: "fas fa-redo-alt", title: "Yes, and they still clog",
            detail: "Guards are installed but debris still gets in.",
            echo: "Existing guards: Installed, still clogging",
            next: "gu_condition", scores: { cleaning: 6 } },
          { id: "yes_damaged", icon: "fas fa-exclamation-circle", title: "Yes, but they are damaged",
            detail: "Guards are loose, bent, or falling out.",
            echo: "Existing guards: Installed but damaged",
            next: "gu_condition", scores: { repairs: 5, guards: 2 } },
          { id: "unknown", icon: "fas fa-question-circle", title: "I am not sure",
            detail: "You cannot tell from the ground.",
            echo: "Existing guards: Not sure",
            next: "gu_condition", scores: { guards: 2, cleaning: 2 } }
        ]
      },

      gu_condition: {
        id: "gu_condition",
        theme: "Gutter condition",
        title: "How do the gutters themselves look?",
        hint: "Guards only work on a system that is sound and draining.",
        projectedNext: null,
        options: [
          { id: "solid", icon: "fas fa-check", title: "Solid and straight",
            detail: "No obvious sagging or leaks.",
            echo: "Gutter condition: Solid and straight",
            next: null, scores: { guards: 6 } },
          { id: "sagging", icon: "fas fa-weight-hanging", title: "Some sagging or loose sections",
            detail: "Parts of the run are not sitting right.",
            echo: "Gutter condition: Some sagging or loose sections",
            next: null, scores: { repairs: 12 } },
          { id: "leaking", icon: "fas fa-tint", title: "Leaking in places",
            detail: "Joints or corners drip.",
            echo: "Gutter condition: Leaking in places",
            next: null, scores: { repairs: 12 } },
          { id: "unknown", icon: "fas fa-question-circle", title: "I am not sure",
            detail: "Hard to judge from the ground.",
            echo: "Gutter condition: Not sure",
            next: null, scores: { guards: 2, cleaning: 3 } }
        ]
      },

      /* ---------- replacement route ---------- */
      rp_reason: {
        id: "rp_reason",
        theme: "Reason for replacing",
        title: "What is driving the replacement?",
        hint: "This tells us whether replacement is really the right step.",
        projectedNext: "rp_extent",
        options: [
          { id: "old", icon: "fas fa-history", title: "They are simply old",
            detail: "Original gutters that have done their time.",
            echo: "Reason: Gutters are old",
            next: "rp_extent", scores: { installation: 6 } },
          { id: "undersized", icon: "fas fa-water", title: "They overflow in heavy rain",
            detail: "They cannot keep up with the roof.",
            echo: "Reason: Overflow in heavy rain, possibly undersized",
            next: "rp_extent", scores: { installation: 4, cleaning: 4 } },
          { id: "damaged", icon: "fas fa-exclamation-circle", title: "Damaged or sagging badly",
            detail: "Physical condition has deteriorated.",
            echo: "Reason: Damaged or sagging badly",
            next: "rp_extent", scores: { installation: 4, repairs: 4 } },
          { id: "cosmetic", icon: "fas fa-paint-brush", title: "Appearance or a remodel",
            detail: "New roof, new siding, or you want them to look right.",
            echo: "Reason: Appearance or remodel",
            next: "rp_extent", scores: { installation: 6 } },
          { id: "unsure", icon: "fas fa-question-circle", title: "I am not sure they need replacing",
            detail: "You would like an honest opinion first.",
            echo: "Reason: Not sure replacement is needed",
            next: "rp_condition", scores: {} }
        ]
      },

      rp_condition: {
        id: "rp_condition",
        theme: "Current condition",
        title: "What is actually wrong with them today?",
        hint: "Asked only because replacement may not be the right first step.",
        projectedNext: "rp_extent",
        options: [
          { id: "leaks", icon: "fas fa-tint", title: "They leak in places",
            detail: "Drips at joints or corners.",
            echo: "Current condition: Leaking in places",
            next: "rp_extent", scores: { repairs: 7 } },
          { id: "overflow", icon: "fas fa-water", title: "They overflow",
            detail: "Water comes over the edge in rain.",
            echo: "Current condition: Overflowing",
            next: "rp_extent", scores: { cleaning: 7 } },
          { id: "sag", icon: "fas fa-weight-hanging", title: "They sag or feel loose",
            detail: "Sections are not held properly.",
            echo: "Current condition: Sagging or loose",
            next: "rp_extent", scores: { repairs: 6, installation: 2 } },
          { id: "look_bad", icon: "fas fa-paint-brush", title: "They just look bad",
            detail: "They work, but they are stained or dated.",
            echo: "Current condition: Cosmetic only",
            next: "rp_extent", scores: { installation: 6 } }
        ]
      },

      rp_extent: {
        id: "rp_extent",
        theme: "How much of the home",
        title: "How much of the home is affected?",
        hint: "Scope decides whether this is a section or a full system.",
        projectedNext: null,
        options: [
          { id: "one", icon: "fas fa-map-marker-alt", title: "One section",
            detail: "A single run or elevation.",
            echo: "Scope: One section",
            next: null, scores: { repairs: 6, installation: 2 } },
          { id: "few", icon: "fas fa-stream", title: "A few sections",
            detail: "Several runs, but not everything.",
            echo: "Scope: A few sections",
            next: null, scores: { installation: 5, repairs: 2 } },
          { id: "whole", icon: "fas fa-house-user", title: "The whole home",
            detail: "You are thinking about the full system.",
            echo: "Scope: The whole home",
            next: null, scores: { installation: 7 } },
          { id: "unknown", icon: "fas fa-question-circle", title: "I am not sure",
            detail: "You would like a recommendation.",
            echo: "Scope: Not sure",
            next: null, scores: { installation: 3, repairs: 2 } }
        ]
      },

      /* ---------- not-sure route ---------- */
      u_symptom: {
        id: "u_symptom",
        theme: "What you noticed",
        title: "What have you noticed?",
        hint: "Anything you have seen is enough to start from.",
        projectedNext: "u_when",
        options: [
          { id: "overflow", icon: "fas fa-water", title: "Water spilling over in rain",
            detail: "It comes over the edge during a downpour.",
            echo: "Noticed: Water spilling over during rain",
            next: "u_when", scores: { cleaning: 6, drainage: 2 } },
          { id: "drip_stain", icon: "fas fa-tint", title: "Dripping, staining, or a leak",
            detail: "Marks on the fascia, siding, or a steady drip.",
            echo: "Noticed: Dripping, staining, or a leak",
            next: "u_when", scores: { repairs: 6 } },
          { id: "full", icon: "fas fa-leaf", title: "The gutters look full",
            detail: "You can see debris or plants growing.",
            echo: "Noticed: Gutters look full of debris",
            next: "u_when", scores: { cleaning: 7 } },
          { id: "pooling", icon: "fas fa-arrow-down", title: "Water pooling near the house",
            detail: "Wet ground or puddles against the foundation.",
            echo: "Noticed: Water pooling near the house",
            next: "u_when", scores: { drainage: 7 } },
          { id: "old", icon: "fas fa-history", title: "They look old or damaged",
            detail: "Sagging, dents, or general wear.",
            echo: "Noticed: Gutters look old or damaged",
            next: "u_when", scores: { installation: 5, repairs: 3 } },
          { id: "nothing", icon: "fas fa-question-circle", title: "Nothing specific",
            detail: "You would just like them looked at.",
            echo: "Noticed: Nothing specific, wants an assessment",
            next: "u_when", scores: {} }
        ]
      },

      u_when: {
        id: "u_when",
        theme: "When it happens",
        title: "When do you notice it?",
        hint: "Timing separates a blockage from a capacity or drainage issue.",
        projectedNext: "u_history",
        options: [
          { id: "heavy_rain", icon: "fas fa-water", title: "Only in heavy rain",
            detail: "Light rain seems fine.",
            echo: "When: Only in heavy rain",
            next: "u_history", scores: { cleaning: 3, installation: 2, drainage: 2 } },
          { id: "every_rain", icon: "fas fa-cloud-showers-heavy", title: "Every time it rains",
            detail: "It happens consistently.",
            echo: "When: Every time it rains",
            next: "u_history", scores: { cleaning: 4, repairs: 2 } },
          { id: "always", icon: "fas fa-clock", title: "All the time",
            detail: "It is visible even when it is dry.",
            echo: "When: All the time, even when dry",
            next: "u_history", scores: { repairs: 4, drainage: 3 } },
          { id: "unknown", icon: "fas fa-question-circle", title: "It has not rained recently",
            detail: "You have not been able to watch it.",
            echo: "When: Not recently observed",
            next: "u_history", scores: {} }
        ]
      },

      u_history: {
        id: "u_history",
        theme: "Service history",
        title: "When were the gutters last serviced?",
        hint: "Last, so we know where to start.",
        projectedNext: null,
        options: [
          { id: "within_year", icon: "fas fa-calendar-alt", title: "Within the last year",
            detail: "Cleaned or serviced fairly recently.",
            echo: "Service history: Within the last year",
            next: null, scores: { repairs: 4, drainage: 3 } },
          { id: "one_two", icon: "fas fa-history", title: "One to two years ago",
            detail: "It has been a while.",
            echo: "Service history: One to two years ago",
            next: null, scores: { cleaning: 4 } },
          { id: "long_never", icon: "fas fa-exclamation-circle", title: "Over two years, or never",
            detail: "No recent service.",
            echo: "Service history: Over two years or never",
            next: null, scores: { cleaning: 7 } },
          { id: "unknown", icon: "fas fa-question-circle", title: "I am not sure",
            detail: "You do not know the history.",
            echo: "Service history: Not sure",
            next: null, scores: { cleaning: 3 } }
        ]
      },

      /* ---------- dryer route ---------- */
      dr_symptom: {
        id: "dr_symptom",
        theme: "Dryer symptoms",
        title: "What is happening with the dryer?",
        hint: "Pick the closest match to what you are seeing.",
        projectedNext: "dr_airflow",
        options: [
          { id: "slow", icon: "fas fa-clock", title: "Clothes take too long",
            detail: "Loads need more than one cycle.",
            echo: "Dryer symptoms: Clothes take too long",
            next: "dr_airflow", scores: { dryer: 6 } },
          { id: "hot", icon: "fas fa-temperature-high", title: "Hot laundry area",
            detail: "The dryer, room, or clothes feel hotter than expected.",
            echo: "Dryer symptoms: Hot laundry area",
            next: "dr_airflow", scores: { dryer: 6 } },
          { id: "weak_flap", icon: "fas fa-wind", title: "Exterior flap barely opens",
            detail: "The outside vent does not push air strongly.",
            echo: "Dryer symptoms: Exterior flap barely opens",
            next: "dr_history", scores: { dryer: 7 } },
          { id: "lint", icon: "fas fa-fire-extinguisher", title: "Lint or safety concern",
            detail: "You are concerned about lint buildup or fire risk.",
            echo: "Dryer symptoms: Lint or safety concern",
            next: "dr_airflow", scores: { dryer: 6 } },
          { id: "hose", icon: "fas fa-compress-arrows-alt", title: "Crushed or kinked hose",
            detail: "The transition hose looks bent or restricted.",
            echo: "Dryer symptoms: Crushed or restricted hose",
            next: "dr_airflow", scores: { dryer: 6 } }
        ]
      },

      dr_airflow: {
        id: "dr_airflow",
        theme: "Exterior airflow",
        title: "What is the airflow like outside?",
        hint: "Check the exterior vent hood while the dryer runs.",
        projectedNext: "dr_history",
        options: [
          { id: "strong", icon: "fas fa-check", title: "Strong airflow",
            detail: "The vent pushes air well.",
            echo: "Exterior airflow: Strong",
            next: "dr_history", scores: { dryer: 4 } },
          { id: "weak", icon: "fas fa-wind", title: "Weak airflow",
            detail: "Some air, but not much.",
            echo: "Exterior airflow: Weak",
            next: "dr_history", scores: { dryer: 6 } },
          { id: "none", icon: "fas fa-ban", title: "Little or no airflow",
            detail: "The vent barely moves air or does not open.",
            echo: "Exterior airflow: Little or none",
            next: "dr_history", scores: { dryer: 7 } },
          { id: "unknown", icon: "fas fa-question-circle", title: "I have not checked",
            detail: "You are not sure what it does outside.",
            echo: "Exterior airflow: Not checked",
            next: "dr_history", scores: { dryer: 5 } }
        ]
      },

      dr_history: {
        id: "dr_history",
        theme: "Cleaning history",
        title: "When was the full vent run last cleaned?",
        hint: "The full run, not just the lint trap.",
        projectedNext: "dr_exit",
        options: [
          { id: "within_year", icon: "fas fa-calendar-alt", title: "Within the last year",
            detail: "Cleaned recently, but something still feels off.",
            echo: "Dryer vent cleaning history: Within the last year",
            next: "dr_exit", scores: { dryer: 4 } },
          { id: "over_year", icon: "fas fa-history", title: "Over a year ago",
            detail: "More than a year since service.",
            echo: "Dryer vent cleaning history: Over a year ago",
            next: "dr_exit", scores: { dryer: 7 } },
          { id: "never", icon: "fas fa-exclamation-circle", title: "Never, as far as I know",
            detail: "It has not been done since you moved in.",
            echo: "Dryer vent cleaning history: Never",
            next: "dr_exit", scores: { dryer: 8 } },
          { id: "unknown", icon: "fas fa-question-circle", title: "I am not sure",
            detail: "You do not know when it was last cleaned.",
            echo: "Dryer vent cleaning history: Not sure",
            next: "dr_exit", scores: { dryer: 7 } }
        ]
      },

      dr_exit: {
        id: "dr_exit",
        theme: "Vent exit",
        title: "Where does the vent exit?",
        hint: "Access affects how we quote and schedule the work.",
        projectedNext: null,
        options: [
          { id: "wall_low", icon: "fas fa-home", title: "Side wall, ground level",
            detail: "Reachable from the ground.",
            echo: "Vent exit: Side wall at ground level",
            next: null, scores: { dryer: 6 } },
          { id: "wall_high", icon: "fas fa-level-up-alt", title: "Upper wall",
            detail: "Above the first floor.",
            echo: "Vent exit: Upper wall",
            next: null, scores: { dryer: 6 } },
          { id: "roof", icon: "fas fa-mountain", title: "Through the roof",
            detail: "The vent terminates on the roof.",
            echo: "Vent exit: Through the roof",
            next: null, scores: { dryer: 6 } },
          { id: "unknown", icon: "fas fa-question-circle", title: "I am not sure",
            detail: "You have not located the exterior vent.",
            echo: "Vent exit: Not sure",
            next: null, scores: { dryer: 6 } }
        ]
      }
    };

    /* ---------- routing helpers (pure, testable) ---------- */

    function findOption(question, optionId) {
      if (!question || !optionId) {
        return null;
      }

      for (let i = 0; i < question.options.length; i += 1) {
        if (question.options[i].id === optionId) {
          return question.options[i];
        }
      }

      return null;
    }

    /**
     * Walk the graph using the answers given so far.
     * `project` continues past unanswered questions using each
     * question's projectedNext, so the route length can be shown
     * before the customer has finished. `complete` is false when the
     * remaining length genuinely cannot be known yet.
     */
    function buildRoute(current, project) {
      const route = [];
      const seen = {};
      let complete = true;
      let id = ENTRY_QUESTION_ID;

      while (id && QUESTIONS[id] && !seen[id]) {
        seen[id] = true;
        route.push(id);

        const question = QUESTIONS[id];
        const option = findOption(question, current[id]);

        if (option) {
          id = option.next || null;
        } else if (project && "projectedNext" in question) {
          id = question.projectedNext;
        } else {
          complete = false;
          id = null;
        }
      }

      return { route: route, complete: complete };
    }

    function computeRoute(current) {
      return buildRoute(current, false).route;
    }

    function projectRoute(current) {
      return buildRoute(current, true);
    }

    /** Drop answers whose questions are no longer on the route. */
    function pruneAnswers(current) {
      const route = projectRoute(current).route;
      const allowed = {};

      route.forEach(function (questionId) {
        allowed[questionId] = true;
      });

      Object.keys(current).forEach(function (questionId) {
        if (!allowed[questionId]) {
          delete current[questionId];
        }
      });
    }

    /* ---------- scoring policy (route-length neutral) ----------

       Each answer awards points on a 0-12 scale:

         1-3   context: consistent with a service but not evidence for it
         4-8   diagnostic: this answer genuinely points at that service
         9-12  gating: this answer alone should decide the starting point,
               e.g. guards cannot go on a gutter run that is sagging

       Totals are divided by the number of *scored* answers before any
       threshold is applied. Ranking inside one customer's route is
       unaffected by that division, but it means the ambiguity margin and
       the secondary-service threshold below mean the same thing on a
       three-question route as on a four-question route, so no service can
       gain an advantage purely because its route asks more questions.
       ---------------------------------------------------------- */

    // Gap, in points per scored answer, within which two services are
    // treated as tied rather than ranked.
    const AMBIGUITY_MARGIN = 0.75;

    // A secondary service is only offered when it reaches this share of the
    // primary's score. Below it, there is no "also worth checking" line.
    const SECONDARY_MIN_SHARE = 0.45;

    // Used only to break a genuine tie: least-committal service first, so
    // ambiguous evidence never lands on the largest job.
    const CONSERVATIVE_ORDER = [
      "cleaning",
      "repairs",
      "drainage",
      "guards",
      "installation"
    ];

    // Index into the current route. The route itself is never stored.
    let currentStep = 0;

    let currentBestService = null;
    let currentSecondService = null;
    let currentAmbiguous = false;

    // questionId -> optionId. The single source of truth for the whole
    // checkup: route, progress, score, result, and submitted message are
    // all derived from this object.
    const answers = {};

    const CHECKUP_MAX_PHOTOS = 8;
    const CHECKUP_MAX_FILE_BYTES = 8 * 1024 * 1024;
    const CHECKUP_MAX_TOTAL_BYTES = 25 * 1024 * 1024;

    const CHECKUP_ALLOWED_IMAGE_TYPES = [
      "image/jpeg",
      "image/jpg",
      "image/png",
      "image/webp",
      "image/gif",
      "image/heic",
      "image/heic-sequence",
      "image/heif",
      "image/heif-sequence"
    ];

    const CHECKUP_ALLOWED_EXTENSIONS = [
      ".jpg",
      ".jpeg",
      ".png",
      ".webp",
      ".gif",
      ".heic",
      ".heif"
    ];

    const uploadError =
      document.getElementById("gcUploadError");

    function escapeAttribute(value) {
      return String(value).replace(
        /"/g,
        "&quot;"
      );
    }

    function formatMegabytes(bytes) {
      return Math.round((bytes / (1024 * 1024)) * 10) / 10 + " MB";
    }

    function hasAllowedType(type) {
      if (!type) {
        return false;
      }

      return (
        CHECKUP_ALLOWED_IMAGE_TYPES.indexOf(
          type.toLowerCase()
        ) !== -1
      );
    }

    function hasAllowedExtension(name) {
      const lower = String(name).toLowerCase();

      return CHECKUP_ALLOWED_EXTENSIONS.some(
        function (extension) {
          return lower.endsWith(extension);
        }
      );
    }

    /**
     * Client-side photo checks. These catch the common failures before
     * the browser starts a multipart POST; they do not and cannot
     * guarantee that the form provider accepts the attachments.
     */
    function validateCheckupPhotos() {
      if (!checkupPhotos || !checkupPhotos.files) {
        return null;
      }

      const files = Array.prototype.slice.call(
        checkupPhotos.files
      );

      if (!files.length) {
        return null;
      }

      if (files.length > CHECKUP_MAX_PHOTOS) {
        return (
          "Please attach no more than " +
          CHECKUP_MAX_PHOTOS +
          " photos. You selected " +
          files.length +
          "."
        );
      }

      let totalBytes = 0;

      for (let index = 0; index < files.length; index += 1) {
        const file = files[index];

        // Mobile browsers report HEIC inconsistently: sometimes
        // image/heic, sometimes an empty string, sometimes a generic
        // binary type. Accept when either the MIME type or the file
        // extension is one we support, so a genuine photo is not
        // rejected, while unsupported formats still fail both checks.
        const typeAllowed =
          hasAllowedType(file.type) ||
          hasAllowedExtension(file.name);

        if (!typeAllowed) {
          return (
            '"' +
            file.name +
            '" is not a supported image. Please use JPG, PNG, WEBP, GIF, or HEIC.'
          );
        }

        if (file.size > CHECKUP_MAX_FILE_BYTES) {
          return (
            '"' +
            file.name +
            '" is ' +
            formatMegabytes(file.size) +
            ". Please keep each photo under " +
            formatMegabytes(CHECKUP_MAX_FILE_BYTES) +
            "."
          );
        }

        totalBytes += file.size;
      }

      if (totalBytes > CHECKUP_MAX_TOTAL_BYTES) {
        return (
          "Your photos total " +
          formatMegabytes(totalBytes) +
          ". Please keep the total under " +
          formatMegabytes(CHECKUP_MAX_TOTAL_BYTES) +
          "."
        );
      }

      return null;
    }

    function showUploadError(message) {
      if (!uploadError) {
        return;
      }

      uploadError.textContent = message;
      uploadError.classList.add("active");
    }

    function clearUploadError() {
      if (!uploadError) {
        return;
      }

      uploadError.textContent = "";
      uploadError.classList.remove("active");
    }

    function setSubmitStatus(message, state) {
      if (!submitStatus) {
        return;
      }

      submitStatus.textContent = message;

      submitStatus.className = message
        ? "gc-submit-status active " + state
        : "gc-submit-status";
    }

    function scrollCheckupIntoView(element) {
      if (!element) {
        return;
      }

      const header = document.getElementById("header");

      const offset =
        (header ? header.getBoundingClientRect().height : 0) + 16;

      const top =
        element.getBoundingClientRect().top +
        window.pageYOffset -
        offset;

      window.scrollTo({
        top: Math.max(0, top),
        behavior: scrollBehaviour()
      });
    }

    function openCheckup() {
      invite.classList.add("is-hidden");

      checkup.hidden = false;

      checkup.classList.remove(
        "gc-tool--report"
      );

      checkup.classList.add(
        "gc-tool--questions"
      );

      questionPanel.hidden = false;
      resultPanel.hidden = true;
      checkupForm.hidden = true;

      startBtn.setAttribute(
        "aria-expanded",
        "true"
      );

      window.setTimeout(
        function () {
          scrollCheckupIntoView(checkup);
        },
        80
      );
    }

    /** The track is a property of the opening answer, never stored state. */
    function getActiveTrack() {
      const option = findOption(
        QUESTIONS[ENTRY_QUESTION_ID],
        answers[ENTRY_QUESTION_ID]
      );

      return option && option.track
        ? option.track
        : null;
    }

    function getTotalSteps() {
      return projectRoute(answers).route.length;
    }

    /**
     * The funnel is every diagnostic question plus the contact-and-photo
     * form, which is a real step the customer still has to complete. Using
     * that as the denominator is what keeps the bar honest: answering the
     * last question cannot read as 100% when the checkup has not been sent.
     */
    function getTotalStages() {
      return getTotalSteps() + 1;
    }

    function setProgress(percent, label) {
      const clamped = Math.max(0, Math.min(100, Math.round(percent)));

      progressFill.style.width = clamped + "%";
      stepLabel.textContent = label;

      if (progressBar) {
        progressBar.setAttribute(
          "aria-valuenow",
          String(clamped)
        );

        progressBar.setAttribute("aria-valuetext", label);
      }
    }

    function updateProgress() {
      const projected = projectRoute(answers);
      const total = projected.route.length;

      let answeredCount = 0;

      projected.route.forEach(
        function (questionId) {
          if (answers[questionId]) {
            answeredCount += 1;
          }
        }
      );

      const position = Math.min(
        currentStep + 1,
        total
      );

      // While the opening triage is unanswered the remaining route length
      // genuinely is not known, so the denominator is omitted rather than
      // guessed. Once the route is known it describes that route exactly.
      const label = projected.complete
        ? "Question " +
          position +
          " of " +
          total
        : "Question " + position;

      setProgress(
        (answeredCount / (total + 1)) * 100,
        label
      );
    }

    // Every question answered, contact form still outstanding.
    function setFinalStepProgress() {
      setProgress(
        (getTotalSteps() / getTotalStages()) * 100,
        "Final step \u00b7 Your details and photos"
      );
    }

    // Only reachable once the form provider has accepted the submission.
    function setCompletedProgress() {
      setProgress(100, "Checkup sent");
    }

    function renderQuestion() {
      const projected = projectRoute(answers);

      if (currentStep > projected.route.length - 1) {
        currentStep = projected.route.length - 1;
      }

      if (currentStep < 0) {
        currentStep = 0;
      }

      const questionId =
        projected.route[currentStep];

      const question = QUESTIONS[questionId];

      if (!question) {
        return;
      }

      questionTitle.textContent =
        question.title;

      questionHint.textContent =
        question.hint;

      optionsWrap.innerHTML = "";

      optionsWrap.classList.toggle(
        "gc-options--compact",
        question.options.length > 4
      );

      question.options.forEach(
        function (option) {
          const button =
            document.createElement("button");

          const isActive =
            answers[question.id] ===
            option.id;

          button.type = "button";

          button.className =
            "gc-option" +
            (
              isActive
                ? " active"
                : ""
            );

          button.setAttribute(
            "aria-pressed",
            String(isActive)
          );

          button.setAttribute(
            "aria-label",
            option.title
          );

          button.innerHTML = `
            <span class="gc-option-icon">
              <i class="${escapeAttribute(option.icon)}"></i>
            </span>

            <span>
              <span class="gc-option-title">
                ${option.title}
              </span>

              <span class="gc-option-detail">
                ${option.detail}
              </span>
            </span>
          `;

          button.addEventListener(
            "click",
            function () {
              answers[question.id] =
                option.id;

              // Choosing a different answer can move the customer onto a
              // different route. Anything the old route asked that the new
              // one does not is dropped here, so it can never reach the
              // score, the recommendation, or the submitted message.
              pruneAnswers(answers);

              const nextRoute =
                projectRoute(answers).route;

              if (
                currentStep <
                nextRoute.length - 1
              ) {
                currentStep += 1;

                renderQuestion();
                updateProgress();
              } else {
                renderQuestion();
                updateProgress();
                renderResult();
              }
            }
          );

          optionsWrap.appendChild(button);
        }
      );

      backBtn.disabled =
        currentStep === 0;

      updateProgress();
    }

    /**
     * Sum the answers actually on the customer's route, then divide by the
     * number of answers that carried any weight. Returns both figures so a
     * recommendation can be audited from the submitted message.
     */
    function getScores() {
      const totals = {};

      serviceOrder.forEach(
        function (serviceKey) {
          totals[serviceKey] = 0;
        }
      );

      let scoredAnswers = 0;

      computeRoute(answers).forEach(
        function (questionId) {
          const option = findOption(
            QUESTIONS[questionId],
            answers[questionId]
          );

          if (!option || !option.scores) {
            return;
          }

          const serviceKeys =
            Object.keys(option.scores);

          if (!serviceKeys.length) {
            return;
          }

          scoredAnswers += 1;

          serviceKeys.forEach(
            function (serviceKey) {
              if (serviceKey in totals) {
                totals[serviceKey] +=
                  option.scores[serviceKey];
              }
            }
          );
        }
      );

      const divisor = Math.max(1, scoredAnswers);
      const normalised = {};

      serviceOrder.forEach(
        function (serviceKey) {
          normalised[serviceKey] =
            totals[serviceKey] / divisor;
        }
      );

      return {
        totals: totals,
        normalised: normalised,
        scoredAnswers: scoredAnswers
      };
    }

    /**
     * Rank the gutter services by normalised score. When the leaders are
     * within AMBIGUITY_MARGIN of each other, or when barely any answer
     * carried weight, the least-committal contender is promoted instead of
     * asserting a precision the answers do not support.
     */
    function getRankedServiceKeys(scored) {
      if (getActiveTrack() === "dryer") {
        currentAmbiguous = false;

        return ["dryer"];
      }

      const result = scored || getScores();
      const normalised = result.normalised;

      const ranked = serviceOrder
        .filter(function (serviceKey) {
          return serviceKey !== "dryer";
        })
        .sort(function (first, second) {
          if (
            normalised[second] ===
            normalised[first]
          ) {
            return (
              serviceOrder.indexOf(first) -
              serviceOrder.indexOf(second)
            );
          }

          return (
            normalised[second] -
            normalised[first]
          );
        });

      const top = normalised[ranked[0]];

      const contenders = ranked.filter(
        function (serviceKey) {
          return (
            normalised[serviceKey] > 0 &&
            top - normalised[serviceKey] <=
              AMBIGUITY_MARGIN
          );
        }
      );

      currentAmbiguous =
        contenders.length > 1 ||
        result.scoredAnswers < 2 ||
        top <= 0;

      if (contenders.length > 1) {
        const conservative = contenders
          .slice()
          .sort(function (first, second) {
            return (
              CONSERVATIVE_ORDER.indexOf(first) -
              CONSERVATIVE_ORDER.indexOf(second)
            );
          })[0];

        return [conservative].concat(
          ranked.filter(
            function (serviceKey) {
              return serviceKey !== conservative;
            }
          )
        );
      }

      return ranked;
    }

    /**
     * Only the questions the customer was actually shown, each with the
     * answer they chose. Questions the route skipped are absent entirely
     * rather than reported as unanswered.
     */
    function getAnswerSummary() {
      const lines = [];

      let number = 0;

      computeRoute(answers).forEach(
        function (questionId) {
          const question = QUESTIONS[questionId];

          const option = findOption(
            question,
            answers[questionId]
          );

          if (!question || !option) {
            return;
          }

          number += 1;

          lines.push(
            number +
            ". " +
            question.title
          );

          lines.push(
            "   " +
            (option.echo || option.title)
          );
        }
      );

      return lines.join("\n");
    }

    /** Which route the customer took, in the words they chose. */
    function getRouteSummary() {
      const startOption = findOption(
        QUESTIONS[ENTRY_QUESTION_ID],
        answers[ENTRY_QUESTION_ID]
      );

      const intentOption = findOption(
        QUESTIONS.g_intent,
        answers.g_intent
      );

      const lines = [
        "Concern: " +
        (
          startOption
            ? startOption.title
            : "Not selected"
        )
      ];

      if (intentOption) {
        lines.push(
          "What they want help with: " +
          intentOption.title
        );
      }

      lines.push(
        "Questions asked: " +
        computeRoute(answers).length
      );

      return lines.join("\n");
    }

    function preselectQuoteService(service) {
      const serviceSelect =
        document.getElementById("service");

      if (
        !serviceSelect ||
        !service ||
        !service.quoteValue
      ) {
        return false;
      }

      const matchingOption =
        Array.from(
          serviceSelect.options
        ).find(
          function (option) {
            return (
              option.value ===
              service.quoteValue
            );
          }
        );

      if (!matchingOption) {
        return false;
      }

      serviceSelect.value =
        service.quoteValue;

      return true;
    }

    function buildMessage() {
      const name =
        checkupName.value.trim() ||
        "Not provided";

      const phone =
        checkupPhone.value.trim() ||
        "Not provided";

      const address =
        checkupAddress.value.trim() ||
        "Not provided";

      const notes =
        checkupNotes.value.trim() ||
        "None provided";

      const photoCount =
        checkupPhotos.files
          ? checkupPhotos.files.length
          : 0;

      return [
        "New CleanFlow Checkup",
        "",
        "Customer:",
        "Name: " + name,
        "Phone: " + phone,
        "Address or Area: " + address,
        "",
        "Checkup Route:",
        getRouteSummary(),
        "",
        "Best Starting Point:",
        currentBestService
          ? currentBestService.title
          : "Not calculated",
        "",
        "Also Worth Checking:",
        currentSecondService
          ? currentSecondService.title
          : "None indicated by the answers",
        "",
        "Confidence:",
        currentAmbiguous
          ? "Answers point in more than one direction. Confirm on site."
          : "Answers point consistently in one direction.",
        "",
        "Questions Asked And Answered:",
        getAnswerSummary(),
        "",
        "Notes:",
        notes,
        "",
        "Photos:",
        photoCount > 0
          ? photoCount +
            " photo(s) attached"
          : "No photos uploaded"
      ].join("\n");
    }

    function renderResult() {
      const scored = getScores();

      const rankedKeys =
        getRankedServiceKeys(scored);

      const bestKey = rankedKeys[0];
      const bestService = services[bestKey];

      if (!bestService) {
        return;
      }

      // A secondary is offered only when the answers genuinely support it,
      // never merely because the panel has a line for one.
      const secondKey = rankedKeys[1];

      let secondService = null;

      if (
        secondKey &&
        services[secondKey] &&
        scored.normalised[bestKey] > 0 &&
        scored.normalised[secondKey] > 0 &&
        scored.normalised[secondKey] /
          scored.normalised[bestKey] >=
          SECONDARY_MIN_SHARE
      ) {
        secondService = services[secondKey];
      }

      currentBestService =
        bestService;

      currentSecondService =
        secondService;

      preselectQuoteService(
        bestService
      );

      if (resultIcon) {
        resultIcon.innerHTML =
          '<i class="' +
          escapeAttribute(
            bestService.icon
          ) +
          '"></i>';
      }

      resultService.textContent =
        bestService.title;

      resultSummary.innerHTML =
        currentAmbiguous
          ? 'Your answers point in more than one direction, so the safest place to start looks like <span class="gc-result-service">' +
            bestService.title +
            "</span>. Add your contact details and any photos below. We\u2019ll confirm what\u2019s actually needed before any work begins."
          : 'Based on your answers, the best starting point appears to be <span class="gc-result-service">' +
            bestService.title +
            "</span>. Add your contact details and any photos below. We\u2019ll review everything before following up.";

      reviewList.innerHTML = "";

      const mainItem =
        document.createElement("li");

      mainItem.textContent =
        "Best starting point: " +
        bestService.title;

      reviewList.appendChild(
        mainItem
      );

      if (
        secondService &&
        secondService.title !==
          bestService.title
      ) {
        const secondItem =
          document.createElement("li");

        secondItem.textContent =
          "Also worth checking: " +
          secondService.title;

        reviewList.appendChild(
          secondItem
        );
      }

      const nextItem =
        document.createElement("li");

      nextItem.textContent =
        "Suggested next step: " +
        bestService.nextStep;

      reviewList.appendChild(
        nextItem
      );

      if (currentAmbiguous) {
        const confirmItem =
          document.createElement("li");

        confirmItem.textContent =
          "This is a starting point, not a diagnosis. We\u2019ll confirm it on site.";

        reviewList.appendChild(
          confirmItem
        );
      }

      const photoItem =
        document.createElement("li");

      photoItem.textContent =
        "Your answers, notes, and photos will help us understand what you\u2019re seeing.";

      reviewList.appendChild(
        photoItem
      );

      hiddenMessage.value =
        buildMessage();

      questionPanel.hidden = true;
      resultPanel.hidden = false;
      checkupForm.hidden = false;

      checkup.classList.remove(
        "gc-tool--questions"
      );

      checkup.classList.add(
        "gc-tool--report"
      );

      setFinalStepProgress();

      scrollCheckupIntoView(checkup);
    }

    function resetCheckup() {
      currentStep = 0;

      // Route state is derived entirely from the answers, so clearing them
      // clears the route as well.
      Object.keys(answers).forEach(
        function (questionId) {
          delete answers[questionId];
        }
      );

      currentBestService = null;
      currentSecondService = null;
      currentAmbiguous = false;

      resultPanel.hidden = true;
      checkupForm.hidden = true;
      questionPanel.hidden = false;

      checkup.classList.remove(
        "gc-tool--report"
      );

      checkup.classList.add(
        "gc-tool--questions"
      );

      hiddenMessage.value = "";

      if (submitStatus) {
        submitStatus.textContent = "";
        submitStatus.className =
          "gc-submit-status";
      }

      renderQuestion();
      updateProgress();
    }

    function showSubmissionSuccess() {
      invite.classList.add("is-hidden");

      checkup.hidden = false;

      checkup.classList.remove(
        "gc-tool--questions"
      );

      checkup.classList.add(
        "gc-tool--report"
      );

      questionPanel.hidden = true;
      resultPanel.hidden = false;

      setCompletedProgress();

      resultPanel.innerHTML = `
        <div class="gc-result-ready">
          <div class="gc-result-icon">
            <i class="fas fa-check-circle"></i>
          </div>

          <span class="gc-result-label">
            <i class="fas fa-paper-plane"></i>
            Checkup Sent
          </span>

          <h3>
            Thank you. Your CleanFlow Checkup was sent successfully.
          </h3>

          <p>
            We’ll review your answers and any uploaded photos before following up.
            In most cases, we’ll follow up within a few hours. If we’re tied up on
            a job, we’ll do our best to get back with you by the end of the day.
          </p>

          <div class="gc-result-actions">
            <a
              href="tel:9374780689"
              class="btn btn-accent"
            >
              <i class="fas fa-phone-alt"></i>
              Call or Text
            </a>
          </div>
        </div>
      `;
    }

    startBtn.addEventListener(
      "click",
      function () {
        openCheckup();
        renderQuestion();
        updateProgress();
      }
    );

    backBtn.addEventListener(
      "click",
      function () {
        if (currentStep === 0) {
          return;
        }

        currentStep -= 1;

        // Stepping back can leave answers behind that the shortened route
        // no longer contains. Drop them before anything reads the route
        // again, so progress, scoring, and the submitted message are all
        // recalculated from what is still on the route.
        pruneAnswers(answers);

        renderQuestion();
        updateProgress();
      }
    );

    resetBtn.addEventListener(
      "click",
      resetCheckup
    );

    if (checkupPhotos) {
      checkupPhotos.addEventListener(
        "change",
        function () {
          const problem = validateCheckupPhotos();

          if (problem) {
            showUploadError(problem);
          } else {
            clearUploadError();
          }
        }
      );
    }

    checkupForm.addEventListener(
      "submit",
      function (event) {
        const problem = validateCheckupPhotos();

        if (problem) {
          event.preventDefault();

          showUploadError(problem);
          setSubmitStatus("", "");

          if (checkupPhotos) {
            checkupPhotos.focus();
          }

          return;
        }

        clearUploadError();

        hiddenMessage.value =
          buildMessage();

        // Deliberately not a success state. Success is only shown
        // after the form provider redirects back with ?checkup=submitted.
        setSubmitStatus(
          "Sending your checkup. Please keep this page open until it finishes.",
          "submitting"
        );
      }
    );

    const params =
      new URLSearchParams(
        window.location.search
      );

    if (
      params.get("checkup") ===
      "submitted"
    ) {
      showSubmissionSuccess();
      return;
    }

    renderQuestion();
    updateProgress();
  }

  document.addEventListener(
    "DOMContentLoaded",
    function () {
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
      initCleanFlowCheckup();
    }
  );
})();