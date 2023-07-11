const menuCross = document.querySelector(".video__content-video-close");
const menuVideo = document.querySelector(".video__content-video");

menuCross.addEventListener("click", () => {
  menuVideo.classList.toggle("video__content-video--close");
});
