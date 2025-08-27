// COMMON JS
function getId(id) {
  return document.getElementById(id);
}

// HEART ICON CLICK COUNT
let countHeart = 0;
let heartIcons = document.getElementsByClassName('heart-icon');
for (let heartIcon of heartIcons) {
  heartIcon.addEventListener('click', () => {
    countHeart += 1;
    let heartCount = getId('heart-count');
    heartCount.innerText = countHeart;
  });
}

// COPY / delegate
let countCopy = 0;

let cards = document.querySelectorAll('.card');

for (let card of cards) {
  card.addEventListener('click', e => {
    let copyNumber = card.querySelector('.number-cls').innerText;
    if (e.target.closest('.card-copy-btn')) {
      alert(`Number has been copied : ${copyNumber}`);
      countCopy += 1;
      let copyCount = getId('copy-count');
      copyCount.innerText = countCopy;

      navigator.clipboard.writeText(copyNumber);
    }
  });
}
