(function () {
  "use strict";

  function money(value) {
    return "$" + Math.round(value).toLocaleString("en-US");
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

      if (score >= 4) {
        heading.textContent = "A 6-inch system is worth discussing";
        copy.textContent = "Your answers include conditions that can concentrate or accelerate roof runoff. CleanFlow normally pairs 6-inch gutters with 3x4 downspouts and confirms final sizing, outlet placement, valleys, roof geometry and discharge conditions during the onsite assessment.";
      } else {
        heading.textContent = "A 5-inch system may be enough — but we still size the whole system";
        copy.textContent = "Your answers sound closer to a straightforward residential roofline. A properly designed 5-inch system with 2x3 downspouts may be sufficient. We will still inspect valleys, outlet locations, fascia, drip edge and where the water ultimately discharges before recommending an upgrade you may not need.";
      }

      result.classList.add("active");
      result.removeAttribute("hidden");
      result.scrollIntoView({ behavior: "smooth", block: "nearest" });
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

      number.textContent = money(low) + " – " + money(high);
      detail.textContent = "This is a preliminary starting budget for a comparatively straightforward installation based on the information entered. Your onsite proposal can change for unusual height, difficult access, fascia or flashing work, multiple miters, complex roof geometry, copper, drainage corrections, or other conditions we cannot verify from a calculator.";

      result.classList.add("active");
      result.removeAttribute("hidden");
      result.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
  }

  function init() {
    initTabs();
    initSystemPlanner();
    initBudgetEstimator();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
