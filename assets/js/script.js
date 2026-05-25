const producten = [
  {
    id: 1,
    naam: "Dior Sauvage",
    merk: "Dior",
    ml: 100,
    prijs: 125.68,
    oudePrijs: 157.10,
    img: "images/product1.jpg",
    imgs: ["images/Dior4.jpg", "images/Dior2.webp", "images/dior3.jpg", "images/dior.webp"],
    geur: "Kruidig & Hout",
    beschrijving: "Dior Sauvage is een van de meest iconische herenparfums ter wereld. Bergamot en ambroxan zorgen voor een krachtige maar verfijnde geur. Perfect voor elke gelegenheid — van kantoor tot avond uit.",
    topNoten: "Bergamot, Peper",
    hartNoten: "Lavendel, Geranium",
    basisNoten: "Ambroxan, Ceder",
    reviews: [
      { naam: "Thomas V.", score: 5, tekst: "Beste parfum ooit gekocht. Iedereen vraagt ernaar.", datum: "12 mrt 2025" },
      { naam: "Kevin B.", score: 4, tekst: "Geweldige geur, houdt de hele dag. Aanrader.", datum: "3 apr 2025" },
      { naam: "Martijn L.", score: 5, tekst: "Al mijn tweede fles. Gewoon een klassieker.", datum: "18 jan 2025" }
    ]
  },
  {
    id: 2,
    naam: "Bleu de Chanel",
    merk: "Chanel",
    ml: 100,
    prijs: 148,
    oudePrijs: 155,
    img: "images/product2.jpg",
    imgs: ["images/bleu1.avif", "images/bleU2.jpg", "images/bleu3.jpg", "images/bleu4.jpg"],
    geur: "Hout & Citrus",
    beschrijving: "Bleu de Chanel is tijdloos en elegant. Een aromatische houtachtige geur met frisse citrus die overgaat in warme sandelhout basisnoten. Voor de zelfverzekerde, moderne man.",
    topNoten: "Citroen, Munt, Bergamot",
    hartNoten: "Gember, Kardemom",
    basisNoten: "Sandelhout, Patchouli",
    reviews: [
      { naam: "Roel J.", score: 5, tekst: "Klassieker voor een reden. Draag ik al 3 jaar.", datum: "8 feb 2025" },
      { naam: "Sam K.", score: 4, tekst: "Heel fijn voor kantoor, niet te zwaar.", datum: "22 dec 2024" }
    ]
  },
  {
    id: 3,
    naam: "Le Male",
    merk: "Jean Paul Gaultier",
    ml: 125,
    prijs: 135,
    oudePrijs: 150,
    img: "images/product.jpg",
    imgs: ["images/le_male1.avif", "images/le_male2.jpg", "images/le_male3.jpg", "images/le_male4.jpg"],
    geur: "Oriëntaals & Zoet",
    beschrijving: "Jean Paul Gaultier Le Male is een legende. Lavendel, munt en vanille vormen een unieke herkenbare geur. De iconische fles in de vorm van een mannentorso maakt het compleet.",
    topNoten: "Lavendel, Munt, Kardemom",
    hartNoten: "Kaneel, Cumin",
    basisNoten: "Vanille, Amber, Muskus",
    reviews: [
      { naam: "Daan P.", score: 5, tekst: "Iconisch. Elke keer complimenten.", datum: "1 mei 2025" },
      { naam: "Lars M.", score: 3, tekst: "Iets te zoet voor mij maar ruikt geweldig.", datum: "14 feb 2025" },
      { naam: "Bram T.", score: 5, tekst: "Tweede fles al. Blijft een topper.", datum: "9 mrt 2025" }
    ]
  },
  {
    id: 4,
    naam: "YSL Y",
    merk: "Yves Saint Laurent",
    ml: 100,
    prijs: 128.80,
    oudePrijs: 161,
    img: "images/product4.jpg",
    imgs: ["images/product4.jpg", "images/YSL2.webp", "images/YSL4.avif", "images/YSL.jpg"],
    geur: "Fris & Modern",
    beschrijving: "YSL Y is de geur van de ambitieuze man. Fris en krachtig met bergamot en appel, overgaand in gember en salie, op een basis van ceder en amber.",
    topNoten: "Bergamot, Appel, Grapefruit",
    hartNoten: "Gember, Salie",
    basisNoten: "Ceder, Amber, Suède",
    reviews: [
      { naam: "Julian H.", score: 4, tekst: "Heel fresh, goed voor lente en zomer.", datum: "20 apr 2025" },
      { naam: "Niels V.", score: 5, tekst: "Beste aankoop van het jaar.", datum: "7 jan 2025" }
    ]
  },
  {
    id: 5,
    naam: "Black Orchid",
    merk: "Tom Ford",
    ml: 100,
    prijs: 195,
    oudePrijs: 220,
    img: "images/blackorcid2.avif",
    imgs: ["images/blackorcid2.avif", "images/blackorcid1.webp", "images/blackorcid3.jpg", "images/blackorcid4.jpg"],
    geur: "Bloemig & Donker",
    beschrijving: "Tom Ford Black Orchid is sensueel en mysterieus. Donkere bloemnoten, truffel en zwarte orchidee resulteren in een van de meest bijzondere luxe parfums ter wereld.",
    topNoten: "Zwarte Truffel, Ylang Ylang",
    hartNoten: "Zwarte Orchidee, Lotus",
    basisNoten: "Patchouli, Vanille, Sandelhout",
    reviews: [
      { naam: "Sophie A.", score: 5, tekst: "Uniek en mysterieus. Draag ik s avonds.", datum: "3 mrt 2025" },
      { naam: "Rick W.", score: 4, tekst: "Heel anders, moet je even aan wennen maar dan ben je verkocht.", datum: "15 feb 2025" }
    ]
  },
  {
    id: 6,
    naam: "Aventus",
    merk: "Creed",
    ml: 100,
    prijs: 285,
    oudePrijs: 320,
    img: "images/CreedAv1.webp",
    imgs: ["images/CreedAv1.webp", "images/CreedAv2.png", "images/CreedAv3.jpg", "images/CreedAv4.jpg"],
    geur: "Fruitig & Rook",
    beschrijving: "Creed Aventus is het parfum van koningen. Ananas, berkboom en muskus vormen een complexe rokerige geur. Al jaren de favoriet van topmanagers en celebrities.",
    topNoten: "Ananas, Appel, Berkboom",
    hartNoten: "Roos, Droge Vruchten",
    basisNoten: "Muskus, Oakmoss, Ambergris",
    reviews: [
      { naam: "Alex R.", score: 5, tekst: "The king of fragrances. Meer te zeggen hoeft niet.", datum: "29 apr 2025" },
      { naam: "Pieter D.", score: 5, tekst: "Iedereen vraagt me wat ik op heb. Zegt genoeg.", datum: "2 feb 2025" }
    ]
  },
  {
    id: 7,
    naam: "1 Million",
    merk: "Paco Rabanne",
    ml: 100,
    prijs: 89,
    oudePrijs: 110,
    img: "images/1mil1.webp",
    imgs: ["images/1mil1.webp", "images/1mil2.jpg", "images/1mil4.jpg", "images/1mil3.webp"],
    geur: "Zoet & Leer",
    beschrijving: "Paco Rabanne 1 Million, een van de bestverkochte parfums ter wereld. Bloedsinaasappel, kaneel en leer maken het warm, sensueel en onvergetelijk.",
    topNoten: "Bloedsinaasappel, Munt",
    hartNoten: "Kaneel, Roos",
    basisNoten: "Leer, Amber, Wit Hout",
    reviews: [
      { naam: "Mike J.", score: 4, tekst: "Erg populair en terecht. Goede prijs.", datum: "11 apr 2025" },
      { naam: "Sven B.", score: 5, tekst: "Draag dit al jaren. Altijd goed.", datum: "8 dec 2024" }
    ]
  },
  {
    id: 8,
    naam: "Acqua di Giò",
    merk: "Giorgio Armani",
    ml: 100,
    prijs: 95,
    oudePrijs: 115,
    img: "images/Aqua1.jpg",
    imgs: ["images/Aqua1.jpg", "images/Aqua2.jpg", "images/Aqua3.webp", "images/Aqua4.jpg"],
    geur: "Aquatisch & Fris",
    beschrijving: "Giorgio Armani Acqua di Giò is geïnspireerd op de zon en zee van Pantelleria. Licht, schoon en tijdloos — synoniem voor zomers aan de Middellandse Zee.",
    topNoten: "Sinaasappel, Citroen, Bergamot",
    hartNoten: "Jasmijn, Cactus",
    basisNoten: "Ceder, Patchouli, Witte Muskus",
    reviews: [
      { naam: "Finn S.", score: 4, tekst: "Perfecte zomergeur. Elk jaar opnieuw.", datum: "1 jun 2024" },
      { naam: "Daniel V.", score: 5, tekst: "Lekker, fris, betaalbaar. Gewoon goed.", datum: "14 jul 2024" }
    ]
  },
  {
    id: 9,
    naam: "Oud Wood",
    merk: "Tom Ford",
    ml: 50,
    prijs: 220,
    oudePrijs: 260,
    img: "images/Oudwood1.webp",
    imgs: ["images/Oudwood1.webp", "images/Oudwood2.jpg", "images/Oudwood3.jpg", "images/Oudwood4.webp"],
    geur: "Hout & Oud",
    beschrijving: "Tom Ford Oud Wood combineert zeldzame oud met rozenhout, kardemom en sandelhout. Een warme exotische geur voor wie houdt van echte luxe.",
    topNoten: "Rozenhout, Kardemom",
    hartNoten: "Oud, Sandelhout",
    basisNoten: "Vetiver, Amber",
    reviews: [
      { naam: "Omar K.", score: 5, tekst: "Meest luxueuze geur in mijn collectie.", datum: "20 mrt 2025" },
      { naam: "Lisa B.", score: 5, tekst: "Draag ik s winters. Absoluut geweldig.", datum: "5 dec 2024" }
    ]
  },
  {
    id: 10,
    naam: "Polo Black",
    merk: "Ralph Lauren",
    ml: 125,
    prijs: 75,
    oudePrijs: 95,
    img: "images/Poloblack2.webp",
    imgs: ["images/Poloblack2.webp", "images/Poloblack1.jpg", "images/Poloblack3.jpg", "images/Poloblack4.jpg"],
    geur: "Hout & Kruidig",
    beschrijving: "Ralph Lauren Polo Black is een diepblauwe geur voor de nacht. Mandarijn, mango en tijm openen fris, gevolgd door lychee en salie, met hout en amber als basis.",
    topNoten: "Mandarijn, Mango, Tijm",
    hartNoten: "Lychee, Salie",
    basisNoten: "Teak Hout, Amber",
    reviews: [
      { naam: "Rick O.", score: 4, tekst: "Goede prijs-kwaliteit. Lekker voor avond.", datum: "9 apr 2025" },
      { naam: "Dave P.", score: 4, tekst: "Onderschat parfum. Echt lekker.", datum: "3 feb 2025" }
    ]
  },
  {
    id: 11,
    naam: "Fahrenheit",
    merk: "Dior",
    ml: 100,
    prijs: 110,
    oudePrijs: 135,
    img: "images/fahrenheit1.webp",
    imgs: ["images/fahrenheit1.webp", "images/fahrenheit2.webp", "images/fahrenheit3.webp", "images/fahrenheit4.jpg"],
    geur: "Leer & Benzine",
    beschrijving: "Dior Fahrenheit is een durf geur. Benzine, leer en violet combineren tot een onmiskenbare avontuurlijke geur. Niets voor iedereen — maar voor de drager: onvergetelijk.",
    topNoten: "Violetblad, Bergamot",
    hartNoten: "Leer, Nutmeg",
    basisNoten: "Benzine, Ceder, Muskus",
    reviews: [
      { naam: "Joris V.", score: 5, tekst: "Vintage klassieker. Totaal anders dan alles.", datum: "7 mrt 2025" },
      { naam: "Anne-Marie K.", score: 4, tekst: "Ruikt anders maar ik ben er fan van.", datum: "18 jan 2025" }
    ]
  },
  {
    id: 12,
    naam: "L'Homme IDEALE",
    merk: "Yves Saint Laurent",
    ml: 100,
    prijs: 115,
    oudePrijs: 140,
    img: "images/L'Homme1.jpg",
    imgs: ["images/L'Homme1.jpg", "images/L'Homme2.jpg", "images/L'Homme3.jpg", "images/L'Homme4.jpg"],
    geur: "Fris & Elegant",
    beschrijving: "YSL L'Homme is verfijnd en modern. Gember, basilicum en witte ceder vormen een elegante frisse geur voor de man die stijl serieus neemt.",
    topNoten: "Gember, Bergamot, Basilicum",
    hartNoten: "Witte Ceder, Violet",
    basisNoten: "Vetiver, Tonkaboon",
    reviews: [
      { naam: "Paul D.", score: 5, tekst: "Mijn go-to parfum. Altijd complimenten.", datum: "15 apr 2025" },
      { naam: "Emma T.", score: 4, tekst: "Voor mijn vriend gekocht. Die draagt het dagelijks.", datum: "22 mrt 2025" }
    ]
  },
  {
    id: 13,
    naam: "Invictus",
    merk: "Paco Rabanne",
    ml: 100,
    prijs: 82,
    oudePrijs: 98,
    img: "images/invictus.jpg",
    imgs: ["images/invictus.jpg", "images/invictus2.webp", "images/invictus3.avif", "images/invictus4.avif"],
    geur: "Fris & Sportief",
    beschrijving: "Paco Rabanne Invictus is de geur van de overwinnaar. Frisse grapefruit, zeenoten en hout-amber voor de man die zijn stempel drukt.",
    topNoten: "Grapefruit, Zee, Laurier",
    hartNoten: "Jasmijn, Guaiac Hout",
    basisNoten: "Eikenmoss, Ambergris",
    reviews: [
      { naam: "Stan J.", score: 5, tekst: "Frisse topper. Draag ik het hele jaar door.", datum: "6 apr 2025" },
      { naam: "Wesley B.", score: 4, tekst: "Goed voor sport én kantoor. Veelzijdig.", datum: "10 jan 2025" }
    ]
  },
  {
    id: 14,
    naam: "Boss Bottled",
    merk: "Hugo Boss",
    ml: 100,
    prijs: 72,
    oudePrijs: 88,
    img: "images/boss_bottled.jpg",
    imgs: ["images/boss_bottled1.avif", "images/boss_bottled2.jpg", "images/boss_bottled3.webp", "images/boss_bottled4.webp"],
    geur: "Appel & Hout",
    beschrijving: "Hugo Boss Bottled is een tijdloze klassieker. Appel, kaneel en sandelhout maken het een veelzijdige zakelijke geur die dag en nacht werkt.",
    topNoten: "Appel, Citroen, Bergamot",
    hartNoten: "Kaneel, Geranium",
    basisNoten: "Sandelhout, Ceder, Vanille",
    reviews: [
      { naam: "Frank M.", score: 4, tekst: "Mijn vaders parfum nu ook het mijne.", datum: "2 mei 2025" },
      { naam: "Koen L.", score: 5, tekst: "Goedkoop voor de kwaliteit. Top deal.", datum: "29 mrt 2025" }
    ]
  },
  {
    id: 15,
    naam: "Eros",
    merk: "Versace",
    ml: 100,
    prijs: 98,
    oudePrijs: 118,
    img: "images/eros1.webp",
    imgs: ["images/eros1.webp", "images/eros2.webp", "images/eros3.avif", "images/eros4.jpg"],
    geur: "Fris & Mint",
    beschrijving: "Versace Eros is krachtig en sensueel. Munt, appel en citroen openen verfrissend, gevolgd door rozenblad en geranium. Tonka en vanille geven een warme afsluiting.",
    topNoten: "Munt, Groen Appel, Citroen",
    hartNoten: "Rozenblad, Geranium",
    basisNoten: "Tonkaboon, Eikenmoss, Vanille",
    reviews: [
      { naam: "Ruben A.", score: 5, tekst: "Zomergeur maar ook lente/herfst. Super fris.", datum: "14 apr 2025" },
      { naam: "Jade S.", score: 5, tekst: "Ruikt zo lekker op mijn vriend. Aanrader!", datum: "5 mrt 2025" }
    ]
  },
  {
    id: 16,
    naam: "La Nuit de L'Homme",
    merk: "Yves Saint Laurent",
    ml: 100,
    prijs: 119,
    oudePrijs: 145,
    img: "images/lanuit1.jpg",
    imgs: ["images/lanuit1.jpg", "images/lanuit2.jpg", "images/lanuit3.webp", "images/lanuit4.avif"],
    geur: "Oriëntaals & Nacht",
    beschrijving: "YSL La Nuit de L'Homme is de perfecte avondgeur. Kardemom, ceder en lavendel creëren een sensuele mysterieuze sfeer.",
    topNoten: "Kardemom",
    hartNoten: "Ceder, Lavendel",
    basisNoten: "Witte Muskus, Carvi",
    reviews: [
      { naam: "Tim V.", score: 5, tekst: "Beste avondparfum die ik ken.", datum: "18 apr 2025" },
      { naam: "Sarah L.", score: 5, tekst: "Mijn vriend draagt dit nu altijd.", datum: "23 feb 2025" }
    ]
  },
  {
    id: 17,
    naam: "Dylan Blue",
    merk: "Versace",
    ml: 100,
    prijs: 88,
    oudePrijs: 105,
    img: "images/dylan2.avif",
    imgs: ["images/dylan1.jpg", "images/dylan2.avif", "images/dylan3.jpg", "images/dylan4.webp"],
    geur: "Aquatisch & Hout",
    beschrijving: "Versace Dylan Blue is een frisse mediterrane geur. Vijgenblad, ambroxan en papyrus hout geven het een moderne schone stijl.",
    topNoten: "Vijgenblad, Watermeloen",
    hartNoten: "Viool, Patchouli",
    basisNoten: "Ambroxan, Papyrus Hout",
    reviews: [
      { naam: "Kevin D.", score: 4, tekst: "Beetje vergelijkbaar met Sauvage maar goedkoper.", datum: "4 mei 2025" },
      { naam: "Robin S.", score: 5, tekst: "Heerlijk fris. Draag ik de hele zomer.", datum: "16 apr 2025" }
    ]
  },
  {
    id: 18,
    naam: "Baccarat Rouge 540",
    merk: "Maison Francis Kurkdjian",
    ml: 70,
    prijs: 340,
    oudePrijs: 380,
    img: "images/Maison Francis Kurkdjian4.avif",
    imgs: ["images/Maison Francis Kurkdjian1.png", "images/Maison Francis Kurkdjian2.webp", "images/Maison Francis Kurkdjian3.jpg", "images/Maison Francis Kurkdjian4.avif"],
    geur: "Amber & Bloemig",
    beschrijving: "Baccarat Rouge 540 is het meest gekopieerde parfum ter wereld. Jasmijn, saffraan en amber-hout scheppen een warme fluweelachtige signatuur die uren aanhoudt.",
    topNoten: "Jasmijn, Saffraan",
    hartNoten: "Amberwood, Ambergris",
    basisNoten: "Cederhout, Fir Resin",
    reviews: [
      { naam: "Yasmine B.", score: 5, tekst: "Duur maar elke euro waard. Iedereen wil weten wat ik draag.", datum: "25 apr 2025" },
      { naam: "Noor A.", score: 5, tekst: "Beste parfum dat ik ooit heb gekocht. Punt.", datum: "12 mrt 2025" }
    ]
  },
  {
    id: 19,
    naam: "Spicebomb",
    merk: "Viktor & Rolf",
    ml: 90,
    prijs: 98,
    oudePrijs: 120,
    img: "images/spicebomb1.jpg",
    imgs: ["images/spicebomb1.jpg", "images/spicebomb2.jpg", "images/spicebomb3.avif", "images/spicebomb4.webp"],
    geur: "Kruidig & Tabak",
    beschrijving: "Viktor & Rolf Spicebomb ontploft als een kruidenbom. Kaneel, saffraan, tabak en leer leiden tot een explosief warm en sensueel parfum.",
    topNoten: "Bergamot, Grapefruit",
    hartNoten: "Saffraan, Kaneel",
    basisNoten: "Tabak, Leer, Vetiver",
    reviews: [
      { naam: "Max T.", score: 5, tekst: "De naam zegt het al. Explodeert van de geur. Top!", datum: "30 apr 2025" },
      { naam: "Lukas B.", score: 4, tekst: "Herfst/winter parfum. Heel warm en vol.", datum: "19 nov 2024" }
    ]
  },
  {
    id: 20,
    naam: "Terre d'Hermès",
    merk: "Hermès",
    ml: 100,
    prijs: 145,
    oudePrijs: 170,
    img: "images/Hermès1.jpg",
    imgs: ["images/Hermès1.jpg", "images/Hermès2.jpg", "images/Hermès3.png", "images/Hermès4.webp"],
    geur: "Aarde & Citrus",
    beschrijving: "Hermès Terre d'Hermès verbindt de aarde met de lucht. Sinaasappel, ceder en flint geven een uniek mineraal-houtachtig profiel. Tijdloos verfijnd.",
    topNoten: "Sinaasappel, Grapefruit",
    hartNoten: "Peper, Palissanderhout",
    basisNoten: "Flint, Ceder, Vetiver",
    reviews: [
      { naam: "Stef H.", score: 5, tekst: "Meest volwassen geur in mijn kast. Prachtig.", datum: "6 mei 2025" },
      { naam: "Claudia V.", score: 5, tekst: "Mijn man draagt dit. Vind het zo heerlijk.", datum: "20 mrt 2025" }
    ]
  }
]


