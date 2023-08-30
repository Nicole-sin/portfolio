
/* -----------works page--------------- */
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      console.log(entry)
      if(entry.isIntersecting){
          entry.target.classList.add('show');
      }
      else{
          entry.target.classList.remove('show');
      }
  });
});

const workElements = document.querySelectorAll('.work');
workElements.forEach((el) => observer.observe(el));


/* -----------home page--------------- */
const track = document.getElementById("image-track");

const handleOnScroll = e => {

  const maxDelta = window.innerHeight / 2;
  
  const percentage = (-e.deltaY / maxDelta) * 50,
        nextPercentageUnconstrained = (parseFloat(track.dataset.percentage) || 0) + percentage,
        nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

  track.dataset.percentage = nextPercentage;
  
  track.animate({
    transform: `translate(${nextPercentage}%, -50%)`
  }, { duration: 1200, fill: "forwards" });

  for(const image of track.getElementsByClassName("image")) {
    image.animate({
      objectPosition: `${100 + nextPercentage}% center`
    }, { duration: 1200, fill: "forwards" });
  }
  e.preventDefault();
}

window.addEventListener('wheel', handleOnScroll, { passive: false });
