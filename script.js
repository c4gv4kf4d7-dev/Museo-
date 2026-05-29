const GOFUNDME_URL = "https://www.gofundme.com/f/children-of-malawi-63cqk?attribution_id=sl:8d1cd865-19c2-4b9d-8ee7-491e37da54ad&lang=en_US&ts=1776781151&utm_campaign=man_sharesheet_dash&utm_content=amp20_t1&utm_medium=customer&utm_source=copy_link";
const ENTRANCE_URL = "./assets/museum/menu.jpg";
const menuAreas = [
  {
    label: "Sala 1",
    title: "Tiyende Pamodzi",
    accent: "#d6a62d",
    accentText: "#c28a17",
    icon: `
      <svg viewBox="0 0 24 24" class="menu-icon-svg" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    `,
    items: [
      { text: "Comunità", roomIndex: 0 },
      { text: "Mais", roomIndex: 1 },
      { text: "La forza delle donne", roomIndex: 2 },
      { text: "Sorrisi", roomIndex: 3 }
    ]
  },
  {
    label: "Sala 2",
    title: "Istituto Saint John",
    accent: "#2e83cb",
    accentText: "#2d81c7",
    icon: `
      <svg viewBox="0 0 24 24" class="menu-icon-svg" aria-hidden="true">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
      </svg>
    `,
    items: [
      { text: "Le ragazze", roomIndex: 5 },
      { text: "Le parole", roomIndex: 6 },
      { text: "Il futuro", roomIndex: 7 }
    ]
  },
  {
    label: "Sala 3",
    title: "Il Pozzo",
    accent: "#95ad29",
    accentText: "#89a019",
    icon: `
      <svg viewBox="0 0 24 24" class="menu-icon-svg" aria-hidden="true">
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
      </svg>
    `,
    items: [
      { text: "La pioggia", roomIndex: 9 },
      { text: "Grazie", roomIndex: 10 },
      { text: "Correre", roomIndex: 11 }
    ]
  }
];

