document.getElementById("getSignal").addEventListener("click", function () {
    document.getElementById("loading").style.display = "block";
    document.getElementById("gameGrid").classList.add("hidden");

    setTimeout(() => {
        document.getElementById("loading").style.display = "none";
        generateMines();
    }, 2000); // 2-second loading animation
});

function generateMines() {
    const grid = document.getElementById("gameGrid");
    grid.innerHTML = "";
    grid.classList.remove("hidden");

    let safeIndexes = new Set();
    while (safeIndexes.size < 5) {
        safeIndexes.add(Math.floor(Math.random() * 25));
    }

    for (let i = 0; i < 25; i++) {
        let cell = document.createElement("div");
        cell.classList.add("cell");
        if (safeIndexes.has(i)) {
            cell.classList.add("safe");
            cell.innerHTML = "⭐";
        }
        grid.appendChild(cell);
    }
}

document.getElementById("back").addEventListener("click", function () {
    Telegram.WebApp.close();
});