// cart functies - alles via localStorage

function getCart() {
  try {
    return JSON.parse(localStorage.getItem("cart") || "[]")
  } catch(e) {
    return []
  }
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart))
}

function addToCart(id, aantal) {
  aantal = aantal || 1
  const p = producten.find(x => x.id === id)
  if (!p) return

  const cart = getCart()
  const bestaand = cart.find(x => x.id === id)

  if (bestaand) {
    bestaand.aantal += aantal
  } else {
    cart.push({ id: p.id, naam: p.naam, merk: p.merk, prijs: p.prijs, ml: p.ml, img: p.img, aantal })
  }

  saveCart(cart)
  cartBadgeUpdate()
  showToast(p.naam + " toegevoegd ✓")
}

function removeFromCart(id) {
  saveCart(getCart().filter(x => x.id !== id))
  cartBadgeUpdate()
}

function updateAantal(id, nieuw) {
  if (nieuw <= 0) { removeFromCart(id); return }
  const cart = getCart()
  const item = cart.find(x => x.id === id)
  if (item) { item.aantal = nieuw; saveCart(cart) }
  cartBadgeUpdate()
}

function clearCart() {
  localStorage.removeItem("cart")
  cartBadgeUpdate()
}

function cartTotaal() {
  return getCart().reduce((s, x) => s + x.prijs * x.aantal, 0)
}

