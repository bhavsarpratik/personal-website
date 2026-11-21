(() => {
  const nav = document.querySelector(".nav");
  const links = Array.from(nav.querySelectorAll(".nav-links a, .nav-cta"));
  const sections = links.map((link) => document.getElementById(link.hash.slice(1)));
  const scores = document.querySelector(".scores");

  if ("IntersectionObserver" in window && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      scores.classList.add("is-visible");
      observer.disconnect();
    }, { threshold: 0.2 });
    observer.observe(scores);
  }

  const controls = document.querySelector(".stack-controls");
  const tabs = Array.from(controls.querySelectorAll("a"));
  const panels = tabs.map((tab) => document.getElementById(tab.hash.slice(1)));

  controls.setAttribute("role", "tablist");
  controls.setAttribute("aria-orientation", "vertical");
  tabs.forEach((tab, index) => {
    const panel = panels[index];
    tab.setAttribute("role", "tab");
    tab.setAttribute("aria-controls", panel.id);
    panel.setAttribute("role", "tabpanel");
    panel.setAttribute("aria-labelledby", tab.id);
    panel.tabIndex = 0;
  });

  let active = -1;
  const selectLayer = (index) => {
    if (index === active) return;
    tabs.forEach((tab, i) => {
      const selected = i === index;
      tab.tabIndex = selected ? 0 : -1;
      tab.setAttribute("aria-selected", String(selected));
      panels[i].hidden = !selected;
      panels[i].classList.toggle("is-entering", selected && active >= 0);
    });
    active = index;
  };

  const layerFromHash = () => tabs.findIndex((tab) => tab.hash === location.hash);
  selectLayer(Math.max(0, layerFromHash()));
  addEventListener("hashchange", () => {
    const index = layerFromHash();
    if (index >= 0) selectLayer(index);
  });

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", (event) => {
      event.preventDefault();
      selectLayer(index);
    });
    tab.addEventListener("keydown", (event) => {
      let next;
      switch (event.key) {
        case "ArrowUp":
        case "ArrowLeft": next = (index + tabs.length - 1) % tabs.length; break;
        case "ArrowDown":
        case "ArrowRight": next = (index + 1) % tabs.length; break;
        case "Home": next = 0; break;
        case "End": next = tabs.length - 1; break;
        case " ": event.preventDefault(); selectLayer(index); return;
        default: return;
      }
      event.preventDefault();
      selectLayer(next);
      tabs[next].focus({ preventScroll: true });
    });
  });

  const dialog = document.querySelector(".arcade-dialog");
  if (typeof dialog.showModal === "function") {
    const game = dialog.querySelector(".arcade-viewport");
    const loading = dialog.querySelector(".arcade-loading");
    let launcher;

    document.querySelectorAll("[data-play]").forEach((link) => {
      link.addEventListener("click", (event) => {
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        event.preventDefault();
        launcher = link;

        const frame = document.createElement("iframe");
        frame.title = "Play Frontier Fighters";
        frame.sandbox = "allow-scripts allow-same-origin";
        frame.allow = "fullscreen; gamepad";
        frame.addEventListener("load", () => {
          if (game.firstElementChild === frame) loading.hidden = true;
        }, { once: true });
        frame.src = link.href;
        loading.hidden = false;
        game.replaceChildren(frame);
        dialog.showModal();
      });
    });

    dialog.addEventListener("close", () => {
      game.replaceChildren();
      loading.hidden = true;
      launcher?.focus({ preventScroll: true });
      launcher = undefined;
    });
  }

  let frame = 0;
  const updateNav = () => {
    frame = 0;
    const guide = nav.offsetHeight + 48;
    let current = -1;
    let closestTop = -Infinity;
    sections.forEach((section, index) => {
      const top = section.getBoundingClientRect().top;
      if (top <= guide && top > closestTop) {
        current = index;
        closestTop = top;
      }
    });
    if (Math.ceil(scrollY + innerHeight) >= document.documentElement.scrollHeight) {
      const explicitTarget = links.findIndex((link) => link.hash === location.hash);
      current = explicitTarget < 0 ? links.length - 1 : explicitTarget;
    }
    links.forEach((link, index) => {
      if (index === current) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
  };

  const scheduleNav = () => {
    if (!frame) frame = requestAnimationFrame(updateNav);
  };
  addEventListener("scroll", scheduleNav, { passive: true });
  addEventListener("resize", scheduleNav);
  addEventListener("load", scheduleNav);
  addEventListener("hashchange", scheduleNav);
  updateNav();
})();
