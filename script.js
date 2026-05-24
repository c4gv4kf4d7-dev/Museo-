const GOFUNDME_URL = "https://www.gofundme.com/f/children-of-malawi-63cqk?attribution_id=sl:8d1cd865-19c2-4b9d-8ee7-491e37da54ad&lang=en_US&ts=1776781151&utm_campaign=man_sharesheet_dash&utm_content=amp20_t1&utm_medium=customer&utm_source=copy_link";
const ENTRANCE_URL = "./assets/stanze/0CAA7C64-B698-4268-9245-E323981EE76C.png";
const menuAreas = [
  {
    label: "Sala 1",
    title: "Tiyende Pamodzi",
    accent: "#d6a62d",
    accentText: "#c28a17",
    icon: `
      <svg viewBox="0 0 24 24" class="menu-icon-svg" aria-hidden="true">
        <circle cx="8" cy="8" r="2.2"></circle>
        <circle cx="16" cy="8" r="2.2"></circle>
        <path d="M4.5 17.5C5.5 14.7 7.2 13.2 9.5 13.2C11.8 13.2 13.5 14.7 14.5 17.5"></path>
        <path d="M9.8 17.5C10.4 15.1 11.8 13.8 14 13.8C16.2 13.8 17.9 15.2 19 17.5"></path>
      </svg>
    `,
    items: [
      { text: "Comunità", roomIndex: 0 },
      { text: "Non si vede, ma c'e", roomIndex: 1 },
      { text: "Cambia qualcosa", roomIndex: 2 }
    ]
  },
  {
    label: "Sala 2",
    title: "Istituto Saint John",
    accent: "#2e83cb",
    accentText: "#2d81c7",
    icon: `
      <svg viewBox="0 0 24 24" class="menu-icon-svg" aria-hidden="true">
        <path d="M5 6.5L12 4.8L19 6.5V17.8L12 16.2L5 17.8V6.5Z"></path>
        <path d="M12 5V16"></path>
      </svg>
    `,
    items: [
      { text: "Le ragazze", roomIndex: 3 },
      { text: "Le parole", roomIndex: 4 },
      { text: "Il futuro", roomIndex: 5 }
    ]
  },
  {
    label: "Sala 3",
    title: "Il Pozzo",
    accent: "#95ad29",
    accentText: "#89a019",
    icon: `
      <svg viewBox="0 0 24 24" class="menu-icon-svg" aria-hidden="true">
        <path d="M12 4.8C14.8 8.1 17 10.4 17 13.3C17 16 14.8 18.2 12 18.2C9.2 18.2 7 16 7 13.3C7 10.4 9.2 8.1 12 4.8Z"></path>
        <path d="M9.2 13.6C10 14.6 10.9 15.1 12 15.1C13.1 15.1 14 14.6 14.8 13.6"></path>
      </svg>
    `,
    items: [
      { text: "La pioggia", roomIndex: 6 },
      { text: "Grazie", roomIndex: 7 },
      { text: "Correre", roomIndex: 8 }
    ]
  }
];

