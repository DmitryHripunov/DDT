const videoPlay = document.querySelector('.video-controller__btn');
const video = document.querySelector('.video');

videoPlay.addEventListener('click', () => {
  video.play();
  video.setAttribute('controls', true)
  videoPlay.style.display = 'none';
});