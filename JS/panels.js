function initProjectPanels() {
  const Arrow = document.getElementById("Arrow");

  function setupPanel(buttonId, panelId, closeId) {
    const button = document.getElementById(buttonId);
    const panel = document.getElementById(panelId);
    const close = document.getElementById(closeId);

    if (!button || !panel || !close) return;

    button.addEventListener("click", () => {
      panel.classList.add("activo");      
      button.style.display = "none"
      if (Arrow) Arrow.style.display = "none";
      panel.scrollTop = 0;
    });

    panel.addEventListener("scroll", () => {
      if (panel.scrollTop + panel.clientHeight >= panel.scrollHeight) {
        panel.classList.add("mostrar-close");
      }
    });

    close.addEventListener("click", () => {
      panel.classList.remove("activo", "mostrar-close");
      setTimeout(() => {
        button.style.display = "block";
        if (Arrow) Arrow.style.display = "block";
      }, 700);
    });
  }

  // Configura los 3 proyectos
  setupPanel("DungeonButton", "DungeonPanel", "Close");
  setupPanel("FishiLifeButton", "FishingPanel", "CloseFishing");
  setupPanel("MagicAlchemistButton", "MagicPanel", "CloseMagic");
}