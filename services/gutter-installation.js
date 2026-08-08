(function () {
  "use strict";

  const PHONE = "9374780689";
  const leadContext = {
    source: "Seamless Gutter Installation Page",
    planner: "Not completed",
    budget: "Not completed"
  };

  function money(value) {
    return "$" + Math.round(value).toLocaleString("en-US");
  }

  function prefersReducedMotion() {
    return typeof window.matchMedia === "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  function smoothBehavior() {
    return prefersReducedMotion() ? "auto" : "smooth";
  }

  function updateLeadFields() {
    const planner = document.getElementById("giPlannerSummary");
    const budget = document.getElementById("giBudgetSummary");
    if (planner) planner.value = leadContext.planner;
    if (budget) budget.value = leadContext.budget;
  }

  function scrollToQuote() {
    const quote = document.getElementById("gutter-quote");
    if (!quote) return;
    quote.scrollIntoView({ behavior: smoothBehavior(), block: "start" });
    window.setTimeout(function () {
      const name = document.getElementById("giQuoteName");
      if (name) name.focus({ preventScroll: true });
    }, prefersReducedMotion() ? 0 : 500);
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
      </div>`;
    return wrap;
  }

  function sprinkleCTAs() {
    document.querySelectorAll("section[data-gi-cta]").forEach(function (section) {
      if (section.querySelector(":scope > .container > .gi-inline-cta")) return;
      const container = section.querySelector(":scope > .container");
      if (container) container.appendChild(buildInlineCTA());
    });
  }

  function addResultCTA(result, type) {
    let convert = result.querySelector(".gi-result-convert");
    if (!convert) {
      convert = document.createElement("div");
      convert.className = "gi-result-convert";
      convert.innerHTML = `<span>${type === "budget" ? "Want the exact measured price for your home?" : "Want us to confirm this on your house?"}</span><a href="#gutter-quote" class="btn btn-accent gi-scroll-quote"><i class="fas fa-ruler-combined" aria-hidden="true"></i> Get My Measured Estimate</a>`;
      result.appendChild(convert);
    }
  }

  function removeResultCTA(result) {
    const convert = result.querySelector(".gi-result-convert");
    if (convert) convert.remove();
  }

  function initTabs() {
    const tabs = Array.from(document.querySelectorAll(".gi-tool-tab"));
    const panels = Array.from(document.querySelectorAll(".gi-tool-panel"));
    if (!tabs.length || !panels.length) return;

    function activate(tab, moveFocus) {
      const panelId = tab.getAttribute("aria-controls");
      tabs.forEach(function (item) {
        const active = item === tab;
        item.classList.toggle("active", active);
        item.setAttribute("aria-selected", String(active));
        item.setAttribute("tabindex", active ? "0" : "-1");
      });
      panels.forEach(function (panel) {
        const active = panel.id === panelId;
        panel.classList.toggle("active", active);
        panel.hidden = !active;
      });
      if (moveFocus) tab.focus();
    }

    tabs.forEach(function (tab, index) {
      tab.addEventListener("click", function () { activate(tab, false); });
      tab.addEventListener("keydown", function (event) {
        let nextIndex = null;
        if (event.key === "ArrowRight" || event.key === "ArrowDown") nextIndex = (index + 1) % tabs.length;
        else if (event.key === "ArrowLeft" || event.key === "ArrowUp") nextIndex = (index - 1 + tabs.length) % tabs.length;
        else if (event.key === "Home") nextIndex = 0;
        else if (event.key === "End") nextIndex = tabs.length - 1;
        if (nextIndex === null) return;
        event.preventDefault();
        activate(tabs[nextIndex], true);
      });
    });

    activate(tabs.find(function (tab) { return tab.classList.contains("active"); }) || tabs[0], false);
  }

  function initSystemPlanner() {
    const button = document.getElementById("giPlannerButton");
    const result = document.getElementById("giPlannerResult");
    if (!button || !result) return;

    button.addEventListener("click", function () {
      const roof = document.getElementById("giRoofComplexity");
      const pitch = document.getElementById("giRoofPitch");
      const valleys = document.getElementById("giValleys");
      const overflow = document.getElementById("giOverflow");
      const heading = result.querySelector("h4");
      const copy = result.querySelector("p");
      if (!roof || !pitch || !valleys || !overflow || !heading || !copy) return;

      let capacityScore = 0;
      if (roof.value === "large") capacityScore += 1;
      if (roof.value === "complex") capacityScore += 2;
      if (pitch.value === "moderate") capacityScore += 1;
      if (pitch.value === "steep") capacityScore += 2;
      if (valleys.value === "one") capacityScore += 1;
      if (valleys.value === "multiple") capacityScore += 2;

      let recommendation;
      if (overflow.value === "yes" && capacityScore < 4) {
        recommendation = "Overflow needs diagnosis before sizing";
        heading.textContent = "Overflow needs diagnosis before we blame gutter size";
        copy.textContent = "Active overflow is important, but it does not automatically mean the trough is too small. A clog, restricted outlet, valley concentration, pitch issue, downspout bottleneck or failed underground line can create the same symptom. We would diagnose those conditions before recommending a larger system.";
      } else if (capacityScore >= 4) {
        recommendation = "6-inch system worth discussing";
        heading.textContent = "A 6-inch system is worth discussing";
        copy.textContent = "Your answers include roof conditions that can concentrate or accelerate runoff. CleanFlow normally pairs 6-inch gutters with 3x4 downspouts and confirms final sizing, outlet placement, roof geometry and discharge during the onsite assessment.";
      } else {
        recommendation = "5-inch may be sufficient";
        heading.textContent = "A 5-inch system may be enough — but we still size the whole system";
        copy.textContent = "Your answers sound closer to a straightforward residential roofline. A properly designed 5-inch system with 2x3 downspouts may be sufficient. We still inspect valleys, outlet locations, fascia, drip edge and discharge before recommending an upgrade you may not need.";
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
      result.hidden = false;
      result.scrollIntoView({ behavior: smoothBehavior(), block: "nearest" });
    });
  }

  function initBudgetEstimator() {
    const button = document.getElementById("giBudgetButton");
    const result = document.getElementById("giBudgetResult");
    if (!button || !result) return;

    button.addEventListener("click", function () {
      const feetInput = document.getElementById("giLinearFeet");
      const sizeInput = document.getElementById("giSystemSize");
      const storiesInput = document.getElementById("giStories");
      const complexityInput = document.getElementById("giComplexity");
      const number = result.querySelector(".gi-budget-number");
      const detail = result.querySelector("p");
      const error = document.getElementById("giBudgetError");
      if (!feetInput || !sizeInput || !storiesInput || !complexityInput || !number || !detail || !error) return;

      const feet = Number(feetInput.value);
      if (!Number.isFinite(feet) || feet < 40 || feet > 600) {
        leadContext.budget = "Not completed — invalid footage entry";
        updateLeadFields();
        removeResultCTA(result);
        number.textContent = "";
        detail.textContent = "For very small repairs or unusually large projects, call or text 937-478-0689 for a measured estimate.";
        error.textContent = "Enter an approximate gutter length between 40 and 600 linear feet.";
        result.classList.add("active");
        result.hidden = false;
        return;
      }

      error.textContent = "";
      const basePerFoot = sizeInput.value === "6" ? 11 : 10;
      let centre = feet * basePerFoot;
      if (storiesInput.value === "2") centre += feet * 0.75;
      else if (storiesInput.value === "3") centre += feet * 1.5;
      if (complexityInput.value === "moderate") centre += Math.max(125, feet * 0.55);
      else if (complexityInput.value === "complex") centre += Math.max(300, feet * 1.25);

      const low = Math.max(feet * basePerFoot * 0.92, centre * 0.92);
      const high = centre * 1.30;
      const range = money(low) + " – " + money(high);
      number.textContent = range;
      detail.textContent = "This is a basic-installation planning range, not an average-project promise or measured quote. Straightforward access and rooflines can stay near the lower end. Height, fascia or flashing work, multiple miters, difficult access, roof geometry, copper, drainage corrections and other site conditions can move the measured proposal higher.";

      leadContext.budget = [
        "Basic starting budget shown: " + range,
        "Approx. gutter length: " + feet + " ft",
        "System: " + sizeInput.options[sizeInput.selectedIndex].text,
        "Height: " + storiesInput.options[storiesInput.selectedIndex].text,
        "Complexity: " + complexityInput.options[complexityInput.selectedIndex].text
      ].join(" | ");
      updateLeadFields();
      addResultCTA(result, "budget");
      result.classList.add("active");
      result.hidden = false;
      result.scrollIntoView({ behavior: smoothBehavior(), block: "nearest" });
    });
  }

  function initReviews() {
    const stage = document.getElementById("giReviewStage");
    const prev = document.getElementById("giReviewPrev");
    const next = document.getElementById("giReviewNext");
    const dotsWrap = document.getElementById("giReviewDots");
    if (!stage || !prev || !next || !dotsWrap) return;

    const cards = Array.from(stage.querySelectorAll(".gi-review-card"));
    if (!cards.length) return;
    let index = 0;
    let timer = null;
    let pointerInside = false;
    let focusInside = false;

    function show(nextIndex) {
      index = (nextIndex + cards.length) % cards.length;
      cards.forEach(function (card, cardIndex) { card.classList.toggle("active", cardIndex === index); });
      Array.from(dotsWrap.children).forEach(function (dot, dotIndex) {
        const active = dotIndex === index;
        dot.classList.toggle("active", active);
        if (active) dot.setAttribute("aria-current", "true"); else dot.removeAttribute("aria-current");
      });
    }

    function stop() {
      if (timer) window.clearInterval(timer);
      timer = null;
    }

    function start() {
      stop();
      if (prefersReducedMotion() || document.hidden || pointerInside || focusInside) return;
      timer = window.setInterval(function () { show(index + 1); }, 11000);
    }

    cards.forEach(function (_, dotIndex) {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = "gi-review-dot" + (dotIndex === 0 ? " active" : "");
      dot.setAttribute("aria-label", "Show review " + (dotIndex + 1));
      dot.addEventListener("click", function () { show(dotIndex); start(); });
      dotsWrap.appendChild(dot);
    });

    prev.addEventListener("click", function () { show(index - 1); start(); });
    next.addEventListener("click", function () { show(index + 1); start(); });
    stage.addEventListener("pointerenter", function () { pointerInside = true; stop(); });
    stage.addEventListener("pointerleave", function () { pointerInside = false; start(); });
    stage.addEventListener("focusin", function () { focusInside = true; stop(); });
    stage.addEventListener("focusout", function () { window.setTimeout(function () { focusInside = stage.contains(document.activeElement); start(); }, 0); });
    document.addEventListener("visibilitychange", start);
    show(0);
    start();
  }

  function buildMobileDock() {
    if (document.querySelector(".gi-mobile-dock")) return;
    const dock = document.createElement("div");
    dock.className = "gi-mobile-dock";
    dock.setAttribute("aria-label", "Quick contact options");
    dock.innerHTML = `<a class="gi-mobile-call" href="tel:${PHONE}"><i class="fas fa-phone-alt" aria-hidden="true"></i> Call</a><a class="gi-mobile-estimate gi-scroll-quote" href="#gutter-quote"><i class="fas fa-clipboard-check" aria-hidden="true"></i> Free Estimate</a>`;
    document.body.appendChild(dock);
  }

  function initQuoteNavigation() {
    document.addEventListener("click", function (event) {
      if (!(event.target instanceof Element)) return;
      const trigger = event.target.closest('a[href="#gutter-quote"], .gi-scroll-quote');
      if (!trigger) return;
      event.preventDefault();
      scrollToQuote();
    });
  }

  function showSubmissionStatus() {
    const params = new URLSearchParams(window.location.search);
    if (params.get("submitted") !== "true") return;
    const message = document.getElementById("giFormMessage");
    if (!message) return;
    window.requestAnimationFrame(function () {
      message.textContent = "Thank you. Your seamless gutter estimate request was sent. We will follow up by call or text as soon as possible.";
      message.classList.add("success");
    });
  }

  function refreshAOS() {
    window.setTimeout(function () {
      if (window.AOS && typeof window.AOS.refreshHard === "function") window.AOS.refreshHard();
      else if (window.AOS && typeof window.AOS.refresh === "function") window.AOS.refresh();
    }, 50);
  }

  function init() {
    sprinkleCTAs();
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

  /* Both shared script.js and this page script are deferred. Keep this readyState
     guard if script ordering changes so dynamically enhanced elements are never
     initialized before their static HTML exists. */
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();