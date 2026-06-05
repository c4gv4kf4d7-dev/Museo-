const GOFUNDME_URL = "https://www.gofundme.com/f/children-of-malawi-63cqk?attribution_id=sl:8d1cd865-19c2-4b9d-8ee7-491e37da54ad&lang=en_US&ts=1776781151&utm_campaign=man_sharesheet_dash&utm_content=amp20_t1&utm_medium=customer&utm_source=copy_link";
const ENTRANCE_URL = "./assets/museum/menu.webp";

// ── Internazionalizzazione ─────────────────────────────────────────────────────

const STRINGS = {
  it: {
    menuEyebrow: "Guida del percorso",
    menuHeadline: "In Malawi<br />tra storie,<br />persone e cambiamenti reali.",
    introP1: "Un viaggio in Malawi tra volti, vita quotidiana e ricerca di futuro. Ogni sala di questo museo raccoglie incontri e momenti che ci hanno cambiato.",
    introP2: "Siamo Fabio, Lorenzo e Valentina e cinque anni fa abbiamo fatto una scelta: non restare a guardare. Da allora non ci siamo mai fermati.",
    introD1: "Abbiamo scelto il Malawi grazie ad Aleimar e ai suoi progetti nel paese, insieme abbiamo trasportato cibo, contribuito alla costruzione di pozzi, installato pompe per l'irrigazione. Abbiamo lavorato nelle scuole, condotto laboratori creativi e percorsi di empowerment femminile, perché investire sulle ragazze significa costruire un futuro migliore per tutta la comunità.",
    introD2: "L'anno scorso avete reso possibile grazie alle vostre donazioni centinaia di sacchi di farina di mais per villaggi e comunità e continuità ad un progetto in cui crediamo. Grazie.",
    readMore: "Leggi tutto",
    showLess: "Mostra meno",
    guideTitle: "Come muoversi",
    guideText: "Segui il percorso dall'inizio oppure scegli liberamente una sala. Prenditi il tuo tempo.",
    startTour: "Inizia la visita guidata",
    showRooms: "Scegli una sala dalla mappa",
    helpProject: "Aiuta il progetto a continuare",
    welcome: "Benvenuto",
    areasTitle: "Le aree e le sale",
    visitTime: "Tempo consigliato 10–15 minuti",
    backToMenu: "Menu iniziale",
    prevRoom: "Sala precedente",
    nextRoom: "Vai avanti",
    enterRoom: "Entra nella prossima sala",
    scrollHint: "scorri per osservare le foto",
    next: "Avanti",
    end: "Fine",
    donate: "Dona",
    lookCloser: "Guarda da vicino",
    mapTitle: "Mappa delle sale",
    mapAlt: "Mappa del museo",
    exitTitle: "Grazie per la visita",
    share: "Condividi",
    supportProject: "Sostieni il progetto",
    mainMenu: "Menù principale",
    linkCopied: "Link copiato negli appunti",
    closePhoto: "Chiudi foto",
    enlargedPhoto: "Foto ingrandita",
    copyPrompt: "Copia il link del museo:",
    shareText: "Un museo virtuale dedicato a tre anni di volontariato in Malawi.",
    roomProgress: (pos, total) => `Stanza ${pos} di ${total}`,
    roomIndex: (hall) => `Sala ${hall}`,
    goToRoomLabel: (title) => `Vai alla sala ${title}`,
    areaLabel: (n) => `Sala ${n}`,
    photoLabel: (n) => `Foto ${n}`,
  },
  en: {
    menuEyebrow: "Tour Guide",
    menuHeadline: "In Malawi<br />among stories,<br />people and real changes.",
    introP1: "A journey through Malawi among faces, everyday life and the search for a future. Every room in this museum holds encounters and moments that changed us.",
    introP2: "We are Fabio, Lorenzo and Valentina, and five years ago we made a choice: not to stand by and watch. We have never stopped since.",
    introD1: "We chose Malawi thanks to Aleimar and its projects in the country. Together we transported food, contributed to building wells and installed irrigation pumps. We worked in schools, led creative workshops and women's empowerment programmes, because investing in girls means building a better future for the whole community.",
    introD2: "Last year, thanks to your donations, you made possible hundreds of bags of maize flour for villages and communities, and continuity for a project we believe in. Thank you.",
    readMore: "Read more",
    showLess: "Show less",
    guideTitle: "How to navigate",
    guideText: "Follow the path from the beginning or freely choose a room. Take your time.",
    startTour: "Start the guided tour",
    showRooms: "Choose a room from the map",
    helpProject: "Help the project continue",
    welcome: "Welcome",
    areasTitle: "Areas and rooms",
    visitTime: "Suggested time 10–15 minutes",
    backToMenu: "Main menu",
    prevRoom: "Previous room",
    nextRoom: "Go forward",
    enterRoom: "Enter the next room",
    scrollHint: "scroll to browse the photos",
    next: "Next",
    end: "End",
    donate: "Donate",
    lookCloser: "Look closer",
    mapTitle: "Room map",
    mapAlt: "Museum map",
    exitTitle: "Thank you for your visit",
    share: "Share",
    supportProject: "Support the project",
    mainMenu: "Main menu",
    linkCopied: "Link copied to clipboard",
    closePhoto: "Close photo",
    enlargedPhoto: "Enlarged photo",
    copyPrompt: "Copy the museum link:",
    shareText: "A virtual museum dedicated to three years of volunteering in Malawi.",
    roomProgress: (pos, total) => `Room ${pos} of ${total}`,
    roomIndex: (hall) => `Room ${hall}`,
    goToRoomLabel: (title) => `Go to room ${title}`,
    areaLabel: (n) => `Area ${n}`,
    photoLabel: (n) => `Photo ${n}`,
  }
};

let currentLang = (() => {
  const saved = localStorage.getItem("museo-lang");
  if (saved === "it" || saved === "en") return saved;
  return navigator.language?.startsWith("en") ? "en" : "it";
})();

function t(key, ...args) {
  const s = STRINGS[currentLang] ?? STRINGS.it;
  const val = key in s ? s[key] : STRINGS.it[key];
  return typeof val === "function" ? val(...args) : (val ?? "");
}

function tl(obj, key) {
  if (currentLang === "en") {
    const v = obj[key + "_en"];
    if (v !== undefined && v !== null) return v;
  }
  return obj[key] ?? "";
}

// ── Dati: aree ────────────────────────────────────────────────────────────────

