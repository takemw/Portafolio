function loadHTML(url, containerId, callback) {
  fetch(url)
    .then(res => res.text())
    .then(html => {
      document.getElementById(containerId).innerHTML = html;
      callback();
    });
};

window.addEventListener("DOMContentLoaded", () => {
  // Cargar el fondo
  loadHTML("Html/Background.html", "background-container", () => {
  const script = document.createElement("script");
  script.src = "JS/backgrounds.js";
  script.onload = () => {
    initBackgroundVideos();
  };
  document.body.appendChild(script);
});

  // Cargar los paneles (si tienes otro HTML para ellos)
  loadHTML("Html/panels.html", "panels-container", () => {
    const script = document.createElement("script");
    script.src = "JS/panels.js";
    script.onload = () => {
    initProjectPanels();
    };
    document.body.appendChild(script);
  });

  // Mostrar u ocultar el panel flotante
  const boton = document.getElementById('OptionsButton');
  const panel = document.getElementById('Panel');
  boton?.addEventListener('click', () => {
  panel.classList.toggle('activo');
  });
});