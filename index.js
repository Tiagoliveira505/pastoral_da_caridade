// ================= index.js =================

// ================= MENU MOBILE =================

const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

if (toggle && menu) {
  toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
}


// ================= ANIMAÇÃO MENU =================

const items = document.querySelectorAll(".menu-item");

items.forEach(item => {

  const text = item.querySelector("a");
  let timeout;

  const createPerson = () => {

    const svg = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );

    svg.setAttribute("viewBox", "0 0 50 100");
    svg.classList.add("person");

    svg.innerHTML = `
      <circle cx="25" cy="20" r="10" />
      <rect x="20" y="30" width="10" height="30" rx="5" />
      <line class="arm arm-left" x1="25" y1="35" x2="5" y2="50" />
      <line class="arm arm-right" x1="25" y1="35" x2="45" y2="50" />
    `;

    return svg;
  };


  const left = createPerson();
  left.classList.add("left");

  const right = createPerson();
  right.classList.add("right");

  item.appendChild(left);
  item.appendChild(right);


  item.addEventListener("mouseenter", () => {

    clearTimeout(timeout);

    left.style.opacity = "1";
    right.style.opacity = "1";

    left.style.transform = "translateX(15px)";
    right.style.transform = "translateX(-15px)";

    timeout = setTimeout(() => {

      item.classList.add("active");

      left.style.transform = "translateX(15px) translateY(-8px)";
      right.style.transform = "translateX(-15px) translateY(-8px)";
      text.style.transform = "translateY(-8px)";

    }, 120);

  });


  item.addEventListener("mouseleave", () => {

    clearTimeout(timeout);

    left.style.opacity = "0";
    right.style.opacity = "0";

    item.classList.remove("active");

    left.style.transform = "translateX(0) translateY(0)";
    right.style.transform = "translateX(0) translateY(0)";
    text.style.transform = "translateY(0)";

  });

});


// ================= TYPEWRITER =================

document.addEventListener("DOMContentLoaded", () => {

  const el = document.getElementById("typewriter");

  if (!el) return;

  const phrases = ["Solidariedade", "Fé", "Compaixão"];

  let i = 0;
  let j = 0;
  let currentPhrase = [];
  let isDeleting = false;

  function loop() {

    const fullPhrase = phrases[i % phrases.length];

    if (isDeleting) {
      currentPhrase.pop();
    } else {
      currentPhrase.push(fullPhrase[j]);
      j++;
    }

    el.innerHTML = currentPhrase.join("");

    let typeSpeed = 150;

    if (!isDeleting && j === fullPhrase.length) {

      typeSpeed = 2000;
      isDeleting = true;

    } else if (isDeleting && currentPhrase.length === 0) {

      isDeleting = false;
      i++;
      j = 0;
      typeSpeed = 500;

    } else if (isDeleting) {

      typeSpeed = 60;
    }

    setTimeout(loop, typeSpeed);
  }

  loop();
});