const menuAreas = [
  {
    label: "Sala 1", label_en: "Area 1",
    title: "Tiyende Pamodzi", title_en: "Tiyende Pamodzi",
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
      { text: "Comunità",            text_en: "Community",            roomIndex: 0 },
      { text: "Mais",                text_en: "Maize",                roomIndex: 1 },
      { text: "La forza delle donne",text_en: "The Strength of Women",roomIndex: 2 },
      { text: "Sorrisi",             text_en: "Smiles",               roomIndex: 3 }
    ]
  },
  {
    label: "Sala 2", label_en: "Area 2",
    title: "Istituto Saint John", title_en: "Saint John Institute",
    accent: "#2e83cb",
    accentText: "#2d81c7",
    icon: `
      <svg viewBox="0 0 24 24" class="menu-icon-svg" aria-hidden="true">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
      </svg>
    `,
    items: [
      { text: "Il pullman",          text_en: "The Bus",              roomIndex: 5 },
      { text: "Futuro",              text_en: "Future",               roomIndex: 6 },
      { text: "Le ragazze del S.John",text_en:"The Girls of S.John",  roomIndex: 7 }
    ]
  },
  {
    label: "Sala 3", label_en: "Area 3",
    title: "Il Pozzo", title_en: "The Well",
    accent: "#95ad29",
    accentText: "#89a019",
    icon: `
      <svg viewBox="0 0 24 24" class="menu-icon-svg" aria-hidden="true">
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
      </svg>
    `,
    items: [
      { text: "La pioggia",   text_en: "The Rain",   roomIndex: 9 },
      { text: "Gratitudine",  text_en: "Gratitude",  roomIndex: 10 },
      { text: "Correre",      text_en: "Running",    roomIndex: 11 }
    ]
  }
];

// ── Dati: layout sale ─────────────────────────────────────────────────────────

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
    frames: [
      { x: 0, y: 0, w: 0, h: 0, btnX: 30, btnY: 77.2 },
      { x: 0, y: 0, w: 0, h: 0, btnX: 52, btnY: 77.2 },
      { x: 0, y: 0, w: 0, h: 0, btnX: 74, btnY: 77.2 }
    ],
    plaque: { x: 82.4, y: 73.2, w: 14.2 },
    prev: { x: 83, y: 17, w: 12 },
    action: { x: 50, y: 85.8 }
  },
  room5: {
    frames: [
      { x: 0, y: 0, w: 0, h: 0, btnX: 42, btnY: 53.2 },
      { x: 0, y: 0, w: 0, h: 0, btnX: 63, btnY: 53.2 },
      { x: 0, y: 0, w: 0, h: 0, btnX: 45, btnY: 93 },
      { x: 0, y: 0, w: 0, h: 0, btnX: 65, btnY: 93 }
    ],
    plaque: { x: 18.6, y: 74.2, w: 16.5 },
    prev: { x: 13, y: 16.4, w: 16 },
    action: { x: 55, y: 95 }
  },
  room6: {
    frames: [{ x: 49.8, y: 37.4, w: 30.2, h: 24.4 }],
    plaque: { x: 82.8, y: 72.8, w: 14.5 },
    prev: { x: 14, y: 16.2, w: 16 },
    action: { x: 50, y: 85.8 }
  },
  room7: {
    frames: [
      { x: 0, y: 0, w: 0, h: 0, btnX: 33, btnY: 73 },
      { x: 0, y: 0, w: 0, h: 0, btnX: 47, btnY: 73 },
      { x: 0, y: 0, w: 0, h: 0, btnX: 62, btnY: 66 }
    ],
    plaque: { x: 18.2, y: 74, w: 15.8 },
    prev: { x: 86, y: 16.8, w: 11 },
    action: { x: 50, y: 88 }
  },
  room8: {
    frames: [
      { x: 0, y: 0, w: 0, h: 0, btnX: 48, btnY: 40 },
      { x: 0, y: 0, w: 0, h: 0, btnX: 35, btnY: 75 },
      { x: 0, y: 0, w: 0, h: 0, btnX: 49, btnY: 75 },
      { x: 0, y: 0, w: 0, h: 0, btnX: 63, btnY: 75 }
    ],
    plaque: { x: 82.8, y: 72.8, w: 14.5 },
    prev: { x: 14, y: 16.6, w: 16 },
    action: { x: 50, y: 90 }
  },
  room9: {
    frames: [
      { x: 0, y: 0, w: 0, h: 0, btnX: 31, btnY: 55 },
      { x: 0, y: 0, w: 0, h: 0, btnX: 49, btnY: 55 },
      { x: 0, y: 0, w: 0, h: 0, btnX: 66, btnY: 55 },
      { x: 0, y: 0, w: 0, h: 0, btnX: 48, btnY: 80 }
    ],
    plaque: { x: 18.4, y: 73.8, w: 15.8 },
    prev: { x: 14, y: 16.3, w: 16 },
    action: { x: 50, y: 92 }
  }
};

// ── Dati: sale ────────────────────────────────────────────────────────────────

