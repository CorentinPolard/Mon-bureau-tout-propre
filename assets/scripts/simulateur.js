// Form fields
const form = document.querySelector("#devis");
const surface = document.querySelector("#surface");
const frequency = document.querySelector("#frequency");
const windowOption = document.querySelector("#window");

// Result element
const resultContainer = document.querySelector("#result-container");
const resultParagraphe = document.querySelector("#result");

// data processing
const basePrice = 1.5;

function roundToTwoDecimals(n) {
    return Math.round(n * 100) / 100;
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let netPrice = surface.value * frequency.value * basePrice;

    if (windowOption.checked) {
        netPrice *= 1.1;
    }

    netPrice = roundToTwoDecimals(netPrice);
    const TVA = roundToTwoDecimals(netPrice * 0.2);
    const totalPrice = netPrice + TVA;

    resultParagraphe.innerHTML = `<b>Montant HT</b> = ${netPrice}€<br><b>TVA (20%)</b> = ${TVA}€<br><b>Montant TTC</b> = ${totalPrice}€`
    resultContainer.classList.remove("hidden");
})
