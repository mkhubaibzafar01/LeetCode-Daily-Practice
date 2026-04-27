/**
 * @param {number[][]} graph
 * @return {number}
 */
var shortestPathLength = function(graph) {
    const n = graph.length;
    const targetMask = (1 << n) - 1; // تمام نوڈز وزٹ کرنے کا ہدف (مثلاً 1111)
    const queue = [];
    const visited = new Set();

    // تمام نوڈز کو شروع میں قطار میں ڈالیں
    for (let i = 0; i < n; i++) {
        let mask = 1 << i;
        queue.push([i, mask, 0]); // [node, mask, steps]
        visited.add(`${i}-${mask}`);
    }

    while (queue.length > 0) {
        const [curr, mask, steps] = queue.shift();

        // اگر ہم نے تمام نوڈز دیکھ لیے ہیں
        if (mask === targetMask) return steps;

        // پڑوسی نوڈز پر جائیں
        for (let neighbor of graph[curr]) {
            let nextMask = mask | (1 << neighbor);
            let state = `${neighbor}-${nextMask}`;

            if (!visited.has(state)) {
                visited.add(state);
                queue.push([neighbor, nextMask, steps + 1]);
            }
        }
    }
    return 0;
};