const roomLayouts = {
  room1: {
    frames: [
      { x: 33.8, y: 35.4, w: 25.8, h: 16.1 },
      { x: 66.2, y: 35.4, w: 25.8, h: 16.1 }
    ],
    plaque: { x: 17.5, y: 76.8, w: 21 },
    prev: { x: 14, y: 16, w: 16 },
    action: { x: 50, y: 86.4 }
  },
  room2: {
    frames: [
      { x: 41.5, y: 36.3, w: 13, h: 23.2 },
      { x: 65.7, y: 36.8, w: 27.4, h: 16.5 }
    ],
    plaque: { x: 81.5, y: 74.8, w: 15.5 },
    prev: { x: 15, y: 16.5, w: 16 },
    action: { x: 50, y: 86.4 }
  },
  room3: {
    frames: [
      { x: 39.8, y: 36.8, w: 14.2, h: 23.8 },
      { x: 60.6, y: 36.8, w: 14.2, h: 23.8 }
    ],
    plaque: { x: 80.8, y: 74.6, w: 15.4 },
    prev: { x: 14.5, y: 16.5, w: 16 },
    action: { x: 50, y: 86.4 }
  },
  room4: {
    frames: [{ x: 34.4, y: 35.6, w: 39.4, h: 23.8 }],
    plaque: { x: 82.4, y: 73.2, w: 14.2 },
    prev: { x: 83, y: 17, w: 12 },
    action: { x: 50, y: 85.8 }
  },
  room5: {
    frames: [{ x: 59.8, y: 39.2, w: 35.2, h: 20.4 }],
    plaque: { x: 18.6, y: 74.2, w: 16.5 },
    prev: { x: 13, y: 16.4, w: 16 },
    action: { x: 50, y: 85.8 }
  },
  room6: {
    frames: [{ x: 49.8, y: 37.4, w: 30.2, h: 24.4 }],
    plaque: { x: 82.8, y: 72.8, w: 14.5 },
    prev: { x: 14, y: 16.2, w: 16 },
    action: { x: 50, y: 85.8 }
  },
  room7: {
    frames: [{ x: 49.8, y: 39.2, w: 38.8, h: 23.5 }],
    plaque: { x: 18.2, y: 74, w: 15.8 },
    prev: { x: 86, y: 16.8, w: 11 },
    action: { x: 50, y: 85.8 }
  },
  room8: {
    frames: [{ x: 49.6, y: 37.8, w: 39.8, h: 23.8 }],
    plaque: { x: 82.8, y: 72.8, w: 14.5 },
    prev: { x: 14, y: 16.6, w: 16 },
    action: { x: 50, y: 85.8 }
  },
  room9: {
    frames: [{ x: 50, y: 37.2, w: 41.8, h: 24.6 }],
    plaque: { x: 18.4, y: 73.8, w: 15.8 },
    prev: { x: 14, y: 16.3, w: 16 },
    action: { x: 50, y: 85.8 }
  }
};

const rooms = [
  {
    number: 1,
    backdrop: "./assets/museum/sala1.jpg",
    layout: roomLayouts.room1,
    title: "Comunità",
    text:
      "Essere una comunità vuol dire prendersi cura di chi non riesce a farcela da solo.\nIn Malawi, il progetto Tyiende Pamodzi ha scelto di non voltarsi dall'altra parte: volontari, famiglie e capi villaggio fanno ciascuno la propria parte.\nPerché la disabilità smette di essere invisibile solo quando qualcuno decide di vederla."
  },
  {
    number: 2,
    backdrop: "./assets/museum/sala2.jpg",
    layout: roomLayouts.room2,
    title: "Non si vede, ma c'è.",
    text:
      "Una stanza doppia, come doppio è stato il nostro sguardo: da una parte i volti, dall'altra la vita di ogni giorno che ci ha insegnato a restare."
  },
  {
    number: 3,
    backdrop: "./assets/museum/sala3.jpg",
    layout: roomLayouts.room3,
    title: "Cambia qualcosa.",
    text:
      "Le cornici gemelle raccontano una crescita condivisa. Ogni progetto è stato fatto di persone diverse, ma tenute insieme dallo stesso desiderio di futuro."
  },
  {
    number: 4,
    backdrop: "./assets/museum/sala4.jpg",
    layout: roomLayouts.room4,
    title: "Le ragazze.",
    text:
      "Una grande parete, un solo quadro, un tempo più lento. In Malawi abbiamo imparato che ascoltare davvero è già un modo di prendersi cura."
  },
  {
    number: 5,
    backdrop: "./assets/museum/sala5.jpg",
    layout: roomLayouts.room5,
    title: "Le parole.",
    text:
      "Le aperture laterali ricordano che il volontariato non si esaurisce in una sola scena. Ogni gesto apre sempre un passaggio verso qualcos'altro."
  },
  {
    number: 6,
    backdrop: "./assets/museum/sala6.jpg",
    layout: roomLayouts.room6,
    title: "Il futuro.",
    text:
      "In questa stanza la luce entra con decisione, come molti momenti vissuti sul campo. Anche nella fatica c'erano chiarezza, bellezza e gratitudine."
  },
  {
    number: 7,
    backdrop: "./assets/museum/sala7.jpg",
    layout: roomLayouts.room7,
    title: "La pioggia.",
    text:
      "Una sala essenziale, quasi silenziosa. È il ricordo di tutte le volte in cui non serviva fare molto, ma soltanto esserci con continuità."
  },
  {
    number: 8,
    backdrop: "./assets/museum/sala8.jpg",
    layout: roomLayouts.room8,
    title: "Grazie.",
    text:
      "Una grande immagine centrale per custodire il senso di questi tre anni. Non solo attività, ma un legame che continua a interrogarci e a chiamarci."
  },
  {
    number: 9,
    backdrop: "./assets/museum/sala9.jpg",
    layout: roomLayouts.room9,
    title: "Correre.",
    text:
      "Qui il racconto si apre al prossimo passo. La raccolta fondi nasce da questo: non chiudere il museo nel ricordo, ma trasformarlo in un nuovo anno di presenza.",
    donate: true
  }
];

