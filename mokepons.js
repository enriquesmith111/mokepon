const mokepons = {
    beedrill: {
        name: 'beedrill',
        sprite: "components/sprites/beedrill.gif",
        back_sprite: "components/sprites/beedrill-back.gif",
        type: 'electric',
        hp: 100,
        attacks: [
            { name: 'Electric Jab', type: 'electric', color: 'khaki', basePower: 10 },
            { name: 'Twister', type: 'normal', color: 'white', basePower: 8 },
            { name: 'U-turn', type: 'grass', color: 'mediumseagreen', basePower: 10 },
            { name: 'E-Scissor', type: 'electric', color: 'khaki', basePower: 8 }
        ]
    },
    bulbasaur: {
        name: 'bulbasaur',
        sprite: "components/sprites/bulbasaur.gif",
        back_sprite: "components/sprites/bulbasaur-back.gif",
        type: 'water',
        hp: 100,
        attacks: [
            { name: 'Water Whip', type: 'water', color: 'darkturquoise', basePower: 10 },
            { name: 'Growl', type: 'normal', color: 'white', basePower: 8 },
            { name: 'Razor Water', type: 'water', color: 'darkturquoise', basePower: 10 },
            { name: 'Aqua Powder', type: 'water', color: 'darkturquoise', basePower: 10 }
        ]
    },
    caterpie: {
        name: 'caterpie',
        sprite: "components/sprites/caterpie.gif",
        back_sprite: "components/sprites/caterpie-back.gif",
        type: 'grass',
        hp: 100,
        attacks: [
            { name: 'Tackle', type: 'normal', color: 'white', basePower: 8 },
            { name: 'Leaf Shot', type: 'grass', color: 'mediumseagreen', basePower: 10 },
            { name: 'Bug Bite', type: 'grass', color: 'mediumseagreen', basePower: 10 },
            { name: 'Silken Web', type: 'grass', color: 'mediumseagreen', basePower: 10 }
        ]
    },
    charizard: {
        name: 'charizard',
        sprite: "components/sprites/charizard.gif",
        back_sprite: "components/sprites/charizard-back.gif",
        type: 'fire',
        hp: 100,
        attacks: [
            { name: 'Flamethrower', type: 'fire', color: 'crimson', basePower: 10 },
            { name: 'Air Slash', type: 'normal', color: 'white', basePower: 8 },
            { name: 'Fire Whip', type: 'fire', color: 'crimson', basePower: 10 },
            { name: 'Punch', type: 'normal', color: 'white', basePower: 8 }
        ]
    },
    kricketune: {
        name: 'kricketune',
        sprite: "components/sprites/kricketune.gif",
        back_sprite: "components/sprites/kricketune-back.gif",
        type: 'grass',
        hp: 100,
        attacks: [
            { name: 'Tackle', type: 'normal', color: 'white', basePower: 8 },
            { name: 'Leaf Shot', type: 'grass', color: 'mediumseagreen', basePower: 10 },
            { name: 'Bug Bite', type: 'grass', color: 'mediumseagreen', basePower: 10 },
            { name: 'Silken Web', type: 'grass', color: 'mediumseagreen', basePower: 10 }
        ]
    },
    pikachu: {
        name: 'pikachu',
        sprite: "components/sprites/pikachu.gif",
        back_sprite: "components/sprites/pikachu-back.gif",
        type: 'electric',
        hp: 100,
        attacks: [
            { name: 'Bolt Strike', type: 'electric', color: 'khaki', basePower: 10 },
            { name: 'Punch', type: 'normal', color: 'white', basePower: 8 },
            { name: 'Thunder', type: 'electric', color: 'khaki', basePower: 10 },
            { name: 'Electroball', type: 'electric', color: 'khaki', basePower: 10 }
        ]
    },
    rapidash: {
        name: 'rapidash',
        sprite: "components/sprites/rapidash.gif",
        back_sprite: "components/sprites/rapidash-back.gif",
        type: 'fire',
        hp: 100,
        attacks: [
            { name: 'Fire Blast', type: 'fire', color: 'crimson', basePower: 9 },
            { name: 'Bite', type: 'normal', color: 'white', basePower: 8 },
            { name: 'Blaze Kick', type: 'fire', color: 'crimson', basePower: 11 },
            { name: 'Slam', type: 'normal', color: 'white', basePower: 8 }
        ]
    },
    wartortle: {
        name: 'wartortle',
        sprite: "components/sprites/wartortle.gif",
        back_sprite: "components/sprites/wartortle-back.gif",
        type: 'water',
        hp: 100,
        attacks: [
            { name: 'Hydro Canon', type: 'water', color: 'darkturquoise', basePower: 11 },
            { name: 'Growl', type: 'normal', color: 'white', basePower: 8 },
            { name: 'Rain Dance', type: 'water', color: 'darkturquoise', basePower: 9 },
            { name: 'Aqua Powder', type: 'water', color: 'darkturquoise', basePower: 10 }
        ]
    }
};

const AI_mokepons = JSON.parse(JSON.stringify(mokepons));
