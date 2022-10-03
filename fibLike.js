const fibLike = (first, second, count) => {
    const arr = [first, second];
    while (arr.length <= count - 1) {
        const previous = arr[arr.length - 2];
        const current = arr[arr.length - 1];
        arr.push(previous + current);
    }
    return arr
}