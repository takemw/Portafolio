function initProjectPanels() {
  const DungeonButton = document.getElementById("DungeonButton");
  const DungeonPanel = document.getElementById("DungeonPanel");
  const Close = document.getElementById("Close");
  const Arrow = document.getElementById("Arrow");

  DungeonButton?.addEventListener("click", () => {
    DungeonPanel.classList.add("activo");
    DungeonButton.style.display = "none";
    Arrow.style.display = "none"; 
    DungeonPanel.scrollTop = 0;
  });

  DungeonPanel?.addEventListener("scroll", () => {
    if (DungeonPanel.scrollTop + DungeonPanel.clientHeight >= DungeonPanel.scrollHeight) {
      DungeonPanel.classList.add("mostrar-close");
    }
  });

  Close?.addEventListener("click", () => {
    DungeonPanel.classList.remove("activo", "mostrar-close");
    setTimeout(() => {
      DungeonButton.style.display = "block";
      Arrow.style.display = "block";
    }, 700);
  });

  const FishiLifeButton = document.getElementById("FishiLifeButton");
  const FishingPanel = document.getElementById("FishingPanel");
  const CloseFishing = document.getElementById("CloseFishing");

  FishiLifeButton?.addEventListener("click", () => {
    FishingPanel.classList.add("activo");
    FishiLifeButton.style.display = "none";
    Arrow.style.display = "none"; 
    FishingPanel.scrollTop = 0;
  });

  FishingPanel?.addEventListener("scroll", () => {
    if (FishingPanel.scrollTop + FishingPanel.clientHeight >= FishingPanel.scrollHeight) {
      FishingPanel.classList.add("mostrar-close");
    }
  });

  CloseFishing?.addEventListener("click", () => {
    FishingPanel.classList.remove("activo", "mostrar-close");
    setTimeout(() => {
      FishiLifeButton.style.display = "block";
      Arrow.style.display = "block"; 
    }, 700);
  });
}