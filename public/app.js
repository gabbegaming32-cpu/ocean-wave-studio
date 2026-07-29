const discordUrl = "https://discord.gg/fBs5amQQUR";

const games = [
  {
    title: "Sealcoating Simulator",
    status: "In development",
    type: "Realistic work simulator",
    image: "/assets/sealcoating-simulator.png",
    summary:
      "A Roblox simulator built around clean asphalt prep, smooth sealcoating passes, satisfying upgrades, and realistic job-site flow.",
    details: ["Detailed lots", "Equipment progression", "Before-and-after results"]
  }
];

const sneakPeeks = [
  {
    title: "Parking Lot Jobs",
    text:
      "Early maps are focused on believable parking lots, driveways, and commercial spaces with a clear sense of scale."
  },
  {
    title: "Tool Feel",
    text:
      "We are tuning equipment so every pass feels smooth, readable, and rewarding instead of rushed or weightless."
  },
  {
    title: "Visual Polish",
    text:
      "Lighting, materials, water-dark asphalt, cones, vehicles, and job props are being built to make each area look sharp."
  }
];

const updates = [
  {
    date: "July 2026",
    title: "Ocean Wave Studio Rebrand",
    text:
      "The studio is now focused fully on Roblox games and long-term community-first experiences."
  },
  {
    date: "July 2026",
    title: "Sealcoating Simulator Announced",
    text:
      "Our first listed game is Sealcoating Simulator, a realistic Roblox job simulator with satisfying progression."
  },
  {
    date: "Coming Soon",
    title: "More Sneakpeeks",
    text:
      "Screens, development previews, and testing news will be shared through the Ocean Wave Studio Discord."
  }
];

const app = document.getElementById("app");

function icon(name) {
  const icons = {
    discord:
      '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 13.5c1.7 1.2 6.3 1.2 8 0"/><path d="M8.7 9.6h.1M15.2 9.6h.1"/><path d="M7.5 17.5c-1.6-.4-2.8-1-3.5-1.8.3-4.7 1.8-8 4.4-9.7 1.3.2 2.4.6 3.1 1.1h1c.8-.5 1.8-.9 3.1-1.1 2.6 1.7 4.1 5 4.4 9.7-.7.8-1.9 1.4-3.5 1.8l-.8-1.4c-2.3.7-5.1.7-7.4 0l-.8 1.4Z"/></svg>',
    arrow:
      '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg>',
    wave:
      '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 15c2.2 0 2.2-2 4.4-2s2.2 2 4.4 2 2.2-2 4.4-2 2.2 2 4.4 2"/><path d="M3 9c2.2 0 2.2-2 4.4-2s2.2 2 4.4 2 2.2-2 4.4-2 2.2 2 4.4 2"/></svg>',
    spark:
      '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="m12 2 1.7 6.3L20 10l-6.3 1.7L12 18l-1.7-6.3L4 10l6.3-1.7L12 2Z"/><path d="m19 15 .8 2.7L22 18.5l-2.2.8L19 22l-.8-2.7-2.2-.8 2.2-.8L19 15Z"/></svg>',
    clock:
      '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>'
  };
  return icons[name] || "";
}

function gameCard(game) {
  return `
    <article class="game-card reveal">
      <div class="game-art">
        <img src="${game.image}" alt="${game.title} artwork">
        <div class="game-badge">${game.status}</div>
      </div>
      <div class="game-body">
        <p class="eyebrow">${game.type}</p>
        <h3>${game.title}</h3>
        <p>${game.summary}</p>
        <div class="chips">
          ${game.details.map((detail) => `<span>${detail}</span>`).join("")}
        </div>
      </div>
    </article>
  `;
}

function peekCard(item) {
  return `
    <article class="info-card reveal">
      <div class="card-icon">${icon("spark")}</div>
      <h3>${item.title}</h3>
      <p>${item.text}</p>
    </article>
  `;
}

function updateItem(item) {
  return `
    <article class="update-item reveal">
      <div>
        <span>${item.date}</span>
        <h3>${item.title}</h3>
      </div>
      <p>${item.text}</p>
    </article>
  `;
}

