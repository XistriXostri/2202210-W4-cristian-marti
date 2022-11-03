const strictEquals = (a, b) => {
    if (
        (Object.is(a, NaN) && Object.is(NaN, b)) ||
        (Object.is(0, b) && Object.is(a, -0)) ||
        (Object.is(-0, b) && Object.is(a, 0))
    ) {
        return !Object.is(a, b);
    }

    return Object.is(a, b);
};

export default strictEquals;