const rooms = [
  {
    hall: 1,
    backdrop: "./assets/museum/sala1.webp",
    layout: roomLayouts.room1c,
    title: "Comunità",
    title_en: "Community",
    artworks: [
      {
        src: "./assets/photos/comunita-1.webp", label: "Foto 1",
        caption: "Un bambino di Namwera trasporta un sacco da 10 kg di mais ricevuto durante la distribuzione. Per la sua famiglia significa cibo per le settimane a venire.",
        caption_en: "A child from Namwera carries a 10 kg bag of maize received during the distribution. For his family, it means food for the weeks ahead."
      },
      {
        src: "./assets/photos/comunita-2.webp", label: "Foto 2",
        caption: "Un'anziana della comunità partecipa agli incontri di Tiyende Pamodzi. Anche gli anziani hanno un ruolo fondamentale nel sostenere le famiglie più vulnerabili e nel trasmettere solidarietà tra generazioni.",
        caption_en: "An elderly community member participates in Tiyende Pamodzi meetings. The elderly also play a fundamental role in supporting the most vulnerable families and passing solidarity between generations."
      },
      {
        src: "./assets/photos/comunita-3.webp", label: "Foto 3",
        caption: "Con il mais raccolto avvolto nel chitenje, il tradizionale telo malawiano, le madri percorrono chilometri a piedi per tornare ai propri villaggi.",
        caption_en: "With the collected maize wrapped in the chitenje, the traditional Malawian cloth, mothers walk kilometres to return to their villages."
      }
    ],
    text: "Essere una comunità vuol dire prendersi cura di chi non riesce a farcela da solo.\nIn Malawi, il progetto Tyiende Pamodzi ha scelto di non voltarsi dall'altra parte: volontari, famiglie e capi villaggio fanno ciascuno la propria parte.\nPerché la disabilità smette di essere invisibile solo quando qualcuno sceglie di vederla.",
    text_en: "Being a community means caring for those who cannot make it on their own.\nIn Malawi, the Tiyende Pamodzi project chose not to look away: volunteers, families and village chiefs each do their part.\nBecause disability stops being invisible only when someone chooses to see it."
  },
  {
    hall: 1,
    backdrop: "./assets/museum/sala2.webp",
    layout: roomLayouts.room2,
    title: "Mais",
    title_en: "Maize",
    artworks: [
      {
        src: "./assets/photos/mais-1.webp", label: "Foto 1",
        caption: "Ludovica consegna un sacco a un membro della comunità seguendo il tradizionale rituale locale. In risposta riceve un inchino e una preghiera di ringraziamento, un gesto semplice che racconta il valore di ciò che viene donato.",
        caption_en: "Ludovica hands a bag to a community member following the traditional local ritual. In response she receives a bow and a prayer of thanks, a simple gesture that speaks to the value of what is being given."
      },
      {
        src: "./assets/photos/mais-2.webp", label: "Foto 2",
        caption: "Sul pickup di Tiyende Pamodzi, accanto a una piccola parte dei 400 sacchi di mais destinati a 200 famiglie del distretto di Namwera.",
        caption_en: "On the Tiyende Pamodzi pickup, alongside a small portion of the 400 bags of maize destined for 200 families in the Namwera district."
      }
    ],
    text: "Insieme ai volontari di Tiyende Pamodzi abbiamo consegnato 400 sacchi di mais a 200 famiglie di Namwera con bambini disabili.\nPer molte famiglie vuol dire poter cucinare e mangiare con continuità nelle prossime settimane.\nTutto questo è stato possibile grazie ai donatori italiani che hanno sostenuto il progetto.",
    text_en: "Together with Tiyende Pamodzi volunteers, we delivered 400 bags of maize to 200 families in Namwera with disabled children.\nFor many families, it means being able to cook and eat consistently for the coming weeks.\nAll of this was made possible thanks to Italian donors who supported the project."
  },
  {
    hall: 1,
    backdrop: "./assets/museum/sala3.webp",
    layout: roomLayouts.room3,
    title: "La forza delle donne",
    title_en: "The Strength of Women",
    artworks: [
      {
        src: "./assets/photos/donne-1.webp", label: "Foto 1",
        caption: "Makanjira, vicino al confine con il Mozambico. Ogni mese le famiglie si riuniscono per gli incontri di Tiyende Pamodzi, un momento di supporto, condivisione e formazione dedicato ai bambini con disabilità.",
        caption_en: "Makanjira, near the border with Mozambique. Every month families gather for Tiyende Pamodzi meetings, a moment of support, sharing and training dedicated to children with disabilities."
      },
      {
        src: "./assets/photos/donne-2.webp", label: "Foto 2",
        caption: "Una giovane madre tiene in braccio il proprio figlio durante la visita del fisioterapista, che ogni mese raggiunge il villaggio per seguire i bambini con disabilità.",
        caption_en: "A young mother holds her child during the physiotherapist's visit, who reaches the village every month to follow up with children with disabilities."
      }
    ],
    text: "In molti villaggi del Malawi sono le donne a sostenere il peso più grande: crescere figli con disabilità, spesso da sole, senza risorse e senza supporto.\nTiyende Pamodzi lavora perché nessuna famiglia resti isolata, creando una rete fatta di fisioterapia, cibo e presenza costante.\nQui la comunità diventa una famiglia allargata, dove aiutarsi non è un'eccezione ma una responsabilità condivisa.",
    text_en: "In many Malawian villages, women bear the greatest burden: raising children with disabilities, often alone, without resources or support.\nTiyende Pamodzi works to ensure no family is left isolated, building a network of physiotherapy, food and constant presence.\nHere the community becomes an extended family, where helping each other is not the exception but a shared responsibility."
  },
  {
    hall: 1,
    backdrop: "./assets/museum/sala4.webp",
    layout: roomLayouts.room1,
    title: "Sorrisi",
    title_en: "Smiles",
    artworks: [
      {
        src: "./assets/photos/sorrisi-1.webp", label: "Foto 1",
        caption: "Dopo ore di attesa, incontri e fisioterapia, una madre stringe il proprio bambino in un momento di calma sotto gli alberi di Makanjira.",
        caption_en: "After hours of waiting, meetings and physiotherapy, a mother holds her child in a moment of calm under the trees in Makanjira."
      },
      {
        src: "./assets/photos/sorrisi-2.webp", label: "Foto 2",
        caption: "I sorrisi dei bambini della scuola di Makanjira, fieri di mostrarci i loro quaderni e felici di condividere con noi un piccolo pezzo della loro giornata.",
        caption_en: "The smiles of the children at Makanjira school, proud to show us their notebooks and happy to share a small piece of their day with us."
      }
    ],
    text: "Ci sono sorrisi che non si dimenticano.\nQuelli di una madre che, nonostante la fatica, continua a stringere suo figlio con orgoglio.\nQuelli dei bambini che corrono incontro alla macchina dei volontari, trasformando un semplice arrivo in una festa.\nA Namwera, anche nelle difficoltà più dure, la comunità continua a scegliere la vicinanza, il sostegno reciproco e la speranza.",
    text_en: "There are smiles you never forget.\nThose of a mother who, despite the hardship, continues to hold her son with pride.\nThose of children who run toward the volunteers' car, turning a simple arrival into a celebration.\nIn Namwera, even in the toughest difficulties, the community continues to choose closeness, mutual support and hope."
  },
  {
    corridor: true,
    backdrop: "./assets/museum/corridoio1.webp",
    backdropMobile: "./assets/museum/corridoio-verticale1.webp",
    eyebrow: "Stai per visitare la Sala 2",
    eyebrow_en: "You are about to visit Area 2",
    nextTitle: "Istituto Saint John",
    nextTitle_en: "Saint John Institute"
  },
  {
    hall: 2,
    backdrop: "./assets/museum/sala5.webp",
    layout: roomLayouts.room4,
    title: "Il pullman",
    title_en: "The Bus",
    artworks: [
      {
        src: "./assets/photos/pullman-1.webp", label: "Foto 1",
        caption: "Il viaggio è appena iniziato. Alcuni bambini piangono, altri si lasciano contagiare dal pianto. Altri ancora cantano a squarciagola la stessa filastrocca che accompagna ogni mattina il tragitto verso la Saint John.",
        caption_en: "The journey has just begun. Some children cry, others catch the tears. Still others sing at the top of their lungs the same nursery rhyme that accompanies the morning trip to Saint John every day."
      },
      {
        src: "./assets/photos/pullman-2.webp", label: "Foto 2",
        caption: "Ad ogni fermata le mamme si stringono a decine attorno alle porte del pullman e sollevano i propri bambini verso l'interno per assicurargli un posto. Hanno camminato per chilometri prima dell'alba e non vogliono perdere l'occasione di mandare i figli a scuola.",
        caption_en: "At every stop, dozens of mothers crowd around the bus doors and lift their children inside to secure them a seat. They have walked kilometres before dawn and do not want to miss the chance to send their children to school."
      },
      {
        src: "./assets/photos/pullman-3.webp", label: "Foto 3",
        caption: "Una bambina cerca conforto tra le braccia di Elisa mentre prova ad abituarsi alla giornata lontano dalla sua mamma. I bambini continuano a salire ad ogni fermata e, nel giro di pochi minuti, l'autobus si riempirà di voci, giochi e piccoli passeggeri diretti a scuola.",
        caption_en: "A little girl seeks comfort in Elisa's arms as she tries to get used to a day away from her mother. Children keep boarding at every stop and, within minutes, the bus will fill with voices, games and little passengers headed to school."
      }
    ],
    text: "All'alba il pullman della Saint John percorre chilometri di strade sterrate per raccogliere i bambini dei villaggi.\nLa scuola, fondata da Padre Kimu, offre gratuitamente istruzione e almeno un pasto al giorno.\nSu un autobus da 70 posti viaggiano spesso fino a 200 bambini.\nOgni sedile, ogni corridoio, ogni angolo racconta una straordinaria voglia di imparare.",
    text_en: "At dawn, the Saint John bus travels kilometres of dirt roads to collect village children.\nThe school, founded by Father Kimu, offers education and at least one meal a day, free of charge.\nOn a 70-seat bus, up to 200 children often travel together.\nEvery seat, every aisle, every corner tells of an extraordinary desire to learn."
  },
  {
    hall: 2,
    backdrop: "./assets/museum/sala6.webp",
    layout: roomLayouts.room5,
    title: "Futuro",
    title_en: "Future",
    artworks: [
      {
        src: "./assets/photos/futuro-1.webp", label: "Foto 1",
        caption: "Un sorriso tra le mura della Saint John. Ogni giorno questi bambini imparano, giocano e scoprono il mondo, costruendo passo dopo passo il proprio futuro.",
        caption_en: "A smile within the walls of Saint John. Every day these children learn, play and discover the world, building their future step by step."
      },
      {
        src: "./assets/photos/futuro-2.webp", label: "Foto 2",
        caption: "In un luogo dove molti arrivano da villaggi diversi, la scuola diventa anche un posto dove trovare amici. A volte il futuro inizia con un semplice abbraccio.",
        caption_en: "In a place where many come from different villages, school also becomes a place to find friends. Sometimes the future begins with a simple hug."
      },
      {
        src: "./assets/photos/futuro-3.webp", label: "Foto 3",
        caption: "Dietro ogni uniforme c'è una storia ancora tutta da scrivere.",
        caption_en: "Behind every uniform there is a story yet to be written."
      },
      {
        src: "./assets/photos/futuro-4.webp", label: "Foto 4",
        caption: "Non tutti i futuri iniziano col sorriso. Qualcuno comincia protestando molto energicamente contro la scuola del mattino.",
        caption_en: "Not every future begins with a smile. Some start with a very energetic protest against morning school."
      }
    ],
    text: "La sala si chiama \"Futuro\" perché tutto inizia da qui. Tra canzoni, giochi, colori e nuove parole, i bambini dell'asilo Saint John costruiscono le basi del loro domani. I piccoli disegni che decorano le aule sono il segno concreto di questa crescita quotidiana.",
    text_en: "This room is called \"Future\" because everything begins here. Through songs, games, colours and new words, the children of Saint John nursery school build the foundations of their tomorrow. The small drawings that decorate the classrooms are a concrete sign of this daily growth."
  },
  {
    hall: 2,
    backdrop: "./assets/museum/sala7.webp",
    layout: roomLayouts.room6,
    title: "Le ragazze del S.John",
    title_en: "The Girls of S.John",
    artworks: [
      {
        src: "./assets/photos/ragazze-1.webp", label: "Foto 1",
        caption: "Quel giorno non abbiamo insegnato matematica o grammatica. Abbiamo parlato di emozioni, ascoltato suoni, riconosciuto profumi e scoperto il mondo attraverso i cinque sensi. Lei non si è persa nemmeno un istante.",
        caption_en: "That day we didn't teach maths or grammar. We talked about emotions, listened to sounds, recognised smells and discovered the world through the five senses. She didn't miss a single moment."
      },
      {
        src: "./assets/photos/ragazze-2.webp", label: "Foto 2",
        caption: "Con Faith abbiamo scoperto che la timidezza e la determinazione possono convivere nello stesso sorriso. Studiando le storie di donne che hanno cambiato il mondo, abbiamo provato a mostrare alle ragazze della Saint John che anche il loro futuro può essere scritto da loro stesse.",
        caption_en: "With Faith we discovered that shyness and determination can coexist in the same smile. By studying the stories of women who changed the world, we tried to show the girls of Saint John that their own future can be written by themselves."
      },
      {
        src: "./assets/photos/ragazze-3.webp", label: "Foto 3",
        caption: "Disegni, colori, giochi e canzoni. Per qualche ora l'aula si è riempita di risate, curiosità e piccoli gesti di amicizia, proprio come quello catturato in questa fotografia.",
        caption_en: "Drawings, colours, games and songs. For a few hours the classroom filled with laughter, curiosity and small gestures of friendship, just like the one captured in this photograph."
      },
      {
        src: "./assets/photos/ragazze-4.webp", label: "Foto 4",
        caption: "Ispirate dalla storia di Rita Levi-Montalcini, le studentesse hanno scritto di una difficoltà affrontata e del percorso che le ha portate a scegliere ciò che ritenevano giusto. Un esercizio di scrittura, ma anche di consapevolezza.",
        caption_en: "Inspired by the story of Rita Levi-Montalcini, the students wrote about a challenge they had faced and the journey that led them to choose what they believed was right. A writing exercise, but also one of self-awareness."
      }
    ],
    text: "Alla S.John le ragazze non studiano soltanto. Vivono insieme, condividono responsabilità, imparano a prendersi cura di sé e delle altre. Padre Kimu ha voluto una scuola che offrisse loro ciò che troppo spesso viene negato: tempo per crescere, un'istruzione e la possibilità di scegliere il proprio futuro.",
    text_en: "At S.John, the girls do more than study. They live together, share responsibilities and learn to take care of themselves and each other. Father Kimu wanted a school that gave them what is too often denied: time to grow, an education and the chance to choose their own future."
  },
  {
    corridor: true,
    backdrop: "./assets/museum/corridoio2.webp",
    backdropMobile: "./assets/museum/corridoio-verticale2.webp",
    eyebrow: "Stai per visitare la Sala 3",
    eyebrow_en: "You are about to visit Area 3",
    nextTitle: "Il Pozzo",
    nextTitle_en: "The Well"
  },
  {
    hall: 3,
    backdrop: "./assets/museum/sala8.webp",
    layout: roomLayouts.room7,
    title: "La pioggia",
    title_en: "The Rain",
    artworks: [
      {
        src: "./assets/photos/pioggia-1.webp", label: "Foto 1",
        caption: "Dalla porta di casa osservano la festa. Fuori, la pioggia batte sulla terra rossa e sul nuovo pozzo appena inaugurato. Mentre il villaggio si riempie di canti e danze, questa famiglia resta sulla soglia, spettatrice di un momento che molti hanno vissuto come una benedizione.",
        caption_en: "From their doorway they watch the celebration. Outside, rain falls on the red earth and on the newly inaugurated well. As the village fills with songs and dances, this family remains on the threshold, witnessing a moment that many experienced as a blessing."
      },
      {
        src: "./assets/photos/pioggia-2.webp", label: "Foto 2",
        caption: "La pioggia arriva all'improvviso durante l'inaugurazione del pozzo. Fabio, Marco e Sergio si uniscono alle danze del villaggio. Tra risate, musica e fango, l'acqua viene festeggiata due volte: quella che cade dal cielo e quella che, da quel giorno, sarà disponibile per tutti.",
        caption_en: "The rain arrives suddenly during the inauguration of the well. Fabio, Marco and Sergio join the village dances. Amid laughter, music and mud, water is celebrated twice: the rain falling from the sky and the water that, from that day on, will be available for everyone."
      },
      {
        src: "./assets/photos/pioggia-3.webp", label: "Foto 3",
        caption: "La festa è finita, ma il vero risultato è questo. Mentre il cielo si apre dopo il temporale, il nuovo pozzo entra subito in funzione. Bambini e adulti si alternano alla pompa, trasformando un'opera appena inaugurata in una risorsa concreta per l'intera comunità.",
        caption_en: "The celebration is over, but the true result is this. As the sky clears after the storm, the new well goes straight into use. Children and adults take turns at the pump, turning a just-inaugurated structure into a concrete resource for the entire community."
      }
    ],
    text: "Per un villaggio che aveva sempre vissuto la fatica della ricerca dell'acqua, quel giorno accadde qualcosa di speciale. Mentre inauguravamo il nuovo pozzo costruito grazie alle donazioni raccolte in Italia, una pioggia torrenziale iniziò a cadere sul villaggio. Gli abitanti la accolsero come un dono del cielo. Noi ci unimmo a loro, ballando sotto l'acqua fino a sera.",
    text_en: "For a village that had always known the hardship of finding water, something special happened that day. As we were inaugurating the new well built thanks to donations raised in Italy, torrential rain began to fall on the village. The villagers welcomed it as a gift from heaven. We joined them, dancing in the rain until evening."
  },
  {
    hall: 3,
    backdrop: "./assets/museum/sala9.webp",
    layout: roomLayouts.room8,
    title: "Gratitudine",
    title_en: "Gratitude",
    artworks: [
      {
        src: "./assets/photos/grazie-1.webp", label: "Foto 1",
        caption: "Le donne del villaggio ci hanno accolto con canti e balli come avevano fatto un anno prima, durante l'inaugurazione del pozzo. Con emozione abbiamo riconosciuto molti degli stessi volti. E anche loro si ricordavano di noi.",
        caption_en: "The village women welcomed us with songs and dances, just as they had a year earlier during the inauguration of the well. With emotion we recognised many of the same faces. And they remembered us too."
      },
      {
        src: "./assets/photos/grazie-2.webp", label: "Foto 2",
        caption: "Un bambino tra le braccia di sua madre. Dietro questa immagine c'è un cambiamento concreto: acqua pulita per bere, coltivazioni più produttive e una comunità più forte. Le basi per crescere in salute.",
        caption_en: "A child in his mother's arms. Behind this image lies a concrete change: clean water to drink, more productive crops and a stronger community. The foundations for growing up healthy."
      },
      {
        src: "./assets/photos/grazie-3.webp", label: "Foto 3",
        caption: "Per la maggior parte di noi è un gesto automatico. Qui, per molti anni, è stato un privilegio. L'acqua pulita che scorre da questo pozzo significa meno malattie, più salute e più tempo da dedicare alla vita.",
        caption_en: "For most of us it is an automatic gesture. Here, for many years, it was a privilege. The clean water flowing from this well means fewer diseases, better health and more time to dedicate to life."
      },
      {
        src: "./assets/photos/grazie-4.webp", label: "Foto 4",
        caption: "Per i più piccoli, il cambiamento non si misura in metri di tubature o litri d'acqua. Si misura nella possibilità di crescere più sani, più forti e con maggiori opportunità.",
        caption_en: "For the youngest, change is not measured in metres of pipes or litres of water. It is measured in the possibility of growing up healthier, stronger and with greater opportunities."
      }
    ],
    text: "Questa sala racconta la gratitudine che abbiamo vissuto un anno dopo, tornando nel villaggio per vedere come il pozzo avesse cambiato la vita del villaggio. Ad accoglierci sono state le donne più anziane della comunità, con canti, balli e sorrisi che non avevano bisogno di traduzione. Un ringraziamento che passava dai gesti, dalla musica e dalla gioia condivisa.",
    text_en: "This room tells of the gratitude we experienced a year later, returning to the village to see how the well had changed village life. We were welcomed by the eldest women of the community, with songs, dances and smiles that needed no translation. A thank-you expressed through gestures, music and shared joy."
  },
  {
    hall: 3,
    backdrop: "./assets/museum/sala10.webp",
    layout: roomLayouts.room9,
    title: "Correre",
    title_en: "Running",
    artworks: [
      {
        src: "./assets/photos/correre-1.webp", label: "Foto 1",
        caption: "Una ruota, un coperchio e una strada di terra. Bastano poche cose per trasformare il tragitto verso casa in un gioco. In Malawi l'infanzia corre veloce, tra fantasia, polvere e libertà.",
        caption_en: "A wheel, a lid and a dirt road. It takes very little to turn the journey home into a game. In Malawi, childhood runs fast, between imagination, dust and freedom."
      },
      {
        src: "./assets/photos/correre-2.webp", label: "Foto 2",
        caption: "Ci vedevano arrivare da lontano e iniziavano a correre. In pochi minuti eravamo circondati da decine di bambini curiosi, sorridenti e pieni di energia. Per loro eravamo i \"Mzungu\", i visitatori venuti da lontano.",
        caption_en: "They would see us coming from afar and start running. Within minutes we were surrounded by dozens of curious, smiling, energetic children. For them we were the \"Mzungu\", the visitors from far away."
      },
      {
        src: "./assets/photos/correre-3.webp", label: "Foto 3",
        caption: "Prima del pozzo, molte donne del villaggio percorrevano ogni giorno chilometri di strade come questa per raggiungere una fonte d'acqua. Un viaggio lungo, spesso sotto il sole, con pesanti secchi da riportare a casa.",
        caption_en: "Before the well, many village women would walk kilometres every day on roads like this one to reach a water source. A long journey, often under the sun, with heavy buckets to carry back home."
      },
      {
        src: "./assets/photos/correre-4.webp", label: "Foto 4",
        caption: "Quando era il momento di andare via, la visita non finiva davvero. I bambini continuavano a seguirci lungo la strada, correndo più veloce che potevano per restare con noi ancora un po'.",
        caption_en: "When it was time to leave, the visit didn't really end. The children kept following us along the road, running as fast as they could to stay with us a little longer."
      }
    ],
    text: "\"Mzungu! Mzungu!\" gridavano. \"Uomo bianco\" in chichewa. Appena ci vedevano arrivare, decine di bambini iniziavano a correre dietro di noi tra la polvere e i baobab, cantando e ridendo. Per loro eravamo una novità, una presenza insolita che trasformava una giornata qualunque in un momento di festa.",
    text_en: "\"Mzungu! Mzungu!\" they would shout. \"White person\" in Chichewa. As soon as they saw us arriving, dozens of children would start running after us through the dust and baobabs, singing and laughing. For them we were a novelty, an unusual presence that turned an ordinary day into a moment of celebration."
  },
  {
    corridor: true,
    exit: true,
    backdrop: "./assets/museum/uscita.webp",
    backdropMobile: "./assets/museum/uscita-verticale.webp"
  }
];

