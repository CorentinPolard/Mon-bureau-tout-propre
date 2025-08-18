const form = document.querySelector("#devis");
const surface = document.querySelector("#surface");
const frequency = document.querySelector("#frequency");
const windowOption = document.querySelector("#window");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(surface.value, frequency.value, windowOption.value);
})
