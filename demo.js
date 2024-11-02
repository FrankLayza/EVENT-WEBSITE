let show = document.getElementById("ham");
let nav = document.getElementById("nav-links");
let day = document.getElementById("days");
let hrs = document.getElementById("hrs");
let mins = document.getElementById("mins");
let secs = document.getElementById("secs");

show.addEventListener("click", () => {
  nav.classList.toggle("show");
});

let fade = document.querySelector(".fade");
let observe = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
});
observe.observe(fade);

let d = new Date();
days.innerHTML = d.getUTCDay();
hrs.innerHTML = d.getHours();
mins.innerHTML = d.getMinutes();
secs.innerHTML = d.getSeconds();

// window.addEventListener('scroll', () => {
//   const fades = document.querySelectorAll('.fade');
//   fades.forEach(fade => {
//     const fadeTop = fade.getBoundingClientRect().top;
//     if (fadeTop < window.innerHeight - 100) {
//       fade.classList.add('visible');
//     }
//   });
// });
