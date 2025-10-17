document.addEventListener("DOMContentLoaded", () => {
    const bootScreen = document.getElementById("bootScreen");
    const bootText = document.getElementById("bootText");
    const fullText = "Chargement de la page…";
    let index = 0;

    // Effet typing
    function typeBootText() {
        if (index <= fullText.length) {
            bootText.textContent = fullText.slice(0, index);
            index++;
            setTimeout(typeBootText, 40);
        }
    }
    typeBootText();

    // Disparition automatique du boot screen après 2,5 secondes
    window.addEventListener("load", () => {
        setTimeout(() => {
            if (bootScreen) bootScreen.classList.add("hidden");
        }, 2500);
    });
});
