const progress = document.querySelector(".article-progress");
// console.log(progress);
// console.log(document.querySelectorAll("body"));

document.addEventListener("scroll", () => {
  const totalScroll = document.documentElement.offsetHeight;
  //   console.log(totalScroll);
  const scrolledPosition = document.documentElement.scrollTop;
  //   console.log(scrolledPosition);
  const finalScroll = totalScroll - window.innerHeight - 2;
  //   console.log(window.innerHeight);
  const scrollPercent = scrolledPosition / finalScroll;

  progress.style.transform = `scaleX(${scrollPercent})`;
});
