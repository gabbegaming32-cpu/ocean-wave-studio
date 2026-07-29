const discordUrl = "https://discord.gg/fBs5amQQUR";

const services = [
  {
    index: "01",
    title: "Roblox Games",
    text:
      "We build complete Roblox experiences with clean UI, readable systems, and worlds that feel made with care."
  },
  {
    index: "02",
    title: "Sealcoating Simulator",
    text:
      "Our first project focuses on realistic asphalt jobs, tool progression, satisfying upgrades, and polished job sites."
  },
  {
    index: "03",
    title: "Realistic Worlds",
    text:
      "Lighting, materials, map scale, props, vehicles, and atmosphere matter because the game should look worth playing."
  },
  {
    index: "04",
    title: "Gameplay Systems",
    text:
      "Progression, equipment, rewards, and feedback are designed so each session feels smooth instead of random."
  },
  {
    index: "05",
    title: "Sneakpeeks",
    text:
      "We share development previews, early looks, and progress updates with the community as the game grows."
  },
  {
    index: "06",
    title: "Long-Term Updates",
    text:
      "Ocean Wave Studio is built around improving games over time with feedback, polish, testing, and new content."
  }
];

const updates = [
  {
    label: "Studio",
    title: "Ocean Wave Studio",
    text:
      "A Roblox game studio focused on realistic, good-looking experiences with clean systems and strong visual polish."
  },
  {
    label: "Game",
    title: "Sealcoating Simulator",
    text:
      "Transform rough lots into clean blacktop, upgrade equipment, and build a sealcoating business through detailed jobs."
  },
  {
    label: "Community",
    title: "Discord sneakpeeks",
    text:
      "Follow development, testing news, screenshots, and future game updates through the Ocean Wave Studio Discord."
  }
];

const process = [
  ["01", "Build", "Shape the core gameplay loop, tools, maps, and first playable systems."],
  ["02", "Polish", "Improve visuals, UI, lighting, performance, and the feeling of each action."],
  ["03", "Test", "Use feedback to find what feels unclear, slow, boring, or unfinished."],
  ["04", "Update", "Keep improving the game with new content, fixes, previews, and community ideas."]
];

const app = document.getElementById("app");

function serviceCard(item) {
  return `
    <article class="service-card section-reveal">
      <span class="service-index">${item.index}</span>
      <h3>${item.title}</h3>
      <p>${item.text}</p>
    </article>
  `;
}

function updateCard(item) {
  return `
    <article class="price-card section-reveal">
      <p class="price-label">${item.label}</p>
      <h3>${item.title}</h3>
      <p>${item.text}</p>
      <a class="mini-link" href="${discordUrl}" target="_blank" rel="noreferrer">View Discord</a>
    </article>
  `;
}

function processStep([number, title, text]) {
  return `
    <article class="timeline-step section-reveal">
      <span>${number}</span>
      <h3>${title}</h3>
      <p>${text}</p>
    </article>
  `;
}

