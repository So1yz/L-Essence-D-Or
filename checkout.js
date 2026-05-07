// checkout pagina logica

document.addEventListener("DOMContentLoaded", () => {
  const cart = getCart()
  const layout = document.getElementById("checkoutLayout")
  const leeg = document.getElementById("leegCart")
  const bevestiging = document.getElementById("bevestiging")

  if (cart.length === 0) {
    layout.hidden = true
    leeg.hidden = false
    return
  }

  // order items renderen
  const orderLijst = document.getElementById("orderLijst")
  cart.forEach(item => {
    const li = document.createElement("li")
    li.innerHTML = `
      <img src="${item.img}" alt="${item.naam}" onerror="this.src=''">
      <span>
        <strong>${item.naam}</strong>
        <small>${item.ml} ml · ${item.aantal}×</small>
      </span>
      <span class="order-prijs">${euro(item.prijs * item.aantal)}</span>
    `
    orderLijst.appendChild(li)
  })

  const sub = cartTotaal()
  const verzend = sub >= 75 ? 0 : 4.95
  const totaal = sub + verzend

  document.getElementById("orderSubtotaal").textContent = euro(sub)
  document.getElementById("orderVerzend").innerHTML = verzend === 0
    ? '<span class="gratis">Gratis</span>'
    : euro(verzend)
  document.getElementById("orderTotaal").textContent = euro(totaal)

  // betaalmethode highlight
  document.querySelectorAll(".betaal-optie").forEach(label => {
    label.addEventListener("click", () => {
      document.querySelectorAll(".betaal-optie").forEach(l => l.classList.remove("actief"))
      label.classList.add("actief")
    })
  })

  // live validatie per veld
  function checkVeld(inputId, testFn, foutTekst) {
    const input = document.getElementById(inputId)
    const fout = document.getElementById("fout-" + inputId)
    if (!input) return true
    const ok = testFn(input.value.trim())
    input.classList.toggle("fout", !ok)
    if (fout) fout.textContent = ok ? "" : foutTekst
    return ok
  }

  const isEmail = v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
  const isPostcode = v => /^\d{4}\s?[a-zA-Z]{2}$/.test(v)
  const nieLeeg = v => v.length > 0

  const velden = [
    { id: "voornaam",  fn: nieLeeg,    fout: "Voornaam is verplicht" },
    { id: "achternaam", fn: nieLeeg,   fout: "Achternaam is verplicht" },
    { id: "email",     fn: isEmail,    fout: "Voer een geldig e-mailadres in" },
    { id: "straat",    fn: nieLeeg,    fout: "Straat is verplicht" },
    { id: "huisnr",    fn: nieLeeg,    fout: "Huisnummer is verplicht" },
    { id: "postcode",  fn: isPostcode, fout: "Voer een geldige postcode in (bijv. 1234 AB)" },
    { id: "stad",      fn: nieLeeg,    fout: "Stad is verplicht" }
  ]

  velden.forEach(({ id, fn, fout }) => {
    document.getElementById(id)?.addEventListener("blur", () => checkVeld(id, fn, fout))
  })

  // betaalknop
  document.getElementById("betaalBtn").addEventListener("click", () => {
    const allesOk = velden.every(({ id, fn, fout }) => checkVeld(id, fn, fout))

    if (!allesOk) {
      showToast("Vul alle verplichte velden correct in")
      document.querySelector(".fout")?.scrollIntoView({ behavior: "smooth", block: "center" })
      return
    }

    const btn = document.getElementById("betaalBtn")
    btn.disabled = true
    btn.textContent = "Verwerken..."

    // nep laadtijd, beetje realistisch
    setTimeout(() => {
      const nr = "LED-" + Date.now().toString().slice(-6)
      document.getElementById("bestelnr").textContent = "Bestelnummer: " + nr
      layout.hidden = true
      bevestiging.hidden = false
      clearCart()
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 1600)
  })
})