app.innerHTML = `
  <header class="site-header">
    <a class="brand" href="#top" aria-label="Ocean Wave Studio home">
      <img src="/assets/ocean-wave-logo.png" alt="">
      <span>
        <b>Ocean Wave Studio</b>
        <small>Roblox Games</small>
      </span>
    </a>
    <nav class="nav-links" aria-label="Main navigation">
      <a href="#games">Games</a>
      <a href="#sneakpeeks">Sneakpeeks</a>
      <a href="#updates">Updates</a>
      <a href="#mission">Mission</a>
    </nav>
    <a class="discord-button" href="${discordUrl}" target="_blank" rel="noreferrer">
      ${icon("discord")}
      Discord
    </a>
  </header>

  <main id="top">
    <section class="hero" aria-labelledby="hero-title">
      <img class="hero-bg" src="/assets/ocean-wave-banner.png" alt="">
      <div class="hero-shade"></div>
      <div class="hero-content">
        <img class="hero-logo" src="/assets/ocean-wave-logo.png" alt="Ocean Wave Studio logo">
        <p class="eyebrow">Made in Roblox</p>
        <h1 id="hero-title">Ocean Wave Studio</h1>
        <p class="hero-copy">
          We create realistic, good-looking Roblox games with polished systems,
          memorable maps, and gameplay that feels smooth from the first click.
        </p>
        <div class="hero-actions">
          <a class="primary-action" href="#games">
            Games
            ${icon("arrow")}
          </a>
          <a class="secondary-action" href="${discordUrl}" target="_blank" rel="noreferrer">
            ${icon("discord")}
            Join Discord
          </a>
        </div>
      </div>
      <div class="hero-strip" aria-label="Studio focus">
        <span>Realistic gameplay</span>
        <span>Good-looking worlds</span>
        <span>Community focused</span>
        <span>Performance driven</span>
      </div>
    </section>

    <section class="section intro-section" id="mission">
      <div class="section-heading reveal">
        <p class="eyebrow">What We Strive For</p>
        <h2>Roblox games that look clean, feel real, and keep players coming back.</h2>
      </div>
      <div class="mission-grid">
        <article class="mission-item reveal">
          <span>${icon("wave")}</span>
          <h3>Realistic Feel</h3>
          <p>We build grounded systems, readable tools, and satisfying progress instead of random filler.</p>
        </article>
        <article class="mission-item reveal">
          <span>${icon("spark")}</span>
          <h3>Visual Quality</h3>
          <p>Lighting, materials, UI, and map details matter because the game should look worth playing.</p>
        </article>
        <article class="mission-item reveal">
          <span>${icon("clock")}</span>
          <h3>Long-Term Updates</h3>
          <p>We want each game to grow through feedback, better gameplay loops, and community ideas.</p>
        </article>
      </div>
    </section>

    <section class="section games-section" id="games">
      <div class="section-heading reveal">
        <p class="eyebrow">Games</p>
        <h2>Current Ocean Wave Studio projects.</h2>
      </div>
      <div class="games-grid">
        ${games.map(gameCard).join("")}
      </div>
    </section>

    <section class="section sneak-section" id="sneakpeeks">
      <div class="section-heading reveal">
        <p class="eyebrow">Sneakpeeks</p>
        <h2>Early looks at what we are shaping behind the scenes.</h2>
      </div>
      <div class="info-grid">
        ${sneakPeeks.map(peekCard).join("")}
      </div>
    </section>

    <section class="section updates-section" id="updates">
      <div class="section-heading reveal">
        <p class="eyebrow">Updates</p>
        <h2>Studio news and development notes.</h2>
      </div>
      <div class="updates-list">
        ${updates.map(updateItem).join("")}
      </div>
    </section>

    <section class="discord-section reveal">
      <div>
        <p class="eyebrow">Community</p>
        <h2>Follow development and get new sneakpeeks first.</h2>
      </div>
      <a class="primary-action" href="${discordUrl}" target="_blank" rel="noreferrer">
        ${icon("discord")}
        Join Ocean Wave Discord
      </a>
    </section>
  </main>

  <footer class="site-footer">
    <img src="/assets/ocean-wave-logo.png" alt="">
    <span>Ocean Wave Studio</span>
    <small>Building realistic Roblox games.</small>
  </footer>
`;

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("is-visible");
    });
  },
  { threshold: 0.18 }
);

document.querySelectorAll(".reveal").forEach((node) => observer.observe(node));
