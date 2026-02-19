function loadLayout() {
  document.body.insertAdjacentHTML("afterbegin", `
    <header class="app-header">
      <h2>🎰 AureSpin</h2>
    </header>
  `);

  document.body.insertAdjacentHTML("beforeend", `
    <div class="bottom-nav">
      <a href="index.html">🏠 Home</a>
      <a href="play.html">🎰 Play</a>
      <a href="rewards.html">🎁 Rewards</a>
      <a href="profile.html">👤 Profile</a>
    </div>
  `);
}

document.addEventListener("DOMContentLoaded", loadLayout);
