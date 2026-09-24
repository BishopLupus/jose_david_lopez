    const nav = document.querySelector(".topbar");
    const setNavOffset = () => {
      document.documentElement.style.setProperty(
        "--nav-offset",
        `${Math.ceil(nav.getBoundingClientRect().height + 18)}px`
      );
    };
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