function cartAantal() {
  return getCart().reduce((s, x) => s + x.aantal, 0)
}

function cartBadgeUpdate() {
  const badge = document.getElementById("cartCount")
  if (badge) badge.textContent = cartAantal()
}

function euro(getal) {
  return "€" + getal.toFixed(2).replace(".", ",")
}

function korting(prijs, oud) {
  if (!oud || oud <= prijs) return 0
  return Math.round(((oud - prijs) / oud) * 100)
}

function sterren(score) {
  let s = ""
  for (let i = 1; i <= 5; i++) {
    s += '<span class="' + (i <= score ? "ster-vol" : "ster-leeg") + '">★</span>'
  }
  return s
}

let toastTimer = null
function showToast(tekst) {
  let toast = document.getElementById("toast")
  if (!toast) return
  toast.textContent = tekst
  toast.classList.add("zichtbaar")
  clearTimeout(toastTimer)
  toastTimer = setTimeout(() => toast.classList.remove("zichtbaar"), 2200)
}


// cart sidebar openen/sluiten
function openCart() {
  document.getElementById("cartPanel")?.classList.add("open")
  document.getElementById("cartOverlay")?.classList.add("open")
}
function sluitCart() {
  document.getElementById("cartPanel")?.classList.remove("open")
  document.getElementById("cartOverlay")?.classList.remove("open")
}

