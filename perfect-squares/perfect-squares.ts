function numSquares(n: number): number {
    const visited: Set<number> = new Set();
    const queue: [number, number][] = [[n, 0]];

    while (queue.length > 0) {
        const [number, idx] = queue.shift()!;

        for (let i = Math.floor(Math.sqrt(number)); i >= 1; i--) {
            const nextNumber = number - i * i;

            if (nextNumber === 0) {
                return idx + 1;
            }

            if (!visited.has(nextNumber)) {
                queue.push([nextNumber, idx + 1]);
                visited.add(nextNumber);
            }
        }
    }

    return -1;
}