////Sticky Navigation////
const firstSection = document.querySelector(".stick");

const obs = new IntersectionObserver(function(entries){
  const ent = entries[0];
  console.log(ent);

  if(ent.isIntersecting === false) {
    document.querySelector(".header").classList.add("sticky");
  } else {
    document.querySelector(".header").classList.remove("sticky");
  }
},
{
  root: null,
  threshold: 0,
});

obs.observe(firstSection);

///////Mobile Navigation////////
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function() {
  headerEl.classList.toggle("nav-open");
});
///////Footer Copyright Year-Set Current Year////
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;
