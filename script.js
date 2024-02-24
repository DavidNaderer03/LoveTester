const header = [
    {
        names: ["stefan", "julia"],
        accuracy: () => alert("100")
    },
    {
        names: ["david", "sophia"],
        accuracy: () => alert("Was glaubst du den")
    },
    {
        names: ["felix", "elli"],
        accuracy: () => alert("eher weniger")
    },
    {
        names: ["felix", "elleonora"],
        accuracy: () => alert("eher weniger")
    },
    {
        names: ["felix", "felix"],
        accuracy: () => location.href = "spinningfelix.html"
    },
    {
        names: ["pages", "pages"],
        accuracy: () => location.href = "pages.html"
    },
    {
        names: ["stefan", "sam"],
        accuracy: () => alert("als zweite Wahl")
    }
]

function calcLove() {
    const names = [document.getElementById('yourname').value.toLowerCase(), document.getElementById('partnername').value.toLowerCase()];
    const result = {
        found: false,
        count: 0
    };
    for (const element of header) {
        for (const name of element.names) {
            if (names.some(element => element === name)) {
                result.count++;
            }
        }
        if (result.count === 2) {
            element.accuracy();
            result.found = true;
        }
        result.count = 0;
    }
    if (!result.found) {
        alert(Math.round(Math.random() * 100));
    }
}