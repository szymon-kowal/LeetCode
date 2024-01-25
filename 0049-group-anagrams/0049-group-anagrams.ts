function groupAnagrams(strs: string[]): string[][] {
    const answer: Record<string, string[]> = {};
    for (const str of strs) {
        const key = [...str].sort().join('');
        if (!answer[key]) {
            answer[key] = [];
        }
        answer[key].push(str);
    }
    return [...Object.values(answer)];
};