// ── Riferimenti DOM ───────────────────────────────────────────────────────────

const roomList = document.getElementById("roomList");
const menuMap = document.getElementById("menuMap");
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
const exitOverlay = document.getElementById("exitOverlay");
const exitShareButton = document.getElementById("exitShareButton");
const exitDonateButton = document.getElementById("exitDonateButton");
const exitMenuButton = document.getElementById("exitMenuButton");
const exitShareFeedback = document.getElementById("exitShareFeedback");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxClose = document.getElementById("lightboxClose");
const lightboxOverlay = document.getElementById("lightboxOverlay");
const lightboxCaption = document.getElementById("lightboxCaption");
const mobileCard = document.getElementById("mobileCard");
const mobileCardHero = document.getElementById("mobileCardHero");
const mobileCardIndex = document.getElementById("mobileCardIndex");
const mobileCardTitle = document.getElementById("mobileCardTitle");
const mobileCardPhotos = document.getElementById("mobileCardPhotos");
const mobileCardSummary = document.getElementById("mobileCardSummary");
const mobileCardDetails = document.getElementById("mobileCardDetails");
const mobileCardToggle = document.getElementById("mobileCardToggle");
const mobileCardToggleLabel = mobileCardToggle.querySelector(".mobile-card__toggle-label");
const mobileCardPrev = document.getElementById("mobileCardPrev");
const mobileCardNext = document.getElementById("mobileCardNext");
const mobileCardNextLabel = document.getElementById("mobileCardNextLabel");
const mobileCardCounter = document.getElementById("mobileCardCounter");
const mobileCardDots = document.getElementById("mobileCardDots");
const mobileCardPhotoNav = document.getElementById("mobileCardPhotoNav");
const langItaBtn = document.getElementById("langItaBtn");
const langEngBtn = document.getElementById("langEngBtn");
const menuIntroToggle = document.getElementById("menuIntroToggle");
const menuIntroDetails = document.getElementById("menuIntroDetails");
const menuIntroToggleLabel = document.getElementById("menuIntroToggleLabel");