// cart sidebar vullen
function renderCartSidebar() {
  const lijst = document.getElementById("cartLijst")
  const totaalEl = document.getElementById("cartTotaal")
  const verzendEl = document.getElementById("verzendInfo")
  if (!lijst) return

  const cart = getCart()
  lijst.innerHTML = ""

  cart.forEach(item => {
    const li = document.createElement("li")
    li.innerHTML = `
      <span class="cart-naam">${item.naam} <small>${item.ml}ml</small></span>
      <span class="cart-prijs">${euro(item.prijs * item.aantal)}</span>
      <button class="cart-verwijder" data-id="${item.id}">✕</button>
    `
    li.querySelector(".cart-verwijder").onclick = () => {
      removeFromCart(item.id)
      renderCartSidebar()
    }
    lijst.appendChild(li)
  })

  if (totaalEl) totaalEl.textContent = euro(cartTotaal())

  if (verzendEl) {
    const tot = cartTotaal()
    if (cart.length === 0) {
      verzendEl.textContent = ""
    } else if (tot >= 75) {
      verzendEl.textContent = "✓ Gratis verzending!"
    } else {
      verzendEl.textContent = "Nog " + euro(75 - tot) + " voor gratis verzending"
    }
  }

  cartBadgeUpdate()
}


// navbar & hamburgermenu
document.addEventListener("DOMContentLoaded", () => {
  cartBadgeUpdate()

  document.getElementById("cartBtn")?.addEventListener("click", openCart)
  document.getElementById("sluitCart")?.addEventListener("click", sluitCart)
  document.getElementById("cartOverlay")?.addEventListener("click", sluitCart)
  document.getElementById("doorwinkelBtn")?.addEventListener("click", sluitCart)

  const ham = document.getElementById("hamburger")
  const mobNav = document.getElementById("mobileMenu")
  ham?.addEventListener("click", () => mobNav?.classList.toggle("open"))
  mobNav?.querySelectorAll("a").forEach(a => a.addEventListener("click", () => mobNav.classList.remove("open")))

  window.addEventListener("scroll", () => {
    const nav = document.getElementById("navbar")
    if (nav) nav.classList.toggle("scrolled", window.scrollY > 50)
  })

  renderCartSidebar()
})
