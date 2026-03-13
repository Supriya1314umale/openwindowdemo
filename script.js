const toggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

toggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Reveal Animation
function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach((el) => {
    const windowHeight = window.innerHeight;
    const top = el.getBoundingClientRect().top;
    const visiblePoint = 100;

    if (top < windowHeight - visiblePoint) {
      el.classList.add("active");
      startCounter();
    }
  });
}

window.addEventListener("scroll", revealOnScroll);


// Counter Animation
function startCounter() {
  const counters = document.querySelectorAll(".counter");

  counters.forEach(counter => {
    if (counter.classList.contains("counted")) return;

    counter.classList.add("counted");

    const target = +counter.getAttribute("data-target");
    let count = 0;
    const speed = target / 200;

    const updateCount = () => {
      count += speed;

      if (count < target) {
        counter.innerText = Math.floor(count).toLocaleString();
        requestAnimationFrame(updateCount);
      } else {
        counter.innerText = target.toLocaleString();
      }
    };

    updateCount();
  });
}

// Scroll Reveal Animation
function revealOnScroll() {
  const elements = document.querySelectorAll(".reveal");

  elements.forEach(el => {
    const position = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (position < windowHeight - 100) {
      el.classList.add("active");
      startCounter();
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);


// Counter Animation
function startCounter() {
  const counters = document.querySelectorAll(".counter");

  counters.forEach(counter => {
    if (counter.classList.contains("counted")) return;

    counter.classList.add("counted");

    const target = +counter.getAttribute("data-target");
    let count = 0;
    const increment = target / 180;

    function update() {
      count += increment;
      if (count < target) {
        counter.innerText = Math.floor(count).toLocaleString();
        requestAnimationFrame(update);
      } else {
        counter.innerText = target.toLocaleString();
      }
    }

    update();
  });
}


const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
  const btn = item.querySelector(".faq-question");

  btn.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});


/*FAQ*/

const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach(item => {
  const btn = item.querySelector(".accordion-question");

  btn.addEventListener("click", () => {

    // Close other items (optional but professional)
    accordionItems.forEach(otherItem => {
      if (otherItem !== item) {
        otherItem.classList.remove("active");
      }
    });

    // Toggle current item
    item.classList.toggle("active");
  });
});

// more questions

revealOnScroll();

function openPage(page) {
  window.location.href = page;
}

// js for how to work section


/* Gift container fade */

//  document.addEventListener("DOMContentLoaded", function () {

//       const section = document.querySelector(".gift-section");
//       const canvas = document.getElementById("giftScratchCanvas");
//       if (!section || !canvas) return;

//       const ctx = canvas.getContext("2d");

//       function resizeCanvas() {
//         // Important: set actual canvas drawing size
//         canvas.width = section.offsetWidth;
//         canvas.height = section.offsetHeight;

//         // Fill scratch surface
//         ctx.globalCompositeOperation = "source-over";
//         ctx.fillStyle = "#996767"; // overlay color
//         ctx.fillRect(0, 0, canvas.width, canvas.height);
//       }

//       resizeCanvas();
//       window.addEventListener("resize", resizeCanvas);

//       let isDrawing = false;
//       let scratchCount = 0;

//       function getPos(e) {
//         const rect = canvas.getBoundingClientRect();
//         const clientX = e.touches ? e.touches[0].clientX : e.clientX;
//         const clientY = e.touches ? e.touches[0].clientY : e.clientY;
//         return {
//           x: clientX - rect.left,
//           y: clientY - rect.top
//         };
//       }

//       function scratch(e) {
//         if (!isDrawing) return;

//         const pos = getPos(e);
//         ctx.globalCompositeOperation = "destination-out";
//         ctx.beginPath();
//         ctx.arc(pos.x, pos.y, 40, 0, Math.PI * 2);
//         ctx.fill();

//         scratchCount++;
//         if (scratchCount > 150) {
//           section.classList.add("revealed");
//         }
//       }

//       // Mouse events
//       canvas.addEventListener("mousedown", () => isDrawing = true);
//       canvas.addEventListener("mouseup", () => isDrawing = false);
//       canvas.addEventListener("mouseleave", () => isDrawing = false);
//       canvas.addEventListener("mousemove", scratch);

//       // Touch events for mobile
//       canvas.addEventListener("touchstart", () => isDrawing = true);
//       canvas.addEventListener("touchend", () => isDrawing = false);
//       canvas.addEventListener("touchmove", scratch);
//     });


 document.addEventListener("DOMContentLoaded", function () {
    const section = document.querySelector(".gift-section");
    const canvas = document.getElementById("giftScratchCanvas");
    if (!section || !canvas) return;

    const ctx = canvas.getContext("2d");

    function resizeCanvas() {
      canvas.width = section.offsetWidth;
      canvas.height = section.offsetHeight;

      ctx.globalCompositeOperation = "source-over";
      ctx.fillStyle = "#996767";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    let isDrawing = false;
    let scratchCount = 0;

    function getPos(e) {
      e.preventDefault();
      const rect = canvas.getBoundingClientRect();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      return { x: clientX - rect.left, y: clientY - rect.top };
    }

    function scratch(e) {
      if (!isDrawing) return;
      const pos = getPos(e);
      ctx.globalCompositeOperation = "destination-out";
      ctx.beginPath();
      ctx.arc(pos.x, pos.y, 40, 0, Math.PI * 2);
      ctx.fill();

      scratchCount++;
      if (scratchCount > 150) {
        section.classList.add("revealed");
      }
    }

    // Mouse events
    canvas.addEventListener("mousedown", () => isDrawing = true);
    canvas.addEventListener("mouseup", () => isDrawing = false);
    canvas.addEventListener("mouseleave", () => isDrawing = false);
    canvas.addEventListener("mousemove", scratch);

    // Touch events
    canvas.addEventListener("touchstart", (e) => { e.preventDefault(); isDrawing = true; });
    canvas.addEventListener("touchend", (e) => { e.preventDefault(); isDrawing = false; });
    canvas.addEventListener("touchmove", scratch);
  });


    // doors birds 

    document.querySelectorAll('.service-card').forEach(card => {
    const birds = card.querySelectorAll('.bird');
    birds.forEach((bird, index) => {
      const x = (Math.random()*180 + 50) * (Math.random() < 0.5 ? -1 : 1);
      const y = (Math.random()*180 + 50) * -1;
      bird.style.setProperty('--x', x + 'px');
      bird.style.setProperty('--y', y + 'px');
      bird.style.animationDelay = (index*0.5) + 's';
    });
  });

  // speed of video

  document.querySelectorAll('.service-video').forEach(video => {
  video.playbackRate = 0.4; // slow down all videos to half speed
});


// gift box

 const giftTrigger = document.querySelector(".gift-box-trigger");
  const scratchOverlay = document.querySelector(".scratch-overlay");

  giftTrigger.addEventListener("click", () => {
    scratchOverlay.classList.remove("hidden");
    giftTrigger.style.display = "none";
  });



  // const giftCover = document.querySelector(".gift-cover");
  // const scratchOverlay = document.querySelector(".scratch-overlay");

  // giftCover.addEventListener("click", () => {
  //   giftCover.style.display = "none";   // remove gift image
  //   scratchOverlay.classList.remove("hidden"); // show scratch card
  // });
  

  // how to work section

  var swiper = new Swiper(".howSwiper", {

effect: "coverflow",
grabCursor: true,
centeredSlides: true,
slidesPerView: "auto",

coverflowEffect: {
rotate: 15,
stretch: 0,
depth: 200,
modifier: 1,
slideShadows: false
},

loop: true,

autoplay: {
delay: 3500,
disableOnInteraction: false
},

pagination: {
el: ".swiper-pagination",
clickable: true
}

});