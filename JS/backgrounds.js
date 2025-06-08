function initBackgroundVideos() {
  const videoList = ["Videos/45.mp4", "Videos/A.PNG","Videos/15.mp4" ];
  let currentIndex = 0;
  let isTransitioning = false;

  const videoA = document.getElementById("VideoA");
  const videoB = document.getElementById("VideoB");
  const imageElement = document.getElementById("imageElement");
  const ArrowRight = document.getElementById("Arrow");

  function isVideo(file) {
    return file.toLowerCase().endsWith(".mp4");
  }

  function updateButtons(index) {
    const dungeonBtn = document.getElementById("DungeonButton");
    const fishingBtn = document.getElementById("FishiLifeButton");
    if (!dungeonBtn || !fishingBtn) return;

    dungeonBtn.style.display = "none";
    fishingBtn.style.display = "none";

    if (index === 0) dungeonBtn.style.display = "block";
    else if (index === 1) fishingBtn.style.display = "block";
  }

  function updateMedia(index) {
    const src = videoList[index];
    // Oculta todo
    videoA.style.display = "none";
    videoB.style.display = "none";
    imageElement.style.display = "none";

    if (isVideo(src)) {
      // Mostrar video
      videoA.src = src;
      videoA.load();
      videoA.play();
      videoA.style.display = "block";
      videoB.pause();
      imageElement.style.display = "none";
    } else {
      // Mostrar imagen
      imageElement.src = src;
      imageElement.style.display = "block";
      videoA.pause();
      videoB.pause();
    }

    updateButtons(index);
  }

  function switchVideo(direction) {
    if (isTransitioning) return;
    isTransitioning = true;

    currentIndex = direction === "next"
      ? (currentIndex + 1) % videoList.length
      : (currentIndex - 1 + videoList.length) % videoList.length;

    updateMedia(currentIndex);
    isTransitioning = false;
  }

  updateMedia(currentIndex);
  ArrowRight?.addEventListener("click", () => switchVideo("next"));
}

window.onload = () => {
  initBackgroundVideos();
};