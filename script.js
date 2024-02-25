// JavaScript code to create interactive glowing flowers
document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("flowers-container");

    // Create flower elements and apply glowing effect
    for (let i = 0; i < 4; i++) {
        const flower = document.createElement("div");
        flower.className = "flower";
        container.appendChild(flower);

        // Apply glowing effect using CSS
        flower.addEventListener("mouseover", () => {
            flower.classList.add("glowing");
        });
        flower.addEventListener("mouseout", () => {
            flower.classList.remove("glowing");
        });
    }
});