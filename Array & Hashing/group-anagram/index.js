const groupAnagrams = strs => {

    const hash = {};
    for(const str of strs) {
        const count = new Array(26).fill(0);
        for(const char of str){
            count[char.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
        }

        if(hash[count]){
            hash[count].push(str);
        } else {
            hash[count] = [str];
        }
    }
    return Object.values(hash);
}

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))