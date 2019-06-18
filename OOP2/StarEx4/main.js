class Plant {
    constructor(name, color, seasons, doesBlossom) {
        this.name = name;
        this.color = color;
        this.seasons = seasons;
        this.doesBlossom = doesBlossom;
    }

    doesBlossomInSeason(season) {
        return this.doesBlossom && this.seasons.indexOf(season) !== -1;
    }
}

const p1 = new Plant("Anemone", "red", ["autumn"], true);
const p2 = new Plant("tulip", "red", ["spring"], true);
const p3 = new Plant("Boston fern", "green", ["spring", "summer"], false);

var plants = [p1, p2, p3];

function getPlantsBySeason(plants, season) {
    return plants.filter(plant => plant.doesBlossomInSeason(season) && plant.doesBlossom);
}

// tests
function test_equal(actual, expected, msg) {
    if (Array.isArray(expected)) {
        for (var i = 0; i < expected.length; i++){
            test_equal(actual[i], expected[i], "item in index " + i);
        }
    } else if (typeof expected === "object"){
        for (prop in expected){
            test_equal(actual[prop], expected[prop]);
        }
    } else {
        if (actual !== expected) {
            console.log(`Error testing ${msg || ''}. expected: ${expected}, got ${actual}`)
        }
    }
}

test_equal(getPlantsBySeason(plants, "spring"), [p2])
test_equal(getPlantsBySeason(plants, "summer"), [])
test_equal(getPlantsBySeason(plants, "autumn"), [p1])