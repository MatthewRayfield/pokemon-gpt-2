/* 
let allPokemon = {}; document.querySelectorAll('#pokedex tr').forEach(tr => {let tds = tr.querySelectorAll('td'); if (!tds.length) {return;} let data = {number: parseInt(tds[0].innerText), name: tds[1].querySelector('a').innerText}; let types = tr.querySelectorAll('.type-icon'); if (types[0]) {data.typePrimary = types[0].innerText;} if (types[1]) {data.typeSecondary = types[1].innerText;} allPokemon[data.number] = data;}) let w = window.open(); w.document.body.innerHTML = '<pre>' + JSON.stringify(allPokemon, null, 4);
*/

exports.data = {
    "1": {
        "number": 1,
        "name": "Bulbasaur",
        "typePrimary": "GRASS",
        "typeSecondary": "POISON"
    },
    "2": {
        "number": 2,
        "name": "Ivysaur",
        "typePrimary": "GRASS",
        "typeSecondary": "POISON"
    },
    "3": {
        "number": 3,
        "name": "Venusaur",
        "typePrimary": "GRASS",
        "typeSecondary": "POISON"
    },
    "4": {
        "number": 4,
        "name": "Charmander",
        "typePrimary": "FIRE"
    },
    "5": {
        "number": 5,
        "name": "Charmeleon",
        "typePrimary": "FIRE"
    },
    "6": {
        "number": 6,
        "name": "Charizard",
        "typePrimary": "FIRE",
        "typeSecondary": "FLYING"
    },
    "7": {
        "number": 7,
        "name": "Squirtle",
        "typePrimary": "WATER"
    },
    "8": {
        "number": 8,
        "name": "Wartortle",
        "typePrimary": "WATER"
    },
    "9": {
        "number": 9,
        "name": "Blastoise",
        "typePrimary": "WATER"
    },
    "10": {
        "number": 10,
        "name": "Caterpie",
        "typePrimary": "BUG"
    },
    "11": {
        "number": 11,
        "name": "Metapod",
        "typePrimary": "BUG"
    },
    "12": {
        "number": 12,
        "name": "Butterfree",
        "typePrimary": "BUG",
        "typeSecondary": "FLYING"
    },
    "13": {
        "number": 13,
        "name": "Weedle",
        "typePrimary": "BUG",
        "typeSecondary": "POISON"
    },
    "14": {
        "number": 14,
        "name": "Kakuna",
        "typePrimary": "BUG",
        "typeSecondary": "POISON"
    },
    "15": {
        "number": 15,
        "name": "Beedrill",
        "typePrimary": "BUG",
        "typeSecondary": "POISON"
    },
    "16": {
        "number": 16,
        "name": "Pidgey",
        "typePrimary": "NORMAL",
        "typeSecondary": "FLYING"
    },
    "17": {
        "number": 17,
        "name": "Pidgeotto",
        "typePrimary": "NORMAL",
        "typeSecondary": "FLYING"
    },
    "18": {
        "number": 18,
        "name": "Pidgeot",
        "typePrimary": "NORMAL",
        "typeSecondary": "FLYING"
    },
    "19": {
        "number": 19,
        "name": "Rattata",
        "typePrimary": "DARK",
        "typeSecondary": "NORMAL"
    },
    "20": {
        "number": 20,
        "name": "Raticate",
        "typePrimary": "DARK",
        "typeSecondary": "NORMAL"
    },
    "21": {
        "number": 21,
        "name": "Spearow",
        "typePrimary": "NORMAL",
        "typeSecondary": "FLYING"
    },
    "22": {
        "number": 22,
        "name": "Fearow",
        "typePrimary": "NORMAL",
        "typeSecondary": "FLYING"
    },
    "23": {
        "number": 23,
        "name": "Ekans",
        "typePrimary": "POISON"
    },
    "24": {
        "number": 24,
        "name": "Arbok",
        "typePrimary": "POISON"
    },
    "25": {
        "number": 25,
        "name": "Pikachu",
        "typePrimary": "ELECTRIC"
    },
    "26": {
        "number": 26,
        "name": "Raichu",
        "typePrimary": "ELECTRIC",
        "typeSecondary": "PSYCHIC"
    },
    "27": {
        "number": 27,
        "name": "Sandshrew",
        "typePrimary": "ICE",
        "typeSecondary": "STEEL"
    },
    "28": {
        "number": 28,
        "name": "Sandslash",
        "typePrimary": "ICE",
        "typeSecondary": "STEEL"
    },
    "29": {
        "number": 29,
        "name": "Nidoran♀",
        "typePrimary": "POISON"
    },
    "30": {
        "number": 30,
        "name": "Nidorina",
        "typePrimary": "POISON"
    },
    "31": {
        "number": 31,
        "name": "Nidoqueen",
        "typePrimary": "POISON",
        "typeSecondary": "GROUND"
    },
    "32": {
        "number": 32,
        "name": "Nidoran♂",
        "typePrimary": "POISON"
    },
    "33": {
        "number": 33,
        "name": "Nidorino",
        "typePrimary": "POISON"
    },
    "34": {
        "number": 34,
        "name": "Nidoking",
        "typePrimary": "POISON",
        "typeSecondary": "GROUND"
    },
    "35": {
        "number": 35,
        "name": "Clefairy",
        "typePrimary": "FAIRY"
    },
    "36": {
        "number": 36,
        "name": "Clefable",
        "typePrimary": "FAIRY"
    },
    "37": {
        "number": 37,
        "name": "Vulpix",
        "typePrimary": "ICE"
    },
    "38": {
        "number": 38,
        "name": "Ninetales",
        "typePrimary": "ICE",
        "typeSecondary": "FAIRY"
    },
    "39": {
        "number": 39,
        "name": "Jigglypuff",
        "typePrimary": "NORMAL",
        "typeSecondary": "FAIRY"
    },
    "40": {
        "number": 40,
        "name": "Wigglytuff",
        "typePrimary": "NORMAL",
        "typeSecondary": "FAIRY"
    },
    "41": {
        "number": 41,
        "name": "Zubat",
        "typePrimary": "POISON",
        "typeSecondary": "FLYING"
    },
    "42": {
        "number": 42,
        "name": "Golbat",
        "typePrimary": "POISON",
        "typeSecondary": "FLYING"
    },
    "43": {
        "number": 43,
        "name": "Oddish",
        "typePrimary": "GRASS",
        "typeSecondary": "POISON"
    },
    "44": {
        "number": 44,
        "name": "Gloom",
        "typePrimary": "GRASS",
        "typeSecondary": "POISON"
    },
    "45": {
        "number": 45,
        "name": "Vileplume",
        "typePrimary": "GRASS",
        "typeSecondary": "POISON"
    },
    "46": {
        "number": 46,
        "name": "Paras",
        "typePrimary": "BUG",
        "typeSecondary": "GRASS"
    },
    "47": {
        "number": 47,
        "name": "Parasect",
        "typePrimary": "BUG",
        "typeSecondary": "GRASS"
    },
    "48": {
        "number": 48,
        "name": "Venonat",
        "typePrimary": "BUG",
        "typeSecondary": "POISON"
    },
    "49": {
        "number": 49,
        "name": "Venomoth",
        "typePrimary": "BUG",
        "typeSecondary": "POISON"
    },
    "50": {
        "number": 50,
        "name": "Diglett",
        "typePrimary": "GROUND",
        "typeSecondary": "STEEL"
    },
    "51": {
        "number": 51,
        "name": "Dugtrio",
        "typePrimary": "GROUND",
        "typeSecondary": "STEEL"
    },
    "52": {
        "number": 52,
        "name": "Meowth",
        "typePrimary": "STEEL"
    },
    "53": {
        "number": 53,
        "name": "Persian",
        "typePrimary": "DARK"
    },
    "54": {
        "number": 54,
        "name": "Psyduck",
        "typePrimary": "WATER"
    },
    "55": {
        "number": 55,
        "name": "Golduck",
        "typePrimary": "WATER"
    },
    "56": {
        "number": 56,
        "name": "Mankey",
        "typePrimary": "FIGHTING"
    },
    "57": {
        "number": 57,
        "name": "Primeape",
        "typePrimary": "FIGHTING"
    },
    "58": {
        "number": 58,
        "name": "Growlithe",
        "typePrimary": "FIRE"
    },
    "59": {
        "number": 59,
        "name": "Arcanine",
        "typePrimary": "FIRE"
    },
    "60": {
        "number": 60,
        "name": "Poliwag",
        "typePrimary": "WATER"
    },
    "61": {
        "number": 61,
        "name": "Poliwhirl",
        "typePrimary": "WATER"
    },
    "62": {
        "number": 62,
        "name": "Poliwrath",
        "typePrimary": "WATER",
        "typeSecondary": "FIGHTING"
    },
    "63": {
        "number": 63,
        "name": "Abra",
        "typePrimary": "PSYCHIC"
    },
    "64": {
        "number": 64,
        "name": "Kadabra",
        "typePrimary": "PSYCHIC"
    },
    "65": {
        "number": 65,
        "name": "Alakazam",
        "typePrimary": "PSYCHIC"
    },
    "66": {
        "number": 66,
        "name": "Machop",
        "typePrimary": "FIGHTING"
    },
    "67": {
        "number": 67,
        "name": "Machoke",
        "typePrimary": "FIGHTING"
    },
    "68": {
        "number": 68,
        "name": "Machamp",
        "typePrimary": "FIGHTING"
    },
    "69": {
        "number": 69,
        "name": "Bellsprout",
        "typePrimary": "GRASS",
        "typeSecondary": "POISON"
    },
    "70": {
        "number": 70,
        "name": "Weepinbell",
        "typePrimary": "GRASS",
        "typeSecondary": "POISON"
    },
    "71": {
        "number": 71,
        "name": "Victreebel",
        "typePrimary": "GRASS",
        "typeSecondary": "POISON"
    },
    "72": {
        "number": 72,
        "name": "Tentacool",
        "typePrimary": "WATER",
        "typeSecondary": "POISON"
    },
    "73": {
        "number": 73,
        "name": "Tentacruel",
        "typePrimary": "WATER",
        "typeSecondary": "POISON"
    },
    "74": {
        "number": 74,
        "name": "Geodude",
        "typePrimary": "ROCK",
        "typeSecondary": "ELECTRIC"
    },
    "75": {
        "number": 75,
        "name": "Graveler",
        "typePrimary": "ROCK",
        "typeSecondary": "ELECTRIC"
    },
    "76": {
        "number": 76,
        "name": "Golem",
        "typePrimary": "ROCK",
        "typeSecondary": "ELECTRIC"
    },
    "77": {
        "number": 77,
        "name": "Ponyta",
        "typePrimary": "PSYCHIC"
    },
    "78": {
        "number": 78,
        "name": "Rapidash",
        "typePrimary": "PSYCHIC",
        "typeSecondary": "FAIRY"
    },
    "79": {
        "number": 79,
        "name": "Slowpoke",
        "typePrimary": "PSYCHIC"
    },
    "80": {
        "number": 80,
        "name": "Slowbro",
        "typePrimary": "WATER",
        "typeSecondary": "PSYCHIC"
    },
    "81": {
        "number": 81,
        "name": "Magnemite",
        "typePrimary": "ELECTRIC",
        "typeSecondary": "STEEL"
    },
    "82": {
        "number": 82,
        "name": "Magneton",
        "typePrimary": "ELECTRIC",
        "typeSecondary": "STEEL"
    },
    "83": {
        "number": 83,
        "name": "Farfetch'd",
        "typePrimary": "FIGHTING"
    },
    "84": {
        "number": 84,
        "name": "Doduo",
        "typePrimary": "NORMAL",
        "typeSecondary": "FLYING"
    },
    "85": {
        "number": 85,
        "name": "Dodrio",
        "typePrimary": "NORMAL",
        "typeSecondary": "FLYING"
    },
    "86": {
        "number": 86,
        "name": "Seel",
        "typePrimary": "WATER"
    },
    "87": {
        "number": 87,
        "name": "Dewgong",
        "typePrimary": "WATER",
        "typeSecondary": "ICE"
    },
    "88": {
        "number": 88,
        "name": "Grimer",
        "typePrimary": "POISON",
        "typeSecondary": "DARK"
    },
    "89": {
        "number": 89,
        "name": "Muk",
        "typePrimary": "POISON",
        "typeSecondary": "DARK"
    },
    "90": {
        "number": 90,
        "name": "Shellder",
        "typePrimary": "WATER"
    },
    "91": {
        "number": 91,
        "name": "Cloyster",
        "typePrimary": "WATER",
        "typeSecondary": "ICE"
    },
    "92": {
        "number": 92,
        "name": "Gastly",
        "typePrimary": "GHOST",
        "typeSecondary": "POISON"
    },
    "93": {
        "number": 93,
        "name": "Haunter",
        "typePrimary": "GHOST",
        "typeSecondary": "POISON"
    },
    "94": {
        "number": 94,
        "name": "Gengar",
        "typePrimary": "GHOST",
        "typeSecondary": "POISON"
    },
    "95": {
        "number": 95,
        "name": "Onix",
        "typePrimary": "ROCK",
        "typeSecondary": "GROUND"
    },
    "96": {
        "number": 96,
        "name": "Drowzee",
        "typePrimary": "PSYCHIC"
    },
    "97": {
        "number": 97,
        "name": "Hypno",
        "typePrimary": "PSYCHIC"
    },
    "98": {
        "number": 98,
        "name": "Krabby",
        "typePrimary": "WATER"
    },
    "99": {
        "number": 99,
        "name": "Kingler",
        "typePrimary": "WATER"
    },
    "100": {
        "number": 100,
        "name": "Voltorb",
        "typePrimary": "ELECTRIC"
    },
    "101": {
        "number": 101,
        "name": "Electrode",
        "typePrimary": "ELECTRIC"
    },
    "102": {
        "number": 102,
        "name": "Exeggcute",
        "typePrimary": "GRASS",
        "typeSecondary": "PSYCHIC"
    },
    "103": {
        "number": 103,
        "name": "Exeggutor",
        "typePrimary": "GRASS",
        "typeSecondary": "DRAGON"
    },
    "104": {
        "number": 104,
        "name": "Cubone",
        "typePrimary": "GROUND"
    },
    "105": {
        "number": 105,
        "name": "Marowak",
        "typePrimary": "FIRE",
        "typeSecondary": "GHOST"
    },
    "106": {
        "number": 106,
        "name": "Hitmonlee",
        "typePrimary": "FIGHTING"
    },
    "107": {
        "number": 107,
        "name": "Hitmonchan",
        "typePrimary": "FIGHTING"
    },
    "108": {
        "number": 108,
        "name": "Lickitung",
        "typePrimary": "NORMAL"
    },
    "109": {
        "number": 109,
        "name": "Koffing",
        "typePrimary": "POISON"
    },
    "110": {
        "number": 110,
        "name": "Weezing",
        "typePrimary": "POISON",
        "typeSecondary": "FAIRY"
    },
    "111": {
        "number": 111,
        "name": "Rhyhorn",
        "typePrimary": "GROUND",
        "typeSecondary": "ROCK"
    },
    "112": {
        "number": 112,
        "name": "Rhydon",
        "typePrimary": "GROUND",
        "typeSecondary": "ROCK"
    },
    "113": {
        "number": 113,
        "name": "Chansey",
        "typePrimary": "NORMAL"
    },
    "114": {
        "number": 114,
        "name": "Tangela",
        "typePrimary": "GRASS"
    },
    "115": {
        "number": 115,
        "name": "Kangaskhan",
        "typePrimary": "NORMAL"
    },
    "116": {
        "number": 116,
        "name": "Horsea",
        "typePrimary": "WATER"
    },
    "117": {
        "number": 117,
        "name": "Seadra",
        "typePrimary": "WATER"
    },
    "118": {
        "number": 118,
        "name": "Goldeen",
        "typePrimary": "WATER"
    },
    "119": {
        "number": 119,
        "name": "Seaking",
        "typePrimary": "WATER"
    },
    "120": {
        "number": 120,
        "name": "Staryu",
        "typePrimary": "WATER"
    },
    "121": {
        "number": 121,
        "name": "Starmie",
        "typePrimary": "WATER",
        "typeSecondary": "PSYCHIC"
    },
    "122": {
        "number": 122,
        "name": "Mr. Mime",
        "typePrimary": "PSYCHIC",
        "typeSecondary": "ICE"
    },
    "123": {
        "number": 123,
        "name": "Scyther",
        "typePrimary": "BUG",
        "typeSecondary": "FLYING"
    },
    "124": {
        "number": 124,
        "name": "Jynx",
        "typePrimary": "ICE",
        "typeSecondary": "PSYCHIC"
    },
    "125": {
        "number": 125,
        "name": "Electabuzz",
        "typePrimary": "ELECTRIC"
    },
    "126": {
        "number": 126,
        "name": "Magmar",
        "typePrimary": "FIRE"
    },
    "127": {
        "number": 127,
        "name": "Pinsir",
        "typePrimary": "BUG",
        "typeSecondary": "FLYING"
    },
    "128": {
        "number": 128,
        "name": "Tauros",
        "typePrimary": "NORMAL"
    },
    "129": {
        "number": 129,
        "name": "Magikarp",
        "typePrimary": "WATER"
    },
    "130": {
        "number": 130,
        "name": "Gyarados",
        "typePrimary": "WATER",
        "typeSecondary": "DARK"
    },
    "131": {
        "number": 131,
        "name": "Lapras",
        "typePrimary": "WATER",
        "typeSecondary": "ICE"
    },
    "132": {
        "number": 132,
        "name": "Ditto",
        "typePrimary": "NORMAL"
    },
    "133": {
        "number": 133,
        "name": "Eevee",
        "typePrimary": "NORMAL"
    },
    "134": {
        "number": 134,
        "name": "Vaporeon",
        "typePrimary": "WATER"
    },
    "135": {
        "number": 135,
        "name": "Jolteon",
        "typePrimary": "ELECTRIC"
    },
    "136": {
        "number": 136,
        "name": "Flareon",
        "typePrimary": "FIRE"
    },
    "137": {
        "number": 137,
        "name": "Porygon",
        "typePrimary": "NORMAL"
    },
    "138": {
        "number": 138,
        "name": "Omanyte",
        "typePrimary": "ROCK",
        "typeSecondary": "WATER"
    },
    "139": {
        "number": 139,
        "name": "Omastar",
        "typePrimary": "ROCK",
        "typeSecondary": "WATER"
    },
    "140": {
        "number": 140,
        "name": "Kabuto",
        "typePrimary": "ROCK",
        "typeSecondary": "WATER"
    },
    "141": {
        "number": 141,
        "name": "Kabutops",
        "typePrimary": "ROCK",
        "typeSecondary": "WATER"
    },
    "142": {
        "number": 142,
        "name": "Aerodactyl",
        "typePrimary": "ROCK",
        "typeSecondary": "FLYING"
    },
    "143": {
        "number": 143,
        "name": "Snorlax",
        "typePrimary": "NORMAL"
    },
    "144": {
        "number": 144,
        "name": "Articuno",
        "typePrimary": "ICE",
        "typeSecondary": "FLYING"
    },
    "145": {
        "number": 145,
        "name": "Zapdos",
        "typePrimary": "ELECTRIC",
        "typeSecondary": "FLYING"
    },
    "146": {
        "number": 146,
        "name": "Moltres",
        "typePrimary": "FIRE",
        "typeSecondary": "FLYING"
    },
    "147": {
        "number": 147,
        "name": "Dratini",
        "typePrimary": "DRAGON"
    },
    "148": {
        "number": 148,
        "name": "Dragonair",
        "typePrimary": "DRAGON"
    },
    "149": {
        "number": 149,
        "name": "Dragonite",
        "typePrimary": "DRAGON",
        "typeSecondary": "FLYING"
    },
    "150": {
        "number": 150,
        "name": "Mewtwo",
        "typePrimary": "PSYCHIC"
    },
    "151": {
        "number": 151,
        "name": "Mew",
        "typePrimary": "PSYCHIC"
    },
    "152": {
        "number": 152,
        "name": "Chikorita",
        "typePrimary": "GRASS"
    },
    "153": {
        "number": 153,
        "name": "Bayleef",
        "typePrimary": "GRASS"
    },
    "154": {
        "number": 154,
        "name": "Meganium",
        "typePrimary": "GRASS"
    },
    "155": {
        "number": 155,
        "name": "Cyndaquil",
        "typePrimary": "FIRE"
    },
    "156": {
        "number": 156,
        "name": "Quilava",
        "typePrimary": "FIRE"
    },
    "157": {
        "number": 157,
        "name": "Typhlosion",
        "typePrimary": "FIRE"
    },
    "158": {
        "number": 158,
        "name": "Totodile",
        "typePrimary": "WATER"
    },
    "159": {
        "number": 159,
        "name": "Croconaw",
        "typePrimary": "WATER"
    },
    "160": {
        "number": 160,
        "name": "Feraligatr",
        "typePrimary": "WATER"
    },
    "161": {
        "number": 161,
        "name": "Sentret",
        "typePrimary": "NORMAL"
    },
    "162": {
        "number": 162,
        "name": "Furret",
        "typePrimary": "NORMAL"
    },
    "163": {
        "number": 163,
        "name": "Hoothoot",
        "typePrimary": "NORMAL",
        "typeSecondary": "FLYING"
    },
    "164": {
        "number": 164,
        "name": "Noctowl",
        "typePrimary": "NORMAL",
        "typeSecondary": "FLYING"
    },
    "165": {
        "number": 165,
        "name": "Ledyba",
        "typePrimary": "BUG",
        "typeSecondary": "FLYING"
    },
    "166": {
        "number": 166,
        "name": "Ledian",
        "typePrimary": "BUG",
        "typeSecondary": "FLYING"
    },
    "167": {
        "number": 167,
        "name": "Spinarak",
        "typePrimary": "BUG",
        "typeSecondary": "POISON"
    },
    "168": {
        "number": 168,
        "name": "Ariados",
        "typePrimary": "BUG",
        "typeSecondary": "POISON"
    },
    "169": {
        "number": 169,
        "name": "Crobat",
        "typePrimary": "POISON",
        "typeSecondary": "FLYING"
    },
    "170": {
        "number": 170,
        "name": "Chinchou",
        "typePrimary": "WATER",
        "typeSecondary": "ELECTRIC"
    },
    "171": {
        "number": 171,
        "name": "Lanturn",
        "typePrimary": "WATER",
        "typeSecondary": "ELECTRIC"
    },
    "172": {
        "number": 172,
        "name": "Pichu",
        "typePrimary": "ELECTRIC"
    },
    "173": {
        "number": 173,
        "name": "Cleffa",
        "typePrimary": "FAIRY"
    },
    "174": {
        "number": 174,
        "name": "Igglybuff",
        "typePrimary": "NORMAL",
        "typeSecondary": "FAIRY"
    },
    "175": {
        "number": 175,
        "name": "Togepi",
        "typePrimary": "FAIRY"
    },
    "176": {
        "number": 176,
        "name": "Togetic",
        "typePrimary": "FAIRY",
        "typeSecondary": "FLYING"
    },
    "177": {
        "number": 177,
        "name": "Natu",
        "typePrimary": "PSYCHIC",
        "typeSecondary": "FLYING"
    },
    "178": {
        "number": 178,
        "name": "Xatu",
        "typePrimary": "PSYCHIC",
        "typeSecondary": "FLYING"
    },
    "179": {
        "number": 179,
        "name": "Mareep",
        "typePrimary": "ELECTRIC"
    },
    "180": {
        "number": 180,
        "name": "Flaaffy",
        "typePrimary": "ELECTRIC"
    },
    "181": {
        "number": 181,
        "name": "Ampharos",
        "typePrimary": "ELECTRIC",
        "typeSecondary": "DRAGON"
    },
    "182": {
        "number": 182,
        "name": "Bellossom",
        "typePrimary": "GRASS"
    },
    "183": {
        "number": 183,
        "name": "Marill",
        "typePrimary": "WATER",
        "typeSecondary": "FAIRY"
    },
    "184": {
        "number": 184,
        "name": "Azumarill",
        "typePrimary": "WATER",
        "typeSecondary": "FAIRY"
    },
    "185": {
        "number": 185,
        "name": "Sudowoodo",
        "typePrimary": "ROCK"
    },
    "186": {
        "number": 186,
        "name": "Politoed",
        "typePrimary": "WATER"
    },
    "187": {
        "number": 187,
        "name": "Hoppip",
        "typePrimary": "GRASS",
        "typeSecondary": "FLYING"
    },
    "188": {
        "number": 188,
        "name": "Skiploom",
        "typePrimary": "GRASS",
        "typeSecondary": "FLYING"
    },
    "189": {
        "number": 189,
        "name": "Jumpluff",
        "typePrimary": "GRASS",
        "typeSecondary": "FLYING"
    },
    "190": {
        "number": 190,
        "name": "Aipom",
        "typePrimary": "NORMAL"
    },
    "191": {
        "number": 191,
        "name": "Sunkern",
        "typePrimary": "GRASS"
    },
    "192": {
        "number": 192,
        "name": "Sunflora",
        "typePrimary": "GRASS"
    },
    "193": {
        "number": 193,
        "name": "Yanma",
        "typePrimary": "BUG",
        "typeSecondary": "FLYING"
    },
    "194": {
        "number": 194,
        "name": "Wooper",
        "typePrimary": "WATER",
        "typeSecondary": "GROUND"
    },
    "195": {
        "number": 195,
        "name": "Quagsire",
        "typePrimary": "WATER",
        "typeSecondary": "GROUND"
    },
    "196": {
        "number": 196,
        "name": "Espeon",
        "typePrimary": "PSYCHIC"
    },
    "197": {
        "number": 197,
        "name": "Umbreon",
        "typePrimary": "DARK"
    },
    "198": {
        "number": 198,
        "name": "Murkrow",
        "typePrimary": "DARK",
        "typeSecondary": "FLYING"
    },
    "199": {
        "number": 199,
        "name": "Slowking",
        "typePrimary": "WATER",
        "typeSecondary": "PSYCHIC"
    },
    "200": {
        "number": 200,
        "name": "Misdreavus",
        "typePrimary": "GHOST"
    },
    "201": {
        "number": 201,
        "name": "Unown",
        "typePrimary": "PSYCHIC"
    },
    "202": {
        "number": 202,
        "name": "Wobbuffet",
        "typePrimary": "PSYCHIC"
    },
    "203": {
        "number": 203,
        "name": "Girafarig",
        "typePrimary": "NORMAL",
        "typeSecondary": "PSYCHIC"
    },
    "204": {
        "number": 204,
        "name": "Pineco",
        "typePrimary": "BUG"
    },
    "205": {
        "number": 205,
        "name": "Forretress",
        "typePrimary": "BUG",
        "typeSecondary": "STEEL"
    },
    "206": {
        "number": 206,
        "name": "Dunsparce",
        "typePrimary": "NORMAL"
    },
    "207": {
        "number": 207,
        "name": "Gligar",
        "typePrimary": "GROUND",
        "typeSecondary": "FLYING"
    },
    "208": {
        "number": 208,
        "name": "Steelix",
        "typePrimary": "STEEL",
        "typeSecondary": "GROUND"
    },
    "209": {
        "number": 209,
        "name": "Snubbull",
        "typePrimary": "FAIRY"
    },
    "210": {
        "number": 210,
        "name": "Granbull",
        "typePrimary": "FAIRY"
    },
    "211": {
        "number": 211,
        "name": "Qwilfish",
        "typePrimary": "WATER",
        "typeSecondary": "POISON"
    },
    "212": {
        "number": 212,
        "name": "Scizor",
        "typePrimary": "BUG",
        "typeSecondary": "STEEL"
    },
    "213": {
        "number": 213,
        "name": "Shuckle",
        "typePrimary": "BUG",
        "typeSecondary": "ROCK"
    },
    "214": {
        "number": 214,
        "name": "Heracross",
        "typePrimary": "BUG",
        "typeSecondary": "FIGHTING"
    },
    "215": {
        "number": 215,
        "name": "Sneasel",
        "typePrimary": "DARK",
        "typeSecondary": "ICE"
    },
    "216": {
        "number": 216,
        "name": "Teddiursa",
        "typePrimary": "NORMAL"
    },
    "217": {
        "number": 217,
        "name": "Ursaring",
        "typePrimary": "NORMAL"
    },
    "218": {
        "number": 218,
        "name": "Slugma",
        "typePrimary": "FIRE"
    },
    "219": {
        "number": 219,
        "name": "Magcargo",
        "typePrimary": "FIRE",
        "typeSecondary": "ROCK"
    },
    "220": {
        "number": 220,
        "name": "Swinub",
        "typePrimary": "ICE",
        "typeSecondary": "GROUND"
    },
    "221": {
        "number": 221,
        "name": "Piloswine",
        "typePrimary": "ICE",
        "typeSecondary": "GROUND"
    },
    "222": {
        "number": 222,
        "name": "Corsola",
        "typePrimary": "GHOST"
    },
    "223": {
        "number": 223,
        "name": "Remoraid",
        "typePrimary": "WATER"
    },
    "224": {
        "number": 224,
        "name": "Octillery",
        "typePrimary": "WATER"
    },
    "225": {
        "number": 225,
        "name": "Delibird",
        "typePrimary": "ICE",
        "typeSecondary": "FLYING"
    },
    "226": {
        "number": 226,
        "name": "Mantine",
        "typePrimary": "WATER",
        "typeSecondary": "FLYING"
    },
    "227": {
        "number": 227,
        "name": "Skarmory",
        "typePrimary": "STEEL",
        "typeSecondary": "FLYING"
    },
    "228": {
        "number": 228,
        "name": "Houndour",
        "typePrimary": "DARK",
        "typeSecondary": "FIRE"
    },
    "229": {
        "number": 229,
        "name": "Houndoom",
        "typePrimary": "DARK",
        "typeSecondary": "FIRE"
    },
    "230": {
        "number": 230,
        "name": "Kingdra",
        "typePrimary": "WATER",
        "typeSecondary": "DRAGON"
    },
    "231": {
        "number": 231,
        "name": "Phanpy",
        "typePrimary": "GROUND"
    },
    "232": {
        "number": 232,
        "name": "Donphan",
        "typePrimary": "GROUND"
    },
    "233": {
        "number": 233,
        "name": "Porygon2",
        "typePrimary": "NORMAL"
    },
    "234": {
        "number": 234,
        "name": "Stantler",
        "typePrimary": "NORMAL"
    },
    "235": {
        "number": 235,
        "name": "Smeargle",
        "typePrimary": "NORMAL"
    },
    "236": {
        "number": 236,
        "name": "Tyrogue",
        "typePrimary": "FIGHTING"
    },
    "237": {
        "number": 237,
        "name": "Hitmontop",
        "typePrimary": "FIGHTING"
    },
    "238": {
        "number": 238,
        "name": "Smoochum",
        "typePrimary": "ICE",
        "typeSecondary": "PSYCHIC"
    },
    "239": {
        "number": 239,
        "name": "Elekid",
        "typePrimary": "ELECTRIC"
    },
    "240": {
        "number": 240,
        "name": "Magby",
        "typePrimary": "FIRE"
    },
    "241": {
        "number": 241,
        "name": "Miltank",
        "typePrimary": "NORMAL"
    },
    "242": {
        "number": 242,
        "name": "Blissey",
        "typePrimary": "NORMAL"
    },
    "243": {
        "number": 243,
        "name": "Raikou",
        "typePrimary": "ELECTRIC"
    },
    "244": {
        "number": 244,
        "name": "Entei",
        "typePrimary": "FIRE"
    },
    "245": {
        "number": 245,
        "name": "Suicune",
        "typePrimary": "WATER"
    },
    "246": {
        "number": 246,
        "name": "Larvitar",
        "typePrimary": "ROCK",
        "typeSecondary": "GROUND"
    },
    "247": {
        "number": 247,
        "name": "Pupitar",
        "typePrimary": "ROCK",
        "typeSecondary": "GROUND"
    },
    "248": {
        "number": 248,
        "name": "Tyranitar",
        "typePrimary": "ROCK",
        "typeSecondary": "DARK"
    },
    "249": {
        "number": 249,
        "name": "Lugia",
        "typePrimary": "PSYCHIC",
        "typeSecondary": "FLYING"
    },
    "250": {
        "number": 250,
        "name": "Ho-oh",
        "typePrimary": "FIRE",
        "typeSecondary": "FLYING"
    },
    "251": {
        "number": 251,
        "name": "Celebi",
        "typePrimary": "PSYCHIC",
        "typeSecondary": "GRASS"
    },
    "252": {
        "number": 252,
        "name": "Treecko",
        "typePrimary": "GRASS"
    },
    "253": {
        "number": 253,
        "name": "Grovyle",
        "typePrimary": "GRASS"
    },
    "254": {
        "number": 254,
        "name": "Sceptile",
        "typePrimary": "GRASS",
        "typeSecondary": "DRAGON"
    },
    "255": {
        "number": 255,
        "name": "Torchic",
        "typePrimary": "FIRE"
    },
    "256": {
        "number": 256,
        "name": "Combusken",
        "typePrimary": "FIRE",
        "typeSecondary": "FIGHTING"
    },
    "257": {
        "number": 257,
        "name": "Blaziken",
        "typePrimary": "FIRE",
        "typeSecondary": "FIGHTING"
    },
    "258": {
        "number": 258,
        "name": "Mudkip",
        "typePrimary": "WATER"
    },
    "259": {
        "number": 259,
        "name": "Marshtomp",
        "typePrimary": "WATER",
        "typeSecondary": "GROUND"
    },
    "260": {
        "number": 260,
        "name": "Swampert",
        "typePrimary": "WATER",
        "typeSecondary": "GROUND"
    },
    "261": {
        "number": 261,
        "name": "Poochyena",
        "typePrimary": "DARK"
    },
    "262": {
        "number": 262,
        "name": "Mightyena",
        "typePrimary": "DARK"
    },
    "263": {
        "number": 263,
        "name": "Zigzagoon",
        "typePrimary": "DARK",
        "typeSecondary": "NORMAL"
    },
    "264": {
        "number": 264,
        "name": "Linoone",
        "typePrimary": "DARK",
        "typeSecondary": "NORMAL"
    },
    "265": {
        "number": 265,
        "name": "Wurmple",
        "typePrimary": "BUG"
    },
    "266": {
        "number": 266,
        "name": "Silcoon",
        "typePrimary": "BUG"
    },
    "267": {
        "number": 267,
        "name": "Beautifly",
        "typePrimary": "BUG",
        "typeSecondary": "FLYING"
    },
    "268": {
        "number": 268,
        "name": "Cascoon",
        "typePrimary": "BUG"
    },
    "269": {
        "number": 269,
        "name": "Dustox",
        "typePrimary": "BUG",
        "typeSecondary": "POISON"
    },
    "270": {
        "number": 270,
        "name": "Lotad",
        "typePrimary": "WATER",
        "typeSecondary": "GRASS"
    },
    "271": {
        "number": 271,
        "name": "Lombre",
        "typePrimary": "WATER",
        "typeSecondary": "GRASS"
    },
    "272": {
        "number": 272,
        "name": "Ludicolo",
        "typePrimary": "WATER",
        "typeSecondary": "GRASS"
    },
    "273": {
        "number": 273,
        "name": "Seedot",
        "typePrimary": "GRASS"
    },
    "274": {
        "number": 274,
        "name": "Nuzleaf",
        "typePrimary": "GRASS",
        "typeSecondary": "DARK"
    },
    "275": {
        "number": 275,
        "name": "Shiftry",
        "typePrimary": "GRASS",
        "typeSecondary": "DARK"
    },
    "276": {
        "number": 276,
        "name": "Taillow",
        "typePrimary": "NORMAL",
        "typeSecondary": "FLYING"
    },
    "277": {
        "number": 277,
        "name": "Swellow",
        "typePrimary": "NORMAL",
        "typeSecondary": "FLYING"
    },
    "278": {
        "number": 278,
        "name": "Wingull",
        "typePrimary": "WATER",
        "typeSecondary": "FLYING"
    },
    "279": {
        "number": 279,
        "name": "Pelipper",
        "typePrimary": "WATER",
        "typeSecondary": "FLYING"
    },
    "280": {
        "number": 280,
        "name": "Ralts",
        "typePrimary": "PSYCHIC",
        "typeSecondary": "FAIRY"
    },
    "281": {
        "number": 281,
        "name": "Kirlia",
        "typePrimary": "PSYCHIC",
        "typeSecondary": "FAIRY"
    },
    "282": {
        "number": 282,
        "name": "Gardevoir",
        "typePrimary": "PSYCHIC",
        "typeSecondary": "FAIRY"
    },
    "283": {
        "number": 283,
        "name": "Surskit",
        "typePrimary": "BUG",
        "typeSecondary": "WATER"
    },
    "284": {
        "number": 284,
        "name": "Masquerain",
        "typePrimary": "BUG",
        "typeSecondary": "FLYING"
    },
    "285": {
        "number": 285,
        "name": "Shroomish",
        "typePrimary": "GRASS"
    },
    "286": {
        "number": 286,
        "name": "Breloom",
        "typePrimary": "GRASS",
        "typeSecondary": "FIGHTING"
    },
    "287": {
        "number": 287,
        "name": "Slakoth",
        "typePrimary": "NORMAL"
    },
    "288": {
        "number": 288,
        "name": "Vigoroth",
        "typePrimary": "NORMAL"
    },
    "289": {
        "number": 289,
        "name": "Slaking",
        "typePrimary": "NORMAL"
    },
    "290": {
        "number": 290,
        "name": "Nincada",
        "typePrimary": "BUG",
        "typeSecondary": "GROUND"
    },
    "291": {
        "number": 291,
        "name": "Ninjask",
        "typePrimary": "BUG",
        "typeSecondary": "FLYING"
    },
    "292": {
        "number": 292,
        "name": "Shedinja",
        "typePrimary": "BUG",
        "typeSecondary": "GHOST"
    },
    "293": {
        "number": 293,
        "name": "Whismur",
        "typePrimary": "NORMAL"
    },
    "294": {
        "number": 294,
        "name": "Loudred",
        "typePrimary": "NORMAL"
    },
    "295": {
        "number": 295,
        "name": "Exploud",
        "typePrimary": "NORMAL"
    },
    "296": {
        "number": 296,
        "name": "Makuhita",
        "typePrimary": "FIGHTING"
    },
    "297": {
        "number": 297,
        "name": "Hariyama",
        "typePrimary": "FIGHTING"
    },
    "298": {
        "number": 298,
        "name": "Azurill",
        "typePrimary": "NORMAL",
        "typeSecondary": "FAIRY"
    },
    "299": {
        "number": 299,
        "name": "Nosepass",
        "typePrimary": "ROCK"
    },
    "300": {
        "number": 300,
        "name": "Skitty",
        "typePrimary": "NORMAL"
    },
    "301": {
        "number": 301,
        "name": "Delcatty",
        "typePrimary": "NORMAL"
    },
    "302": {
        "number": 302,
        "name": "Sableye",
        "typePrimary": "DARK",
        "typeSecondary": "GHOST"
    },
    "303": {
        "number": 303,
        "name": "Mawile",
        "typePrimary": "STEEL",
        "typeSecondary": "FAIRY"
    },
    "304": {
        "number": 304,
        "name": "Aron",
        "typePrimary": "STEEL",
        "typeSecondary": "ROCK"
    },
    "305": {
        "number": 305,
        "name": "Lairon",
        "typePrimary": "STEEL",
        "typeSecondary": "ROCK"
    },
    "306": {
        "number": 306,
        "name": "Aggron",
        "typePrimary": "STEEL"
    },
    "307": {
        "number": 307,
        "name": "Meditite",
        "typePrimary": "FIGHTING",
        "typeSecondary": "PSYCHIC"
    },
    "308": {
        "number": 308,
        "name": "Medicham",
        "typePrimary": "FIGHTING",
        "typeSecondary": "PSYCHIC"
    },
    "309": {
        "number": 309,
        "name": "Electrike",
        "typePrimary": "ELECTRIC"
    },
    "310": {
        "number": 310,
        "name": "Manectric",
        "typePrimary": "ELECTRIC"
    },
    "311": {
        "number": 311,
        "name": "Plusle",
        "typePrimary": "ELECTRIC"
    },
    "312": {
        "number": 312,
        "name": "Minun",
        "typePrimary": "ELECTRIC"
    },
    "313": {
        "number": 313,
        "name": "Volbeat",
        "typePrimary": "BUG"
    },
    "314": {
        "number": 314,
        "name": "Illumise",
        "typePrimary": "BUG"
    },
    "315": {
        "number": 315,
        "name": "Roselia",
        "typePrimary": "GRASS",
        "typeSecondary": "POISON"
    },
    "316": {
        "number": 316,
        "name": "Gulpin",
        "typePrimary": "POISON"
    },
    "317": {
        "number": 317,
        "name": "Swalot",
        "typePrimary": "POISON"
    },
    "318": {
        "number": 318,
        "name": "Carvanha",
        "typePrimary": "WATER",
        "typeSecondary": "DARK"
    },
    "319": {
        "number": 319,
        "name": "Sharpedo",
        "typePrimary": "WATER",
        "typeSecondary": "DARK"
    },
    "320": {
        "number": 320,
        "name": "Wailmer",
        "typePrimary": "WATER"
    },
    "321": {
        "number": 321,
        "name": "Wailord",
        "typePrimary": "WATER"
    },
    "322": {
        "number": 322,
        "name": "Numel",
        "typePrimary": "FIRE",
        "typeSecondary": "GROUND"
    },
    "323": {
        "number": 323,
        "name": "Camerupt",
        "typePrimary": "FIRE",
        "typeSecondary": "GROUND"
    },
    "324": {
        "number": 324,
        "name": "Torkoal",
        "typePrimary": "FIRE"
    },
    "325": {
        "number": 325,
        "name": "Spoink",
        "typePrimary": "PSYCHIC"
    },
    "326": {
        "number": 326,
        "name": "Grumpig",
        "typePrimary": "PSYCHIC"
    },
    "327": {
        "number": 327,
        "name": "Spinda",
        "typePrimary": "NORMAL"
    },
    "328": {
        "number": 328,
        "name": "Trapinch",
        "typePrimary": "GROUND"
    },
    "329": {
        "number": 329,
        "name": "Vibrava",
        "typePrimary": "GROUND",
        "typeSecondary": "DRAGON"
    },
    "330": {
        "number": 330,
        "name": "Flygon",
        "typePrimary": "GROUND",
        "typeSecondary": "DRAGON"
    },
    "331": {
        "number": 331,
        "name": "Cacnea",
        "typePrimary": "GRASS"
    },
    "332": {
        "number": 332,
        "name": "Cacturne",
        "typePrimary": "GRASS",
        "typeSecondary": "DARK"
    },
    "333": {
        "number": 333,
        "name": "Swablu",
        "typePrimary": "NORMAL",
        "typeSecondary": "FLYING"
    },
    "334": {
        "number": 334,
        "name": "Altaria",
        "typePrimary": "DRAGON",
        "typeSecondary": "FAIRY"
    },
    "335": {
        "number": 335,
        "name": "Zangoose",
        "typePrimary": "NORMAL"
    },
    "336": {
        "number": 336,
        "name": "Seviper",
        "typePrimary": "POISON"
    },
    "337": {
        "number": 337,
        "name": "Lunatone",
        "typePrimary": "ROCK",
        "typeSecondary": "PSYCHIC"
    },
    "338": {
        "number": 338,
        "name": "Solrock",
        "typePrimary": "ROCK",
        "typeSecondary": "PSYCHIC"
    },
    "339": {
        "number": 339,
        "name": "Barboach",
        "typePrimary": "WATER",
        "typeSecondary": "GROUND"
    },
    "340": {
        "number": 340,
        "name": "Whiscash",
        "typePrimary": "WATER",
        "typeSecondary": "GROUND"
    },
    "341": {
        "number": 341,
        "name": "Corphish",
        "typePrimary": "WATER"
    },
    "342": {
        "number": 342,
        "name": "Crawdaunt",
        "typePrimary": "WATER",
        "typeSecondary": "DARK"
    },
    "343": {
        "number": 343,
        "name": "Baltoy",
        "typePrimary": "GROUND",
        "typeSecondary": "PSYCHIC"
    },
    "344": {
        "number": 344,
        "name": "Claydol",
        "typePrimary": "GROUND",
        "typeSecondary": "PSYCHIC"
    },
    "345": {
        "number": 345,
        "name": "Lileep",
        "typePrimary": "ROCK",
        "typeSecondary": "GRASS"
    },
    "346": {
        "number": 346,
        "name": "Cradily",
        "typePrimary": "ROCK",
        "typeSecondary": "GRASS"
    },
    "347": {
        "number": 347,
        "name": "Anorith",
        "typePrimary": "ROCK",
        "typeSecondary": "BUG"
    },
    "348": {
        "number": 348,
        "name": "Armaldo",
        "typePrimary": "ROCK",
        "typeSecondary": "BUG"
    },
    "349": {
        "number": 349,
        "name": "Feebas",
        "typePrimary": "WATER"
    },
    "350": {
        "number": 350,
        "name": "Milotic",
        "typePrimary": "WATER"
    },
    "351": {
        "number": 351,
        "name": "Castform",
        "typePrimary": "ICE"
    },
    "352": {
        "number": 352,
        "name": "Kecleon",
        "typePrimary": "NORMAL"
    },
    "353": {
        "number": 353,
        "name": "Shuppet",
        "typePrimary": "GHOST"
    },
    "354": {
        "number": 354,
        "name": "Banette",
        "typePrimary": "GHOST"
    },
    "355": {
        "number": 355,
        "name": "Duskull",
        "typePrimary": "GHOST"
    },
    "356": {
        "number": 356,
        "name": "Dusclops",
        "typePrimary": "GHOST"
    },
    "357": {
        "number": 357,
        "name": "Tropius",
        "typePrimary": "GRASS",
        "typeSecondary": "FLYING"
    },
    "358": {
        "number": 358,
        "name": "Chimecho",
        "typePrimary": "PSYCHIC"
    },
    "359": {
        "number": 359,
        "name": "Absol",
        "typePrimary": "DARK"
    },
    "360": {
        "number": 360,
        "name": "Wynaut",
        "typePrimary": "PSYCHIC"
    },
    "361": {
        "number": 361,
        "name": "Snorunt",
        "typePrimary": "ICE"
    },
    "362": {
        "number": 362,
        "name": "Glalie",
        "typePrimary": "ICE"
    },
    "363": {
        "number": 363,
        "name": "Spheal",
        "typePrimary": "ICE",
        "typeSecondary": "WATER"
    },
    "364": {
        "number": 364,
        "name": "Sealeo",
        "typePrimary": "ICE",
        "typeSecondary": "WATER"
    },
    "365": {
        "number": 365,
        "name": "Walrein",
        "typePrimary": "ICE",
        "typeSecondary": "WATER"
    },
    "366": {
        "number": 366,
        "name": "Clamperl",
        "typePrimary": "WATER"
    },
    "367": {
        "number": 367,
        "name": "Huntail",
        "typePrimary": "WATER"
    },
    "368": {
        "number": 368,
        "name": "Gorebyss",
        "typePrimary": "WATER"
    },
    "369": {
        "number": 369,
        "name": "Relicanth",
        "typePrimary": "WATER",
        "typeSecondary": "ROCK"
    },
    "370": {
        "number": 370,
        "name": "Luvdisc",
        "typePrimary": "WATER"
    },
    "371": {
        "number": 371,
        "name": "Bagon",
        "typePrimary": "DRAGON"
    },
    "372": {
        "number": 372,
        "name": "Shelgon",
        "typePrimary": "DRAGON"
    },
    "373": {
        "number": 373,
        "name": "Salamence",
        "typePrimary": "DRAGON",
        "typeSecondary": "FLYING"
    },
    "374": {
        "number": 374,
        "name": "Beldum",
        "typePrimary": "STEEL",
        "typeSecondary": "PSYCHIC"
    },
    "375": {
        "number": 375,
        "name": "Metang",
        "typePrimary": "STEEL",
        "typeSecondary": "PSYCHIC"
    },
    "376": {
        "number": 376,
        "name": "Metagross",
        "typePrimary": "STEEL",
        "typeSecondary": "PSYCHIC"
    },
    "377": {
        "number": 377,
        "name": "Regirock",
        "typePrimary": "ROCK"
    },
    "378": {
        "number": 378,
        "name": "Regice",
        "typePrimary": "ICE"
    },
    "379": {
        "number": 379,
        "name": "Registeel",
        "typePrimary": "STEEL"
    },
    "380": {
        "number": 380,
        "name": "Latias",
        "typePrimary": "DRAGON",
        "typeSecondary": "PSYCHIC"
    },
    "381": {
        "number": 381,
        "name": "Latios",
        "typePrimary": "DRAGON",
        "typeSecondary": "PSYCHIC"
    },
    "382": {
        "number": 382,
        "name": "Kyogre",
        "typePrimary": "WATER"
    },
    "383": {
        "number": 383,
        "name": "Groudon",
        "typePrimary": "GROUND",
        "typeSecondary": "FIRE"
    },
    "384": {
        "number": 384,
        "name": "Rayquaza",
        "typePrimary": "DRAGON",
        "typeSecondary": "FLYING"
    },
    "385": {
        "number": 385,
        "name": "Jirachi",
        "typePrimary": "STEEL",
        "typeSecondary": "PSYCHIC"
    },
    "386": {
        "number": 386,
        "name": "Deoxys",
        "typePrimary": "PSYCHIC"
    },
    "387": {
        "number": 387,
        "name": "Turtwig",
        "typePrimary": "GRASS"
    },
    "388": {
        "number": 388,
        "name": "Grotle",
        "typePrimary": "GRASS"
    },
    "389": {
        "number": 389,
        "name": "Torterra",
        "typePrimary": "GRASS",
        "typeSecondary": "GROUND"
    },
    "390": {
        "number": 390,
        "name": "Chimchar",
        "typePrimary": "FIRE"
    },
    "391": {
        "number": 391,
        "name": "Monferno",
        "typePrimary": "FIRE",
        "typeSecondary": "FIGHTING"
    },
    "392": {
        "number": 392,
        "name": "Infernape",
        "typePrimary": "FIRE",
        "typeSecondary": "FIGHTING"
    },
    "393": {
        "number": 393,
        "name": "Piplup",
        "typePrimary": "WATER"
    },
    "394": {
        "number": 394,
        "name": "Prinplup",
        "typePrimary": "WATER"
    },
    "395": {
        "number": 395,
        "name": "Empoleon",
        "typePrimary": "WATER",
        "typeSecondary": "STEEL"
    },
    "396": {
        "number": 396,
        "name": "Starly",
        "typePrimary": "NORMAL",
        "typeSecondary": "FLYING"
    },
    "397": {
        "number": 397,
        "name": "Staravia",
        "typePrimary": "NORMAL",
        "typeSecondary": "FLYING"
    },
    "398": {
        "number": 398,
        "name": "Staraptor",
        "typePrimary": "NORMAL",
        "typeSecondary": "FLYING"
    },
    "399": {
        "number": 399,
        "name": "Bidoof",
        "typePrimary": "NORMAL"
    },
    "400": {
        "number": 400,
        "name": "Bibarel",
        "typePrimary": "NORMAL",
        "typeSecondary": "WATER"
    },
    "401": {
        "number": 401,
        "name": "Kricketot",
        "typePrimary": "BUG"
    },
    "402": {
        "number": 402,
        "name": "Kricketune",
        "typePrimary": "BUG"
    },
    "403": {
        "number": 403,
        "name": "Shinx",
        "typePrimary": "ELECTRIC"
    },
    "404": {
        "number": 404,
        "name": "Luxio",
        "typePrimary": "ELECTRIC"
    },
    "405": {
        "number": 405,
        "name": "Luxray",
        "typePrimary": "ELECTRIC"
    },
    "406": {
        "number": 406,
        "name": "Budew",
        "typePrimary": "GRASS",
        "typeSecondary": "POISON"
    },
    "407": {
        "number": 407,
        "name": "Roserade",
        "typePrimary": "GRASS",
        "typeSecondary": "POISON"
    },
    "408": {
        "number": 408,
        "name": "Cranidos",
        "typePrimary": "ROCK"
    },
    "409": {
        "number": 409,
        "name": "Rampardos",
        "typePrimary": "ROCK"
    },
    "410": {
        "number": 410,
        "name": "Shieldon",
        "typePrimary": "ROCK",
        "typeSecondary": "STEEL"
    },
    "411": {
        "number": 411,
        "name": "Bastiodon",
        "typePrimary": "ROCK",
        "typeSecondary": "STEEL"
    },
    "412": {
        "number": 412,
        "name": "Burmy",
        "typePrimary": "BUG"
    },
    "413": {
        "number": 413,
        "name": "Wormadam",
        "typePrimary": "BUG",
        "typeSecondary": "STEEL"
    },
    "414": {
        "number": 414,
        "name": "Mothim",
        "typePrimary": "BUG",
        "typeSecondary": "FLYING"
    },
    "415": {
        "number": 415,
        "name": "Combee",
        "typePrimary": "BUG",
        "typeSecondary": "FLYING"
    },
    "416": {
        "number": 416,
        "name": "Vespiquen",
        "typePrimary": "BUG",
        "typeSecondary": "FLYING"
    },
    "417": {
        "number": 417,
        "name": "Pachirisu",
        "typePrimary": "ELECTRIC"
    },
    "418": {
        "number": 418,
        "name": "Buizel",
        "typePrimary": "WATER"
    },
    "419": {
        "number": 419,
        "name": "Floatzel",
        "typePrimary": "WATER"
    },
    "420": {
        "number": 420,
        "name": "Cherubi",
        "typePrimary": "GRASS"
    },
    "421": {
        "number": 421,
        "name": "Cherrim",
        "typePrimary": "GRASS"
    },
    "422": {
        "number": 422,
        "name": "Shellos",
        "typePrimary": "WATER"
    },
    "423": {
        "number": 423,
        "name": "Gastrodon",
        "typePrimary": "WATER",
        "typeSecondary": "GROUND"
    },
    "424": {
        "number": 424,
        "name": "Ambipom",
        "typePrimary": "NORMAL"
    },
    "425": {
        "number": 425,
        "name": "Drifloon",
        "typePrimary": "GHOST",
        "typeSecondary": "FLYING"
    },
    "426": {
        "number": 426,
        "name": "Drifblim",
        "typePrimary": "GHOST",
        "typeSecondary": "FLYING"
    },
    "427": {
        "number": 427,
        "name": "Buneary",
        "typePrimary": "NORMAL"
    },
    "428": {
        "number": 428,
        "name": "Lopunny",
        "typePrimary": "NORMAL",
        "typeSecondary": "FIGHTING"
    },
    "429": {
        "number": 429,
        "name": "Mismagius",
        "typePrimary": "GHOST"
    },
    "430": {
        "number": 430,
        "name": "Honchkrow",
        "typePrimary": "DARK",
        "typeSecondary": "FLYING"
    },
    "431": {
        "number": 431,
        "name": "Glameow",
        "typePrimary": "NORMAL"
    },
    "432": {
        "number": 432,
        "name": "Purugly",
        "typePrimary": "NORMAL"
    },
    "433": {
        "number": 433,
        "name": "Chingling",
        "typePrimary": "PSYCHIC"
    },
    "434": {
        "number": 434,
        "name": "Stunky",
        "typePrimary": "POISON",
        "typeSecondary": "DARK"
    },
    "435": {
        "number": 435,
        "name": "Skuntank",
        "typePrimary": "POISON",
        "typeSecondary": "DARK"
    },
    "436": {
        "number": 436,
        "name": "Bronzor",
        "typePrimary": "STEEL",
        "typeSecondary": "PSYCHIC"
    },
    "437": {
        "number": 437,
        "name": "Bronzong",
        "typePrimary": "STEEL",
        "typeSecondary": "PSYCHIC"
    },
    "438": {
        "number": 438,
        "name": "Bonsly",
        "typePrimary": "ROCK"
    },
    "439": {
        "number": 439,
        "name": "Mime Jr.",
        "typePrimary": "PSYCHIC",
        "typeSecondary": "FAIRY"
    },
    "440": {
        "number": 440,
        "name": "Happiny",
        "typePrimary": "NORMAL"
    },
    "441": {
        "number": 441,
        "name": "Chatot",
        "typePrimary": "NORMAL",
        "typeSecondary": "FLYING"
    },
    "442": {
        "number": 442,
        "name": "Spiritomb",
        "typePrimary": "GHOST",
        "typeSecondary": "DARK"
    },
    "443": {
        "number": 443,
        "name": "Gible",
        "typePrimary": "DRAGON",
        "typeSecondary": "GROUND"
    },
    "444": {
        "number": 444,
        "name": "Gabite",
        "typePrimary": "DRAGON",
        "typeSecondary": "GROUND"
    },
    "445": {
        "number": 445,
        "name": "Garchomp",
        "typePrimary": "DRAGON",
        "typeSecondary": "GROUND"
    },
    "446": {
        "number": 446,
        "name": "Munchlax",
        "typePrimary": "NORMAL"
    },
    "447": {
        "number": 447,
        "name": "Riolu",
        "typePrimary": "FIGHTING"
    },
    "448": {
        "number": 448,
        "name": "Lucario",
        "typePrimary": "FIGHTING",
        "typeSecondary": "STEEL"
    },
    "449": {
        "number": 449,
        "name": "Hippopotas",
        "typePrimary": "GROUND"
    },
    "450": {
        "number": 450,
        "name": "Hippowdon",
        "typePrimary": "GROUND"
    },
    "451": {
        "number": 451,
        "name": "Skorupi",
        "typePrimary": "POISON",
        "typeSecondary": "BUG"
    },
    "452": {
        "number": 452,
        "name": "Drapion",
        "typePrimary": "POISON",
        "typeSecondary": "DARK"
    },
    "453": {
        "number": 453,
        "name": "Croagunk",
        "typePrimary": "POISON",
        "typeSecondary": "FIGHTING"
    },
    "454": {
        "number": 454,
        "name": "Toxicroak",
        "typePrimary": "POISON",
        "typeSecondary": "FIGHTING"
    },
    "455": {
        "number": 455,
        "name": "Carnivine",
        "typePrimary": "GRASS"
    },
    "456": {
        "number": 456,
        "name": "Finneon",
        "typePrimary": "WATER"
    },
    "457": {
        "number": 457,
        "name": "Lumineon",
        "typePrimary": "WATER"
    },
    "458": {
        "number": 458,
        "name": "Mantyke",
        "typePrimary": "WATER",
        "typeSecondary": "FLYING"
    },
    "459": {
        "number": 459,
        "name": "Snover",
        "typePrimary": "GRASS",
        "typeSecondary": "ICE"
    },
    "460": {
        "number": 460,
        "name": "Abomasnow",
        "typePrimary": "GRASS",
        "typeSecondary": "ICE"
    },
    "461": {
        "number": 461,
        "name": "Weavile",
        "typePrimary": "DARK",
        "typeSecondary": "ICE"
    },
    "462": {
        "number": 462,
        "name": "Magnezone",
        "typePrimary": "ELECTRIC",
        "typeSecondary": "STEEL"
    },
    "463": {
        "number": 463,
        "name": "Lickilicky",
        "typePrimary": "NORMAL"
    },
    "464": {
        "number": 464,
        "name": "Rhyperior",
        "typePrimary": "GROUND",
        "typeSecondary": "ROCK"
    },
    "465": {
        "number": 465,
        "name": "Tangrowth",
        "typePrimary": "GRASS"
    },
    "466": {
        "number": 466,
        "name": "Electivire",
        "typePrimary": "ELECTRIC"
    },
    "467": {
        "number": 467,
        "name": "Magmortar",
        "typePrimary": "FIRE"
    },
    "468": {
        "number": 468,
        "name": "Togekiss",
        "typePrimary": "FAIRY",
        "typeSecondary": "FLYING"
    },
    "469": {
        "number": 469,
        "name": "Yanmega",
        "typePrimary": "BUG",
        "typeSecondary": "FLYING"
    },
    "470": {
        "number": 470,
        "name": "Leafeon",
        "typePrimary": "GRASS"
    },
    "471": {
        "number": 471,
        "name": "Glaceon",
        "typePrimary": "ICE"
    },
    "472": {
        "number": 472,
        "name": "Gliscor",
        "typePrimary": "GROUND",
        "typeSecondary": "FLYING"
    },
    "473": {
        "number": 473,
        "name": "Mamoswine",
        "typePrimary": "ICE",
        "typeSecondary": "GROUND"
    },
    "474": {
        "number": 474,
        "name": "Porygon-Z",
        "typePrimary": "NORMAL"
    },
    "475": {
        "number": 475,
        "name": "Gallade",
        "typePrimary": "PSYCHIC",
        "typeSecondary": "FIGHTING"
    },
    "476": {
        "number": 476,
        "name": "Probopass",
        "typePrimary": "ROCK",
        "typeSecondary": "STEEL"
    },
    "477": {
        "number": 477,
        "name": "Dusknoir",
        "typePrimary": "GHOST"
    },
    "478": {
        "number": 478,
        "name": "Froslass",
        "typePrimary": "ICE",
        "typeSecondary": "GHOST"
    },
    "479": {
        "number": 479,
        "name": "Rotom",
        "typePrimary": "ELECTRIC",
        "typeSecondary": "GRASS"
    },
    "480": {
        "number": 480,
        "name": "Uxie",
        "typePrimary": "PSYCHIC"
    },
    "481": {
        "number": 481,
        "name": "Mesprit",
        "typePrimary": "PSYCHIC"
    },
    "482": {
        "number": 482,
        "name": "Azelf",
        "typePrimary": "PSYCHIC"
    },
    "483": {
        "number": 483,
        "name": "Dialga",
        "typePrimary": "STEEL",
        "typeSecondary": "DRAGON"
    },
    "484": {
        "number": 484,
        "name": "Palkia",
        "typePrimary": "WATER",
        "typeSecondary": "DRAGON"
    },
    "485": {
        "number": 485,
        "name": "Heatran",
        "typePrimary": "FIRE",
        "typeSecondary": "STEEL"
    },
    "486": {
        "number": 486,
        "name": "Regigigas",
        "typePrimary": "NORMAL"
    },
    "487": {
        "number": 487,
        "name": "Giratina",
        "typePrimary": "GHOST",
        "typeSecondary": "DRAGON"
    },
    "488": {
        "number": 488,
        "name": "Cresselia",
        "typePrimary": "PSYCHIC"
    },
    "489": {
        "number": 489,
        "name": "Phione",
        "typePrimary": "WATER"
    },
    "490": {
        "number": 490,
        "name": "Manaphy",
        "typePrimary": "WATER"
    },
    "491": {
        "number": 491,
        "name": "Darkrai",
        "typePrimary": "DARK"
    },
    "492": {
        "number": 492,
        "name": "Shaymin",
        "typePrimary": "GRASS",
        "typeSecondary": "FLYING"
    },
    "493": {
        "number": 493,
        "name": "Arceus",
        "typePrimary": "NORMAL"
    },
    "494": {
        "number": 494,
        "name": "Victini",
        "typePrimary": "PSYCHIC",
        "typeSecondary": "FIRE"
    },
    "495": {
        "number": 495,
        "name": "Snivy",
        "typePrimary": "GRASS"
    },
    "496": {
        "number": 496,
        "name": "Servine",
        "typePrimary": "GRASS"
    },
    "497": {
        "number": 497,
        "name": "Serperior",
        "typePrimary": "GRASS"
    },
    "498": {
        "number": 498,
        "name": "Tepig",
        "typePrimary": "FIRE"
    },
    "499": {
        "number": 499,
        "name": "Pignite",
        "typePrimary": "FIRE",
        "typeSecondary": "FIGHTING"
    },
    "500": {
        "number": 500,
        "name": "Emboar",
        "typePrimary": "FIRE",
        "typeSecondary": "FIGHTING"
    },
    "501": {
        "number": 501,
        "name": "Oshawott",
        "typePrimary": "WATER"
    },
    "502": {
        "number": 502,
        "name": "Dewott",
        "typePrimary": "WATER"
    },
    "503": {
        "number": 503,
        "name": "Samurott",
        "typePrimary": "WATER"
    },
    "504": {
        "number": 504,
        "name": "Patrat",
        "typePrimary": "NORMAL"
    },
    "505": {
        "number": 505,
        "name": "Watchog",
        "typePrimary": "NORMAL"
    },
    "506": {
        "number": 506,
        "name": "Lillipup",
        "typePrimary": "NORMAL"
    },
    "507": {
        "number": 507,
        "name": "Herdier",
        "typePrimary": "NORMAL"
    },
    "508": {
        "number": 508,
        "name": "Stoutland",
        "typePrimary": "NORMAL"
    },
    "509": {
        "number": 509,
        "name": "Purrloin",
        "typePrimary": "DARK"
    },
    "510": {
        "number": 510,
        "name": "Liepard",
        "typePrimary": "DARK"
    },
    "511": {
        "number": 511,
        "name": "Pansage",
        "typePrimary": "GRASS"
    },
    "512": {
        "number": 512,
        "name": "Simisage",
        "typePrimary": "GRASS"
    },
    "513": {
        "number": 513,
        "name": "Pansear",
        "typePrimary": "FIRE"
    },
    "514": {
        "number": 514,
        "name": "Simisear",
        "typePrimary": "FIRE"
    },
    "515": {
        "number": 515,
        "name": "Panpour",
        "typePrimary": "WATER"
    },
    "516": {
        "number": 516,
        "name": "Simipour",
        "typePrimary": "WATER"
    },
    "517": {
        "number": 517,
        "name": "Munna",
        "typePrimary": "PSYCHIC"
    },
    "518": {
        "number": 518,
        "name": "Musharna",
        "typePrimary": "PSYCHIC"
    },
    "519": {
        "number": 519,
        "name": "Pidove",
        "typePrimary": "NORMAL",
        "typeSecondary": "FLYING"
    },
    "520": {
        "number": 520,
        "name": "Tranquill",
        "typePrimary": "NORMAL",
        "typeSecondary": "FLYING"
    },
    "521": {
        "number": 521,
        "name": "Unfezant",
        "typePrimary": "NORMAL",
        "typeSecondary": "FLYING"
    },
    "522": {
        "number": 522,
        "name": "Blitzle",
        "typePrimary": "ELECTRIC"
    },
    "523": {
        "number": 523,
        "name": "Zebstrika",
        "typePrimary": "ELECTRIC"
    },
    "524": {
        "number": 524,
        "name": "Roggenrola",
        "typePrimary": "ROCK"
    },
    "525": {
        "number": 525,
        "name": "Boldore",
        "typePrimary": "ROCK"
    },
    "526": {
        "number": 526,
        "name": "Gigalith",
        "typePrimary": "ROCK"
    },
    "527": {
        "number": 527,
        "name": "Woobat",
        "typePrimary": "PSYCHIC",
        "typeSecondary": "FLYING"
    },
    "528": {
        "number": 528,
        "name": "Swoobat",
        "typePrimary": "PSYCHIC",
        "typeSecondary": "FLYING"
    },
    "529": {
        "number": 529,
        "name": "Drilbur",
        "typePrimary": "GROUND"
    },
    "530": {
        "number": 530,
        "name": "Excadrill",
        "typePrimary": "GROUND",
        "typeSecondary": "STEEL"
    },
    "531": {
        "number": 531,
        "name": "Audino",
        "typePrimary": "NORMAL",
        "typeSecondary": "FAIRY"
    },
    "532": {
        "number": 532,
        "name": "Timburr",
        "typePrimary": "FIGHTING"
    },
    "533": {
        "number": 533,
        "name": "Gurdurr",
        "typePrimary": "FIGHTING"
    },
    "534": {
        "number": 534,
        "name": "Conkeldurr",
        "typePrimary": "FIGHTING"
    },
    "535": {
        "number": 535,
        "name": "Tympole",
        "typePrimary": "WATER"
    },
    "536": {
        "number": 536,
        "name": "Palpitoad",
        "typePrimary": "WATER",
        "typeSecondary": "GROUND"
    },
    "537": {
        "number": 537,
        "name": "Seismitoad",
        "typePrimary": "WATER",
        "typeSecondary": "GROUND"
    },
    "538": {
        "number": 538,
        "name": "Throh",
        "typePrimary": "FIGHTING"
    },
    "539": {
        "number": 539,
        "name": "Sawk",
        "typePrimary": "FIGHTING"
    },
    "540": {
        "number": 540,
        "name": "Sewaddle",
        "typePrimary": "BUG",
        "typeSecondary": "GRASS"
    },
    "541": {
        "number": 541,
        "name": "Swadloon",
        "typePrimary": "BUG",
        "typeSecondary": "GRASS"
    },
    "542": {
        "number": 542,
        "name": "Leavanny",
        "typePrimary": "BUG",
        "typeSecondary": "GRASS"
    },
    "543": {
        "number": 543,
        "name": "Venipede",
        "typePrimary": "BUG",
        "typeSecondary": "POISON"
    },
    "544": {
        "number": 544,
        "name": "Whirlipede",
        "typePrimary": "BUG",
        "typeSecondary": "POISON"
    },
    "545": {
        "number": 545,
        "name": "Scolipede",
        "typePrimary": "BUG",
        "typeSecondary": "POISON"
    },
    "546": {
        "number": 546,
        "name": "Cottonee",
        "typePrimary": "GRASS",
        "typeSecondary": "FAIRY"
    },
    "547": {
        "number": 547,
        "name": "Whimsicott",
        "typePrimary": "GRASS",
        "typeSecondary": "FAIRY"
    },
    "548": {
        "number": 548,
        "name": "Petilil",
        "typePrimary": "GRASS"
    },
    "549": {
        "number": 549,
        "name": "Lilligant",
        "typePrimary": "GRASS"
    },
    "550": {
        "number": 550,
        "name": "Basculin",
        "typePrimary": "WATER"
    },
    "551": {
        "number": 551,
        "name": "Sandile",
        "typePrimary": "GROUND",
        "typeSecondary": "DARK"
    },
    "552": {
        "number": 552,
        "name": "Krokorok",
        "typePrimary": "GROUND",
        "typeSecondary": "DARK"
    },
    "553": {
        "number": 553,
        "name": "Krookodile",
        "typePrimary": "GROUND",
        "typeSecondary": "DARK"
    },
    "554": {
        "number": 554,
        "name": "Darumaka",
        "typePrimary": "ICE"
    },
    "555": {
        "number": 555,
        "name": "Darmanitan",
        "typePrimary": "ICE",
        "typeSecondary": "FIRE"
    },
    "556": {
        "number": 556,
        "name": "Maractus",
        "typePrimary": "GRASS"
    },
    "557": {
        "number": 557,
        "name": "Dwebble",
        "typePrimary": "BUG",
        "typeSecondary": "ROCK"
    },
    "558": {
        "number": 558,
        "name": "Crustle",
        "typePrimary": "BUG",
        "typeSecondary": "ROCK"
    },
    "559": {
        "number": 559,
        "name": "Scraggy",
        "typePrimary": "DARK",
        "typeSecondary": "FIGHTING"
    },
    "560": {
        "number": 560,
        "name": "Scrafty",
        "typePrimary": "DARK",
        "typeSecondary": "FIGHTING"
    },
    "561": {
        "number": 561,
        "name": "Sigilyph",
        "typePrimary": "PSYCHIC",
        "typeSecondary": "FLYING"
    },
    "562": {
        "number": 562,
        "name": "Yamask",
        "typePrimary": "GROUND",
        "typeSecondary": "GHOST"
    },
    "563": {
        "number": 563,
        "name": "Cofagrigus",
        "typePrimary": "GHOST"
    },
    "564": {
        "number": 564,
        "name": "Tirtouga",
        "typePrimary": "WATER",
        "typeSecondary": "ROCK"
    },
    "565": {
        "number": 565,
        "name": "Carracosta",
        "typePrimary": "WATER",
        "typeSecondary": "ROCK"
    },
    "566": {
        "number": 566,
        "name": "Archen",
        "typePrimary": "ROCK",
        "typeSecondary": "FLYING"
    },
    "567": {
        "number": 567,
        "name": "Archeops",
        "typePrimary": "ROCK",
        "typeSecondary": "FLYING"
    },
    "568": {
        "number": 568,
        "name": "Trubbish",
        "typePrimary": "POISON"
    },
    "569": {
        "number": 569,
        "name": "Garbodor",
        "typePrimary": "POISON"
    },
    "570": {
        "number": 570,
        "name": "Zorua",
        "typePrimary": "DARK"
    },
    "571": {
        "number": 571,
        "name": "Zoroark",
        "typePrimary": "DARK"
    },
    "572": {
        "number": 572,
        "name": "Minccino",
        "typePrimary": "NORMAL"
    },
    "573": {
        "number": 573,
        "name": "Cinccino",
        "typePrimary": "NORMAL"
    },
    "574": {
        "number": 574,
        "name": "Gothita",
        "typePrimary": "PSYCHIC"
    },
    "575": {
        "number": 575,
        "name": "Gothorita",
        "typePrimary": "PSYCHIC"
    },
    "576": {
        "number": 576,
        "name": "Gothitelle",
        "typePrimary": "PSYCHIC"
    },
    "577": {
        "number": 577,
        "name": "Solosis",
        "typePrimary": "PSYCHIC"
    },
    "578": {
        "number": 578,
        "name": "Duosion",
        "typePrimary": "PSYCHIC"
    },
    "579": {
        "number": 579,
        "name": "Reuniclus",
        "typePrimary": "PSYCHIC"
    },
    "580": {
        "number": 580,
        "name": "Ducklett",
        "typePrimary": "WATER",
        "typeSecondary": "FLYING"
    },
    "581": {
        "number": 581,
        "name": "Swanna",
        "typePrimary": "WATER",
        "typeSecondary": "FLYING"
    },
    "582": {
        "number": 582,
        "name": "Vanillite",
        "typePrimary": "ICE"
    },
    "583": {
        "number": 583,
        "name": "Vanillish",
        "typePrimary": "ICE"
    },
    "584": {
        "number": 584,
        "name": "Vanilluxe",
        "typePrimary": "ICE"
    },
    "585": {
        "number": 585,
        "name": "Deerling",
        "typePrimary": "NORMAL",
        "typeSecondary": "GRASS"
    },
    "586": {
        "number": 586,
        "name": "Sawsbuck",
        "typePrimary": "NORMAL",
        "typeSecondary": "GRASS"
    },
    "587": {
        "number": 587,
        "name": "Emolga",
        "typePrimary": "ELECTRIC",
        "typeSecondary": "FLYING"
    },
    "588": {
        "number": 588,
        "name": "Karrablast",
        "typePrimary": "BUG"
    },
    "589": {
        "number": 589,
        "name": "Escavalier",
        "typePrimary": "BUG",
        "typeSecondary": "STEEL"
    },
    "590": {
        "number": 590,
        "name": "Foongus",
        "typePrimary": "GRASS",
        "typeSecondary": "POISON"
    },
    "591": {
        "number": 591,
        "name": "Amoonguss",
        "typePrimary": "GRASS",
        "typeSecondary": "POISON"
    },
    "592": {
        "number": 592,
        "name": "Frillish",
        "typePrimary": "WATER",
        "typeSecondary": "GHOST"
    },
    "593": {
        "number": 593,
        "name": "Jellicent",
        "typePrimary": "WATER",
        "typeSecondary": "GHOST"
    },
    "594": {
        "number": 594,
        "name": "Alomomola",
        "typePrimary": "WATER"
    },
    "595": {
        "number": 595,
        "name": "Joltik",
        "typePrimary": "BUG",
        "typeSecondary": "ELECTRIC"
    },
    "596": {
        "number": 596,
        "name": "Galvantula",
        "typePrimary": "BUG",
        "typeSecondary": "ELECTRIC"
    },
    "597": {
        "number": 597,
        "name": "Ferroseed",
        "typePrimary": "GRASS",
        "typeSecondary": "STEEL"
    },
    "598": {
        "number": 598,
        "name": "Ferrothorn",
        "typePrimary": "GRASS",
        "typeSecondary": "STEEL"
    },
    "599": {
        "number": 599,
        "name": "Klink",
        "typePrimary": "STEEL"
    },
    "600": {
        "number": 600,
        "name": "Klang",
        "typePrimary": "STEEL"
    },
    "601": {
        "number": 601,
        "name": "Klinklang",
        "typePrimary": "STEEL"
    },
    "602": {
        "number": 602,
        "name": "Tynamo",
        "typePrimary": "ELECTRIC"
    },
    "603": {
        "number": 603,
        "name": "Eelektrik",
        "typePrimary": "ELECTRIC"
    },
    "604": {
        "number": 604,
        "name": "Eelektross",
        "typePrimary": "ELECTRIC"
    },
    "605": {
        "number": 605,
        "name": "Elgyem",
        "typePrimary": "PSYCHIC"
    },
    "606": {
        "number": 606,
        "name": "Beheeyem",
        "typePrimary": "PSYCHIC"
    },
    "607": {
        "number": 607,
        "name": "Litwick",
        "typePrimary": "GHOST",
        "typeSecondary": "FIRE"
    },
    "608": {
        "number": 608,
        "name": "Lampent",
        "typePrimary": "GHOST",
        "typeSecondary": "FIRE"
    },
    "609": {
        "number": 609,
        "name": "Chandelure",
        "typePrimary": "GHOST",
        "typeSecondary": "FIRE"
    },
    "610": {
        "number": 610,
        "name": "Axew",
        "typePrimary": "DRAGON"
    },
    "611": {
        "number": 611,
        "name": "Fraxure",
        "typePrimary": "DRAGON"
    },
    "612": {
        "number": 612,
        "name": "Haxorus",
        "typePrimary": "DRAGON"
    },
    "613": {
        "number": 613,
        "name": "Cubchoo",
        "typePrimary": "ICE"
    },
    "614": {
        "number": 614,
        "name": "Beartic",
        "typePrimary": "ICE"
    },
    "615": {
        "number": 615,
        "name": "Cryogonal",
        "typePrimary": "ICE"
    },
    "616": {
        "number": 616,
        "name": "Shelmet",
        "typePrimary": "BUG"
    },
    "617": {
        "number": 617,
        "name": "Accelgor",
        "typePrimary": "BUG"
    },
    "618": {
        "number": 618,
        "name": "Stunfisk",
        "typePrimary": "GROUND",
        "typeSecondary": "STEEL"
    },
    "619": {
        "number": 619,
        "name": "Mienfoo",
        "typePrimary": "FIGHTING"
    },
    "620": {
        "number": 620,
        "name": "Mienshao",
        "typePrimary": "FIGHTING"
    },
    "621": {
        "number": 621,
        "name": "Druddigon",
        "typePrimary": "DRAGON"
    },
    "622": {
        "number": 622,
        "name": "Golett",
        "typePrimary": "GROUND",
        "typeSecondary": "GHOST"
    },
    "623": {
        "number": 623,
        "name": "Golurk",
        "typePrimary": "GROUND",
        "typeSecondary": "GHOST"
    },
    "624": {
        "number": 624,
        "name": "Pawniard",
        "typePrimary": "DARK",
        "typeSecondary": "STEEL"
    },
    "625": {
        "number": 625,
        "name": "Bisharp",
        "typePrimary": "DARK",
        "typeSecondary": "STEEL"
    },
    "626": {
        "number": 626,
        "name": "Bouffalant",
        "typePrimary": "NORMAL"
    },
    "627": {
        "number": 627,
        "name": "Rufflet",
        "typePrimary": "NORMAL",
        "typeSecondary": "FLYING"
    },
    "628": {
        "number": 628,
        "name": "Braviary",
        "typePrimary": "NORMAL",
        "typeSecondary": "FLYING"
    },
    "629": {
        "number": 629,
        "name": "Vullaby",
        "typePrimary": "DARK",
        "typeSecondary": "FLYING"
    },
    "630": {
        "number": 630,
        "name": "Mandibuzz",
        "typePrimary": "DARK",
        "typeSecondary": "FLYING"
    },
    "631": {
        "number": 631,
        "name": "Heatmor",
        "typePrimary": "FIRE"
    },
    "632": {
        "number": 632,
        "name": "Durant",
        "typePrimary": "BUG",
        "typeSecondary": "STEEL"
    },
    "633": {
        "number": 633,
        "name": "Deino",
        "typePrimary": "DARK",
        "typeSecondary": "DRAGON"
    },
    "634": {
        "number": 634,
        "name": "Zweilous",
        "typePrimary": "DARK",
        "typeSecondary": "DRAGON"
    },
    "635": {
        "number": 635,
        "name": "Hydreigon",
        "typePrimary": "DARK",
        "typeSecondary": "DRAGON"
    },
    "636": {
        "number": 636,
        "name": "Larvesta",
        "typePrimary": "BUG",
        "typeSecondary": "FIRE"
    },
    "637": {
        "number": 637,
        "name": "Volcarona",
        "typePrimary": "BUG",
        "typeSecondary": "FIRE"
    },
    "638": {
        "number": 638,
        "name": "Cobalion",
        "typePrimary": "STEEL",
        "typeSecondary": "FIGHTING"
    },
    "639": {
        "number": 639,
        "name": "Terrakion",
        "typePrimary": "ROCK",
        "typeSecondary": "FIGHTING"
    },
    "640": {
        "number": 640,
        "name": "Virizion",
        "typePrimary": "GRASS",
        "typeSecondary": "FIGHTING"
    },
    "641": {
        "number": 641,
        "name": "Tornadus",
        "typePrimary": "FLYING"
    },
    "642": {
        "number": 642,
        "name": "Thundurus",
        "typePrimary": "ELECTRIC",
        "typeSecondary": "FLYING"
    },
    "643": {
        "number": 643,
        "name": "Reshiram",
        "typePrimary": "DRAGON",
        "typeSecondary": "FIRE"
    },
    "644": {
        "number": 644,
        "name": "Zekrom",
        "typePrimary": "DRAGON",
        "typeSecondary": "ELECTRIC"
    },
    "645": {
        "number": 645,
        "name": "Landorus",
        "typePrimary": "GROUND",
        "typeSecondary": "FLYING"
    },
    "646": {
        "number": 646,
        "name": "Kyurem",
        "typePrimary": "DRAGON",
        "typeSecondary": "ICE"
    },
    "647": {
        "number": 647,
        "name": "Keldeo",
        "typePrimary": "WATER",
        "typeSecondary": "FIGHTING"
    },
    "648": {
        "number": 648,
        "name": "Meloetta",
        "typePrimary": "NORMAL",
        "typeSecondary": "FIGHTING"
    },
    "649": {
        "number": 649,
        "name": "Genesect",
        "typePrimary": "BUG",
        "typeSecondary": "STEEL"
    },
    "650": {
        "number": 650,
        "name": "Chespin",
        "typePrimary": "GRASS"
    },
    "651": {
        "number": 651,
        "name": "Quilladin",
        "typePrimary": "GRASS"
    },
    "652": {
        "number": 652,
        "name": "Chesnaught",
        "typePrimary": "GRASS",
        "typeSecondary": "FIGHTING"
    },
    "653": {
        "number": 653,
        "name": "Fennekin",
        "typePrimary": "FIRE"
    },
    "654": {
        "number": 654,
        "name": "Braixen",
        "typePrimary": "FIRE"
    },
    "655": {
        "number": 655,
        "name": "Delphox",
        "typePrimary": "FIRE",
        "typeSecondary": "PSYCHIC"
    },
    "656": {
        "number": 656,
        "name": "Froakie",
        "typePrimary": "WATER"
    },
    "657": {
        "number": 657,
        "name": "Frogadier",
        "typePrimary": "WATER"
    },
    "658": {
        "number": 658,
        "name": "Greninja",
        "typePrimary": "WATER",
        "typeSecondary": "DARK"
    },
    "659": {
        "number": 659,
        "name": "Bunnelby",
        "typePrimary": "NORMAL"
    },
    "660": {
        "number": 660,
        "name": "Diggersby",
        "typePrimary": "NORMAL",
        "typeSecondary": "GROUND"
    },
    "661": {
        "number": 661,
        "name": "Fletchling",
        "typePrimary": "NORMAL",
        "typeSecondary": "FLYING"
    },
    "662": {
        "number": 662,
        "name": "Fletchinder",
        "typePrimary": "FIRE",
        "typeSecondary": "FLYING"
    },
    "663": {
        "number": 663,
        "name": "Talonflame",
        "typePrimary": "FIRE",
        "typeSecondary": "FLYING"
    },
    "664": {
        "number": 664,
        "name": "Scatterbug",
        "typePrimary": "BUG"
    },
    "665": {
        "number": 665,
        "name": "Spewpa",
        "typePrimary": "BUG"
    },
    "666": {
        "number": 666,
        "name": "Vivillon",
        "typePrimary": "BUG",
        "typeSecondary": "FLYING"
    },
    "667": {
        "number": 667,
        "name": "Litleo",
        "typePrimary": "FIRE",
        "typeSecondary": "NORMAL"
    },
    "668": {
        "number": 668,
        "name": "Pyroar",
        "typePrimary": "FIRE",
        "typeSecondary": "NORMAL"
    },
    "669": {
        "number": 669,
        "name": "Flabébé",
        "typePrimary": "FAIRY"
    },
    "670": {
        "number": 670,
        "name": "Floette",
        "typePrimary": "FAIRY"
    },
    "671": {
        "number": 671,
        "name": "Florges",
        "typePrimary": "FAIRY"
    },
    "672": {
        "number": 672,
        "name": "Skiddo",
        "typePrimary": "GRASS"
    },
    "673": {
        "number": 673,
        "name": "Gogoat",
        "typePrimary": "GRASS"
    },
    "674": {
        "number": 674,
        "name": "Pancham",
        "typePrimary": "FIGHTING"
    },
    "675": {
        "number": 675,
        "name": "Pangoro",
        "typePrimary": "FIGHTING",
        "typeSecondary": "DARK"
    },
    "676": {
        "number": 676,
        "name": "Furfrou",
        "typePrimary": "NORMAL"
    },
    "677": {
        "number": 677,
        "name": "Espurr",
        "typePrimary": "PSYCHIC"
    },
    "678": {
        "number": 678,
        "name": "Meowstic",
        "typePrimary": "PSYCHIC"
    },
    "679": {
        "number": 679,
        "name": "Honedge",
        "typePrimary": "STEEL",
        "typeSecondary": "GHOST"
    },
    "680": {
        "number": 680,
        "name": "Doublade",
        "typePrimary": "STEEL",
        "typeSecondary": "GHOST"
    },
    "681": {
        "number": 681,
        "name": "Aegislash",
        "typePrimary": "STEEL",
        "typeSecondary": "GHOST"
    },
    "682": {
        "number": 682,
        "name": "Spritzee",
        "typePrimary": "FAIRY"
    },
    "683": {
        "number": 683,
        "name": "Aromatisse",
        "typePrimary": "FAIRY"
    },
    "684": {
        "number": 684,
        "name": "Swirlix",
        "typePrimary": "FAIRY"
    },
    "685": {
        "number": 685,
        "name": "Slurpuff",
        "typePrimary": "FAIRY"
    },
    "686": {
        "number": 686,
        "name": "Inkay",
        "typePrimary": "DARK",
        "typeSecondary": "PSYCHIC"
    },
    "687": {
        "number": 687,
        "name": "Malamar",
        "typePrimary": "DARK",
        "typeSecondary": "PSYCHIC"
    },
    "688": {
        "number": 688,
        "name": "Binacle",
        "typePrimary": "ROCK",
        "typeSecondary": "WATER"
    },
    "689": {
        "number": 689,
        "name": "Barbaracle",
        "typePrimary": "ROCK",
        "typeSecondary": "WATER"
    },
    "690": {
        "number": 690,
        "name": "Skrelp",
        "typePrimary": "POISON",
        "typeSecondary": "WATER"
    },
    "691": {
        "number": 691,
        "name": "Dragalge",
        "typePrimary": "POISON",
        "typeSecondary": "DRAGON"
    },
    "692": {
        "number": 692,
        "name": "Clauncher",
        "typePrimary": "WATER"
    },
    "693": {
        "number": 693,
        "name": "Clawitzer",
        "typePrimary": "WATER"
    },
    "694": {
        "number": 694,
        "name": "Helioptile",
        "typePrimary": "ELECTRIC",
        "typeSecondary": "NORMAL"
    },
    "695": {
        "number": 695,
        "name": "Heliolisk",
        "typePrimary": "ELECTRIC",
        "typeSecondary": "NORMAL"
    },
    "696": {
        "number": 696,
        "name": "Tyrunt",
        "typePrimary": "ROCK",
        "typeSecondary": "DRAGON"
    },
    "697": {
        "number": 697,
        "name": "Tyrantrum",
        "typePrimary": "ROCK",
        "typeSecondary": "DRAGON"
    },
    "698": {
        "number": 698,
        "name": "Amaura",
        "typePrimary": "ROCK",
        "typeSecondary": "ICE"
    },
    "699": {
        "number": 699,
        "name": "Aurorus",
        "typePrimary": "ROCK",
        "typeSecondary": "ICE"
    },
    "700": {
        "number": 700,
        "name": "Sylveon",
        "typePrimary": "FAIRY"
    },
    "701": {
        "number": 701,
        "name": "Hawlucha",
        "typePrimary": "FIGHTING",
        "typeSecondary": "FLYING"
    },
    "702": {
        "number": 702,
        "name": "Dedenne",
        "typePrimary": "ELECTRIC",
        "typeSecondary": "FAIRY"
    },
    "703": {
        "number": 703,
        "name": "Carbink",
        "typePrimary": "ROCK",
        "typeSecondary": "FAIRY"
    },
    "704": {
        "number": 704,
        "name": "Goomy",
        "typePrimary": "DRAGON"
    },
    "705": {
        "number": 705,
        "name": "Sliggoo",
        "typePrimary": "DRAGON"
    },
    "706": {
        "number": 706,
        "name": "Goodra",
        "typePrimary": "DRAGON"
    },
    "707": {
        "number": 707,
        "name": "Klefki",
        "typePrimary": "STEEL",
        "typeSecondary": "FAIRY"
    },
    "708": {
        "number": 708,
        "name": "Phantump",
        "typePrimary": "GHOST",
        "typeSecondary": "GRASS"
    },
    "709": {
        "number": 709,
        "name": "Trevenant",
        "typePrimary": "GHOST",
        "typeSecondary": "GRASS"
    },
    "710": {
        "number": 710,
        "name": "Pumpkaboo",
        "typePrimary": "GHOST",
        "typeSecondary": "GRASS"
    },
    "711": {
        "number": 711,
        "name": "Gourgeist",
        "typePrimary": "GHOST",
        "typeSecondary": "GRASS"
    },
    "712": {
        "number": 712,
        "name": "Bergmite",
        "typePrimary": "ICE"
    },
    "713": {
        "number": 713,
        "name": "Avalugg",
        "typePrimary": "ICE"
    },
    "714": {
        "number": 714,
        "name": "Noibat",
        "typePrimary": "FLYING",
        "typeSecondary": "DRAGON"
    },
    "715": {
        "number": 715,
        "name": "Noivern",
        "typePrimary": "FLYING",
        "typeSecondary": "DRAGON"
    },
    "716": {
        "number": 716,
        "name": "Xerneas",
        "typePrimary": "FAIRY"
    },
    "717": {
        "number": 717,
        "name": "Yveltal",
        "typePrimary": "DARK",
        "typeSecondary": "FLYING"
    },
    "718": {
        "number": 718,
        "name": "Zygarde",
        "typePrimary": "DRAGON",
        "typeSecondary": "GROUND"
    },
    "719": {
        "number": 719,
        "name": "Diancie",
        "typePrimary": "ROCK",
        "typeSecondary": "FAIRY"
    },
    "720": {
        "number": 720,
        "name": "Hoopa",
        "typePrimary": "PSYCHIC",
        "typeSecondary": "DARK"
    },
    "721": {
        "number": 721,
        "name": "Volcanion",
        "typePrimary": "FIRE",
        "typeSecondary": "WATER"
    },
    "722": {
        "number": 722,
        "name": "Rowlet",
        "typePrimary": "GRASS",
        "typeSecondary": "FLYING"
    },
    "723": {
        "number": 723,
        "name": "Dartrix",
        "typePrimary": "GRASS",
        "typeSecondary": "FLYING"
    },
    "724": {
        "number": 724,
        "name": "Decidueye",
        "typePrimary": "GRASS",
        "typeSecondary": "GHOST"
    },
    "725": {
        "number": 725,
        "name": "Litten",
        "typePrimary": "FIRE"
    },
    "726": {
        "number": 726,
        "name": "Torracat",
        "typePrimary": "FIRE"
    },
    "727": {
        "number": 727,
        "name": "Incineroar",
        "typePrimary": "FIRE",
        "typeSecondary": "DARK"
    },
    "728": {
        "number": 728,
        "name": "Popplio",
        "typePrimary": "WATER"
    },
    "729": {
        "number": 729,
        "name": "Brionne",
        "typePrimary": "WATER"
    },
    "730": {
        "number": 730,
        "name": "Primarina",
        "typePrimary": "WATER",
        "typeSecondary": "FAIRY"
    },
    "731": {
        "number": 731,
        "name": "Pikipek",
        "typePrimary": "NORMAL",
        "typeSecondary": "FLYING"
    },
    "732": {
        "number": 732,
        "name": "Trumbeak",
        "typePrimary": "NORMAL",
        "typeSecondary": "FLYING"
    },
    "733": {
        "number": 733,
        "name": "Toucannon",
        "typePrimary": "NORMAL",
        "typeSecondary": "FLYING"
    },
    "734": {
        "number": 734,
        "name": "Yungoos",
        "typePrimary": "NORMAL"
    },
    "735": {
        "number": 735,
        "name": "Gumshoos",
        "typePrimary": "NORMAL"
    },
    "736": {
        "number": 736,
        "name": "Grubbin",
        "typePrimary": "BUG"
    },
    "737": {
        "number": 737,
        "name": "Charjabug",
        "typePrimary": "BUG",
        "typeSecondary": "ELECTRIC"
    },
    "738": {
        "number": 738,
        "name": "Vikavolt",
        "typePrimary": "BUG",
        "typeSecondary": "ELECTRIC"
    },
    "739": {
        "number": 739,
        "name": "Crabrawler",
        "typePrimary": "FIGHTING"
    },
    "740": {
        "number": 740,
        "name": "Crabominable",
        "typePrimary": "FIGHTING",
        "typeSecondary": "ICE"
    },
    "741": {
        "number": 741,
        "name": "Oricorio",
        "typePrimary": "GHOST",
        "typeSecondary": "FLYING"
    },
    "742": {
        "number": 742,
        "name": "Cutiefly",
        "typePrimary": "BUG",
        "typeSecondary": "FAIRY"
    },
    "743": {
        "number": 743,
        "name": "Ribombee",
        "typePrimary": "BUG",
        "typeSecondary": "FAIRY"
    },
    "744": {
        "number": 744,
        "name": "Rockruff",
        "typePrimary": "ROCK"
    },
    "745": {
        "number": 745,
        "name": "Lycanroc",
        "typePrimary": "ROCK"
    },
    "746": {
        "number": 746,
        "name": "Wishiwashi",
        "typePrimary": "WATER"
    },
    "747": {
        "number": 747,
        "name": "Mareanie",
        "typePrimary": "POISON",
        "typeSecondary": "WATER"
    },
    "748": {
        "number": 748,
        "name": "Toxapex",
        "typePrimary": "POISON",
        "typeSecondary": "WATER"
    },
    "749": {
        "number": 749,
        "name": "Mudbray",
        "typePrimary": "GROUND"
    },
    "750": {
        "number": 750,
        "name": "Mudsdale",
        "typePrimary": "GROUND"
    },
    "751": {
        "number": 751,
        "name": "Dewpider",
        "typePrimary": "WATER",
        "typeSecondary": "BUG"
    },
    "752": {
        "number": 752,
        "name": "Araquanid",
        "typePrimary": "WATER",
        "typeSecondary": "BUG"
    },
    "753": {
        "number": 753,
        "name": "Fomantis",
        "typePrimary": "GRASS"
    },
    "754": {
        "number": 754,
        "name": "Lurantis",
        "typePrimary": "GRASS"
    },
    "755": {
        "number": 755,
        "name": "Morelull",
        "typePrimary": "GRASS",
        "typeSecondary": "FAIRY"
    },
    "756": {
        "number": 756,
        "name": "Shiinotic",
        "typePrimary": "GRASS",
        "typeSecondary": "FAIRY"
    },
    "757": {
        "number": 757,
        "name": "Salandit",
        "typePrimary": "POISON",
        "typeSecondary": "FIRE"
    },
    "758": {
        "number": 758,
        "name": "Salazzle",
        "typePrimary": "POISON",
        "typeSecondary": "FIRE"
    },
    "759": {
        "number": 759,
        "name": "Stufful",
        "typePrimary": "NORMAL",
        "typeSecondary": "FIGHTING"
    },
    "760": {
        "number": 760,
        "name": "Bewear",
        "typePrimary": "NORMAL",
        "typeSecondary": "FIGHTING"
    },
    "761": {
        "number": 761,
        "name": "Bounsweet",
        "typePrimary": "GRASS"
    },
    "762": {
        "number": 762,
        "name": "Steenee",
        "typePrimary": "GRASS"
    },
    "763": {
        "number": 763,
        "name": "Tsareena",
        "typePrimary": "GRASS"
    },
    "764": {
        "number": 764,
        "name": "Comfey",
        "typePrimary": "FAIRY"
    },
    "765": {
        "number": 765,
        "name": "Oranguru",
        "typePrimary": "NORMAL",
        "typeSecondary": "PSYCHIC"
    },
    "766": {
        "number": 766,
        "name": "Passimian",
        "typePrimary": "FIGHTING"
    },
    "767": {
        "number": 767,
        "name": "Wimpod",
        "typePrimary": "BUG",
        "typeSecondary": "WATER"
    },
    "768": {
        "number": 768,
        "name": "Golisopod",
        "typePrimary": "BUG",
        "typeSecondary": "WATER"
    },
    "769": {
        "number": 769,
        "name": "Sandygast",
        "typePrimary": "GHOST",
        "typeSecondary": "GROUND"
    },
    "770": {
        "number": 770,
        "name": "Palossand",
        "typePrimary": "GHOST",
        "typeSecondary": "GROUND"
    },
    "771": {
        "number": 771,
        "name": "Pyukumuku",
        "typePrimary": "WATER"
    },
    "772": {
        "number": 772,
        "name": "Type: Null",
        "typePrimary": "NORMAL"
    },
    "773": {
        "number": 773,
        "name": "Silvally",
        "typePrimary": "NORMAL"
    },
    "774": {
        "number": 774,
        "name": "Minior",
        "typePrimary": "ROCK",
        "typeSecondary": "FLYING"
    },
    "775": {
        "number": 775,
        "name": "Komala",
        "typePrimary": "NORMAL"
    },
    "776": {
        "number": 776,
        "name": "Turtonator",
        "typePrimary": "FIRE",
        "typeSecondary": "DRAGON"
    },
    "777": {
        "number": 777,
        "name": "Togedemaru",
        "typePrimary": "ELECTRIC",
        "typeSecondary": "STEEL"
    },
    "778": {
        "number": 778,
        "name": "Mimikyu",
        "typePrimary": "GHOST",
        "typeSecondary": "FAIRY"
    },
    "779": {
        "number": 779,
        "name": "Bruxish",
        "typePrimary": "WATER",
        "typeSecondary": "PSYCHIC"
    },
    "780": {
        "number": 780,
        "name": "Drampa",
        "typePrimary": "NORMAL",
        "typeSecondary": "DRAGON"
    },
    "781": {
        "number": 781,
        "name": "Dhelmise",
        "typePrimary": "GHOST",
        "typeSecondary": "GRASS"
    },
    "782": {
        "number": 782,
        "name": "Jangmo-o",
        "typePrimary": "DRAGON"
    },
    "783": {
        "number": 783,
        "name": "Hakamo-o",
        "typePrimary": "DRAGON",
        "typeSecondary": "FIGHTING"
    },
    "784": {
        "number": 784,
        "name": "Kommo-o",
        "typePrimary": "DRAGON",
        "typeSecondary": "FIGHTING"
    },
    "785": {
        "number": 785,
        "name": "Tapu Koko",
        "typePrimary": "ELECTRIC",
        "typeSecondary": "FAIRY"
    },
    "786": {
        "number": 786,
        "name": "Tapu Lele",
        "typePrimary": "PSYCHIC",
        "typeSecondary": "FAIRY"
    },
    "787": {
        "number": 787,
        "name": "Tapu Bulu",
        "typePrimary": "GRASS",
        "typeSecondary": "FAIRY"
    },
    "788": {
        "number": 788,
        "name": "Tapu Fini",
        "typePrimary": "WATER",
        "typeSecondary": "FAIRY"
    },
    "789": {
        "number": 789,
        "name": "Cosmog",
        "typePrimary": "PSYCHIC"
    },
    "790": {
        "number": 790,
        "name": "Cosmoem",
        "typePrimary": "PSYCHIC"
    },
    "791": {
        "number": 791,
        "name": "Solgaleo",
        "typePrimary": "PSYCHIC",
        "typeSecondary": "STEEL"
    },
    "792": {
        "number": 792,
        "name": "Lunala",
        "typePrimary": "PSYCHIC",
        "typeSecondary": "GHOST"
    },
    "793": {
        "number": 793,
        "name": "Nihilego",
        "typePrimary": "ROCK",
        "typeSecondary": "POISON"
    },
    "794": {
        "number": 794,
        "name": "Buzzwole",
        "typePrimary": "BUG",
        "typeSecondary": "FIGHTING"
    },
    "795": {
        "number": 795,
        "name": "Pheromosa",
        "typePrimary": "BUG",
        "typeSecondary": "FIGHTING"
    },
    "796": {
        "number": 796,
        "name": "Xurkitree",
        "typePrimary": "ELECTRIC"
    },
    "797": {
        "number": 797,
        "name": "Celesteela",
        "typePrimary": "STEEL",
        "typeSecondary": "FLYING"
    },
    "798": {
        "number": 798,
        "name": "Kartana",
        "typePrimary": "GRASS",
        "typeSecondary": "STEEL"
    },
    "799": {
        "number": 799,
        "name": "Guzzlord",
        "typePrimary": "DARK",
        "typeSecondary": "DRAGON"
    },
    "800": {
        "number": 800,
        "name": "Necrozma",
        "typePrimary": "PSYCHIC",
        "typeSecondary": "DRAGON"
    },
    "801": {
        "number": 801,
        "name": "Magearna",
        "typePrimary": "STEEL",
        "typeSecondary": "FAIRY"
    },
    "802": {
        "number": 802,
        "name": "Marshadow",
        "typePrimary": "FIGHTING",
        "typeSecondary": "GHOST"
    },
    "803": {
        "number": 803,
        "name": "Poipole",
        "typePrimary": "POISON"
    },
    "804": {
        "number": 804,
        "name": "Naganadel",
        "typePrimary": "POISON",
        "typeSecondary": "DRAGON"
    },
    "805": {
        "number": 805,
        "name": "Stakataka",
        "typePrimary": "ROCK",
        "typeSecondary": "STEEL"
    },
    "806": {
        "number": 806,
        "name": "Blacephalon",
        "typePrimary": "FIRE",
        "typeSecondary": "GHOST"
    },
    "807": {
        "number": 807,
        "name": "Zeraora",
        "typePrimary": "ELECTRIC"
    },
    "808": {
        "number": 808,
        "name": "Meltan",
        "typePrimary": "STEEL"
    },
    "809": {
        "number": 809,
        "name": "Melmetal",
        "typePrimary": "STEEL"
    },
    "810": {
        "number": 810,
        "name": "Grookey",
        "typePrimary": "GRASS"
    },
    "811": {
        "number": 811,
        "name": "Thwackey",
        "typePrimary": "GRASS"
    },
    "812": {
        "number": 812,
        "name": "Rillaboom",
        "typePrimary": "GRASS"
    },
    "813": {
        "number": 813,
        "name": "Scorbunny",
        "typePrimary": "FIRE"
    },
    "814": {
        "number": 814,
        "name": "Raboot",
        "typePrimary": "FIRE"
    },
    "815": {
        "number": 815,
        "name": "Cinderace",
        "typePrimary": "FIRE"
    },
    "816": {
        "number": 816,
        "name": "Sobble",
        "typePrimary": "WATER"
    },
    "817": {
        "number": 817,
        "name": "Drizzile",
        "typePrimary": "WATER"
    },
    "818": {
        "number": 818,
        "name": "Inteleon",
        "typePrimary": "WATER"
    },
    "819": {
        "number": 819,
        "name": "Skwovet",
        "typePrimary": "NORMAL"
    },
    "820": {
        "number": 820,
        "name": "Greedent",
        "typePrimary": "NORMAL"
    },
    "821": {
        "number": 821,
        "name": "Rookidee",
        "typePrimary": "FLYING"
    },
    "822": {
        "number": 822,
        "name": "Corvisquire",
        "typePrimary": "FLYING"
    },
    "823": {
        "number": 823,
        "name": "Corviknight",
        "typePrimary": "FLYING",
        "typeSecondary": "STEEL"
    },
    "824": {
        "number": 824,
        "name": "Blipbug",
        "typePrimary": "BUG"
    },
    "825": {
        "number": 825,
        "name": "Dottler",
        "typePrimary": "BUG",
        "typeSecondary": "PSYCHIC"
    },
    "826": {
        "number": 826,
        "name": "Orbeetle",
        "typePrimary": "BUG",
        "typeSecondary": "PSYCHIC"
    },
    "827": {
        "number": 827,
        "name": "Nickit",
        "typePrimary": "DARK"
    },
    "828": {
        "number": 828,
        "name": "Thievul",
        "typePrimary": "DARK"
    },
    "829": {
        "number": 829,
        "name": "Gossifleur",
        "typePrimary": "GRASS"
    },
    "830": {
        "number": 830,
        "name": "Eldegoss",
        "typePrimary": "GRASS"
    },
    "831": {
        "number": 831,
        "name": "Wooloo",
        "typePrimary": "NORMAL"
    },
    "832": {
        "number": 832,
        "name": "Dubwool",
        "typePrimary": "NORMAL"
    },
    "833": {
        "number": 833,
        "name": "Chewtle",
        "typePrimary": "WATER"
    },
    "834": {
        "number": 834,
        "name": "Drednaw",
        "typePrimary": "WATER",
        "typeSecondary": "ROCK"
    },
    "835": {
        "number": 835,
        "name": "Yamper",
        "typePrimary": "ELECTRIC"
    },
    "836": {
        "number": 836,
        "name": "Boltund",
        "typePrimary": "ELECTRIC"
    },
    "837": {
        "number": 837,
        "name": "Rolycoly",
        "typePrimary": "ROCK"
    },
    "838": {
        "number": 838,
        "name": "Carkol",
        "typePrimary": "ROCK",
        "typeSecondary": "FIRE"
    },
    "839": {
        "number": 839,
        "name": "Coalossal",
        "typePrimary": "ROCK",
        "typeSecondary": "FIRE"
    },
    "840": {
        "number": 840,
        "name": "Applin",
        "typePrimary": "GRASS",
        "typeSecondary": "DRAGON"
    },
    "841": {
        "number": 841,
        "name": "Flapple",
        "typePrimary": "GRASS",
        "typeSecondary": "DRAGON"
    },
    "842": {
        "number": 842,
        "name": "Appletun",
        "typePrimary": "GRASS",
        "typeSecondary": "DRAGON"
    },
    "843": {
        "number": 843,
        "name": "Silicobra",
        "typePrimary": "GROUND"
    },
    "844": {
        "number": 844,
        "name": "Sandaconda",
        "typePrimary": "GROUND"
    },
    "845": {
        "number": 845,
        "name": "Cramorant",
        "typePrimary": "FLYING",
        "typeSecondary": "WATER"
    },
    "846": {
        "number": 846,
        "name": "Arrokuda",
        "typePrimary": "WATER"
    },
    "847": {
        "number": 847,
        "name": "Barraskewda",
        "typePrimary": "WATER"
    },
    "848": {
        "number": 848,
        "name": "Toxel",
        "typePrimary": "ELECTRIC",
        "typeSecondary": "POISON"
    },
    "849": {
        "number": 849,
        "name": "Toxtricity",
        "typePrimary": "ELECTRIC",
        "typeSecondary": "POISON"
    },
    "850": {
        "number": 850,
        "name": "Sizzlipede",
        "typePrimary": "FIRE",
        "typeSecondary": "BUG"
    },
    "851": {
        "number": 851,
        "name": "Centiskorch",
        "typePrimary": "FIRE",
        "typeSecondary": "BUG"
    },
    "852": {
        "number": 852,
        "name": "Clobbopus",
        "typePrimary": "FIGHTING"
    },
    "853": {
        "number": 853,
        "name": "Grapploct",
        "typePrimary": "FIGHTING"
    },
    "854": {
        "number": 854,
        "name": "Sinistea",
        "typePrimary": "GHOST"
    },
    "855": {
        "number": 855,
        "name": "Polteageist",
        "typePrimary": "GHOST"
    },
    "856": {
        "number": 856,
        "name": "Hatenna",
        "typePrimary": "PSYCHIC"
    },
    "857": {
        "number": 857,
        "name": "Hattrem",
        "typePrimary": "PSYCHIC"
    },
    "858": {
        "number": 858,
        "name": "Hatterene",
        "typePrimary": "PSYCHIC",
        "typeSecondary": "FAIRY"
    },
    "859": {
        "number": 859,
        "name": "Impidimp",
        "typePrimary": "DARK",
        "typeSecondary": "FAIRY"
    },
    "860": {
        "number": 860,
        "name": "Morgrem",
        "typePrimary": "DARK",
        "typeSecondary": "FAIRY"
    },
    "861": {
        "number": 861,
        "name": "Grimmsnarl",
        "typePrimary": "DARK",
        "typeSecondary": "FAIRY"
    },
    "862": {
        "number": 862,
        "name": "Obstagoon",
        "typePrimary": "DARK",
        "typeSecondary": "NORMAL"
    },
    "863": {
        "number": 863,
        "name": "Perrserker",
        "typePrimary": "STEEL"
    },
    "864": {
        "number": 864,
        "name": "Cursola",
        "typePrimary": "GHOST"
    },
    "865": {
        "number": 865,
        "name": "Sirfetch'd",
        "typePrimary": "FIGHTING"
    },
    "866": {
        "number": 866,
        "name": "Mr. Rime",
        "typePrimary": "PSYCHIC",
        "typeSecondary": "ICE"
    },
    "867": {
        "number": 867,
        "name": "Runerigus",
        "typePrimary": "GROUND",
        "typeSecondary": "GHOST"
    },
    "868": {
        "number": 868,
        "name": "Milcery",
        "typePrimary": "FAIRY"
    },
    "869": {
        "number": 869,
        "name": "Alcremie",
        "typePrimary": "FAIRY"
    },
    "870": {
        "number": 870,
        "name": "Falinks",
        "typePrimary": "FIGHTING"
    },
    "871": {
        "number": 871,
        "name": "Pincurchin",
        "typePrimary": "ELECTRIC"
    },
    "872": {
        "number": 872,
        "name": "Snom",
        "typePrimary": "ICE",
        "typeSecondary": "BUG"
    },
    "873": {
        "number": 873,
        "name": "Frosmoth",
        "typePrimary": "ICE",
        "typeSecondary": "BUG"
    },
    "874": {
        "number": 874,
        "name": "Stonjourner",
        "typePrimary": "ROCK"
    },
    "875": {
        "number": 875,
        "name": "Eiscue",
        "typePrimary": "ICE"
    },
    "876": {
        "number": 876,
        "name": "Indeedee",
        "typePrimary": "PSYCHIC",
        "typeSecondary": "NORMAL"
    },
    "877": {
        "number": 877,
        "name": "Morpeko",
        "typePrimary": "ELECTRIC",
        "typeSecondary": "DARK"
    },
    "878": {
        "number": 878,
        "name": "Cufant",
        "typePrimary": "STEEL"
    },
    "879": {
        "number": 879,
        "name": "Copperajah",
        "typePrimary": "STEEL"
    },
    "880": {
        "number": 880,
        "name": "Dracozolt",
        "typePrimary": "ELECTRIC",
        "typeSecondary": "DRAGON"
    },
    "881": {
        "number": 881,
        "name": "Arctozolt",
        "typePrimary": "ELECTRIC",
        "typeSecondary": "ICE"
    },
    "882": {
        "number": 882,
        "name": "Dracovish",
        "typePrimary": "WATER",
        "typeSecondary": "DRAGON"
    },
    "883": {
        "number": 883,
        "name": "Arctovish",
        "typePrimary": "WATER",
        "typeSecondary": "ICE"
    },
    "884": {
        "number": 884,
        "name": "Duraludon",
        "typePrimary": "STEEL",
        "typeSecondary": "DRAGON"
    },
    "885": {
        "number": 885,
        "name": "Dreepy",
        "typePrimary": "DRAGON",
        "typeSecondary": "GHOST"
    },
    "886": {
        "number": 886,
        "name": "Drakloak",
        "typePrimary": "DRAGON",
        "typeSecondary": "GHOST"
    },
    "887": {
        "number": 887,
        "name": "Dragapult",
        "typePrimary": "DRAGON",
        "typeSecondary": "GHOST"
    },
    "888": {
        "number": 888,
        "name": "Zacian",
        "typePrimary": "FAIRY"
    },
    "889": {
        "number": 889,
        "name": "Zamazenta",
        "typePrimary": "FIGHTING"
    },
    "890": {
        "number": 890,
        "name": "Eternatus",
        "typePrimary": "POISON",
        "typeSecondary": "DRAGON"
    }
};