app.innerHTML = `
  <header class="site-header" data-header>
    <a class="brand" href="#top" aria-label="Ocean Wave Studio home">
      <img class="brand-logo" src="/assets/ocean-wave-logo.png" alt="" aria-hidden="true">
      <span>Ocean Wave Studio</span>
    </a>
    <nav class="nav" data-nav>
      <a href="#services">Studio</a>
      <a href="#games">Games</a>
      <a href="#sneakpeeks">Sneakpeeks</a>
      <a href="#updates">Updates</a>
      <a href="#process">Process</a>
      <a href="#contact">Discord</a>
    </nav>
    <a class="header-cta" href="${discordUrl}" target="_blank" rel="noreferrer">Join Discord</a>
    <button class="menu-toggle" type="button" aria-label="Open menu" data-menu>
      <span></span>
      <span></span>
    </button>
  </header>

  <main id="top">
    <section class="hero section-reveal">
      <div class="hero-media" aria-hidden="true"></div>
      <div class="hero-shade" aria-hidden="true"></div>
      <div class="hero-content">
        <h1>Realistic Roblox games that look premium.</h1>
        <p class="hero-copy">
          Ocean Wave Studio builds good-looking Roblox experiences with polished
          systems, detailed worlds, satisfying progression, and a community that
          sees the work as it grows.
        </p>
        <div class="hero-actions">
          <a class="button primary" href="#games">View Games</a>
          <a class="button secondary" href="${discordUrl}" target="_blank" rel="noreferrer">Join Discord</a>
        </div>
      </div>
    </section>

    <section class="stats section-reveal" aria-label="Studio highlights">
      <div>
        <strong>1</strong>
        <span>game in development</span>
      </div>
      <div>
        <strong>Real</strong>
        <span>gameplay direction</span>
      </div>
      <div>
        <strong>Clean</strong>
        <span>visual polish</span>
      </div>
      <div>
        <strong>Discord</strong>
        <span>first sneakpeeks</span>
      </div>
    </section>

    <section class="intro section-reveal">
      <p class="section-kicker">Built for Roblox players</p>
      <h2>One studio focused on sharp, memorable Roblox worlds.</h2>
      <p>
        We care about the details players notice: lighting, UI, tools, maps,
        pacing, progression, and the feeling of finishing a job cleanly. Ocean
        Wave Studio is starting with Sealcoating Simulator and growing from there.
      </p>
    </section>

    <section class="services" id="services">
      <div class="section-head section-reveal">
        <p class="section-kicker">Studio</p>
        <h2>Roblox development with a premium finish.</h2>
      </div>
      <div class="service-grid">
        ${services.map(serviceCard).join("")}
      </div>
    </section>

    <section class="feature section-reveal" id="games">
      <div class="feature-copy">
        <p class="section-kicker">The game board</p>
        <h2>Sealcoating Simulator is the first Ocean Wave project.</h2>
        <p>
          Take realistic parking-lot jobs, use sealcoating tools, upgrade your
          setup, and turn rough asphalt into clean blacktop. The goal is a game
          that looks good and feels satisfying every time you complete a job.
        </p>
      </div>
      <div class="game-board" aria-label="Sealcoating Simulator preview">
        <img src="/assets/sealcoating-simulator.png" alt="Sealcoating Simulator artwork">
      </div>
    </section>

    <section class="feature board-section section-reveal" id="sneakpeeks">
      <div class="feature-copy">
        <p class="section-kicker">Sneakpeeks</p>
        <h2>Development previews before release.</h2>
        <p>
          The Discord is where new screenshots, progress notes, testing news,
          and early ideas will show up first.
        </p>
      </div>
      <div class="work-board" aria-label="Ocean Wave Studio development board">
        <div class="board-row">
          <span>Game</span>
          <strong>Sealcoating Simulator</strong>
        </div>
        <div class="board-row">
          <span>Focus</span>
          <strong>Realistic asphalt jobs</strong>
        </div>
        <div class="board-row">
          <span>Status</span>
          <strong>In development</strong>
        </div>
        <div class="board-row">
          <span>Preview</span>
          <strong>Discord first</strong>
        </div>
      </div>
    </section>

    <section class="packages" id="updates">
      <div class="section-head section-reveal">
        <p class="section-kicker">Updates</p>
        <h2>What Ocean Wave Studio is building right now.</h2>
      </div>
      <div class="package-grid is-active">
        ${updates.map(updateCard).join("")}
      </div>
    </section>

    <section class="process" id="process">
      <div class="section-head section-reveal">
        <p class="section-kicker">How it works</p>
        <h2>Build, polish, test, and keep improving.</h2>
      </div>
      <div class="timeline">
        ${process.map(processStep).join("")}
      </div>
    </section>

    <section class="cta section-reveal" id="contact">
      <p class="section-kicker">Ready to follow development</p>
      <h2>Join the Discord and watch Ocean Wave Studio grow.</h2>
      <p>
        See sneakpeeks, updates, testing notes, and what is coming next for
        Sealcoating Simulator.
      </p>
      <div class="contact-actions">
        <a class="button primary" href="${discordUrl}" target="_blank" rel="noreferrer">Join Discord</a>
        <a class="button secondary" href="#games">View Game</a>
      </div>
    </section>
  </main>

  <footer class="footer">
    <span>Ocean Wave Studio</span>
    <span>Copyright 2026 Ocean Wave Studio. All rights reserved.</span>
  </footer>
`;

const header = document.querySelector("[data-header]");
const menu = document.querySelector("[data-menu]");

menu.addEventListener("click", () => {
  header.classList.toggle("nav-open");
});

document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", () => header.classList.remove("nav-open"));
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("is-visible");
    });
  },
  { threshold: 0.14 }
);

document.querySelectorAll(".section-reveal").forEach((node) => observer.observe(node));
