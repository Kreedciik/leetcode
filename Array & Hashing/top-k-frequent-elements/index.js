const topKFrequent = (nums, k) => {
    const hash = {};
    for(const num of nums) {
        hash[num] = 1 + (hash[num] || 0);
    }

    const sortedElements = Object.keys(hash).sort((a, b) => (hash[b] - hash[a]));
    return sortedElements.slice(0, k).map(Number);
}

console.log(topKFrequent([1,1,1,2,2,3], 2))
console.log(topKFrequent([1], 1))
console.log(topKFrequent([1, 1, 2, 2, 3, 3], 2))
console.log(topKFrequent([1,2], 2))