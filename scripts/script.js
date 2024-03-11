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
        names: ["jana", "sam"],
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
    },
    {
        names: ["stefan seine mutter", "katze"],
        accuracy: () => alert('110%')
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
        alert(`The chance is ${calcLoveWithoutExeption(names)}%`);
    }
}

function calcLoveWithoutExeption(names) {
    let tmpText = ""
    const compareString = "loves"
    for(const charakter of compareString) {
        tmpText += (getLetters(charakter, names[0]) + getLetters(charakter, names[1])).toString();
    }
    while (tmpText.length > 2) {
        tmpText = calcDown(tmpText);
    }
    return tmpText;
}

function calcDown(number) {
    let solution = "";
    for(let i = 0, j = 1; i < number.length - 1 && j < number.length; i++, j++) {
        const sumOfDigits = (number[i] - '0') + (number[j] - '0');
        solution += sumOfDigits.toString();
    }
    return solution;
}

function getLetters(letter, string) {
    let counter = 0;
    for(const charakter of string) {
        if(charakter === letter)
            counter++;
    }
    return counter;
}