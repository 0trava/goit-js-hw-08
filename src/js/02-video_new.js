
// Додаємо до проекту бібліотеку @vimeo/player та lodash.throttle як залежність проекту через npm.
// $ npm i --save lodash.throttle 
// $ npm install @vimeo/player
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

// Починаємо відстежувати плеєр
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

// Відстежування події timeupdate - оновлення часу відтворення
// Збереження часу відтворення у локальне сховище videoplayer-current-time
// Час відтворення оновлюється у сховищі не частіше, ніж раз на секунду
player.on('timeupdate', throttle(e => {
  localStorage.setItem('videoplayer-current-time', e.seconds)
}, 500)); 

// Відновлення відтворення зі збереженої позиції.
// Якщо пустий localStorage - getItem повертає null. Засетиться 0.
player.setCurrentTime(localStorage.getItem('videoplayer-current-time') || 0)
console.log(`Ви зупинились на перегляді ${Math. round(localStorage.getItem('videoplayer-current-time'))} секунди фільму`);



