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
        accuracy: () => location.href = "./pages/spinningfelix.html"
    },
    {
        names: ["pages", "pages"],
        accuracy: () => location.href = "./pages/pages.html"
    },
    {
        names: ["stefan", "sam"],
        accuracy: () => alert("als zweite Wahl")
    },
    {
        names: ["jana", "sammy"],
        accuracy: () => alert("solange der screenshotbutton funktioniert")
    },
    {
        names: ["adrian", "inder"],
        accuracy: () => alert("inderkinder")
    },
    {
        names: ["leo", "amelie"],
        accuracy: () => alert("seine Prinzessin")
    },
    {
        names: ["leo", "prinzessin"],
        accuracy: () => alert("prinzessin Amelie")
    },
    {
        names: ["prinz", "prinzessin"],
        accuracy: () => alert("leo and amelie")
    },
    {
        names: ["leo", "sam"],
        accuracy: () => alert("100%")
    },
    {
        names: ["böhm", "böhm"],
        accuracy: () => location.href = "./pages/böhm.html"
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