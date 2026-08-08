(function () {
  "use strict";

  const PHONE = "9374780689";
  const PHONE_DISPLAY = "937-478-0689";
  const FORM_ENDPOINT = "https://formspree.io/f/xpqqeklz";
  const PAGE_URL = "https://www.cleanflowohio.com/services/gutter-installation";

  const leadContext = {
    source: "Seamless Gutter Installation Page",
    planner: "Not completed",
    budget: "Not completed"
  };

  function money(value) {
    return "$" + Math.round(value).toLocaleString("en-US");
  }

  function prefersReducedMotion() {
    return typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  function smoothBehavior() {
    return prefersReducedMotion() ? "auto" : "smooth";
  }

  function addConversionStylesheet() {
    if (document.querySelector('link[href="gutter-conversion.css"]')) {
      return;
    }

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "gutter-conversion.css";
    document.head.appendChild(link);
  }

  function refreshAOS() {
    window.setTimeout(function () {
      if (window.AOS && typeof window.AOS.refreshHard === "function") {
        window.AOS.refreshHard();
      } else if (window.AOS && typeof window.AOS.refresh === "function") {
        window.AOS.refresh();
      }
    }, 50);
  }

  function scrollToQuote() {
    const quote = document.getElementById("gutter-quote");
    if (!quote) {
      return;
    }

    quote.scrollIntoView({ behavior: smoothBehavior(), block: "start" });

    window.setTimeout(function () {
      const name = document.getElementById("giQuoteName");
      if (name) {
        name.focus({ preventScroll: true });
      }
    }, prefersReducedMotion() ? 0 : 550);
  }

  function buildLocalProof() {
    const hero = document.querySelector(".services-hero-wow");
    if (!hero || document.querySelector(".gi-local-proof")) {
      return;
    }

    const section = document.createElement("section");
    section.className = "gi-local-proof";
    section.setAttribute("aria-label", "CleanFlow local trust signals");
    section.innerHTML = `
      <div class="container">
        <div class="gi-local-proof-inner">
          <span class="gi-local-proof-item"><i class="fas fa-location-dot" aria-hidden="true"></i> Miami Valley Owned</span>
          <span class="gi-local-proof-sep" aria-hidden="true"></span>
          <span class="gi-local-proof-item"><i class="fas fa-people-roof" aria-hidden="true"></i> Family Operated</span>
          <span class="gi-local-proof-sep" aria-hidden="true"></span>
          <span class="gi-local-proof-item"><i class="fas fa-user-check" aria-hidden="true"></i> Owner Inspected</span>
          <span class="gi-local-proof-sep" aria-hidden="true"></span>
          <a class="gi-local-proof-item" href="https://g.page/r/Cetk-t7c4rSMEAE" target="_blank" rel="noopener"><span class="gi-local-proof-stars" aria-hidden="true">★★★★★</span> 5-Star Google Rated</a>
          <span class="gi-local-proof-sep" aria-hidden="true"></span>
          <span class="gi-local-proof-item"><i class="fas fa-award" aria-hidden="true"></i> A+ BBB Accredited</span>
          <span class="gi-local-proof-sep" aria-hidden="true"></span>
          <span class="gi-local-proof-item"><i class="fas fa-shield-halved" aria-hidden="true"></i> Insured &amp; Bonded</span>
        </div>
      </div>
    `;

    hero.insertAdjacentElement("afterend", section);
  }

  function buildQuoteForm() {
    const localProof = document.querySelector(".gi-local-proof");
    if (!localProof || document.getElementById("gutter-quote")) {
      return;
    }

    const zone = document.createElement("section");
    zone.className = "gi-quote-zone";
    zone.id = "gutter-quote";
    zone.innerHTML = `
      <div class="container">
        <div class="gi-quote-wrap" data-aos="fade-up">
          <div class="gi-quote-card">
            <div class="gi-quote-copy">
              <span class="gi-quote-kicker"><i class="fas fa-ruler-combined" aria-hidden="true"></i> Free measured estimate</span>
              <h2>Want Us to Measure Your Home?</h2>
              <p>Send the basics now. We will call or text to confirm the property, answer questions, and find an estimate window that works for you.</p>
              <ul class="gi-quote-benefits">
                <li>No obligation and no high-pressure sales process</li>
                <li>Gutter installation is already selected for you</li>
                <li>Planner and budget answers carry into your request automatically</li>
                <li>Miami Valley owned, family operated, and owner inspected</li>
              </ul>
            </div>

            <form class="gi-quote-form" id="giQuoteForm" action="${FORM_ENDPOINT}" method="POST">
              <input type="hidden" name="_next" value="${PAGE_URL}?submitted=true#gutter-quote">
              <input type="hidden" name="_subject" value="New Seamless Gutter Estimate Request">
              <input type="hidden" name="company" value="CleanFlow of Ohio">
              <input type="hidden" name="service" value="Seamless Gutter Installation">
              <input type="hidden" name="source" id="giLeadSource" value="${leadContext.source}">
              <input type="hidden" name="planner_summary" id="giPlannerSummary" value="${leadContext.planner}">
              <input type="hidden" name="budget_summary" id="giBudgetSummary" value="${leadContext.budget}">

              <h3>Request Your Free Gutter Estimate</h3>
              <p class="gi-quote-form-lead">Two required fields. Everything else can wait until we speak.</p>

              <div class="form-group">
                <label for="giQuoteName">Your name</label>
                <input type="text" id="giQuoteName" name="name" autocomplete="name" placeholder="Your Name" required>
              </div>

              <div class="form-group">
                <label for="giQuotePhone">Phone number</label>
                <input type="tel" id="giQuotePhone" name="phone" autocomplete="tel" inputmode="tel" placeholder="Your Phone Number" required>
              </div>

              <div class="form-group">
                <label for="giQuoteNotes">Anything we should know? <span class="form-optional">Optional</span></label>
                <textarea id="giQuoteNotes" name="notes" rows="3" placeholder="Overflow, old gutters, drainage concerns, preferred timing, or anything else you want us to know."></textarea>
              </div>

              <button type="submit" class="btn btn-primary btn-lg btn-pulse"><i class="fas fa-paper-plane" aria-hidden="true"></i> Request My Free Estimate</button>
              <p class="gi-quote-helper">Prefer to talk now? <a href="tel:${PHONE}">Call ${PHONE_DISPLAY}</a> or <a href="sms:${PHONE}">text us</a>. Photos can be texted after you submit or anytime.</p>
              <div class="gi-form-message" id="giFormMessage" role="status" aria-live="polite"></div>
              <noscript><p class="gi-quote-helper">For fastest response, call or text ${PHONE_DISPLAY}.</p></noscript>
            </form>
          </div>
        </div>
      </div>
    `;

    localProof.insertAdjacentElement("afterend", zone);
  }

  function improveHeroConversion() {
    const actions = document.querySelector(".services-hero-wow .services-hero-actions");
    if (!actions) {
      return;
    }

    const links = actions.querySelectorAll("a");
    if (links.length > 1) {
      links[1].href = "#gutter-quote";
      links[1].innerHTML = '<i class="fas fa-clipboard-check" aria-hidden="true"></i> Request a Free Estimate';
    }

    if (!actions.parentElement.querySelector(".gi-hero-planner-link")) {
      const planner = document.createElement("p");
      planner.className = "gi-hero-planner-link";
      planner.style.margin = "14px 0 0";
      planner.style.color = "rgba(255,255,255,0.8)";
      planner.style.fontSize = "0.92rem";
      planner.innerHTML = 'Still comparing options? <a href="#gutter-planner" style="color:#ffd08a;font-weight:800;text-decoration:underline;text-underline-offset:3px;">Plan your gutter system first</a>.';
      actions.insertAdjacentElement("afterend", planner);
    }
  }

  function buildInlineCTA() {
    const wrap = document.createElement("div");
    wrap.className = "gi-inline-cta";
    wrap.setAttribute("data-aos", "fade-up");
    wrap.innerHTML = `
      <div class="gi-inline-cta-copy">
        <strong>Want us to look at your roofline in person?</strong>
        <span>Request a free measured estimate or call now. No obligation.</span>
      </div>
      <div class="gi-inline-cta-actions">
        <a class="btn btn-primary gi-scroll-quote" href="#gutter-quote"><i class="fas fa-clipboard-check" aria-hidden="true"></i> Free Estimate</a>
        <a class="btn btn-accent" href="tel:${PHONE}"><i class="fas fa-phone-alt" aria-hidden="true"></i> Call</a>
      </div>
    `;
    return wrap;
  }

  function sprinkleCTAs() {
    if (document.querySelector(".gi-inline-cta")) {
      return;
    }

    const headings = Array.from(document.querySelectorAll("h2"));
    const targets = [
      "What Makes a Gutter Installation Premium?",
      "Corners: The Part Nobody Asks About",
      "What We Will Not Do"
    ];

    targets.forEach(function (label) {
      const heading = headings.find(function (item) {
        return item.textContent.trim() === label;
      });

      if (!heading) {
        return;
      }

      const section = heading.closest("section");
      const container = section ? section.querySelector(".container") : null;
      if (container) {
        container.appendChild(buildInlineCTA());
      }
    });
  }

  function updateLeadFields() {
    const plannerField = document.getElementById("giPlannerSummary");
    const budgetField = document.getElementById("giBudgetSummary");

    if (plannerField) {
      plannerField.value = leadContext.planner;
    }
    if (budgetField) {
      budgetField.value = leadContext.budget;
    }
  }

  function addResultCTA(result, type) {
    let convert = result.querySelector(".gi-result-convert");
    if (!convert) {
      convert = document.createElement("div");
      convert.className = "gi-result-convert";
      convert.innerHTML = `
        <span>${type === "budget" ? "Want the exact measured price for your home?" : "Want us to confirm this on your house?"}</span>
        <a href="#gutter-quote" class="btn btn-accent gi-scroll-quote"><i class="fas fa-ruler-combined" aria-hidden="true"></i> Get My Measured Estimate</a>
      `;
      result.appendChild(convert);
    }
  }

  function initTabs() {
    const tabs = Array.from(document.querySelectorAll(".gi-tool-tab"));
    const panels = Array.from(document.querySelectorAll(".gi-tool-panel"));

    if (!tabs.length || !panels.length) {
      return;
    }

    function activate(tab, moveFocus) {
      const panelId = tab.getAttribute("aria-controls");

      tabs.forEach(function (item) {
        const active = item === tab;
        item.classList.toggle("active", active);
        item.setAttribute("aria-selected", String(active));
        item.setAttribute("tabindex", active ? "0" : "-1");
      });

      panels.forEach(function (panel) {
        panel.classList.toggle("active", panel.id === panelId);
        panel.hidden = panel.id !== panelId;
      });

      if (moveFocus) {
        tab.focus();
      }
    }

    tabs.forEach(function (tab, index) {
      tab.addEventListener("click", function () {
        activate(tab, false);
      });

      tab.addEventListener("keydown", function (event) {
        let nextIndex = null;

        if (event.key === "ArrowRight" || event.key === "ArrowDown") {
          nextIndex = (index + 1) % tabs.length;
        } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
          nextIndex = (index - 1 + tabs.length) % tabs.length;
        } else if (event.key === "Home") {
          nextIndex = 0;
        } else if (event.key === "End") {
          nextIndex = tabs.length - 1;
        }

        if (nextIndex === null) {
          return;
        }

        event.preventDefault();
        activate(tabs[nextIndex], true);
      });
    });

    const initial = tabs.find(function (tab) {
      return tab.classList.contains("active");
    }) || tabs[0];

    activate(initial, false);
  }

  function initSystemPlanner() {
    const button = document.getElementById("giPlannerButton");
    const result = document.getElementById("giPlannerResult");

    if (!button || !result) {
      return;
    }

    button.addEventListener("click", function () {
      const roof = document.getElementById("giRoofComplexity");
      const pitch = document.getElementById("giRoofPitch");
      const valleys = document.getElementById("giValleys");
      const overflow = document.getElementById("giOverflow");

      if (!roof || !pitch || !valleys || !overflow) {
        return;
      }

      let score = 0;

      if (roof.value === "large" || roof.value === "complex") {
        score += 2;
      }
      if (pitch.value === "steep") {
        score += 2;
      } else if (pitch.value === "moderate") {
        score += 1;
      }
      if (valleys.value === "multiple") {
        score += 2;
      } else if (valleys.value === "one") {
        score += 1;
      }
      if (overflow.value === "yes") {
        score += 2;
      }

      const heading = result.querySelector("h4");
      const copy = result.querySelector("p");
      if (!heading || !copy) {
        return;
      }

      let recommendation;
      if (score >= 4) {
        recommendation = "6-inch system worth discussing";
        heading.textContent = "A 6-inch system is worth discussing";
        copy.textContent = "Your answers include conditions that can concentrate or accelerate roof runoff. CleanFlow normally pairs 6-inch gutters with 3x4 downspouts and confirms final sizing, outlet placement, valleys, roof geometry and discharge conditions during the onsite assessment.";
      } else {
        recommendation = "5-inch may be sufficient";
        heading.textContent = "A 5-inch system may be enough — but we still size the whole system";
        copy.textContent = "Your answers sound closer to a straightforward residential roofline. A properly designed 5-inch system with 2x3 downspouts may be sufficient. We will still inspect valleys, outlet locations, fascia, drip edge and where the water ultimately discharges before recommending an upgrade you may not need.";
      }

      leadContext.planner = [
        "Recommendation: " + recommendation,
        "Roof: " + roof.options[roof.selectedIndex].text,
        "Pitch: " + pitch.options[pitch.selectedIndex].text,
        "Valleys: " + valleys.options[valleys.selectedIndex].text,
        "Existing overflow: " + overflow.options[overflow.selectedIndex].text
      ].join(" | ");
      updateLeadFields();
      addResultCTA(result, "planner");

      result.classList.add("active");
      result.removeAttribute("hidden");
      result.scrollIntoView({ behavior: smoothBehavior(), block: "nearest" });
    });
  }

  function initBudgetEstimator() {
    const button = document.getElementById("giBudgetButton");
    const result = document.getElementById("giBudgetResult");

    if (!button || !result) {
      return;
    }

    button.addEventListener("click", function () {
      const feetInput = document.getElementById("giLinearFeet");
      const sizeInput = document.getElementById("giSystemSize");
      const storiesInput = document.getElementById("giStories");
      const complexityInput = document.getElementById("giComplexity");

      if (!feetInput || !sizeInput || !storiesInput || !complexityInput) {
        return;
      }

      const feet = Number(feetInput.value);
      const number = result.querySelector(".gi-budget-number");
      const detail = result.querySelector("p");
      if (!number || !detail) {
        return;
      }

      if (!Number.isFinite(feet) || feet < 40 || feet > 600) {
        number.textContent = "Enter 40–600 linear feet";
        detail.textContent = "For very small repairs or unusually large projects, call or text 937-478-0689 for a measured estimate.";
        result.classList.add("active");
        result.removeAttribute("hidden");
        return;
      }

      const basePerFoot = sizeInput.value === "6" ? 11 : 10;
      let centre = feet * basePerFoot;

      if (storiesInput.value === "2") {
        centre += feet * 0.75;
      } else if (storiesInput.value === "3") {
        centre += feet * 1.5;
      }

      if (complexityInput.value === "moderate") {
        centre += Math.max(125, feet * 0.55);
      } else if (complexityInput.value === "complex") {
        centre += Math.max(300, feet * 1.25);
      }

      const low = Math.max(feet * basePerFoot, centre * 0.95);
      const high = centre * 1.08;
      const range = money(low) + " – " + money(high);

      number.textContent = range;
      detail.textContent = "This is a preliminary starting budget for a comparatively straightforward installation based on the information entered. Your onsite proposal can change for unusual height, difficult access, fascia or flashing work, multiple miters, complex roof geometry, copper, drainage corrections, or other conditions we cannot verify from a calculator.";

      leadContext.budget = [
        "Starting budget shown: " + range,
        "Approx. gutter length: " + feet + " ft",
        "System: " + sizeInput.options[sizeInput.selectedIndex].text,
        "Height: " + storiesInput.options[storiesInput.selectedIndex].text,
        "Complexity: " + complexityInput.options[complexityInput.selectedIndex].text
      ].join(" | ");
      updateLeadFields();
      addResultCTA(result, "budget");

      result.classList.add("active");
      result.removeAttribute("hidden");
      result.scrollIntoView({ behavior: smoothBehavior(), block: "nearest" });
    });
  }

  function buildReviews() {
    if (document.querySelector(".gi-reviews-section")) {
      return;
    }

    const serviceAreaHeading = Array.from(document.querySelectorAll("h2")).find(function (heading) {
      return heading.textContent.indexOf("Serving Dayton") !== -1;
    });
    const serviceArea = serviceAreaHeading ? serviceAreaHeading.closest("section") : null;
    if (!serviceArea) {
      return;
    }

    const section = document.createElement("section");
    section.className = "gi-reviews-section";
    section.innerHTML = `
      <div class="container">
        <div class="gi-review-shell" data-aos="fade-up">
          <div class="gi-section-intro">
            <h2>What Miami Valley Homeowners Say About CleanFlow</h2>
            <p>Real customer feedback about our gutter work, communication, repairs and water-management approach.</p>
          </div>

          <div class="gi-review-trust" aria-label="CleanFlow review trust signals">
            <span class="stars" aria-hidden="true">★★★★★</span>
            <span>5-Star Google Rated</span>
            <span>•</span>
            <span>A+ BBB Accredited</span>
            <span>•</span>
            <span>Local, family operated</span>
          </div>

          <div class="gi-review-stage" id="giReviewStage">
            <article class="gi-review-card active">
              <div class="gi-review-stars" aria-hidden="true">★★★★★</div>
              <blockquote>“I could not be more happy and satisfied with the work, communication and price that CleanFlow delivered. Casey was friendly and helpful from our initial conversation. Arrived at my property on time the following day. Cleaned gutters and downspouts. Provided photos of his work. Just top notch all around. 10/10 highly recommend!”</blockquote>
              <div class="gi-review-meta"><strong>Brian Stokes</strong><span>Gutter service · Google Review</span></div>
            </article>

            <article class="gi-review-card">
              <div class="gi-review-stars" aria-hidden="true">★★★★★</div>
              <blockquote>“Great professional cleaning — fair quote and readily available versus the competition. Gutters were filled to the brim with debris and not fully secure in some places. CleanFlow went out of their way to get gutter brackets in order to resecure gutters to fascia board. Nice to have peace of mind knowing my gutters are clean and ready for the next storm!”</blockquote>
              <div class="gi-review-meta"><strong>Andrew Greenspan</strong><span>Gutter cleaning &amp; repairs · Google Review</span></div>
            </article>

            <article class="gi-review-card">
              <div class="gi-review-stars" aria-hidden="true">★★★★★</div>
              <blockquote>“The crew did a fantastic job. We had gutters clogged and drainage issues. They built a French drain system with additional drains to move the water and it works great. I highly recommend CleanFlow of Ohio for your rain water drainage issues.”</blockquote>
              <div class="gi-review-meta"><strong>Mike Miller</strong><span>Gutters &amp; drainage · Google Review</span></div>
            </article>
          </div>

          <div class="gi-review-controls" aria-label="Review carousel controls">
            <button type="button" class="gi-review-btn" id="giReviewPrev" aria-label="Previous review"><i class="fas fa-chevron-left" aria-hidden="true"></i></button>
            <div class="gi-review-dots" id="giReviewDots"></div>
            <button type="button" class="gi-review-btn" id="giReviewNext" aria-label="Next review"><i class="fas fa-chevron-right" aria-hidden="true"></i></button>
          </div>

          <div class="gi-review-links">
            <a href="https://g.page/r/Cetk-t7c4rSMEAE" target="_blank" rel="noopener">Read Our Google Reviews</a>
            <a href="https://www.bbb.org/us/oh/dayton/profile/gutter-cleaning/cleanflow-of-ohio-0322-1440107123" target="_blank" rel="noopener">View Our A+ BBB Profile</a>
          </div>
        </div>
      </div>
    `;

    serviceArea.insertAdjacentElement("beforebegin", section);
  }

  function initReviews() {
    const stage = document.getElementById("giReviewStage");
    const prev = document.getElementById("giReviewPrev");
    const next = document.getElementById("giReviewNext");
    const dotsWrap = document.getElementById("giReviewDots");
    if (!stage || !prev || !next || !dotsWrap) {
      return;
    }

    const cards = Array.from(stage.querySelectorAll(".gi-review-card"));
    let index = 0;
    let timer = null;

    function show(nextIndex) {
      index = (nextIndex + cards.length) % cards.length;
      cards.forEach(function (card, cardIndex) {
        card.classList.toggle("active", cardIndex === index);
      });
      Array.from(dotsWrap.children).forEach(function (dot, dotIndex) {
        dot.classList.toggle("active", dotIndex === index);
        if (dotIndex === index) {
          dot.setAttribute("aria-current", "true");
        } else {
          dot.removeAttribute("aria-current");
        }
      });
    }

    cards.forEach(function (_, dotIndex) {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = "gi-review-dot" + (dotIndex === 0 ? " active" : "");
      dot.setAttribute("aria-label", "Show review " + (dotIndex + 1));
      dot.addEventListener("click", function () {
        show(dotIndex);
        restart();
      });
      dotsWrap.appendChild(dot);
    });

    function stop() {
      if (timer) {
        window.clearInterval(timer);
        timer = null;
      }
    }

    function start() {
      if (prefersReducedMotion()) {
        return;
      }
      stop();
      timer = window.setInterval(function () {
        show(index + 1);
      }, 11000);
    }

    function restart() {
      stop();
      start();
    }

    prev.addEventListener("click", function () {
      show(index - 1);
      restart();
    });
    next.addEventListener("click", function () {
      show(index + 1);
      restart();
    });
    stage.addEventListener("pointerenter", stop);
    stage.addEventListener("pointerleave", start);
    stage.addEventListener("focusin", stop);
    stage.addEventListener("focusout", start);
    document.addEventListener("visibilitychange", function () {
      if (document.hidden) {
        stop();
      } else {
        start();
      }
    });

    show(0);
    start();
  }

  function buildMobileDock() {
    if (document.querySelector(".gi-mobile-dock")) {
      return;
    }

    const dock = document.createElement("div");
    dock.className = "gi-mobile-dock";
    dock.setAttribute("aria-label", "Quick contact options");
    dock.innerHTML = `
      <a class="gi-mobile-call" href="tel:${PHONE}"><i class="fas fa-phone-alt" aria-hidden="true"></i> Call / Text</a>
      <a class="gi-mobile-estimate gi-scroll-quote" href="#gutter-quote"><i class="fas fa-clipboard-check" aria-hidden="true"></i> Free Estimate</a>
    `;
    document.body.appendChild(dock);
  }

  function initQuoteNavigation() {
    document.addEventListener("click", function (event) {
      const trigger = event.target.closest('a[href="#gutter-quote"], .gi-scroll-quote');
      if (!trigger) {
        return;
      }
      event.preventDefault();
      scrollToQuote();
    });
  }

  function showSubmissionStatus() {
    const params = new URLSearchParams(window.location.search);
    if (params.get("submitted") !== "true") {
      return;
    }

    const message = document.getElementById("giFormMessage");
    if (message) {
      message.textContent = "Thank you. Your seamless gutter estimate request was sent. We will follow up by call or text as soon as possible.";
      message.classList.add("success");
    }
  }

  function init() {
    addConversionStylesheet();
    buildLocalProof();
    buildQuoteForm();
    improveHeroConversion();
    sprinkleCTAs();
    buildReviews();
    buildMobileDock();
    initQuoteNavigation();
    initTabs();
    initSystemPlanner();
    initBudgetEstimator();
    initReviews();
    updateLeadFields();
    showSubmissionStatus();
    refreshAOS();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