const roomLayouts = {
  room1: {
    frames: [
      { x: 33.8, y: 35.4, w: 25.8, h: 16.1, btnX: 32, btnY: 83 },
      { x: 66.2, y: 35.4, w: 25.8, h: 16.1, btnX: 68, btnY: 76 }
    ],
    plaque: { x: 17.5, y: 76.8, w: 21 },
    prev: { x: 14, y: 16, w: 16 },
    action: { x: 50, y: 86.4 }
  },
  room1c: {
    frames: [
      { x: 23, y: 44, w: 21, h: 45, btnX: 25, btnY: 80 },
      { x: 51, y: 46, w: 15, h: 51, btnX: 50, btnY: 80 },
      { x: 78, y: 44, w: 21, h: 45, btnX: 75, btnY: 80 }
    ],
    plaque: { x: 17.5, y: 76.8, w: 21 },
    prev: { x: 14, y: 16, w: 16 },
    action: { x: 50, y: 89 }
  },
  room2: {
    frames: [
      { x: 41.5, y: 36.3, w: 13, h: 23.2, btnX: 30, btnY: 72 },
      { x: 65.7, y: 36.8, w: 27.4, h: 16.5, btnX: 70, btnY: 72 }
    ],
    plaque: { x: 81.5, y: 74.8, w: 15.5 },
    prev: { x: 15, y: 16.5, w: 16 },
    action: { x: 50, y: 86.4 }
  },
  room3: {
    frames: [
      { x: 39.8, y: 36.8, w: 14.2, h: 23.8, btnX: 34, btnY: 63 },
      { x: 60.6, y: 36.8, w: 14.2, h: 23.8, btnX: 68, btnY: 63 }
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
    hall: 1,
    backdrop: "./assets/museum/sala1.jpg",
    layout: roomLayouts.room1c,
    title: "Comunità",
    artworks: [
      { src: "./comunita-1.jpg", label: "Foto 1", caption: "Un bambino di Namwera trasporta un sacco da 10 kg di mais ricevuto durante la distribuzione. Per la sua famiglia significa cibo per le settimane a venire." },
      { src: "./comunita-2.jpg", label: "Foto 2", caption: "Un'anziana della comunità partecipa agli incontri di Tiyende Pamodzi. Anche gli anziani hanno un ruolo fondamentale nel sostenere le famiglie più vulnerabili e nel trasmettere solidarietà tra generazioni." },
      { src: "./comunita-3.jpg", label: "Foto 3", caption: "Con il mais raccolto avvolto nel chitenje, il tradizionale telo malawiano, le madri percorrono chilometri a piedi per tornare ai propri villaggi." }
    ],
    text:
      "Essere una comunità vuol dire prendersi cura di chi non riesce a farcela da solo.\nIn Malawi, il progetto Tyiende Pamodzi ha scelto di non voltarsi dall'altra parte: volontari, famiglie e capi villaggio fanno ciascuno la propria parte.\nPerché la disabilità smette di essere invisibile solo quando qualcuno sceglie di vederla."
  },
  {
    hall: 1,
    backdrop: "./assets/museum/sala2.jpg",
    layout: roomLayouts.room2,
    title: "Mais",
    artworks: [
      { src: "./mais-1.jpg", label: "Foto 1", caption: "Ludovica consegna un sacco a un membro della comunità seguendo il tradizionale rituale locale. In risposta riceve un inchino e una preghiera di ringraziamento, un gesto semplice che racconta il valore di ciò che viene donato." },
      { src: "./mais-2.jpg", label: "Foto 2", caption: "Sul pickup di Tiyende Pamodzi, accanto a una piccola parte dei 400 sacchi di mais destinati a 200 famiglie del distretto di Namwera." }
    ],
    text:
      "Insieme ai volontari di Tiyende Pamodzi abbiamo consegnato 400 sacchi di mais a 200 famiglie di Namwera con bambini disabili.\nPer molte famiglie vuol dire poter cucinare e mangiare con continuità nelle prossime settimane.\nTutto questo è stato possibile grazie ai donatori italiani che hanno sostenuto il progetto."
  },
  {
    hall: 1,
    backdrop: "./assets/museum/sala3.jpg",
    layout: roomLayouts.room3,
    title: "La forza delle donne",
    artworks: [
      { src: "./donne-1.jpg", label: "Foto 1" },
      { src: "./donne-2.jpg", label: "Foto 2" }
    ],
    text:
      "In molti villaggi del Malawi sono le donne a sostenere il peso più grande: crescere figli con disabilità, spesso da sole, senza risorse e senza supporto.\nTiyende Pamodzi lavora perché nessuna famiglia resti isolata, creando una rete fatta di fisioterapia, cibo e presenza costante.\nQui la comunità diventa una famiglia allargata, dove aiutarsi non è un'eccezione ma una responsabilità condivisa."
  },
  {
    hall: 1,
    backdrop: "./assets/museum/sala4.jpg",
    layout: roomLayouts.room1,
    title: "Sorrisi",
    artworks: [
      { src: "./sorrisi-1.jpg", label: "Foto 1" },
      { src: "./sorrisi-2.jpg", label: "Foto 2" }
    ],
    text:
      "Ci sono sorrisi che non si dimenticano.\nQuelli di una madre che, nonostante la fatica, continua a stringere suo figlio con orgoglio.\nQuelli dei bambini che corrono incontro alla macchina dei volontari, trasformando un semplice arrivo in una festa.\nA Namwera, anche nelle difficoltà più dure, la comunità continua a scegliere la vicinanza, il sostegno reciproco e la speranza."
  },
  {
    corridor: true,
    backdrop: "./assets/museum/corridoio1.png",
    eyebrow: "Stai per visitare la Sala 2",
    nextTitle: "Istituto Saint John"
  },
  {
    hall: 2,
    backdrop: "./assets/museum/sala5.jpg",
    layout: roomLayouts.room4,
    title: "Le ragazze.",
    text:
      "Una grande parete, un solo quadro, un tempo più lento. In Malawi abbiamo imparato che ascoltare davvero è già un modo di prendersi cura."
  },
  {
    hall: 2,
    backdrop: "./assets/museum/sala6.jpg",
    layout: roomLayouts.room5,
    title: "Le parole.",
    text:
      "Le aperture laterali ricordano che il volontariato non si esaurisce in una sola scena. Ogni gesto apre sempre un passaggio verso qualcos'altro."
  },
  {
    hall: 2,
    backdrop: "./assets/museum/sala7.jpg",
    layout: roomLayouts.room6,
    title: "Il futuro.",
    text:
      "In questa stanza la luce entra con decisione, come molti momenti vissuti sul campo. Anche nella fatica c'erano chiarezza, bellezza e gratitudine."
  },
  {
    corridor: true,
    backdrop: "./assets/museum/corridoio2.jpg"
  },
  {
    hall: 3,
    backdrop: "./assets/museum/sala8.jpg",
    layout: roomLayouts.room7,
    title: "La pioggia.",
    text:
      "Una sala essenziale, quasi silenziosa. È il ricordo di tutte le volte in cui non serviva fare molto, ma soltanto esserci con continuità."
  },
  {
    hall: 3,
    backdrop: "./assets/museum/sala9.jpg",
    layout: roomLayouts.room8,
    title: "Grazie.",
    text:
      "Una grande immagine centrale per custodire il senso di questi tre anni. Non solo attività, ma un legame che continua a interrogarci e a chiamarci."
  },
  {
    hall: 3,
    backdrop: "./assets/museum/sala10.jpg",
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
const corridorSign = document.getElementById("corridorSign");
const corridorEyebrow = document.getElementById("corridorEyebrow");
const corridorTitle = document.getElementById("corridorTitle");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxClose = document.getElementById("lightboxClose");
const lightboxOverlay = document.getElementById("lightboxOverlay");
const lightboxCaption = document.getElementById("lightboxCaption");

let currentRoomIndex = 0;
let isTransitioning = false;

menuDonateButton.href = GOFUNDME_URL;
menuScreen.style.setProperty("--entrance-backdrop", `url("${ENTRANCE_URL}")`);

// ── Lightbox ──────────────────────────────────────────────────────────────────

function openLightbox(src, alt, caption) {
  lightboxImage.src = src;
  lightboxImage.alt = alt || "";
  lightboxCaption.textContent = caption || "";
  lightbox.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  lightbox.classList.add("is-closing");
  window.setTimeout(() => {
    lightbox.classList.add("hidden");
    lightbox.classList.remove("is-closing");
    lightboxImage.src = "";
    document.body.style.overflow = "";
  }, 260);
}

lightboxClose.addEventListener("click", closeLightbox);
lightboxOverlay.addEventListener("click", closeLightbox);
lightboxImage.addEventListener("click", closeLightbox);

artworksContainer.addEventListener("click", (e) => {
  const artwork = e.target.closest("[data-lightbox-src]");
  if (artwork) openLightbox(artwork.dataset.lightboxSrc, artwork.dataset.lightboxAlt, artwork.dataset.lightboxCaption);
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
  const artworks = room.artworks || [];
  if (!artworks.length) return "";

  const figures = artworks.map((artwork, index) => {
    const frame = room.layout.frames[index];
    if (!frame) return "";
    const captionAttr = artwork.caption ? ` data-lightbox-caption="${artwork.caption.replace(/"/g, '&quot;')}"` : "";
    const lightboxAttrs = artwork.src
      ? `data-lightbox-src="${artwork.src}" data-lightbox-alt="${room.title} — ${artwork.label}"${captionAttr}`
      : "";
    const inner = artwork.src
      ? `<img class="artwork__hittarget" src="${artwork.src}" alt="" aria-hidden="true" loading="lazy">`
      : `<div class="artwork__empty"></div>`;
    return `<figure class="artwork${artwork.src ? " artwork--has-photo" : ""}" style="--art-x:${frame.x}%; --art-y:${frame.y}%; --art-w:${frame.w}%; --art-h:${frame.h}%" ${lightboxAttrs}><div class="artwork__frame">${inner}</div></figure>`;
  }).join("");

  const buttons = artworks.map((artwork, index) => {
    const frame = room.layout.frames[index];
    if (!frame || !artwork.src) return "";
    const bx = frame.btnX ?? frame.x;
    const by = frame.btnY ?? (frame.y + frame.h / 2 + 5);
    const captionAttr = artwork.caption ? `\n        data-lightbox-caption="${artwork.caption.replace(/"/g, '&quot;')}"` : "";
    return `
      <button
        class="artwork__zoom-btn"
        style="left:${bx}%;top:${by}%;"
        data-lightbox-src="${artwork.src}"
        data-lightbox-alt="${room.title} — ${artwork.label}"${captionAttr}
        type="button"
      >
        <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">
          <circle cx="11" cy="11" r="7"/><path d="M21 21l-4.35-4.35"/>
        </svg>
        Guarda da vicino
      </button>
    `;
  }).join("");

  return figures + buttons;
}

const nonCorridorRooms = rooms.filter(r => !r.corridor);

function updateProgress(index) {
  const room = rooms[index];
  if (room.corridor) return;
  const pos = nonCorridorRooms.indexOf(room) + 1;
  progressLabel.textContent = `Stanza ${pos} di ${nonCorridorRooms.length}`;
  progressValue.style.width = `${(pos / nonCorridorRooms.length) * 100}%`;
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
      (area, areaIndex) => `
        <section
          class="menu-area"
          style="--area-accent:${area.accent}; --area-accent-text:${area.accentText}"
        >
          <button
            class="menu-area__header"
            type="button"
            aria-expanded="false"
            aria-controls="area-rooms-${areaIndex}"
          >
            <div class="menu-area__badge" aria-hidden="true">${area.icon}</div>
            <div class="menu-area__meta">
              <p class="menu-area__label">${area.label}</p>
              <h2 class="menu-area__title">${area.title}</h2>
            </div>
            <span class="menu-area__chevron" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M6 9l6 6 6-6"/>
              </svg>
            </span>
          </button>
          <div class="room-list" id="area-rooms-${areaIndex}">
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

  roomList.querySelectorAll(".menu-area__header").forEach((header) => {
    header.addEventListener("click", () => {
      const area = header.closest(".menu-area");
      const isOpen = area.classList.toggle("is-open");
      header.setAttribute("aria-expanded", String(isOpen));
    });
  });

  roomList.querySelectorAll("[data-room-index]").forEach((button) => {
    button.addEventListener("click", () => {
      openTour(Number(button.dataset.roomIndex));
    });
  });
}

function renderRoom(index) {
  const room = rooms[index];
  const isCorridor = Boolean(room.corridor);

  currentRoomIndex = index;
  galleryRoom.classList.toggle("gallery-room--corridor", isCorridor);
  galleryRoom.style.setProperty("--room-backdrop", `url("${room.backdrop}")`);
  galleryRoom.style.setProperty("--room-backdrop-fit", "cover");
  galleryRoom.style.setProperty("--room-backdrop-position", "center center");
  galleryRoom.style.setProperty("--action-x", isCorridor ? "50%" : `${room.layout.action.x}%`);
  galleryRoom.style.setProperty("--action-y", isCorridor ? "88%" : `${room.layout.action.y}%`);

  if (!isCorridor) {
    galleryRoom.style.setProperty("--plaque-x", `${room.layout.plaque.x}%`);
    galleryRoom.style.setProperty("--plaque-y", `${room.layout.plaque.y}%`);
    galleryRoom.style.setProperty("--plaque-w", `${room.layout.plaque.w}%`);
    galleryRoom.style.setProperty("--prev-x", `${room.layout.prev.x}%`);
    galleryRoom.style.setProperty("--prev-y", `${room.layout.prev.y}%`);
    galleryRoom.style.setProperty("--prev-w", `${room.layout.prev.w}%`);
  }

  artworksContainer.innerHTML = isCorridor ? "" : buildArtworkMarkup(room);

  if (isCorridor) {
    roomIndex.textContent = "";
    roomTitle.textContent = "";
    roomCopyBox.hidden = true;
    nextRoomButton.textContent = "Entra nella prossima sala";
    nextRoomButton.dataset.mode = "next";
    corridorEyebrow.textContent = room.eyebrow || "";
    corridorTitle.textContent = room.nextTitle || "";
    corridorSign.hidden = false;
  } else {
    corridorSign.hidden = true;
    roomCopyBox.hidden = false;
    roomIndex.textContent = `Sala ${room.hall}`;
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
    if (room.donate) {
      nextRoomButton.textContent = "Vai a GoFundMe";
      nextRoomButton.dataset.mode = "donate";
    } else {
      nextRoomButton.textContent = "Vai avanti";
      nextRoomButton.dataset.mode = "next";
    }
  }

  prevRoomButton.disabled = false;
  updateProgress(index);
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
roomCopyToggle.addEventListener("click", (e) => {
  e.stopPropagation();
  if (roomCopyToggle.disabled) return;
  const isOpen = roomCopyBox.classList.toggle("is-open");
  roomCopyDetails.hidden = !isOpen;
  roomCopyToggle.setAttribute("aria-expanded", String(isOpen));
});

roomCopyBox.addEventListener("click", () => {
  if (!roomCopyBox.classList.contains("is-open")) return;
  roomCopyBox.classList.remove("is-open");
  roomCopyDetails.hidden = true;
  roomCopyToggle.setAttribute("aria-expanded", "false");
});
nextRoomButton.addEventListener("click", handleNextAction);

// ── Debug coordinate tracker (press G to toggle) ─────────────────────────────
(function () {
  let tracker = null;
  let active = false;
  document.addEventListener("keydown", (e) => {
    if (e.key !== "g" && e.key !== "G") return;
    active = !active;
    if (!active) { if (tracker) { tracker.remove(); tracker = null; } return; }
    tracker = document.createElement("div");
    tracker.style.cssText = "position:fixed;top:12px;left:50%;transform:translateX(-50%);background:rgba(0,0,0,0.8);color:#fff;font:bold 13px monospace;padding:6px 14px;border-radius:20px;z-index:99999;pointer-events:none;letter-spacing:0.05em;";
    tracker.textContent = "muovi il mouse sul muro";
    document.body.appendChild(tracker);
  });
  document.addEventListener("mousemove", (e) => {
    if (!active || !tracker) return;
    const wall = document.querySelector(".gallery-room__wall--center");
    if (!wall) return;
    const r = wall.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width * 100).toFixed(1);
    const y = ((e.clientY - r.top) / r.height * 100).toFixed(1);
    tracker.textContent = `x: ${x}%  y: ${y}%`;
  });
})();

renderRoomList();
renderRoom(0);

if (window.location.hash === "#sala1") {
  openTour(0);
}
