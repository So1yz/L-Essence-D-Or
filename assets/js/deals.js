// deals pagina logica

let huidigSort = "standaard"
let huidigMerk = "alle"
let huidigGeur = "alle"

const nepVoorraad = { 1:3, 2:7, 3:2, 4:5, 5:8, 6:4, 7:9, 8:6, 9:3, 10:7, 11:5, 12:6, 13:8, 14:9, 15:4, 16:2, 17:7, 18:5, 19:3, 20:4 }

const aanbiedingen = producten.filter(p => p.oudePrijs && p.oudePrijs > p.prijs)

function bouwFilterKnoppen() {
  const merkContainer = document.getElementById("merkFilter")
  const geurContainer = document.getElementById("geurFilter")

  const merken = [...new Set(aanbiedingen.map(p => p.merk))].sort()
  merken.forEach(merk => {
    const btn = document.createElement("button")
    btn.className = "filter-btn"
    btn.dataset.merk = merk
    btn.textContent = merk
    merkContainer.appendChild(btn)
  })

  const geuren = [...new Set(aanbiedingen.map(p => p.geur))].sort()
  geuren.forEach(geur => {
    const btn = document.createElement("button")
    btn.className = "filter-btn"
    btn.dataset.geur = geur
    btn.textContent = geur
    geurContainer.appendChild(btn)
  })
}

function renderDeals() {
  let lijst = [...aanbiedingen]

  if (huidigMerk !== "alle") lijst = lijst.filter(p => p.merk === huidigMerk)
  if (huidigGeur !== "alle") lijst = lijst.filter(p => p.geur === huidigGeur)

  if (huidigSort === "prijs-laag") lijst.sort((a, b) => a.prijs - b.prijs)
  else if (huidigSort === "prijs-hoog") lijst.sort((a, b) => b.prijs - a.prijs)
  else if (huidigSort === "korting-hoog") lijst.sort((a, b) => korting(b.prijs, b.oudePrijs) - korting(a.prijs, a.oudePrijs))
  else if (huidigSort === "ml") lijst.sort((a, b) => a.ml - b.ml)

  const grid = document.getElementById("dealsGrid")
  const geenRes = document.getElementById("geenResultaat")
  grid.innerHTML = ""

  document.getElementById("aantalTeller").textContent = lijst.length + " aanbieding" + (lijst.length !== 1 ? "en" : "")

  if (lijst.length === 0) {
    geenRes.hidden = false
    return
  }
  geenRes.hidden = true

  lijst.forEach(p => {
    const k = korting(p.prijs, p.oudePrijs)
    const bespaar = p.oudePrijs - p.prijs
    const voorraad = nepVoorraad[p.id] || 5
    const pct = Math.round((voorraad / 10) * 100)

    const artikel = document.createElement("article")
    artikel.className = "product-card"
    artikel.innerHTML = `
      <span class="badge sale-badge">SALE −${k}%</span>
      <button class="heart-btn" aria-label="Wishlist">♡</button>
      <a href="product.html?id=${p.id}">
        <figure>
          <img src="${p.img}" alt="${p.naam}" loading="lazy" onerror="this.src=''; this.alt='Geen foto'">
        </figure>
      </a>
      <section class="kaart-info">
        <p class="kaart-merk">${p.merk}</p>
        <h3><a href="product.html?id=${p.id}">${p.naam}</a></h3>
        <p class="kaart-ml">${p.ml} ml</p>
        <p class="kaart-prijzen">
          <span class="prijs-nu">${euro(p.prijs)}</span>
          <span class="prijs-oud">${euro(p.oudePrijs)}</span>
        </p>
        <p class="bespaar-tag">Bespaar ${euro(bespaar)}</p>
        <div class="voorraad-wrap" role="progressbar" aria-valuenow="${voorraad}" aria-valuemin="0" aria-valuemax="10">
          <div class="voorraad-balk" style="width:${pct}%"></div>
          <small class="${voorraad <= 3 ? "voorraad-laag" : ""}">
            ${voorraad <= 3 ? "⚠ Nog maar " + voorraad + " op voorraad!" : "Nog " + voorraad + " op voorraad"}
          </small>
        </div>
        <button class="add-btn" data-id="${p.id}">In winkelmand</button>
      </section>
    `

    artikel.querySelector(".add-btn").onclick = () => {
      addToCart(p.id)
      renderCartSidebar()
    }
    artikel.querySelector(".heart-btn").onclick = function() {
      this.classList.toggle("liked")
      this.textContent = this.classList.contains("liked") ? "♥" : "♡"
    }

    grid.appendChild(artikel)
  })
}

function filterKlik(container, dataAttr, slaOp) {
  container.addEventListener("click", e => {
    const btn = e.target.closest(".filter-btn")
    if (!btn) return
    container.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("actief"))
    btn.classList.add("actief")
    slaOp(btn.dataset[dataAttr])
    renderDeals()
  })
}

// countdown
function countdown() {
  const eind = new Date()
  eind.setHours(23, 59, 59, 0)

  setInterval(() => {
    const diff = eind - new Date()
    if (diff <= 0) return
    const u = Math.floor(diff / 3600000)
    const m = Math.floor((diff % 3600000) / 60000)
    const s = Math.floor((diff % 60000) / 1000)
    document.getElementById("cdU").textContent = String(u).padStart(2, "0")
    document.getElementById("cdM").textContent = String(m).padStart(2, "0")
    document.getElementById("cdS").textContent = String(s).padStart(2, "0")
  }, 1000)
}

document.addEventListener("DOMContentLoaded", () => {
  bouwFilterKnoppen()
  renderDeals()
  countdown()

  filterKlik(document.getElementById("sortFilter"), "sort", v => huidigSort = v)
  filterKlik(document.getElementById("merkFilter"), "merk", v => huidigMerk = v)
  filterKlik(document.getElementById("geurFilter"), "geur", v => huidigGeur = v)
})