// ── Stato ─────────────────────────────────────────────────────────────────────

let currentRoomIndex = 0;
let isTransitioning = false;

menuDonateButton.href = GOFUNDME_URL;
menuScreen.style.setProperty("--entrance-backdrop", `url("${ENTRANCE_URL}")`);

// ── Menu mobile: guida sfogliabile a pagine ────────────────────────────────────

const menuPages = document.getElementById("menuPages");
const showRoomsButton = document.getElementById("showRoomsButton");
const backToGuideButton = document.getElementById("backToGuideButton");

if (menuPages) {
  if (showRoomsButton) {
    showRoomsButton.addEventListener("click", () => {
      menuPages.scrollTo({ left: menuPages.clientWidth, behavior: "smooth" });
    });
  }
  if (backToGuideButton) {
    backToGuideButton.addEventListener("click", () => {
      menuPages.scrollTo({ left: 0, behavior: "smooth" });
    });
  }
}

// ── Menu intro expand ─────────────────────────────────────────────────────────

const menuIntro = document.querySelector(".menu-intro");

function toggleMenuIntro() {
  const isOpen = menuIntroToggle.classList.toggle("is-open");
  menuIntroDetails.hidden = !isOpen;
  menuIntroToggleLabel.textContent = isOpen ? t("showLess") : t("readMore");
}

