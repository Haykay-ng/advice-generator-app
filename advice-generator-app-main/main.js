document.addEventListener('DOMContentLoaded', () => {
  advicesFetch();
});

function advicesFetch() {
fetch('https://api.adviceslip.com/advice')
  .then(response => response.json())
  .then(data => {
    const advice = data.slip;
    const adviceHtml = `
      <div class="header">ADVICE <span>#${advice.id}</span></div>
      <div class="main_content">${advice.advice}</div>
      <div class='mid-container'>
      <div class='divide-img-desktop'>
        <img class='divide-img' src="./advice-generator-app-main/images/pattern-divider-desktop.svg" alt="" />
      </div>
      <div class="divide-img-mobile">
        <img class='divide-imge' src="./advice-generator-app-main/images/pattern-divider-mobile.svg" alt="" />
      </div>
      <button class="dice-button js-dice-button">
        <img class="dice-img" src="/advice-generator-app-main/images/icon-dice.svg" alt="Dice Icon" />
      </button>
      </div>
    `;
    document.querySelector('.js-activecard').innerHTML = adviceHtml;
    document.querySelector('.js-dice-button').addEventListener('click', advicesFetch);
  })
  .catch(error => console.error('Error:', error));
}
