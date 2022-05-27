import throttle from 'lodash.throttle';
//import Player from '@vimeo/player';
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

let timeCounter = localStorage.getItem('videoplayer-current-time');
player
  .setCurrentTime(timeCounter)
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;
      default:
        break;
    }
  });

player.on('timeupdate', throttle(onPlay, 1000));
function onPlay(event) {
  localStorage.setItem('videoplayer-current-time', event.seconds);
}
// player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
