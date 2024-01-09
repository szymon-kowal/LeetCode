function replaceWords(dictionary: string[], sentence: string): string {
    const splitSentence:string[] = sentence.split(' ');
    for (let i = 0; i < splitSentence.length; i++) {
        for (let dictWord of dictionary) {
            if (splitSentence[i].startsWith(dictWord)) {
                splitSentence[i] = dictWord;
            }
        }
    }
    return splitSentence.join(" ");
};
