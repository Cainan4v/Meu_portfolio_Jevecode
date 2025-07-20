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


const words = ["Modernas|", "Responsivas|", "Funcionais|"];
const wordElement = document.querySelector('.word');
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const currentWord = words[wordIndex];
  const displayed = currentWord.substring(0, charIndex);

  wordElement.textContent = displayed;

  if (isDeleting) {
    charIndex--;
  } else {
    charIndex++;
  }

  let typeSpeed = isDeleting ? 60 : 150;

  if (!isDeleting && charIndex === currentWord.length) {
    typeSpeed = 1500; // tempo de pausa com a palavra completa
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    typeSpeed = 500; // pausa antes de começar nova palavra
  }

  setTimeout(type, typeSpeed);
}

// iniciar a animação
type();

function darkMode() {
  const body = document.body;
  const btnImage = document.getElementById("bdl");
  const btndark = document.getElementById('btn-dark');

  body.classList.toggle('dark-theme');
  btndark.classList.remove('btn-anim');
  void btndark.offsetWidth;
  btndark.classList.add('btn-anim')

  function timeD() {
     if (body.classList.contains('dark-theme')) {
     btnImage.src = 'img/moon.png';
   } else {
     btnImage.src = 'img/sol.png';
   }
  }
  tempo = setTimeout( timeD, 200);

  const itemImg = document.querySelectorAll('.item');

  itemImg.forEach(img => {
    const darkSrc = img.getAttribute('data-dark');
    const lightSrc = img.getAttribute('data-light');
    img.src = body.classList.contains('dark-theme') ? darkSrc : lightSrc;
  });

  
}
