class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    plus(point) {
        return new Point(this.x + point.x, this.y + point.y);
    }

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

test_equal(new Point(2,1).plus(new Point(-2, -1)), new Point(0,0));
test_equal(new Point(2,1).plus(new Point(2, 1)), new Point(4,2));