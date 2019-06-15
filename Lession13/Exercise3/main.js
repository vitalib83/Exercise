(a, b) => a > b ? a : b;

(str, subStr) => str.includes(subStr)


function testMin(func, x, y){
    return func(x,y);
}

function testSubstring(func, str, sub){
    return func(str, sub);
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

test_equal(testMin((a, b) => a > b ? a : b, -100, 3), 3);
test_equal(testMin((a, b) => a > b ? a : b, 45, 43), 45);

const substringFunct = (str, subStr) => str.includes(subStr);
test_equal(testSubstring(substringFunct, "ES6 is great", "eat"), true);
test_equal(testSubstring(substringFunct, "ES6 is great", "ES7"), false);
test_equal(testSubstring(substringFunct, "momomomomom", "omom"), true);