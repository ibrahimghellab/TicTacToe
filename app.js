let joueur = 0;
let matrice = [
    [0, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const cases = document.querySelectorAll(".case");
const resetBtn = document.getElementById("reset");

function isWin() {
    const lignes = [

        [[0, 0], [0, 1], [0, 2]],
        [[1, 0], [1, 1], [1, 2]],
        [[2, 0], [2, 1], [2, 2]],

        [[0, 0], [1, 0], [2, 0]],
        [[0, 1], [1, 1], [2, 1]],
        [[0, 2], [1, 2], [2, 2]],

        [[0, 0], [1, 1], [2, 2]],
        [[0, 2], [1, 1], [2, 0]]
    ];

    return lignes.some(([a, b, c]) =>
        matrice[a[0]][a[1]] === matrice[b[0]][b[1]] &&
        matrice[b[0]][b[1]] === matrice[c[0]][c[1]]
    );
}

function reset() {
    let cpt = 1;
    joueur = 0;
    matrice = matrice.map(row => row.map(() => ++cpt));

    cases.forEach(cell => cell.style.backgroundImage = "");
}

function clickButton(i, j, cell) {
    if (matrice[i][j] === -1 || matrice[i][j] === 1) return; // Empêche de jouer sur une case déjà prise

    joueur++;
    let symbole = joueur % 2 === 0 ? "circle.jpg" : "cross.png";
    let valeur = joueur % 2 === 0 ? -1 : 1;

    cell.style.backgroundImage = `url("./images/${symbole}")`;
    matrice[i][j] = valeur;

    if (isWin()) {
        setTimeout(() => {
            alert(joueur % 2 === 0 ? "Circle wins!" : "Cross wins!");
            reset();
        }, 500);
    }
}

cases.forEach((cell, index) => {
    let i = Math.floor(index / 3);
    let j = index % 3;
    cell.addEventListener("click", () => clickButton(i, j, cell));
});

resetBtn.addEventListener("click", reset);
