/**
 * @return {Generator<number>}
 */
var fibGenerator = function*() {
    yield 0
    yield 1
    let vals = [0, 1]
    while (true) {
        vals.push(vals[vals.length -1] + vals[vals.length -2])
        yield vals[vals.length - 1]
    }
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */