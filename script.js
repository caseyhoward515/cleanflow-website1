(function () {
  "use strict";

  const CALCULATOR_DISCOUNT_RATE = 0.20;

  function roundToNearestFive(amount) {
    return Math.round(amount / 5) * 5;
  }

  function applyCalculatorDiscount(amount) {
    return roundToNearestFive(
      amount * (1 - CALCULATOR_DISCOUNT_RATE)
    );
  }

  function formatMoney(amount) {
    return "$" + Math.round(amount).toLocaleString("en-US");
  }

  function getSizeAdjustment(linearFeet) {
    if (linearFeet <= 160) {
      return 0;
    }

    if (linearFeet <= 220) {
      return 20;
    }

    if (linearFeet <= 280) {
      return 40;
    }

    if (linearFeet <= 350) {
      return 70;
    }

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

    if (
      !linearFeetInput ||
      !storiesInput ||
      !debrisInput ||
      !resultBox ||
      !estimatedPrice
    ) {
      return;
    }

    const linearFeet = Number(linearFeetInput.value);
    const stories = storiesInput.value;
    const debrisLevel = debrisInput.value;

    if (!linearFeet || linearFeet < 50) {
      estimatedPrice.textContent =
        "Enter at least 50 linear feet";

      resultBox.style.display = "block";
      resultBox.classList.add("active");

      return;
    }

    const basePrice = stories === "2" ? 235 : 185;
    const sizeAdjustment = getSizeAdjustment(linearFeet);
    const debrisAdjustment = getDebrisAdjustment(debrisLevel);

    let lowEstimate =
      basePrice +
      sizeAdjustment +
      debrisAdjustment;

    if (stories === "1") {
      lowEstimate = Math.max(lowEstimate, 170);
    } else {
      lowEstimate = Math.max(lowEstimate, 220);
    }

    const highEstimate = lowEstimate + 50;

    const discountedLowEstimate =
      applyCalculatorDiscount(lowEstimate);

    const discountedHighEstimate =
      applyCalculatorDiscount(highEstimate);

    estimatedPrice.textContent =
      `${formatMoney(discountedLowEstimate)} - ${formatMoney(discountedHighEstimate)}`;

    const resultTitle =
      resultBox.querySelector(".result-title");

    const resultNote =
      resultBox.querySelector(".result-note");

    if (resultTitle) {
      resultTitle.textContent =
        "Estimated Starting Range";
    }

    if (resultNote) {
      resultNote.innerHTML =
        'This is a starting estimate. Final pricing may vary depending on access, roof height, gutter guards, debris level, roof pitch, downspout clogs, and overall job difficulty. For an accurate quote, call or text <a href="tel:9374780689" style="color: var(--accent);">937-478-0689</a>.';
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
        <div class="radial-close">
          <i class="fas fa-times"></i>
        </div>

        <a
          href="/services/gutter-cleaning.html"
          class="radial-item item-1"
        >
          <i class="fas fa-broom"></i>
          <span>Gutter Cleaning</span>
        </a>

        <a
          href="/services.html#gutter-repairs-service"
          class="radial-item item-2"
        >
          <i class="fas fa-wrench"></i>
          <span>Gutter Repairs</span>
        </a>

        <a
          href="/services.html#gutter-protection-service"
          class="radial-item item-3"
        >
          <i class="fas fa-shield-alt"></i>
          <span>Gutter Guards</span>
        </a>

        <a
          href="/services/gutter-installation.html"
          class="radial-item item-4"
        >
          <i class="fas fa-tools"></i>
          <span>New Gutter Installation</span>
        </a>

        <a
          href="/services/dryer-vent-cleaning.html"
          class="radial-item item-5"
        >
          <i class="fas fa-fire-extinguisher"></i>
          <span>Dryer Vent Cleaning</span>
        </a>

        <a
          href="/services.html#underground-drainage-service"
          class="radial-item item-6"
        >
          <i class="fas fa-water"></i>
          <span>Drainage Solutions</span>
        </a>
      </div>
    `;
  }

  function ensureSitewideServiceWheel() {
    let radialOverlay =
      document.getElementById("radial-menu-overlay");

    if (!radialOverlay) {
      radialOverlay = document.createElement("div");
      radialOverlay.id = "radial-menu-overlay";
      radialOverlay.className = "radial-overlay";

      document.body.appendChild(radialOverlay);
    }

    radialOverlay.classList.add("radial-overlay");
    radialOverlay.innerHTML = getServiceWheelMarkup();

    const existingTriggers =
      document.querySelectorAll(".floating-service-trigger");

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
        "Open service wheel"
      );

      floatingServiceTrigger.innerHTML =
        '<i class="fas fa-th-large"></i><span>Services</span>';

      document.body.appendChild(floatingServiceTrigger);

      return;
    }

    existingTriggers.forEach(function (trigger) {
      trigger.setAttribute(
        "data-service-menu-trigger",
        "true"
      );

      trigger.setAttribute(
        "aria-label",
        "Open service wheel"
      );

      if (trigger.tagName.toLowerCase() === "button") {
        trigger.type = "button";
      }

      trigger.innerHTML =
        '<i class="fas fa-th-large"></i><span>Services</span>';
    });
  }

  function toggleSign(card) {
    if (!card) {
      return;
    }

    card.classList.toggle("active");
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
      content.classList.add("active");

      content.style.maxHeight =
        content.scrollHeight + 48 + "px";
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
    const menuToggle =
      document.getElementById("menu-toggle");

    const navMenu =
      document.getElementById("nav-menu");

    const closeMenu =
      document.getElementById("close-menu");

    if (!menuToggle || !navMenu) {
      return;
    }

    function openMenu() {
      navMenu.classList.add("active");
      document.body.classList.add("menu-open");
    }

    function closeMobileMenu() {
      navMenu.classList.remove("active");
      document.body.classList.remove("menu-open");
    }

    menuToggle.addEventListener(
      "click",
      openMenu
    );

    if (closeMenu) {
      closeMenu.addEventListener(
        "click",
        closeMobileMenu
      );
    }

    navMenu
      .querySelectorAll("a")
      .forEach(function (link) {
        link.addEventListener(
          "click",
          closeMobileMenu
        );
      });

    window.closeMobileMenu = closeMobileMenu;
  }

  function initRadialMenu() {
    const radialOverlay =
      document.getElementById("radial-menu-overlay");

    const radialClose =
      document.querySelector(".radial-close");

    const triggers =
      document.querySelectorAll(
        "[data-service-menu-trigger]"
      );

    if (!radialOverlay) {
      return;
    }

    function openRadialMenu(event) {
      if (event) {
        event.preventDefault();
      }

      radialOverlay.classList.add("active");
      document.body.classList.add(
        "radial-menu-open"
      );

      const navMenu =
        document.getElementById("nav-menu");

      if (navMenu) {
        navMenu.classList.remove("active");
      }

      document.body.classList.remove("menu-open");
    }

    function closeRadialMenu() {
      radialOverlay.classList.remove("active");
      document.body.classList.remove(
        "radial-menu-open"
      );
    }

    triggers.forEach(function (trigger) {
      trigger.addEventListener(
        "click",
        openRadialMenu
      );
    });

    if (radialClose) {
      radialClose.addEventListener(
        "click",
        closeRadialMenu
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
          closeRadialMenu
        );
      });

    document.addEventListener(
      "keydown",
      function (event) {
        if (event.key === "Escape") {
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
      "debris"
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
    const tabs =
      document.querySelectorAll(".season-tab");

    const contents =
      document.querySelectorAll(".season-content");

    if (!tabs.length || !contents.length) {
      return;
    }

    tabs.forEach(function (tab) {
      tab.addEventListener(
        "click",
        function () {
          const season =
            tab.getAttribute("data-season");

          tabs.forEach(function (item) {
            item.classList.remove("active");
          });

          contents.forEach(function (content) {
            content.classList.remove("active");
          });

          tab.classList.add("active");

          const activeContent =
            document.getElementById(
              season + "-content"
            );

          if (activeContent) {
            activeContent.classList.add("active");
          }
        }
      );
    });
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
              behavior: "smooth",
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
            behavior: "smooth"
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

    const submitted =
      params.get("submitted");

    if (submitted === "true") {
      formMessage.textContent =
        "Thank you. Your quote request was sent successfully. We will follow up as soon as possible.";

      formMessage.classList.add("success");
      formMessage.style.display = "block";
    }

    if (submitted === "error") {
      formMessage.textContent =
        "Something went wrong. Please call or text 937-478-0689 for the fastest response.";

      formMessage.classList.add("error");
      formMessage.style.display = "block";
    }
  }

  function initActiveNavLinks() {
    const currentPath =
      window.location.pathname.replace(
        /\/$/,
        ""
      );

    const links =
      document.querySelectorAll("nav a");

    links.forEach(function (link) {
      const href =
        link.getAttribute("href");

      if (!href) {
        return;
      }

      link.classList.remove("active");

      if (
        (currentPath === "" && href === "index.html") ||
        (currentPath === "/" && href === "index.html") ||
        currentPath.endsWith(
          href.replace(".html", "")
        ) ||
        currentPath.endsWith(href) ||
        (
          currentPath.includes("/services") &&
          href === "services.html"
        ) ||
        (
          currentPath.includes("/services") &&
          href === "../services.html"
        )
      ) {
        link.classList.add("active");
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
        dot.classList.toggle(
          "active",
          index === currentIndex
        );
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

    carousel.addEventListener(
      "focusout",
      function () {
        startAuto();
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

    const trackLabel =
      document.getElementById(
        "gcTrackLabel"
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

    const dotsWrap =
      document.getElementById(
        "gcStepDots"
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
      !trackLabel ||
      !questionTitle ||
      !questionHint ||
      !optionsWrap ||
      !progressFill ||
      !dotsWrap ||
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

    const startQuestion = {
      title:
        "What is the main thing you want checked?",

      theme: "Start",

      hint:
        "Start with the concern that brought you here today.",

      options: [
        {
          icon: "fas fa-home",
          title:
            "Gutters, downspouts, or drainage",

          detail:
            "Overflow, leaks, clogs, guards, new gutters, or water near the home.",

          track: "gutter",

          echo:
            "Main concern: Gutters, downspouts, or drainage",

          scores: {}
        },

        {
          icon:
            "fas fa-fire-extinguisher",

          title:
            "Dryer vent airflow or lint buildup",

          detail:
            "Long dry times, hot dryer, lint concern, or vent cleaning.",

          track: "dryer",

          echo:
            "Main concern: Dryer vent airflow or lint buildup",

          scores: {
            dryer: 5
          }
        }
      ]
    };

    const gutterQuestions = [
      {
        title:
          "Where do you see the water problem?",

        theme: "Water Location",

        hint:
          "This helps locate where the water issue starts in the system.",

        options: [
          {
            icon: "fas fa-water",
            title: "Over the front edge",
            detail:
              "Water spills over the gutter during rain.",
            echo:
              "Water location: Over the front edge",
            scores: {
              cleaning: 4,
              repairs: 1,
              installation: 1
            }
          },

          {
            icon: "fas fa-home",
            title: "Behind the gutter",
            detail:
              "Water seems to be getting behind the gutter or near the fascia.",
            echo:
              "Water location: Behind the gutter or near fascia",
            scores: {
              repairs: 5,
              installation: 1,
              cleaning: 1
            }
          },

          {
            icon: "fas fa-tint",
            title: "Corner or seam leak",
            detail:
              "A specific joint, corner, or end cap leaks.",
            echo:
              "Water location: Corner or seam leak",
            scores: {
              repairs: 5,
              cleaning: 1
            }
          },

          {
            icon:
              "fas fa-arrow-down",
            title:
              "Top of a downspout",
            detail:
              "Water backs up where the gutter meets the downspout.",
            echo:
              "Water location: Top of a downspout",
            scores: {
              cleaning: 5,
              repairs: 1,
              drainage: 1
            }
          },

          {
            icon: "fas fa-route",
            title:
              "Downspout enters ground",
            detail:
              "Water backs up or pools at the underground connection.",
            echo:
              "Water location: Downspout enters ground",
            scores: {
              drainage: 5,
              cleaning: 2
            }
          },

          {
            icon: "fas fa-water",
            title:
              "Pooling near the home",
            detail:
              "Water collects near the foundation, walkway, patio, or landscaping.",
            echo:
              "Water location: Pooling near the home",
            scores: {
              drainage: 5,
              cleaning: 1
            }
          },

          {
            icon:
              "fas fa-question-circle",
            title: "I am not sure",
            detail:
              "You know something is off, but you are not sure where it starts.",
            echo:
              "Water location: Not sure",
            scores: {
              cleaning: 2,
              repairs: 1,
              drainage: 1
            }
          }
        ]
      },

      {
        title:
          "What happens at the downspout?",

        theme: "Downspout Flow",

        hint:
          "This separates a gutter issue from a downspout or underground drainage issue.",

        options: [
          {
            icon:
              "fas fa-check-circle",
            title: "Strong flow",
            detail:
              "You can see water exiting with good flow.",
            echo:
              "Downspout flow: Strong flow",
            scores: {
              drainage: 2,
              repairs: 1,
              guards: 1
            }
          },

          {
            icon: "fas fa-stream",
            title: "Weak flow",
            detail:
              "Water comes out, but the flow does not look strong.",
            echo:
              "Downspout flow: Weak flow",
            scores: {
              cleaning: 4,
              drainage: 2
            }
          },

          {
            icon: "fas fa-ban",
            title: "No visible water",
            detail:
              "Rain goes in, but you do not see water exiting.",
            echo:
              "Downspout flow: No visible water",
            scores: {
              cleaning: 5,
              drainage: 3
            }
          },

          {
            icon:
              "fas fa-level-up-alt",
            title:
              "Backs up underground",
            detail:
              "The underground line may be restricted or overwhelmed.",
            echo:
              "Downspout flow: Backs up underground",
            scores: {
              drainage: 6,
              cleaning: 2
            }
          },

          {
            icon:
              "fas fa-question-circle",
            title: "Unknown outlet",
            detail:
              "The downspout disappears underground or the outlet is unknown.",
            echo:
              "Downspout flow: Unknown outlet",
            scores: {
              drainage: 5,
              cleaning: 1
            }
          }
        ]
      },

      {
        title:
          "Has cleaning solved it before?",

        theme: "Cleaning History",

        hint:
          "This helps decide whether cleaning is the baseline or whether another issue may be involved.",

        options: [
          {
            icon: "fas fa-check",
            title:
              "Yes, cleaning fixes it",
            detail:
              "The system works better after a normal cleaning.",
            echo:
              "Cleaning history: Cleaning usually fixes it",
            scores: {
              cleaning: 4,
              guards: 2
            }
          },

          {
            icon:
              "fas fa-redo-alt",
            title: "It comes back",
            detail:
              "Cleaning helps for a while, but the problem returns.",
            echo:
              "Cleaning history: It improves, then comes back",
            scores: {
              guards: 4,
              cleaning: 2,
              repairs: 1
            }
          },

          {
            icon:
              "fas fa-exclamation-circle",
            title:
              "Still happens after cleaning",
            detail:
              "The issue continues even when debris is not obvious.",
            echo:
              "Cleaning history: Still happens after cleaning",
            scores: {
              repairs: 3,
              drainage: 3,
              installation: 2
            }
          },

          {
            icon:
              "fas fa-question-circle",
            title:
              "Not sure downspouts were flushed",
            detail:
              "The gutters may have been cleaned, but flow was not verified.",
            echo:
              "Cleaning history: Not sure downspouts were flushed",
            scores: {
              cleaning: 4,
              drainage: 2
            }
          },

          {
            icon: "fas fa-history",
            title:
              "Over a year or unknown",
            detail:
              "The system may be overdue for a full clean and flow check.",
            echo:
              "Cleaning history: Over a year or unknown",
            scores: {
              cleaning: 5,
              guards: 1
            }
          }
        ]
      },

      {
        title:
          "What condition are the gutters in?",

        theme: "Gutter Condition",

        hint:
          "This makes the difference between cleaning, repair, and replacement clearer.",

        options: [
          {
            icon:
              "fas fa-check-circle",
            title:
              "Straight and secure",
            detail:
              "The gutters appear attached and mostly in good shape.",
            echo:
              "Gutter condition: Straight and secure",
            scores: {
              cleaning: 2,
              guards: 2,
              drainage: 1
            }
          },

          {
            icon:
              "fas fa-weight-hanging",
            title: "Sagging sections",
            detail:
              "Sections dip, hold water, or look uneven.",
            echo:
              "Gutter condition: Sagging sections",
            scores: {
              repairs: 5,
              installation: 2
            }
          },

          {
            icon: "fas fa-unlink",
            title: "Pulling away",
            detail:
              "The gutter is separating from the board behind it.",
            echo:
              "Gutter condition: Pulling away",
            scores: {
              repairs: 5,
              installation: 2
            }
          },

          {
            icon: "fas fa-tint",
            title: "Leaking corners",
            detail:
              "The problem is mostly at joints or corners.",
            echo:
              "Gutter condition: Leaking corners",
            scores: {
              repairs: 5,
              cleaning: 1
            }
          },

          {
            icon: "fas fa-tools",
            title: "Old or worn out",
            detail:
              "The system may be near replacement territory.",
            echo:
              "Gutter condition: Old, worn out, or undersized",
            scores: {
              installation: 5,
              repairs: 2
            }
          },

          {
            icon:
              "fas fa-shield-alt",
            title:
              "Guards, but water skips",
            detail:
              "Water still runs over or past the guarded gutter.",
            echo:
              "Gutter condition: Existing guards, but water skips or overflows",
            scores: {
              repairs: 2,
              cleaning: 2,
              installation: 2,
              guards: 1
            }
          }
        ]
      },

      {
        title:
          "What is around the home?",

        theme: "Roof & Debris",

        hint:
          "Tree coverage, roof shape, and debris type affect what solution makes sense.",

        options: [
          {
            icon: "fas fa-tree",
            title:
              "Heavy trees or leaves",
            detail:
              "Leaves are a recurring issue around the roofline.",
            echo:
              "Roof and debris: Heavy trees or leaves",
            scores: {
              guards: 4,
              cleaning: 3
            }
          },

          {
            icon: "fas fa-leaf",
            title:
              "Pine needles or small debris",
            detail:
              "Fine debris gets into the gutter system.",
            echo:
              "Roof and debris: Pine needles or small debris",
            scores: {
              guards: 3,
              cleaning: 3
            }
          },

          {
            icon: "fas fa-mountain",
            title:
              "Roof grit or granules",
            detail:
              "Fine roof material collects in the gutters.",
            echo:
              "Roof and debris: Roof grit or granules",
            scores: {
              cleaning: 4,
              guards: 1
            }
          },

          {
            icon: "fas fa-sun",
            title: "Not many trees",
            detail:
              "The issue may be about flow, pitch, or discharge.",
            echo:
              "Roof and debris: Not many trees",
            scores: {
              repairs: 2,
              drainage: 2,
              installation: 1
            }
          },

          {
            icon: "fas fa-home",
            title:
              "Large roof area hits one spot",
            detail:
              "A roof valley or large roof face sends heavy water to one section.",
            echo:
              "Roof and debris: Large roof area hits one spot",
            scores: {
              installation: 4,
              repairs: 2,
              drainage: 1
            }
          },

          {
            icon:
              "fas fa-question-circle",
            title: "I am not sure",
            detail:
              "You are not sure what roof or debris conditions matter.",
            echo:
              "Roof and debris: Not sure",
            scores: {
              cleaning: 1,
              repairs: 1,
              drainage: 1
            }
          }
        ]
      },

      {
        title:
          "What outcome are you hoping for?",

        theme: "Best Outcome",

        hint:
          "This helps shape the recommendation into a practical next step.",

        options: [
          {
            icon: "fas fa-broom",
            title:
              "Clean it and verify flow",
            detail:
              "I want the gutters cleared and the downspouts checked.",
            echo:
              "Best outcome: Clean it and verify flow",
            scores: {
              cleaning: 5
            }
          },

          {
            icon: "fas fa-wrench",
            title:
              "Fix problem sections",
            detail:
              "I want leaking, sagging, or loose areas corrected.",
            echo:
              "Best outcome: Fix problem sections",
            scores: {
              repairs: 5
            }
          },

          {
            icon:
              "fas fa-shield-alt",
            title:
              "Reduce future clogs",
            detail:
              "I want a longer-term solution for recurring debris.",
            echo:
              "Best outcome: Reduce future clogs",
            scores: {
              guards: 5
            }
          },

          {
            icon: "fas fa-tools",
            title:
              "Replace the old system",
            detail:
              "I want new gutters with better sizing and downspout planning.",
            echo:
              "Best outcome: Replace the old system",
            scores: {
              installation: 5
            }
          },

          {
            icon: "fas fa-water",
            title:
              "Move water farther away",
            detail:
              "I want better control after water leaves the downspouts.",
            echo:
              "Best outcome: Move water farther away",
            scores: {
              drainage: 5
            }
          },

          {
            icon:
              "fas fa-user-check",
            title:
              "I need someone to look",
            detail:
              "I am not sure which service is the right starting point.",
            echo:
              "Best outcome: I need someone to look",
            scores: {
              cleaning: 2,
              repairs: 2,
              drainage: 2
            }
          }
        ]
      }
    ];

    const dryerQuestions = [
      {
        title:
          "What is happening with the dryer?",

        theme: "Dryer Symptoms",

        hint:
          "These questions focus on airflow, lint buildup, and possible vent restriction.",

        options: [
          {
            icon: "fas fa-clock",
            title: "Long dry times",
            detail:
              "Loads need extra cycles or take longer than they used to.",
            echo:
              "Dryer symptoms: Long dry times",
            scores: {
              dryer: 6
            }
          },

          {
            icon:
              "fas fa-temperature-high",
            title:
              "Hot laundry area",
            detail:
              "The dryer, laundry room, or clothes feel hotter than expected.",
            echo:
              "Dryer symptoms: Hot laundry area",
            scores: {
              dryer: 6
            }
          },

          {
            icon: "fas fa-wind",
            title:
              "Exterior flap barely opens",
            detail:
              "The outside vent does not seem to push air strongly.",
            echo:
              "Dryer symptoms: Exterior flap barely opens",
            scores: {
              dryer: 6
            }
          },

          {
            icon:
              "fas fa-fire-extinguisher",
            title:
              "Lint or safety concern",
            detail:
              "You are concerned about lint buildup or fire risk.",
            echo:
              "Dryer symptoms: Lint or safety concern",
            scores: {
              dryer: 6
            }
          },

          {
            icon:
              "fas fa-compress-arrows-alt",
            title: "Crushed hose",
            detail:
              "The transition hose may be bent, kinked, or restricted.",
            echo:
              "Dryer symptoms: Crushed or restricted hose",
            scores: {
              dryer: 6
            }
          }
        ]
      },

      {
        title:
          "What is the airflow like outside?",

        theme: "Exterior Airflow",

        hint:
          "Exterior airflow is one of the clearest clues that the vent may be restricted.",

        options: [
          {
            icon:
              "fas fa-check-circle",
            title: "Strong airflow",
            detail:
              "Air seems to move strongly from the exterior vent.",
            echo:
              "Exterior airflow: Strong airflow",
            scores: {
              dryer: 3
            }
          },

          {
            icon: "fas fa-stream",
            title: "Weak airflow",
            detail:
              "You can feel air, but it seems weak.",
            echo:
              "Exterior airflow: Weak airflow",
            scores: {
              dryer: 6
            }
          },

          {
            icon: "fas fa-ban",
            title:
              "Little or no airflow",
            detail:
              "The exterior vent barely moves air or does not open.",
            echo:
              "Exterior airflow: Little or no airflow",
            scores: {
              dryer: 7
            }
          },

          {
            icon:
              "fas fa-question-circle",
            title:
              "I have not checked",
            detail:
              "You are not sure what the vent does outside.",
            echo:
              "Exterior airflow: Not checked",
            scores: {
              dryer: 5
            }
          }
        ]
      },

      {
        title:
          "When was the full vent run last cleaned?",

        theme: "Cleaning History",

        hint:
          "Cleaning the lint screen is not the same as cleaning the full exhaust route.",

        options: [
          {
            icon:
              "fas fa-calendar-check",
            title:
              "Within the last year",
            detail:
              "It was cleaned recently, but something still feels off.",
            echo:
              "Dryer vent cleaning history: Within the last year",
            scores: {
              dryer: 4
            }
          },

          {
            icon:
              "fas fa-calendar-alt",
            title:
              "Over a year ago",
            detail:
              "It has been more than a year since service.",
            echo:
              "Dryer vent cleaning history: Over a year ago",
            scores: {
              dryer: 7
            }
          },

          {
            icon:
              "fas fa-question-circle",
            title: "I am not sure",
            detail:
              "You do not know when the full vent run was cleaned.",
            echo:
              "Dryer vent cleaning history: Not sure",
            scores: {
              dryer: 7
            }
          }
        ]
      },

      {
        title:
          "Where does the vent exit?",

        theme: "Vent Exit",

        hint:
          "Access and routing can affect what we check and how the service is quoted.",

        options: [
          {
            icon: "fas fa-home",
            title:
              "Ground-level wall",
            detail:
              "The vent exits low on an outside wall.",
            echo:
              "Vent exit: Ground-level wall",
            scores: {
              dryer: 4
            }
          },

          {
            icon: "fas fa-arrow-up",
            title:
              "Elevated or roof-area exit",
            detail:
              "The vent exits high, through a second story, or near the roof.",
            echo:
              "Vent exit: Elevated or roof-area exit",
            scores: {
              dryer: 5
            }
          },

          {
            icon: "fas fa-route",
            title: "Long vent route",
            detail:
              "The vent may travel a long distance before exiting.",
            echo:
              "Vent exit: Long vent route",
            scores: {
              dryer: 5
            }
          },

          {
            icon:
              "fas fa-question-circle",
            title: "I am not sure",
            detail:
              "You are not sure where the dryer vent exits.",
            echo:
              "Vent exit: Not sure",
            scores: {
              dryer: 4
            }
          }
        ]
      }
    ];

    let currentStep = 0;
    let activeTrack = null;

    let activeQuestions = [
      startQuestion
    ];

    let currentBestService = null;
    let currentSecondService = null;

    const answers = [];

    function escapeAttribute(value) {
      return String(value).replace(
        /"/g,
        "&quot;"
      );
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
          checkup.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        },
        80
      );
    }

    function getTotalSteps() {
      return activeQuestions.length;
    }

    function renderDots() {
      dotsWrap.innerHTML = "";

      activeQuestions.forEach(
        function (_question, index) {
          const dot =
            document.createElement("span");

          dot.className =
            "gc-step-dot";

          if (index === currentStep) {
            dot.classList.add("active");
          }

          if (answers[index]) {
            dot.classList.add("complete");
          }

          dotsWrap.appendChild(dot);
        }
      );
    }

    function updateProgress() {
      const answeredCount =
        answers.filter(Boolean).length;

      const totalSteps =
        getTotalSteps();

      const progress =
        Math.round(
          (
            answeredCount /
            totalSteps
          ) *
            100
        );

      const question =
        activeQuestions[currentStep];

      progressFill.style.width =
        progress + "%";

      stepLabel.textContent =
        "Step " +
        (currentStep + 1) +
        " of " +
        totalSteps +
        " · " +
        (
          question &&
          question.theme
            ? question.theme
            : "Checkup"
        );

      trackLabel.textContent =
        activeTrack === "dryer"
          ? "Dryer vent checkup"
          : "Home exterior checkup";

      renderDots();
    }

    function renderQuestion() {
      const question =
        activeQuestions[currentStep];

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
            answers[currentStep] ===
            option;

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
              answers[currentStep] =
                option;

              if (
                currentStep === 0 &&
                option.track
              ) {
                activeTrack =
                  option.track;

                activeQuestions =
                  option.track === "dryer"
                    ? [startQuestion].concat(
                        dryerQuestions
                      )
                    : [startQuestion].concat(
                        gutterQuestions
                      );

                answers.length = 1;
                answers[0] = option;
              }

              if (
                currentStep <
                activeQuestions.length - 1
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

    function getScores() {
      const scores = {};

      serviceOrder.forEach(
        function (serviceKey) {
          scores[serviceKey] = 0;
        }
      );

      answers.forEach(
        function (answer) {
          if (
            !answer ||
            !answer.scores
          ) {
            return;
          }

          Object.keys(
            answer.scores
          ).forEach(
            function (serviceKey) {
              scores[serviceKey] +=
                answer.scores[
                  serviceKey
                ];
            }
          );
        }
      );

      return scores;
    }

    function getRankedServiceKeys() {
      const scores = getScores();

      if (activeTrack === "dryer") {
        return ["dryer"];
      }

      return serviceOrder
        .filter(function (serviceKey) {
          return serviceKey !== "dryer";
        })
        .sort(function (first, second) {
          if (
            scores[second] ===
            scores[first]
          ) {
            return (
              serviceOrder.indexOf(first) -
              serviceOrder.indexOf(second)
            );
          }

          return (
            scores[second] -
            scores[first]
          );
        });
    }

    function getAnswerSummary() {
      return activeQuestions
        .map(
          function (
            question,
            index
          ) {
            const answer =
              answers[index];

            return (
              index +
              1 +
              ". " +
              (
                question.theme ||
                question.title
              ) +
              ": " +
              (
                answer
                  ? answer.title
                  : "Not answered"
              )
            );
          }
        )
        .join("\n");
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
        "Best Starting Point:",
        currentBestService
          ? currentBestService.title
          : "Not calculated",
        "",
        "Also Worth Checking:",
        currentSecondService
          ? currentSecondService.title
          : "None",
        "",
        "Answers:",
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
      const rankedKeys =
        getRankedServiceKeys();

      const bestService =
        services[rankedKeys[0]];

      const secondService =
        services[rankedKeys[1]];

      if (!bestService) {
        return;
      }

      currentBestService =
        bestService;

      currentSecondService =
        secondService || null;

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
        'Based on your answers, the best starting point appears to be <span class="gc-result-service">' +
        bestService.title +
        "</span>. Add your contact details and any photos below. We’ll review everything before following up.";

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

      const photoItem =
        document.createElement("li");

      photoItem.textContent =
        "Your answers, notes, and photos will help us understand what you’re seeing.";

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

      resultPanel.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }

    function resetCheckup() {
      currentStep = 0;
      activeTrack = null;

      activeQuestions = [
        startQuestion
      ];

      answers.length = 0;

      currentBestService = null;
      currentSecondService = null;

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

        if (currentStep === 1) {
          activeTrack = null;

          activeQuestions = [
            startQuestion
          ];

          answers.length = 1;
        }

        currentStep -= 1;

        renderQuestion();
        updateProgress();
      }
    );

    resetBtn.addEventListener(
      "click",
      resetCheckup
    );

    checkupForm.addEventListener(
      "submit",
      function () {
        hiddenMessage.value =
          buildMessage();

        if (submitStatus) {
          submitStatus.textContent =
            "Sending your checkup...";

          submitStatus.className =
            "gc-submit-status active success";
        }
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