const roomList = document.getElementById("roomList");
const museumApp = document.querySelector(".museum-app");
const menuScreen = document.getElementById("menuScreen");
const tourScreen = document.getElementById("tourScreen");
const galleryRoom = document.getElementById("galleryRoom");
const artworksContainer = document.getElementById("artworks");
const roomIndex = document.getElementById("roomIndex");
const roomTitle = document.getElementById("roomTitle");
const roomCopyBox = document.getElementById("roomCopyBox");
const roomCopyToggle = document.getElementById("roomCopyToggle");
const roomCopySummary = document.getElementById("roomCopySummary");
const roomCopyDetails = document.getElementById("roomCopyDetails");
const prevRoomButton = document.getElementById("prevRoomButton");
const nextRoomButton = document.getElementById("nextRoomButton");
const progressLabel = document.getElementById("progressLabel");
const progressValue = document.getElementById("progressValue");
const startTourButton = document.getElementById("startTourButton");
const backToMenuButton = document.getElementById("backToMenuButton");
const menuDonateButton = document.getElementById("menuDonateButton");
const travelOverlay = document.getElementById("travelOverlay");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxClose = document.getElementById("lightboxClose");
const lightboxOverlay = document.getElementById("lightboxOverlay");

let currentRoomIndex = 0;
let isTransitioning = false;

menuDonateButton.href = GOFUNDME_URL;
menuScreen.style.setProperty("--entrance-backdrop", `url("${ENTRANCE_URL}")`);

// ── Lightbox ──────────────────────────────────────────────────────────────────

function openLightbox(src, alt) {
  lightboxImage.src = src;
  lightboxImage.alt = alt || "";
  lightbox.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  lightbox.classList.add("hidden");
  lightboxImage.src = "";
  document.body.style.overflow = "";
}

lightboxClose.addEventListener("click", closeLightbox);
lightboxOverlay.addEventListener("click", closeLightbox);

artworksContainer.addEventListener("click", (e) => {
  const artwork = e.target.closest("[data-lightbox-src]");
  if (artwork) openLightbox(artwork.dataset.lightboxSrc, artwork.dataset.lightboxAlt);
});

// ── Swipe mobile ──────────────────────────────────────────────────────────────

let touchStartX = 0;
let touchStartY = 0;

galleryRoom.addEventListener("touchstart", (e) => {
  touchStartX = e.touches[0].clientX;
  touchStartY = e.touches[0].clientY;
}, { passive: true });

