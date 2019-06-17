function getLenghtOfStrings(words) {
    var lengths = [];
    for (var i = 0; i < words.length; i++) {
        lengths[i] = words[i].length;
    }
    return lengths;
}

function lengthOfStringsNinja(words) {
    return words.map(x => x.length);
}

function test_equal(actual, expected, msg) {
    if (Array.isArray(expected)) {
        for (var i = 0; i < expected.length; i++){
            test_equal(actual[i], expected[i], "item in index " + i);
        }
    } else {
        if (actual !== expected) {
            console.log(`Error testing ${msg || ''}. expected: ${expected}, got ${actual}`)
        }
    }
}