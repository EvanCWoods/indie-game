class Character {
    constructor(name, health, power) {
        this.name = name;
        this.health = health;
        this.power = power;
    }

    attack() {
        console.log("Attacking");
    }
}

const Evan = new Character("Evan", 100, 15);

document.addEventListener("keypress", (e) => {
    if (e.code == "Space") {
        Evan.attack();
    }
});