galleryRoom.addEventListener("touchend", (e) => {
  if (isTransitioning || !lightbox.classList.contains("hidden")) return;
  const dx = e.changedTouches[0].clientX - touchStartX;
  const dy = e.changedTouches[0].clientY - touchStartY;
  if (Math.abs(dx) < 52 || Math.abs(dy) > Math.abs(dx) * 0.85) return;
  if (dx < 0) {
    handleNextAction();
  } else {
    if (currentRoomIndex === 0) backToMenu();
    else performTransition(currentRoomIndex - 1);
  }
}, { passive: true });

// ── Keyboard navigation ───────────────────────────────────────────────────────

document.addEventListener("keydown", (e) => {
  if (!lightbox.classList.contains("hidden")) {
    if (e.key === "Escape") closeLightbox();
    return;
  }
  if (tourScreen.classList.contains("hidden")) return;
  if (e.key === "ArrowRight") handleNextAction();
  if (e.key === "ArrowLeft") {
    if (currentRoomIndex === 0) backToMenu();
    else performTransition(currentRoomIndex - 1);
  }
});

// ── Rendering ─────────────────────────────────────────────────────────────────

function buildArtworkMarkup(room) {
  return room.artworks
    .map((artwork, index) => {
      const frame = room.layout.frames[index];
      const style = `style="--art-x:${frame.x}%; --art-y:${frame.y}%; --art-w:${frame.w}%; --art-h:${frame.h}%"`;
      const hasPhoto = Boolean(artwork.src);

      return `
        <figure
          class="artwork${hasPhoto ? " artwork--has-photo" : ""}"
          ${style}
          ${hasPhoto ? `data-lightbox-src="${artwork.src}" data-lightbox-alt="${room.title} — ${artwork.label}"` : ""}
        >
          <div class="artwork__frame">
            ${hasPhoto
              ? `<img class="artwork__image" src="${artwork.src}" alt="${room.title} — ${artwork.label}" loading="lazy" />`
              : `<div class="artwork__empty"></div>`
            }
          </div>
        </figure>
      `;
    })
    .join("");
}

function updateProgress(index) {
  const roomNumber = index + 1;
  progressLabel.textContent = `Sala ${roomNumber} di ${rooms.length}`;
  progressValue.style.width = `${(roomNumber / rooms.length) * 100}%`;
}

function splitRoomText(text) {
  const normalized = text.trim();
  const sentenceMatch = normalized.match(/^(.+?[.!?])(?:\s|$)/s);

  if (!sentenceMatch) {
    return { summary: normalized, details: "" };
  }

  const summary = sentenceMatch[1].trim();
  const details = normalized.slice(summary.length).trim();
  return { summary, details };
}

function renderRoomList() {
  roomList.innerHTML = menuAreas
    .map(
      (area) => `
        <section
          class="menu-area"
          style="--area-accent:${area.accent}; --area-accent-text:${area.accentText}"
        >
          <div class="menu-area__heading">
            <div class="menu-area__badge" aria-hidden="true">${area.icon}</div>
            <div class="menu-area__meta">
              <p class="menu-area__label">${area.label}</p>
              <h2 class="menu-area__title">${area.title}</h2>
            </div>
          </div>
          <div class="room-list">
            ${area.items
              .map(
                (item) => `
                  <button class="room-list__item" data-room-index="${item.roomIndex}" type="button">
                    <span class="room-list__title">${item.text}</span>
                    <span class="room-list__arrow">→</span>
                  </button>
                `
              )
              .join("")}
          </div>
        </section>
      `
    )
    .join("");

  roomList.querySelectorAll("[data-room-index]").forEach((button) => {
    button.addEventListener("click", () => {
      const index = Number(button.dataset.roomIndex);
      openTour(index);
    });
  });
}

