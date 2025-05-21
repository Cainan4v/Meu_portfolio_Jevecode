function toggleSidebar(show) {
  const sidebar = document.getElementById("sidebar");
  const closeBtn = document.getElementById("Closesidebar");

  const isVisible = sidebar.style.right === "0px";

  if (show || (!show && isVisible)) {
    sidebar.style.right = show ? "0px" : "-250px";
    closeBtn.style.display = show ? "flex" : "none";
  }
}

function scrollToSection(id) {
  const target = document.getElementById(id);
  if (!target) return;

  const offset = 60;
  const topPos = target.offsetTop - offset;

  window.scrollTo({
    top: topPos,
    behavior: "smooth"
  });

  toggleSidebar(false); // Fecha a sidebar após rolar
}

function ChamarMenu() {
  const sidebar = document.getElementById("sidebar");
  const isVisible = sidebar.style.right === "0px";
  toggleSidebar(!isVisible); // Alterna visibilidade
}