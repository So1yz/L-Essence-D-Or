// product detail pagina

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search)
  const id = parseInt(params.get("id"))
  const p = producten.find(x => x.id === id)

  if (!p) {
    document.getElementById("productInhoud").innerHTML = `
      <p class="niet-gevonden">Product niet gevonden.</p>
      <a href="index.html" class="btn-goud">Terug naar home</a>
    `
    return
  }

  document.title = p.naam + " — L'Essence D'Or"

  const k = korting(p.prijs, p.oudePrijs)
  const gemScore = p.reviews.reduce((s, r) => s + r.score, 0) / p.reviews.length

  // SEO: dynamische meta tags + JSON-LD voor dit product
  injectProductSEO(p, gemScore)

  // fotos invullen via imgs array (4 plekken)
  const hoofdImg = document.getElementById("hoofdImg")
  const thumbEls = document.querySelectorAll(".thumb")

  if (hoofdImg) {
    hoofdImg.src = p.imgs[0]
    hoofdImg.alt = p.naam
  }

  thumbEls.forEach((thumb, i) => {
    // fallback naar eerste foto als die plek leeg is
    const foto = p.imgs[i] || p.imgs[0]
    thumb.src = foto
    thumb.alt = p.naam + " - foto " + (i + 1)
    thumb.classList.toggle("actief", i === 0)

    thumb.addEventListener("click", () => {
      hoofdImg.src = foto
      thumbEls.forEach(t => t.classList.remove("actief"))
      thumb.classList.add("actief")
    })
  })

  // product info invullen
  document.getElementById("pMerk").textContent = p.merk
  document.getElementById("pNaam").textContent = p.naam
  document.getElementById("pMl").textContent = p.ml + " ml · Eau de Parfum"
  document.getElementById("pBeschrijving").textContent = p.beschrijving
  document.getElementById("pPrijs").textContent = euro(p.prijs)
  document.getElementById("pGeur").textContent = p.geur
  document.getElementById("pTopNoten").textContent = p.topNoten
  document.getElementById("pHartNoten").textContent = p.hartNoten
  document.getElementById("pBasisNoten").textContent = p.basisNoten

  const oudPrijsEl = document.getElementById("pOudPrijs")
  const kortingEl = document.getElementById("pKorting")
  if (k > 0) {
    oudPrijsEl.textContent = euro(p.oudePrijs)
    kortingEl.textContent = "-" + k + "%"
  } else {
    oudPrijsEl.remove()
    kortingEl.remove()
  }

  // gem score + sterren
  document.getElementById("pSterren").innerHTML = sterren(Math.round(gemScore))
  document.getElementById("pScoreTekst").textContent = gemScore.toFixed(1) + " (" + p.reviews.length + " reviews)"

  // review sterren header
  document.getElementById("reviewSterren").innerHTML = sterren(Math.round(gemScore))
  document.getElementById("reviewScore").textContent = gemScore.toFixed(1)
  document.getElementById("reviewAantal").textContent = p.reviews.length + " review" + (p.reviews.length !== 1 ? "s" : "")

  // reviews renderen
  const reviewsLijst = document.getElementById("reviewsLijst")
  p.reviews.forEach(r => {
    const artikel = document.createElement("article")
    artikel.className = "review-kaart"
    artikel.innerHTML = `
      <header>
        <strong>${r.naam}</strong>
        <time>${r.datum}</time>
      </header>
      <p class="review-sterren">${sterren(r.score)}</p>
      <p>${r.tekst}</p>
    `
    reviewsLijst.appendChild(artikel)
  })

  // aantal knoppen
  const aantalInput = document.getElementById("aantalInput")
  document.getElementById("minBtn").addEventListener("click", () => {
    if (parseInt(aantalInput.value) > 1) aantalInput.value--
  })
  document.getElementById("plusBtn").addEventListener("click", () => {
    if (parseInt(aantalInput.value) < 10) aantalInput.value++
  })

  // add to cart
  document.getElementById("addCartBtn").addEventListener("click", () => {
    addToCart(p.id, parseInt(aantalInput.value) || 1)
    renderCartSidebar()
  })

  // gerelateerde producten
  const gerelGrid = document.getElementById("gerelateerdGrid")
  const gerelateerd = producten.filter(x => x.id !== p.id).slice(0, 4)

  gerelateerd.forEach(g => {
    const k2 = korting(g.prijs, g.oudePrijs)
    const artikel = document.createElement("article")
    artikel.className = "product-card"
    artikel.innerHTML = `
      ${k2 ? '<span class="badge">-' + k2 + '%</span>' : ""}
      <button class="heart-btn" aria-label="Wishlist">♡</button>
      <a href="product.html?id=${g.id}">
        <figure>
          <img src="${g.img}" alt="${g.naam}" loading="lazy">
        </figure>
      </a>
      <section class="kaart-info">
        <p class="kaart-merk">${g.merk}</p>
        <h3><a href="product.html?id=${g.id}">${g.naam}</a></h3>
        <p class="kaart-ml">${g.ml} ml</p>
        <p class="kaart-prijzen">
          <span class="prijs-nu">${euro(g.prijs)}</span>
          ${k2 ? '<span class="prijs-oud">' + euro(g.oudePrijs) + "</span>" : ""}
        </p>
        <button class="add-btn" data-id="${g.id}">In winkelmand</button>
      </section>
    `
    artikel.querySelector(".add-btn").onclick = () => {
      addToCart(g.id)
      renderCartSidebar()
    }
    artikel.querySelector(".heart-btn").onclick = function() {
      this.classList.toggle("liked")
      this.textContent = this.classList.contains("liked") ? "♥" : "♡"
    }
    gerelGrid.appendChild(artikel)
  })
})


