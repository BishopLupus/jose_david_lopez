    const nav = document.querySelector(".topbar");
    const bottomNav = document.querySelector(".bottombar");
    const menuToggle = document.querySelector(".menu-toggle");
    const setNavOffset = () => {
      document.documentElement.style.setProperty(
        "--nav-offset",
        `${Math.ceil(nav.getBoundingClientRect().height + 18)}px`
      );
      if (bottomNav) {
        document.documentElement.style.setProperty(
          "--bottom-offset",
          `${Math.ceil(bottomNav.getBoundingClientRect().height + 16)}px`
        );
      }
    };
    const setMenuOpen = (open) => {
      nav.classList.toggle("is-open", open);
      menuToggle.setAttribute("aria-expanded", String(open));
      menuToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      setNavOffset();
    };
    menuToggle.addEventListener("click", () => {
      setMenuOpen(menuToggle.getAttribute("aria-expanded") !== "true");
    });
    nav.querySelectorAll(".header-menu a").forEach((link) => {
      link.addEventListener("click", () => {
        if (window.matchMedia("(max-width: 760px)").matches) setMenuOpen(false);
      });
    });
    setNavOffset();
    window.addEventListener("resize", setNavOffset);

    const dialog = document.querySelector("#pdf-dialog");
    const frame = dialog.querySelector("iframe");
    const openPdf = () => {
      if (!frame.getAttribute("src")) frame.src = "Fullstack_JoseDavidLopezHdez_v2.1.pdf";
      dialog.showModal();
    };
    document.querySelectorAll("[data-open-pdf]").forEach((link) => {
      link.addEventListener("click", (event) => {
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
        event.preventDefault();
        openPdf();
      });
    });
    dialog.querySelector("[data-close-pdf]").addEventListener("click", () => dialog.close());
    dialog.addEventListener("click", (event) => {
      const rect = dialog.getBoundingClientRect();
      const inside = event.clientX >= rect.left && event.clientX <= rect.right
        && event.clientY >= rect.top && event.clientY <= rect.bottom;
      if (!inside) dialog.close();
    });