function renderRoom(index) {
  const room = rooms[index];
  const museumHallNumber = Math.ceil((index + 1) / 3);

  currentRoomIndex = index;
  galleryRoom.style.setProperty("--room-backdrop", `url("${room.backdrop}")`);
  galleryRoom.style.setProperty("--room-backdrop-fit", room.backdropFit || "cover");
  galleryRoom.style.setProperty("--room-backdrop-position", room.backdropPosition || "center top");
  galleryRoom.style.setProperty("--plaque-x", `${room.layout.plaque.x}%`);
  galleryRoom.style.setProperty("--plaque-y", `${room.layout.plaque.y}%`);
  galleryRoom.style.setProperty("--plaque-w", `${room.layout.plaque.w}%`);
  galleryRoom.style.setProperty("--prev-x", `${room.layout.prev.x}%`);
  galleryRoom.style.setProperty("--prev-y", `${room.layout.prev.y}%`);
  galleryRoom.style.setProperty("--prev-w", `${room.layout.prev.w}%`);
  galleryRoom.style.setProperty("--action-x", `${room.layout.action.x}%`);
  galleryRoom.style.setProperty("--action-y", `${room.layout.action.y}%`);
  artworksContainer.innerHTML = buildArtworkMarkup(room);
  roomIndex.textContent = `Sala ${museumHallNumber}`;
  roomTitle.textContent = room.title;
  const { summary, details } = splitRoomText(room.text);
  roomCopySummary.textContent = summary;
  roomCopyDetails.textContent = details;
  roomCopyDetails.hidden = true;
  roomCopyBox.classList.remove("is-open", "is-static");
  roomCopyToggle.setAttribute("aria-expanded", "false");
  roomCopyToggle.disabled = false;

  if (!details) {
    roomCopyBox.classList.add("is-static");
    roomCopyToggle.disabled = true;
  }

  prevRoomButton.disabled = false;
  updateProgress(index);

  if (room.donate) {
    nextRoomButton.textContent = "Vai a GoFundMe";
    nextRoomButton.dataset.mode = "donate";
  } else {
    nextRoomButton.textContent = "Vai avanti";
    nextRoomButton.dataset.mode = "next";
  }
}

function openTour(index = 0) {
  museumApp.classList.add("museum-app--tour");
  menuScreen.classList.add("hidden");
  tourScreen.classList.remove("hidden");
  renderRoom(index);
  if (window.location.hash !== "#sala1" && index === 0) {
    history.replaceState(null, "", "#sala1");
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function backToMenu() {
  if (isTransitioning) return;
  museumApp.classList.remove("museum-app--tour");
  tourScreen.classList.add("hidden");
  menuScreen.classList.remove("hidden");
  if (window.location.hash) {
    history.replaceState(null, "", window.location.pathname);
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function performTransition(targetIndex) {
  if (isTransitioning || targetIndex < 0 || targetIndex >= rooms.length) return;

  isTransitioning = true;
  galleryRoom.classList.add("is-departing");
  travelOverlay.classList.remove("hidden");

  window.setTimeout(() => {
    renderRoom(targetIndex);
    galleryRoom.classList.remove("is-departing");
    galleryRoom.classList.add("is-arriving");
  }, 420);

  window.setTimeout(() => {
    galleryRoom.classList.remove("is-arriving");
    travelOverlay.classList.add("hidden");
    isTransitioning = false;
  }, 1150);
}

function handleNextAction() {
  if (nextRoomButton.dataset.mode === "donate") {
    window.open(GOFUNDME_URL, "_blank", "noreferrer");
    return;
  }
  performTransition(currentRoomIndex + 1);
}

// ── Event listeners ───────────────────────────────────────────────────────────

startTourButton.addEventListener("click", () => openTour(0));
backToMenuButton.addEventListener("click", backToMenu);
prevRoomButton.addEventListener("click", () => {
  if (currentRoomIndex === 0) {
    backToMenu();
    return;
  }
  performTransition(currentRoomIndex - 1);
});
roomCopyToggle.addEventListener("click", () => {
  if (roomCopyToggle.disabled) return;
  const isOpen = roomCopyBox.classList.toggle("is-open");
  roomCopyDetails.hidden = !isOpen;
  roomCopyToggle.setAttribute("aria-expanded", String(isOpen));
});
nextRoomButton.addEventListener("click", handleNextAction);

renderRoomList();
renderRoom(0);

if (window.location.hash === "#sala1") {
  openTour(0);
}