// ═══ SEO: Dynamische meta tags + JSON-LD per product ═══
function injectProductSEO(p, gemScore) {
  const base = "https://lessencedor.nl"
  const url = `${base}/product.html?id=${p.id}`
  const imgUrl = `${base}/${p.imgs[0]}`
  const beschrijving = p.beschrijving.slice(0, 155)
  const prijs = p.prijs.toFixed(2)

  // Title & description
  document.title = `${p.naam} — ${p.merk} ${p.ml}ml | L'Essence D'Or`
  document.querySelector('meta[name="description"]')?.setAttribute("content",
    `Koop ${p.naam} van ${p.merk} (${p.ml}ml) bij L'Essence D'Or. ${beschrijving}`)

  // Canonical
  document.getElementById("canonicalTag")?.setAttribute("href", url)

  // Open Graph
  document.getElementById("ogUrl")?.setAttribute("content", url)
  document.getElementById("ogTitle")?.setAttribute("content", `${p.naam} — ${p.merk} | L'Essence D'Or`)
  document.getElementById("ogDesc")?.setAttribute("content", beschrijving)
  document.getElementById("ogImage")?.setAttribute("content", imgUrl)

  // Twitter
  document.getElementById("twTitle")?.setAttribute("content", `${p.naam} — ${p.merk} | L'Essence D'Or`)
  document.getElementById("twDesc")?.setAttribute("content", beschrijving)
  document.getElementById("twImage")?.setAttribute("content", imgUrl)

  // JSON-LD Product schema
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": p.naam,
    "description": p.beschrijving,
    "image": p.imgs.map(i => `${base}/${i}`),
    "brand": { "@type": "Brand", "name": p.merk },
    "offers": {
      "@type": "Offer",
      "url": url,
      "priceCurrency": "EUR",
      "price": prijs,
      "availability": "https://schema.org/InStock",
      "seller": { "@type": "Organization", "name": "L'Essence D'Or" }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": gemScore.toFixed(1),
      "reviewCount": p.reviews.length,
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": p.reviews.map(r => ({
      "@type": "Review",
      "author": { "@type": "Person", "name": r.naam },
      "reviewRating": { "@type": "Rating", "ratingValue": r.score },
      "reviewBody": r.tekst,
      "datePublished": r.datum
    })),
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": `${base}/` },
        { "@type": "ListItem", "position": 2, "name": "Producten", "item": `${base}/index.html#producten-sectie` },
        { "@type": "ListItem", "position": 3, "name": p.naam, "item": url }
      ]
    }
  }

  const script = document.createElement("script")
  script.type = "application/ld+json"
  script.textContent = JSON.stringify(schema, null, 2)
  document.head.appendChild(script)
}
