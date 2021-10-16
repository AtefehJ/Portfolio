////Sticky Navigation////
const firstSection = document.querySelector(".header");

const obs = new IntersectionObserver(function(entries){
  const ent = entries[0];
  console.log(ent);

  if(ent.isIntersecting === false) {
    document.querySelector(".navigation").classList.add("sticky");
  } else {
    document.querySelector(".navigation").classList.remove("sticky");
  }
},
{
  root: null,
  threshold: 0,
});

obs.observe(firstSection);
