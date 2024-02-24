const header = [
    {
        names: ["stefan", "julia"],
        accuracy: 100
    },
    {
        names: ["david", "sophia"],
        accuracy: "Was glaubst du den"
    },
    {
        names: ["felix", "elli"],
        accuracy: "eher weniger"
    },
    {
        names: ["felix", "elleonora"],
        accuracy: "eher weniger"
    }
]

function calcLove() {
    const names = [document.getElementById('yourname').value.toLowerCase(), document.getElementById('partnername').value.toLowerCase()];
    const result = {
        found: false,
        count: 0
    };
    if (names.every(element => element === "felix")) {
        location.href = "spinningfelix.html";
    } else if (names.every(x => x === 'pages')) {
        location.href = "pages.html";
    } else {
        for (const element of header) {
            for (const name of element.names) {
                if (names.some(element => element === name)) {
                    result.count++;
                }
            }
            if (result.count === 2) {
                alert(element.accuracy);
                result.found = true;
            }
            result.count = 0;
        }
        if (!result.found) {
            alert(Math.round(Math.random() * 100));
        }
    }
}