if (menuIntroToggle) {
  menuIntroToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleMenuIntro();
  });
}

// Clic sul testo dell'intro per espandere/ridurre
if (menuIntro) {
  menuIntro.classList.add("menu-intro--clickable");
  menuIntro.addEventListener("click", (e) => {
    if (e.target.closest(".menu-intro__toggle")) return;
    toggleMenuIntro();
  });
}

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

mobileCardPhotos.addEventListener("click", (e) => {
  const card = e.target.closest("[data-lightbox-src]");
  if (card) openLightbox(card.dataset.lightboxSrc, card.dataset.lightboxAlt, card.dataset.lightboxCaption);
});

mobileCardToggle.addEventListener("click", () => {
  const isOpen = mobileCardToggle.classList.toggle("is-open");
  mobileCardDetails.hidden = !isOpen;
  mobileCardToggleLabel.textContent = isOpen ? t("showLess") : t("readMore");
});

mobileCardPhotos.addEventListener("scroll", () => {
  const dots = mobileCardDots.querySelectorAll(".mobile-card__dot");
  if (!dots.length) return;
  const cards = mobileCardPhotos.querySelectorAll(".artwork-card");
  const center = mobileCardPhotos.scrollLeft + mobileCardPhotos.offsetWidth / 2;
  let closest = 0, minDist = Infinity;
  cards.forEach((card, i) => {
    const dist = Math.abs(card.offsetLeft + card.offsetWidth / 2 - center);
    if (dist < minDist) { minDist = dist; closest = i; }
  });
  dots.forEach((dot, i) => dot.classList.toggle("is-active", i === closest));
}, { passive: true });

mobileCardPrev.addEventListener("click", () => {
  if (currentRoomIndex === 0) backToMenu();
  else performTransition(currentRoomIndex - 1);
});

