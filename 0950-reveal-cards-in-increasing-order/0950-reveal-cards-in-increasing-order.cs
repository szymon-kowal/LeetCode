public class Solution {
    public int[] DeckRevealedIncreasing(int[] deck) {
        int n = deck.Length;
        Queue<int> queue = new();
        Array.Sort(deck);
        int[] answer = new int[n];
        for (int i = 0; i < n; i++) {
            queue.Enqueue(i);
        }
        for (int i = 0; i < n; i++) {
            answer[queue.Dequeue()] = deck[i];
            if (queue.Count > 0) {
                queue.Enqueue(queue.Dequeue());
            }
        }
        return answer;
    }
}