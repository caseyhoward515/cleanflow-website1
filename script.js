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

  /*
     BATCH 2 ADDITION — 60-Second CleanFlow Checkup
     Research-backed field-question version.
     Self-contained. Exits immediately on pages without the
     checkup section. Touches no calculator or carousel logic.
  */

  function initCleanFlowCheckup() {
    const checkup = document.querySelector("[data-cleanflow-checkup]");

    if (!checkup) return;

    const stepLabel = document.getElementById("gcStepLabel");
    const trackLabel = document.getElementById("gcTrackLabel");
    const questionTitle = document.getElementById("gcQuestion");
    const questionHint = document.getElementById("gcHint");
    const optionsWrap = document.getElementById("gcOptions");
    const progressFill = document.getElementById("gcProgressFill");
    const dotsWrap = document.getElementById("gcStepDots");
    const backBtn = document.getElementById("gcBack");
    const resetBtn = document.getElementById("gcReset");
    const resultPanel = document.getElementById("gcResult");

    if (!stepLabel || !trackLabel || !questionTitle || !questionHint || !optionsWrap || !progressFill || !dotsWrap || !backBtn || !resetBtn || !resultPanel) {
      return;
    }

    const serviceOrder = ["repairs", "drainage", "installation", "cleaning", "guards", "dryer"];

    const services = {
      cleaning: {
        title: "Gutter Cleaning",
        icon: "fas fa-broom",
        label: "Best starting point",
        serviceName: "Gutter Cleaning",
        issue: "Your answers point to restricted water flow from debris, roof grit, leaves, or a possible downspout blockage.",
        fit: "Cleaning is usually the best first step when gutters overflow, hold visible debris, grow plants, or have not been serviced recently. It also gives us a clean baseline before recommending repairs, guards, or drainage work.",
        checks: [
          "Hand-clean debris from accessible gutters",
          "Flush downspouts and verify water flow",
          "Check whether water exits properly at the bottom of the downspouts",
          "Look for visible sagging, leaks, loose sections, or pitch concerns",
          "Check visible underground drainage discharge when attached"
        ],
        nextStep: "Schedule a cleaning and flow check before moving into repairs, guards, or underground drainage work.",
        link: "services.html#gutter-cleaning-service",
        linkText: "View Gutter Cleaning",
        quoteValue: "Gutter Cleaning"
      },
      repairs: {
        title: "Gutter Repairs",
        icon: "fas fa-wrench",
        label: "Repair-focused starting point",
        serviceName: "Gutter Repairs",
        issue: "Your answers point to a gutter system that may be loose, leaking, sagging, separated, or not pitched correctly.",
        fit: "Repairs may fit when the problem is tied to a specific section, corner, seam, hanger, or pitch issue instead of a full-system failure.",
        checks: [
          "Inspect leaking corners, seams, and end caps",
          "Check loose hangers, brackets, and pulled sections",
          "Look for sagging runs or pitch issues",
          "Check fascia connection points where the gutter is pulling away",
          "Confirm whether repair or replacement makes more sense"
        ],
        nextStep: "Have the problem areas looked over so we can tell whether a targeted repair is enough.",
        link: "services.html#gutter-repairs-service",
        linkText: "View Gutter Repairs",
        quoteValue: "Gutter Repairs"
      },
      guards: {
        title: "Gutter Guard Installation",
        icon: "fas fa-shield-alt",
        label: "Long-term clog reduction",
        serviceName: "Gutter Guards",
        issue: "Your answers point to recurring debris, heavy tree coverage, or gutters that clog again after cleanings.",
        fit: "Guards may reduce recurring clogs, but they should come after the gutters are cleaned, flowing, and checked for pitch and attachment. No guard removes every future maintenance need.",
        checks: [
          "Confirm the gutters are clean and flowing first",
          "Check gutter condition and attachment",
          "Look at roofline, tree coverage, pine needles, roof grit, and debris type",
          "Watch for concentrated roof runoff that may overshoot guards",
          "Recommend guards only if the system is a good candidate"
        ],
        nextStep: "Start with a clean and inspection, then consider guards if the gutter system is in good shape.",
        link: "services.html#gutter-protection-service",
        linkText: "View Gutter Guards",
        quoteValue: "Gutter Guards"
      },
      installation: {
        title: "Seamless Gutter Installation",
        icon: "fas fa-tools",
        label: "Replacement may be worth checking",
        serviceName: "Gutter Installation",
        issue: "Your answers point to an older, damaged, undersized, or unreliable gutter system.",
        fit: "New gutters may be the better starting point when repeated repairs would only patch a system that is already failing, undersized, or poorly laid out.",
        checks: [
          "Measure existing gutter runs and downspout layout",
          "Check fascia condition before installation",
          "Review 5-inch and 6-inch gutter options",
          "Look at roof valleys and areas where too much roof water hits one small gutter section",
          "Plan downspout placement to improve roof runoff control"
        ],
        nextStep: "Schedule an installation estimate so we can confirm whether repair or replacement is the smarter move.",
        link: "services/gutter-installation.html",
        linkText: "View Installation",
        quoteValue: "Gutter Installation"
      },
      drainage: {
        title: "Drainage & Downspout Solutions",
        icon: "fas fa-water",
        label: "Water-management starting point",
        serviceName: "Underground Drainage / Downspout Extensions",
        issue: "Your answers point to water dumping too close to the home, backing up near the downspout connection, or pooling where it needs to be moved farther away.",
        fit: "Drainage may be the right focus when the gutter is collecting water, but the discharge after the downspout is causing problems on the ground.",
        checks: [
          "Check where each downspout currently discharges",
          "Verify visible flow from the gutter and downspout system",
          "Look for pooling near the foundation, walkways, patios, or landscaping",
          "Check whether underground lines appear restricted or have an unknown outlet",
          "Discuss practical downspout extension or drainage options"
        ],
        nextStep: "Request a drainage assessment so we can look at where the water is going after it leaves the gutter.",
        link: "services.html#underground-drainage-service",
        linkText: "View Drainage",
        quoteValue: "Underground Drainage / Downspout Extensions"
      },
      dryer: {
        title: "Dryer Vent Cleaning",
        icon: "fas fa-fire-extinguisher",
        label: "Dryer airflow and safety check",
        serviceName: "Dryer Vent Cleaning",
        issue: "Your answers point to restricted dryer airflow, lint buildup, longer dry times, or a vent that may be overdue for service.",
        fit: "Dryer vent cleaning may fit when drying performance drops, the laundry area feels hot, exterior airflow is weak, or lint buildup becomes noticeable.",
        checks: [
          "Clean the dryer vent run when accessible",
          "Inspect the exterior vent hood",
          "Check airflow before and after when accessible",
          "Look for crushed transition hose, sharp bends, lint buildup, or difficult vent routing",
          "Let you know if access or vent routing may require a custom quote"
        ],
        nextStep: "Schedule a dryer vent cleaning to improve airflow and reduce lint-related fire risk.",
        link: "services/dryer-vent-cleaning.html",
        linkText: "View Dryer Vent Cleaning",
        quoteValue: "Dryer Vent Cleaning"
      }
    };

    const startQuestion = {
      title: "What is the main thing you want checked?",
      hint: "Start with the concern that brought you here today.",
      options: [
        {
          icon: "fas fa-house-chimney",
          title: "Gutters, downspouts, or drainage",
          detail: "Overflow, leaks, clogs, guards, new gutters, or water near the home.",
          track: "gutter",
          echo: "You want help with gutters, downspouts, drainage, or exterior water flow.",
          scores: {}
        },
        {
          icon: "fas fa-fire-extinguisher",
          title: "Dryer vent airflow or lint buildup",
          detail: "Long dry times, hot dryer, lint concern, or vent cleaning.",
          track: "dryer",
          echo: "You want help with dryer vent airflow, lint buildup, or cleaning.",
          scores: { dryer: 5 }
        }
      ]
    };

    const gutterQuestions = [
      {
        title: "Where do you see the water problem?",
        hint: "This helps locate where the water issue starts in the system.",
        options: [
          {
            icon: "fas fa-water",
            title: "Over the front edge of the gutter",
            detail: "Water spills over the gutter during rain.",
            echo: "Water is spilling over the front edge of the gutter.",
            scores: { cleaning: 4, repairs: 1, installation: 1 }
          },
          {
            icon: "fas fa-house-damage",
            title: "Behind the gutter or near the fascia",
            detail: "Water seems to be getting behind the gutter.",
            echo: "Water appears to be getting behind the gutter or near the fascia.",
            scores: { repairs: 5, installation: 1, cleaning: 1 }
          },
          {
            icon: "fas fa-droplet",
            title: "From a corner or seam",
            detail: "A specific joint, corner, or end cap leaks.",
            echo: "Water is showing up at a corner, seam, or end cap.",
            scores: { repairs: 5, cleaning: 1 }
          },
          {
            icon: "fas fa-arrow-down",
            title: "At the top of a downspout",
            detail: "Water backs up where the gutter meets the downspout.",
            echo: "Water is backing up near the top of a downspout.",
            scores: { cleaning: 5, repairs: 1, drainage: 1 }
          },
          {
            icon: "fas fa-route",
            title: "Where the downspout enters the ground",
            detail: "Water backs up or pools at the underground connection.",
            echo: "Water is showing up where the downspout enters the ground.",
            scores: { drainage: 5, cleaning: 2 }
          },
          {
            icon: "fas fa-water-ladder",
            title: "Pooling near the home",
            detail: "Water collects near the foundation, walkway, patio, or landscaping.",
            echo: "Water is pooling near the foundation, walkway, patio, or landscaping.",
            scores: { drainage: 5, cleaning: 1 }
          },
          {
            icon: "fas fa-question-circle",
            title: "I am not sure",
            detail: "You know something is off, but you are not sure where it starts.",
            echo: "You are not sure exactly where the water problem starts.",
            scores: { cleaning: 2, repairs: 1, drainage: 1 }
          }
        ]
      },
      {
        title: "What happens at the downspout?",
        hint: "This separates a gutter issue from a downspout or underground drainage issue.",
        options: [
          {
            icon: "fas fa-check-circle",
            title: "Water flows strongly from the downspout",
            detail: "You can see water exiting with good flow.",
            echo: "Water appears to flow strongly from the downspout.",
            scores: { drainage: 2, repairs: 1, guards: 1 }
          },
          {
            icon: "fas fa-stream",
            title: "Water trickles or seems weak",
            detail: "Water comes out, but the flow does not look strong.",
            echo: "Downspout flow appears weak or restricted.",
            scores: { cleaning: 4, drainage: 2 }
          },
          {
            icon: "fas fa-ban",
            title: "No visible water comes out",
            detail: "Rain goes in, but you do not see water exiting.",
            echo: "There is little or no visible water coming out of the downspout.",
            scores: { cleaning: 5, drainage: 3 }
          },
          {
            icon: "fas fa-level-up-alt",
            title: "Water backs up into the ground connection",
            detail: "The underground line may be restricted or overwhelmed.",
            echo: "Water appears to back up where the downspout enters the ground.",
            scores: { drainage: 6, cleaning: 2 }
          },
          {
            icon: "fas fa-question-circle",
            title: "I cannot tell where it exits",
            detail: "The downspout disappears underground or the outlet is unknown.",
            echo: "The discharge point is unknown or hard to verify.",
            scores: { drainage: 5, cleaning: 1 }
          }
        ]
      },
      {
        title: "Has cleaning solved it before?",
        hint: "This helps decide whether cleaning is the baseline or whether another issue may be involved.",
        options: [
          {
            icon: "fas fa-check",
            title: "Yes, cleaning usually fixes it",
            detail: "The system works better after a normal cleaning.",
            echo: "Cleaning has usually fixed the problem in the past.",
            scores: { cleaning: 4, guards: 2 }
          },
          {
            icon: "fas fa-repeat",
            title: "It improves, then comes back",
            detail: "Cleaning helps for a while, but the problem returns.",
            echo: "Cleaning helps temporarily, but the issue comes back.",
            scores: { guards: 4, cleaning: 2, repairs: 1 }
          },
          {
            icon: "fas fa-exclamation-circle",
            title: "No, it still happens after cleaning",
            detail: "The issue continues even when debris is not obvious.",
            echo: "The issue seems to continue even after cleaning.",
            scores: { repairs: 3, drainage: 3, installation: 2 }
          },
          {
            icon: "fas fa-question-circle",
            title: "I do not know if downspouts were flushed",
            detail: "The gutters may have been cleaned, but flow was not verified.",
            echo: "You are not sure whether the downspouts were flushed and verified.",
            scores: { cleaning: 4, drainage: 2 }
          },
          {
            icon: "fas fa-history",
            title: "It has been over a year or I am not sure",
            detail: "The system may simply be overdue for a full clean and flow check.",
            echo: "It has been over a year, or you are not sure when the gutters were last cleaned.",
            scores: { cleaning: 5, guards: 1 }
          }
        ]
      },
      {
        title: "What condition are the gutters in?",
        hint: "This makes the difference between cleaning, repair, and replacement clearer.",
        options: [
          {
            icon: "fas fa-check-circle",
            title: "They look straight and secure",
            detail: "The gutters appear attached and mostly in good shape.",
            echo: "The gutters appear mostly straight and secure.",
            scores: { cleaning: 2, guards: 2, drainage: 1 }
          },
          {
            icon: "fas fa-weight-hanging",
            title: "They sag between hangers",
            detail: "Sections dip, hold water, or look uneven.",
            echo: "Some gutter sections appear to sag or hold water.",
            scores: { repairs: 5, installation: 2 }
          },
          {
            icon: "fas fa-unlink",
            title: "They are pulling away from the fascia",
            detail: "The gutter is separating from the board behind it.",
            echo: "The gutters appear to be pulling away from the fascia.",
            scores: { repairs: 5, installation: 2 }
          },
          {
            icon: "fas fa-droplet",
            title: "Corners or seams leak",
            detail: "The problem is mostly at joints or corners.",
            echo: "Corners or seams appear to be leaking.",
            scores: { repairs: 5, cleaning: 1 }
          },
          {
            icon: "fas fa-tools",
            title: "They look old, dented, undersized, or worn out",
            detail: "The system may be near replacement territory.",
            echo: "The gutters look older, damaged, undersized, or worn out.",
            scores: { installation: 5, repairs: 2 }
          },
          {
            icon: "fas fa-shield-alt",
            title: "They already have guards, but water skips or overflows",
            detail: "Water still runs over or past the guarded gutter.",
            echo: "The gutters already have guards, but water still skips or overflows.",
            scores: { repairs: 2, cleaning: 2, installation: 2, guards: 1 }
          }
        ]
      },
      {
        title: "What is around the home?",
        hint: "Tree coverage, roof shape, and debris type affect what solution makes sense.",
        options: [
          {
            icon: "fas fa-tree",
            title: "Heavy trees or leaves",
            detail: "Leaves are a recurring issue around the roofline.",
            echo: "Heavy tree coverage or leaves are part of the situation.",
            scores: { guards: 4, cleaning: 3 }
          },
          {
            icon: "fas fa-leaf",
            title: "Pine needles or small debris",
            detail: "Fine debris gets into the gutter system.",
            echo: "Pine needles or small debris may be part of the clogging issue.",
            scores: { guards: 3, cleaning: 3 }
          },
          {
            icon: "fas fa-mountain",
            title: "Roof grit or shingle granules",
            detail: "Fine roof material collects in the gutters.",
            echo: "Roof grit or shingle granules may be collecting in the gutter system.",
            scores: { cleaning: 4, guards: 1 }
          },
          {
            icon: "fas fa-sun",
            title: "Not many trees",
            detail: "The issue may be less about leaves and more about flow, pitch, or discharge.",
            echo: "There are not many trees around the problem area.",
            scores: { repairs: 2, drainage: 2, installation: 1 }
          },
          {
            icon: "fas fa-house-flood-water",
            title: "Lots of roof area dumps into one small section",
            detail: "A roof valley or large roof face sends heavy water to one spot.",
            echo: "A lot of roof water may be dumping into one small gutter section.",
            scores: { installation: 4, repairs: 2, drainage: 1 }
          },
          {
            icon: "fas fa-question-circle",
            title: "I am not sure",
            detail: "You are not sure what debris or roof conditions matter.",
            echo: "You are not sure which roof or debris conditions matter most.",
            scores: { cleaning: 1, repairs: 1, drainage: 1 }
          }
        ]
      },
      {
        title: "What outcome are you hoping for?",
        hint: "This helps shape the recommendation into a practical next step.",
        options: [
          {
            icon: "fas fa-broom",
            title: "Clean it and verify flow",
            detail: "I want the gutters cleared and the downspouts checked.",
            echo: "You want the gutters cleaned and the downspout flow verified.",
            scores: { cleaning: 5 }
          },
          {
            icon: "fas fa-wrench",
            title: "Fix leaking or sagging sections",
            detail: "I want specific problem areas corrected.",
            echo: "You want leaking, sagging, or loose sections corrected.",
            scores: { repairs: 5 }
          },
          {
            icon: "fas fa-shield-alt",
            title: "Reduce future clogs",
            detail: "I want a longer-term solution for recurring debris.",
            echo: "You want to reduce future clogging.",
            scores: { guards: 5 }
          },
          {
            icon: "fas fa-tools",
            title: "Replace the old gutter system",
            detail: "I want new gutters with better sizing and downspout planning.",
            echo: "You are open to replacing the old gutter system.",
            scores: { installation: 5 }
          },
          {
            icon: "fas fa-water",
            title: "Move water farther away from the home",
            detail: "I want better control after water leaves the downspouts.",
            echo: "You want water moved farther away after it leaves the downspouts.",
            scores: { drainage: 5 }
          },
          {
            icon: "fas fa-user-check",
            title: "I need someone to look and tell me",
            detail: "I am not sure which service is the right starting point.",
            echo: "You want someone to inspect the situation and explain the best starting point.",
            scores: { cleaning: 2, repairs: 2, drainage: 2 }
          }
        ]
      }
    ];

    const dryerQuestions = [
      {
        title: "What is happening with the dryer?",
        hint: "These questions focus on airflow, lint buildup, and possible vent restriction.",
        options: [
          {
            icon: "fas fa-clock",
            title: "Clothes take too long to dry",
            detail: "Loads need extra cycles or take longer than they used to.",
            echo: "Your dryer is taking longer than normal to dry clothes.",
            scores: { dryer: 6 }
          },
          {
            icon: "fas fa-temperature-high",
            title: "The laundry area feels hot",
            detail: "The dryer, laundry room, or clothes feel hotter than expected.",
            echo: "The dryer or laundry area feels hotter than expected.",
            scores: { dryer: 6 }
          },
          {
            icon: "fas fa-wind",
            title: "The exterior vent flap barely opens",
            detail: "The outside vent does not seem to push air strongly.",
            echo: "The exterior vent flap may not be opening or moving much air.",
            scores: { dryer: 6 }
          },
          {
            icon: "fas fa-fire-extinguisher",
            title: "Lint or fire-risk concern",
            detail: "You are concerned about lint buildup or safety.",
            echo: "You are concerned about lint buildup or dryer vent safety.",
            scores: { dryer: 6 }
          },
          {
            icon: "fas fa-compress-arrows-alt",
            title: "The hose behind the dryer looks crushed",
            detail: "The transition hose may be bent, kinked, or restricted.",
            echo: "The transition hose behind the dryer may be crushed, bent, or restricted.",
            scores: { dryer: 6 }
          }
        ]
      },
      {
        title: "What is the airflow like outside?",
        hint: "Exterior airflow is one of the clearest clues that the vent may be restricted.",
        options: [
          {
            icon: "fas fa-check-circle",
            title: "Strong airflow",
            detail: "Air seems to move strongly from the exterior vent.",
            echo: "Exterior airflow seems strong.",
            scores: { dryer: 3 }
          },
          {
            icon: "fas fa-stream",
            title: "Weak airflow",
            detail: "You can feel air, but it seems weak.",
            echo: "Exterior airflow seems weak.",
            scores: { dryer: 6 }
          },
          {
            icon: "fas fa-ban",
            title: "Little or no airflow",
            detail: "The exterior vent barely moves air or does not open.",
            echo: "There appears to be little or no exterior airflow.",
            scores: { dryer: 7 }
          },
          {
            icon: "fas fa-question-circle",
            title: "I have not checked",
            detail: "You are not sure what the vent does outside.",
            echo: "You have not checked exterior airflow yet.",
            scores: { dryer: 5 }
          }
        ]
      },
      {
        title: "When was the full vent run last cleaned?",
        hint: "Cleaning the lint screen is not the same as cleaning the full exhaust route.",
        options: [
          {
            icon: "fas fa-calendar-check",
            title: "Within the last year",
            detail: "It was cleaned recently, but something still feels off.",
            echo: "The dryer vent was cleaned within the last year.",
            scores: { dryer: 4 }
          },
          {
            icon: "fas fa-calendar-alt",
            title: "Over a year ago",
            detail: "It has been more than a year since service.",
            echo: "It has been over a year since the dryer vent was cleaned.",
            scores: { dryer: 7 }
          },
          {
            icon: "fas fa-question-circle",
            title: "I am not sure",
            detail: "You do not know when the full vent run was cleaned.",
            echo: "You are not sure when the full dryer vent run was last cleaned.",
            scores: { dryer: 7 }
          }
        ]
      },
      {
        title: "Where does the vent exit?",
        hint: "Access and routing can affect what we check and how the service is quoted.",
        options: [
          {
            icon: "fas fa-home",
            title: "Ground-level exterior wall",
            detail: "The vent exits low on an outside wall.",
            echo: "The dryer vent appears to exit at ground-level on an exterior wall.",
            scores: { dryer: 4 }
          },
          {
            icon: "fas fa-arrow-up",
            title: "Elevated or roof-area exit",
            detail: "The vent exits high, through a second story, or near the roof.",
            echo: "The dryer vent may have an elevated or roof-area exit.",
            scores: { dryer: 5 }
          },
          {
            icon: "fas fa-route",
            title: "Long or complicated vent route",
            detail: "The vent may travel a long distance before exiting.",
            echo: "The dryer vent may have a long or complicated route.",
            scores: { dryer: 5 }
          },
          {
            icon: "fas fa-question-circle",
            title: "I am not sure",
            detail: "You are not sure where the dryer vent exits.",
            echo: "You are not sure where the dryer vent exits.",
            scores: { dryer: 4 }
          }
        ]
      }
    ];

    let currentStep = 0;
    let activeTrack = null;
    let activeQuestions = [startQuestion];
    const answers = [];

    function escapeAttribute(value) {
      return String(value).replace(/"/g, "&quot;");
    }

    function getTotalSteps() {
      return activeQuestions.length;
    }

    function renderDots() {
      dotsWrap.innerHTML = "";

      activeQuestions.forEach(function (_question, index) {
        const dot = document.createElement("span");
        dot.className = "gc-step-dot";

        if (index === currentStep) {
          dot.classList.add("active");
        }

        if (answers[index]) {
          dot.classList.add("complete");
        }

        dotsWrap.appendChild(dot);
      });
    }

    function updateProgress() {
      const answeredCount = answers.filter(Boolean).length;
      const totalSteps = getTotalSteps();
      const progress = Math.round((answeredCount / totalSteps) * 100);

      progressFill.style.width = progress + "%";
      stepLabel.textContent = "Question " + (currentStep + 1) + " of " + totalSteps;
      trackLabel.textContent = activeTrack === "dryer" ? "Dryer vent checkup" : "Home exterior checkup";
      renderDots();
    }

    function renderQuestion() {
      const question = activeQuestions[currentStep];

      if (!question) return;

      questionTitle.textContent = question.title;
      questionHint.textContent = question.hint;
      optionsWrap.innerHTML = "";

      question.options.forEach(function (option) {
        const button = document.createElement("button");
        const isActive = answers[currentStep] === option;

        button.type = "button";
        button.className = "gc-option" + (isActive ? " active" : "");
        button.setAttribute("aria-pressed", String(isActive));
        button.setAttribute("aria-label", option.title);

        button.innerHTML = `
          <span class="gc-option-icon"><i class="${escapeAttribute(option.icon)}"></i></span>
          <span>
            <span class="gc-option-title">${option.title}</span>
            <span class="gc-option-detail">${option.detail}</span>
          </span>
        `;

        button.addEventListener("click", function () {
          answers[currentStep] = option;

          if (currentStep === 0 && option.track) {
            activeTrack = option.track;
            activeQuestions = option.track === "dryer" ? [startQuestion].concat(dryerQuestions) : [startQuestion].concat(gutterQuestions);
            answers.length = 1;
            answers[0] = option;
          }

          if (currentStep < activeQuestions.length - 1) {
            currentStep += 1;
            renderQuestion();
            updateProgress();
          } else {
            renderQuestion();
            updateProgress();
            renderResult();
          }
        });

        optionsWrap.appendChild(button);
      });

      backBtn.disabled = currentStep === 0;
      updateProgress();
    }

    function getScores() {
      const scores = {};

      serviceOrder.forEach(function (serviceKey) {
        scores[serviceKey] = 0;
      });

      answers.forEach(function (answer) {
        if (!answer || !answer.scores) return;

        Object.keys(answer.scores).forEach(function (serviceKey) {
          scores[serviceKey] += answer.scores[serviceKey];
        });
      });

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
        .sort(function (a, b) {
          if (scores[b] === scores[a]) {
            return serviceOrder.indexOf(a) - serviceOrder.indexOf(b);
          }

          return scores[b] - scores[a];
        });
    }

    function getAnswerEcho() {
      return answers
        .filter(Boolean)
        .map(function (answer) {
          return answer.echo;
        })
        .filter(Boolean)
        .slice(0, 4)
        .join(" ");
    }

    function preselectQuoteService(service) {
      const serviceSelect = document.getElementById("service");

      if (!serviceSelect || !service || !service.quoteValue) return false;

      const matchingOption = Array.from(serviceSelect.options).find(function (option) {
        return option.value === service.quoteValue;
      });

      if (!matchingOption) return false;

      serviceSelect.value = service.quoteValue;
      return true;
    }

    function renderResult() {
      const rankedKeys = getRankedServiceKeys();
      const bestService = services[rankedKeys[0]];
      const secondService = services[rankedKeys[1]];
      const answerEcho = getAnswerEcho();
      const prefilled = preselectQuoteService(bestService);

      if (!bestService) return;

      resultPanel.innerHTML = `
        <div class="gc-result-ready">
          <div class="gc-result-icon">
            <i class="${escapeAttribute(bestService.icon)}"></i>
          </div>
          <span class="gc-result-label"><i class="fas fa-camera"></i> CleanFlow Field Report</span>
          <h3>Your answers point to <span class="gc-result-service">${bestService.title}</span> as the best starting point.</h3>
          <div class="gc-result-block">
            <strong>Likely issue</strong>
            <p>${answerEcho} ${bestService.issue}</p>
          </div>
          <div class="gc-result-block">
            <strong>Why this may fit</strong>
            <p>${bestService.fit}</p>
          </div>
          <div class="gc-result-block">
            <strong>What CleanFlow would check</strong>
            <ul>
              ${bestService.checks.map(function (check) {
                return "<li>" + check + "</li>";
              }).join("")}
            </ul>
          </div>
          <div class="gc-result-block">
            <strong>Best next step</strong>
            <p>${bestService.nextStep}</p>
          </div>
          ${secondService && secondService.title !== bestService.title ? `
          <div class="gc-result-block">
            <strong>Also worth checking</strong>
            <p>${secondService.title} may also be worth looking at while we are there.</p>
          </div>
          ` : ""}
          <div class="gc-result-actions">
            <a href="tel:9374780689" class="btn btn-accent"><i class="fas fa-phone-alt"></i> Call or Text</a>
            <a href="#quote" class="btn btn-primary">Get Quote</a>
            <a href="${bestService.link}" class="btn btn-primary">${bestService.linkText}</a>
          </div>
          <p class="gc-prefill-note${prefilled ? " active" : ""}">The quote form service dropdown has been set to ${bestService.serviceName}.</p>
        </div>
      `;
    }

    backBtn.addEventListener("click", function () {
      if (currentStep === 0) return;

      if (currentStep === 1) {
        activeTrack = null;
        activeQuestions = [startQuestion];
        answers.length = 1;
      }

      currentStep -= 1;
      renderQuestion();
      updateProgress();
    });

    resetBtn.addEventListener("click", function () {
      currentStep = 0;
      activeTrack = null;
      activeQuestions = [startQuestion];
      answers.length = 0;

      resultPanel.innerHTML = `
        <div class="gc-result-empty">
          <div class="gc-result-icon">
            <i class="fas fa-clipboard-list"></i>
          </div>
          <span class="gc-result-label"><i class="fas fa-camera"></i> CleanFlow Field Report</span>
          <h3>Your checkup result will appear here</h3>
          <p>As you answer, we’ll compare your concerns against the most common gutter, repair, guard, installation, drainage, and dryer vent service needs.</p>
          <ul>
            <li>Best starting point</li>
            <li>What CleanFlow would check</li>
            <li>Best next step</li>
          </ul>
        </div>
      `;

      renderQuestion();
      updateProgress();
    });

    renderQuestion();
    updateProgress();
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
    initCleanFlowCheckup();
  });
})();