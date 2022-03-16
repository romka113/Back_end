function sum(a, b) {
if (typeof a !== 'number'
        || isNaN(a)
        || '' + a === 'NaN'
        || a === Infinity
        || a === -Infinity) {
        return 'ERROR';
    }
    if (typeof b !== 'number'
        || !isFinite(b)) {
        return 'ERROR';
    }
    return a + b;
}
sum()
sum(true)
sum(true, false)
sum(5, false)
sum(false, 5)
sum(NaN, 5)
sum(Infinity, 5)
sum(-Infinity, 5)
sum(5, NaN)
sum(5, Infinity)
sum(5, -Infinity)

sum(2, 2)
sum(3, 2)
sum(-2, 2)
sum(2, -2)
sum(-2, -2)
sum(2.35, 2.35)
sum(-2.35, 2.35)
sum(2.35, -2.35)
sum(-2.35, -2.35)
sum(2.35, 2)
sum(-2.35, 2)
sum(2.35, -2)
sum(-2.35, -2)