mobileCardNext.addEventListener("click", handleNextAction);

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
    const caption = tl(artwork, "caption");
    const captionAttr = caption ? ` data-lightbox-caption="${caption.replace(/"/g, "&quot;")}"` : "";
    const altText = `${tl(room, "title")} — ${t("photoLabel", index + 1)}`;
    const lightboxAttrs = artwork.src
      ? `data-lightbox-src="${artwork.src}" data-lightbox-alt="${altText}"${captionAttr}`
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
    const caption = tl(artwork, "caption");
    const captionAttr = caption ? `\n        data-lightbox-caption="${caption.replace(/"/g, "&quot;")}"` : "";
    const altText = `${tl(room, "title")} — ${t("photoLabel", index + 1)}`;
    return `
      <button
        class="artwork__zoom-btn"
        style="left:${bx}%;top:${by}%;"
        data-lightbox-src="${artwork.src}"
        data-lightbox-alt="${altText}"${captionAttr}
        type="button"
      >
        <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">
          <circle cx="11" cy="11" r="7"/><path d="M21 21l-4.35-4.35"/>
        </svg>
        ${t("lookCloser")}
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
  progressLabel.textContent = t("roomProgress", pos, nonCorridorRooms.length);
  progressValue.style.width = `${(pos / nonCorridorRooms.length) * 100}%`;
}

function splitRoomText(text) {
  const normalized = text.trim();
  const sentenceMatch = normalized.match(/^(.+?[.!?])(?:\s|$)/s);
  if (!sentenceMatch) return { summary: normalized, details: "" };
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
              <p class="menu-area__label">${tl(area, "label")}</p>
              <h2 class="menu-area__title">${tl(area, "title")}</h2>
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
                    <span class="room-list__title">${tl(item, "text")}</span>
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

function renderMuseumMap() {
  if (!menuMap) return;

  const desktopSpots = [
    { i: 0, x: 5, y: 36, w: 12.7, h: 15.5 },
    { i: 1, x: 17.7, y: 36, w: 12.7, h: 15.5 },
    { i: 2, x: 5, y: 51.5, w: 12.7, h: 15 },
    { i: 3, x: 17.7, y: 51.5, w: 12.7, h: 15 },
    { i: 5, x: 33.8, y: 36, w: 9.2, h: 20 },
    { i: 6, x: 43.2, y: 36, w: 10.6, h: 20 },
    { i: 7, x: 54, y: 36, w: 10.2, h: 20 },
    { i: 9, x: 67.7, y: 36, w: 8.5, h: 20 },
    { i: 10, x: 76.3, y: 36, w: 9, h: 20 },
    { i: 11, x: 85.4, y: 36, w: 8.1, h: 20 }
  ];
  const mobileSpots = [
    { i: 9, x: 8, y: 16.5, w: 27, h: 14 },
    { i: 10, x: 35, y: 16.5, w: 29, h: 14 },
    { i: 11, x: 64, y: 16.5, w: 28, h: 14 },
    { i: 5, x: 8, y: 47.5, w: 27, h: 14 },
    { i: 6, x: 35, y: 47.5, w: 29, h: 14 },
    { i: 7, x: 64, y: 47.5, w: 28, h: 14 },
    { i: 0, x: 8, y: 75.5, w: 41, h: 7.5 },
    { i: 1, x: 49, y: 75.5, w: 43, h: 7.5 },
    { i: 2, x: 8, y: 83, w: 41, h: 7.5 },
    { i: 3, x: 49, y: 83, w: 43, h: 7.5 }
  ];

  const spotButtons = (spots) => spots.map((s) => {
    const title = rooms[s.i] ? tl(rooms[s.i], "title") : "";
    return `<button class="menu-map__hotspot" type="button" data-room-index="${s.i}"
      style="left:${s.x}%;top:${s.y}%;width:${s.w}%;height:${s.h}%"
      aria-label="${t("goToRoomLabel", title)}"></button>`;
  }).join("");

  menuMap.innerHTML = `
    <p class="menu-map__title">${t("mapTitle")}</p>
    <div class="menu-map__frame">
      <div class="menu-map__stage">
        <picture>
          <source srcset="./assets/museum/mappa-verticale1.webp" media="(orientation: portrait) and (max-width: 700px)" />
          <img class="menu-map__img" src="./assets/museum/mappa1.webp" alt="${t("mapAlt")}" loading="lazy" />
        </picture>
        <div class="menu-map__hotspots menu-map__hotspots--desktop">${spotButtons(desktopSpots)}</div>
        <div class="menu-map__hotspots menu-map__hotspots--mobile">${spotButtons(mobileSpots)}</div>
      </div>
    </div>`;

  menuMap.querySelectorAll(".menu-map__hotspot").forEach((btn) => {
    btn.addEventListener("click", () => openTour(Number(btn.dataset.roomIndex)));
  });
}

function renderRoom(index) {
  const room = rooms[index];
  const isCorridor = Boolean(room.corridor);

  currentRoomIndex = index;

  if (room.exit) {
    exitOverlay.style.setProperty("--exit-bg", `url("${room.backdrop}")`);
    exitOverlay.style.setProperty("--exit-bg-mobile", `url("${room.backdropMobile || room.backdrop}")`);
    exitShareFeedback.hidden = true;
    exitOverlay.classList.remove("hidden");
    updateProgress(index);
    return;
  }
  exitOverlay.classList.add("hidden");

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
    if (room.donate) {
      nextRoomButton.textContent = t("donate");
      nextRoomButton.dataset.mode = "donate";
      corridorSign.hidden = true;
    } else {
      nextRoomButton.textContent = t("enterRoom");
      nextRoomButton.dataset.mode = "next";
      corridorEyebrow.textContent = tl(room, "eyebrow");
      corridorTitle.textContent = tl(room, "nextTitle");
      corridorSign.hidden = false;
    }
  } else {
    corridorSign.hidden = true;
    roomCopyBox.hidden = false;
    roomIndex.textContent = t("roomIndex", room.hall);
    roomTitle.textContent = tl(room, "title");
    const { summary, details } = splitRoomText(tl(room, "text"));
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
      nextRoomButton.textContent = t("donate");
      nextRoomButton.dataset.mode = "donate";
    } else {
      nextRoomButton.textContent = t("nextRoom");
      nextRoomButton.dataset.mode = "next";
    }
  }

  prevRoomButton.disabled = false;
  updateProgress(index);
  renderMobileCard(index, isCorridor);
}

function renderMobileCard(index, isCorridor) {
  const room = rooms[index];
  const mobileBackdrop = room.backdropMobile || room.backdrop.replace(/\.webp$/, "-mobile.webp");
  const heroSrc = isCorridor ? (room.backdropMobile || mobileBackdrop) : mobileBackdrop;
  mobileCardHero.style.backgroundImage = `url("${heroSrc}")`;
  mobileCard.classList.toggle("mobile-card--corridor", isCorridor);

  if (isCorridor) {
    mobileCardIndex.textContent = tl(room, "eyebrow") || (currentLang === "en" ? "Corridor" : "Corridoio");
    mobileCardTitle.textContent = tl(room, "nextTitle");
    mobileCardPhotos.innerHTML = "";
    mobileCardSummary.textContent = "";
    mobileCardDetails.textContent = "";
    mobileCardDetails.hidden = true;
    mobileCardToggle.hidden = true;
    mobileCardPhotoNav.hidden = true;
  } else {
    mobileCardIndex.textContent = t("roomIndex", room.hall);
    mobileCardTitle.textContent = tl(room, "title");

    const photos = (room.artworks || []).filter(a => a.src);
    mobileCardDots.innerHTML = photos.length > 1
      ? photos.map((_, i) => `<span class="mobile-card__dot${i === 0 ? " is-active" : ""}"></span>`).join("")
      : "";

    mobileCardPhotos.innerHTML = photos.map((a, i) => {
      const caption = tl(a, "caption");
      const captionAttr = caption ? ` data-lightbox-caption="${caption.replace(/"/g, "&quot;")}"` : "";
      const altText = `${tl(room, "title")} — ${t("photoLabel", i + 1)}`;
      return `<button class="artwork-card" data-lightbox-src="${a.src}" data-lightbox-alt="${altText}"${captionAttr} type="button">
        <img src="${a.src}" alt="" loading="lazy">
        <span class="artwork-card__hint" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.35-4.35"/></svg>
          ${t("lookCloser")}
        </span>
      </button>`;
    }).join("");

    mobileCardPhotos.scrollLeft = 0;
    requestAnimationFrame(() => { mobileCardPhotos.scrollLeft = 0; });

    mobileCardPhotoNav.hidden = photos.length <= 1;
    const scrollHintEl = document.getElementById("mobileCardScrollHint");
    if (scrollHintEl) scrollHintEl.hidden = photos.length < 3;

    const { summary, details } = splitRoomText(tl(room, "text") || "");
    mobileCardSummary.textContent = summary;
    mobileCardDetails.textContent = details;
    mobileCardDetails.hidden = true;
    mobileCardToggle.classList.remove("is-open");
    mobileCardToggleLabel.textContent = t("readMore");
    mobileCardToggle.hidden = !details;
  }

  mobileCardPrev.disabled = false;
  if (room.donate) {
    mobileCardNextLabel.textContent = t("donate");
  } else if (isCorridor) {
    mobileCardNextLabel.textContent = t("enterRoom");
  } else if (index >= rooms.length - 1) {
    mobileCardNextLabel.textContent = t("end");
  } else {
    mobileCardNextLabel.textContent = t("next");
  }

  const pos = nonCorridorRooms.indexOf(room) + 1;
  mobileCardCounter.textContent = isCorridor ? "" : `${pos} / ${nonCorridorRooms.length}`;

  const body = mobileCard.querySelector(".mobile-card__body");
  if (body) body.scrollTop = 0;
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
  exitOverlay.classList.add("hidden");
  menuScreen.classList.remove("hidden");
  if (menuPages) menuPages.scrollTo({ left: 0 });
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

