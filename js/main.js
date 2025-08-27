// COMMON JS
function getId(id) {
  return document.getElementById(id);
}

let cards = document.querySelectorAll('.card');

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

// COPY FUNCTIONALITY / DELEGATE

let countCopy = 0;

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

let count = 0;
// CALL FUNCTIONALITY / DELEGATE
for (let card of cards) {
  card.addEventListener('click', e => {
    let coinCountId = getId('coin-count');
    let coinCount = parseInt(coinCountId.innerText);
    if (e.target.closest('.card-call-btn')) {
      if (coinCount < 20) {
        alert(
          '❌ You dont have enough coins, You need at least 20 coins to call.'
        );
        return;
      } else {
        // DISCRIESE COINS
        let updateCoinCount = coinCount - 20;
        coinCountId.innerText = updateCoinCount;

        // CALLING ALERT
        let cardTitle = card.querySelector('.card-title').innerText;
        let number = card.querySelector('.number-cls').innerText;
        alert(`📞 calling ${cardTitle} ${number}...`);

        // CURRENT TIME
        let newDate = new Date();
        let updateDate = newDate.toLocaleTimeString();

        // LIST DYNAMIC SET
        let callHistoryList = getId('call-history-list');
        let callHistory = document.createElement('div');
        callHistory.classList.add(
          'call-history',
          'p-4',
          'bg-[#FAFAFA]',
          'hover:shadow-md',
          'transition-all',
          'flex',
          'justify-between',
          'items-center',
          'rounded-lg',
          'gap-3',
          'md:gap-0'
        );
        callHistory.innerHTML = `
            <div>
               <h3 class="text-lg inter font-semibold text-[#111111]">${cardTitle}</h3>
               <p class="text-[#5C5C5C] font-normal text-lg hind">${number}</p>
            </div>
            <div>
               <p class="text-[#111111] font-normal text-lg hind">${updateDate}</p>
            </div>
         `;
        callHistoryList.appendChild(callHistory);

        let noHistory = getId('no-history');
        noHistory.style.display = 'none';

        count += 1;
      }
    }
  });
}

// CLEAR LIST
let clearBtn = getId('clear-btn');

clearBtn.addEventListener('click', () => {
  let callHistoryList = getId('call-history-list');
  let callHistory = callHistoryList.querySelector('.call-history');
  if (callHistory !== null) {
    let clearAlert = confirm('⚠️ Are you sure ?');
    if (clearAlert) {
      console.log(callHistoryList);
      callHistoryList.replaceChildren();
      let noHistory = getId('no-history');
      noHistory.style.display = 'block';
    }
  }
});
