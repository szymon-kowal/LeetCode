function canVisitAllRooms(rooms: number[][]): boolean {
    let queue: number[] = [0];
    let visited = new Set();

    while(queue.length){
        let curr = queue.shift()!;
        if(visited.has(curr)) continue;
        for(let k of rooms[curr]){
            queue.push(k);
        }
        visited.add(curr)
    }

    return visited.size === rooms.length;
};