
//--------- DARK MODE ----------

const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
    if (modeButton.textContent.includes("🕶️")) {
        main.style.background = "#F5D6A3";
        main.style.color = "#3D405B";
        modeButton.textContent = "🔆";
    } else {
        main.style.background = "#3D405B";
        main.style.color = "#F5D6A3";
        modeButton.textContent = "🕶️";
    }
});