// ── Lingua ────────────────────────────────────────────────────────────────────

function applyLang() {
  document.documentElement.lang = currentLang;

  langItaBtn.setAttribute("aria-pressed", currentLang === "it" ? "true" : "false");
  langItaBtn.classList.toggle("is-active", currentLang === "it");
  langEngBtn.setAttribute("aria-pressed", currentLang === "en" ? "true" : "false");
  langEngBtn.classList.toggle("is-active", currentLang === "en");

  // Menu card — guida
  const guideEyebrow = document.querySelector(".menu-card--guide .menu-card__eyebrow");
  if (guideEyebrow) guideEyebrow.textContent = t("menuEyebrow");

  const menuTitleEl = document.getElementById("menuTitle");
  if (menuTitleEl) menuTitleEl.innerHTML = t("menuHeadline");

  const introParagraphs = document.querySelectorAll(".menu-intro > .menu-card__intro");
  if (introParagraphs[0]) introParagraphs[0].textContent = t("introP1");
  if (introParagraphs[1]) introParagraphs[1].textContent = t("introP2");

  const detailsParagraphs = document.querySelectorAll(".menu-intro__details .menu-card__intro");
  if (detailsParagraphs[0]) detailsParagraphs[0].textContent = t("introD1");
  if (detailsParagraphs[1]) detailsParagraphs[1].textContent = t("introD2");

  if (menuIntroToggleLabel) {
    menuIntroToggleLabel.textContent = menuIntroToggle.classList.contains("is-open")
      ? t("showLess") : t("readMore");
  }

  const guideTitle = document.querySelector(".menu-guide__title");
  if (guideTitle) guideTitle.textContent = t("guideTitle");

  const guideText = document.querySelector(".menu-guide__text");
  if (guideText) guideText.textContent = t("guideText");

  if (startTourButton) startTourButton.textContent = t("startTour");
  if (showRoomsButton) showRoomsButton.textContent = t("showRooms");

  const donateSpan = menuDonateButton.querySelector("span:last-child");
  if (donateSpan) donateSpan.textContent = t("helpProject");

  const backGuideSpan = backToGuideButton ? backToGuideButton.querySelector("span") : null;
  if (backGuideSpan) backGuideSpan.textContent = t("welcome");

  const areasEyebrow = document.querySelector(".menu-card--areas .menu-card__eyebrow");
  if (areasEyebrow) areasEyebrow.textContent = t("areasTitle");

  const visitTimeSpan = document.querySelector(".menu-meta-info span:last-child");
  if (visitTimeSpan) visitTimeSpan.textContent = t("visitTime");

  // Tour screen static
  if (backToMenuButton) backToMenuButton.setAttribute("aria-label", t("backToMenu"));

  const prevEyebrow = document.querySelector(".wall-nav__eyebrow");
  if (prevEyebrow) prevEyebrow.textContent = t("prevRoom");
  prevRoomButton.setAttribute("aria-label", t("prevRoom"));
  mobileCardPrev.setAttribute("aria-label", t("prevRoom"));

  const copyHintText = document.querySelector(".room-copy__hint-text");
  if (copyHintText) copyHintText.textContent = t("readMore");

  const scrollHintEl = document.getElementById("mobileCardScrollHint");
  if (scrollHintEl) {
    scrollHintEl.innerHTML = `<span aria-hidden="true">‹</span> ${t("scrollHint")} <span aria-hidden="true">›</span>`;
  }

  // Exit overlay
  const exitTitleEl = document.querySelector(".exit-overlay__title");
  if (exitTitleEl) exitTitleEl.textContent = t("exitTitle");

  const exitShareSpan = exitShareButton.querySelector("span");
  if (exitShareSpan) exitShareSpan.textContent = t("share");

  const exitDonateSpan = exitDonateButton.querySelector("span");
  if (exitDonateSpan) exitDonateSpan.textContent = t("supportProject");

  const exitMenuSpan = exitMenuButton.querySelector("span");
  if (exitMenuSpan) exitMenuSpan.textContent = t("mainMenu");

  if (exitShareFeedback) exitShareFeedback.textContent = t("linkCopied");

  // Lightbox
  lightbox.setAttribute("aria-label", t("enlargedPhoto"));
  lightboxClose.setAttribute("aria-label", t("closePhoto"));

  // Re-render dynamic content
  renderRoomList();
  renderMuseumMap();

  if (!tourScreen.classList.contains("hidden")) {
    renderRoom(currentRoomIndex);
  }
}

function setLang(lang) {
  if (lang === currentLang) return;
  currentLang = lang;
  localStorage.setItem("museo-lang", lang);
  applyLang();
}

// ── Event listeners ───────────────────────────────────────────────────────────

if (langItaBtn) langItaBtn.addEventListener("click", () => setLang("it"));
if (langEngBtn) langEngBtn.addEventListener("click", () => setLang("en"));

startTourButton.addEventListener("click", () => openTour(0));
backToMenuButton.addEventListener("click", backToMenu);

exitDonateButton.href = GOFUNDME_URL;
exitMenuButton.addEventListener("click", backToMenu);
exitShareButton.addEventListener("click", async () => {
  const shareData = {
    title: "Museo Malawi",
    text: t("shareText"),
    url: window.location.origin + window.location.pathname
  };
  if (navigator.share) {
    try { await navigator.share(shareData); } catch (err) { /* annullata */ }
    return;
  }
  try {
    await navigator.clipboard.writeText(shareData.url);
    exitShareFeedback.hidden = false;
    setTimeout(() => { exitShareFeedback.hidden = true; }, 2600);
  } catch (err) {
    window.prompt(t("copyPrompt"), shareData.url);
  }
});

prevRoomButton.addEventListener("click", () => {
  if (currentRoomIndex === 0) { backToMenu(); return; }
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

// ── Init ──────────────────────────────────────────────────────────────────────

renderRoomList();
renderMuseumMap();
renderRoom(0);
applyLang();

if (window.location.hash === "#sala1") {
  openTour(0);
}
