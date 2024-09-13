class Solution {
    encode(strs){
        if(!strs.length) return '[]';
        if(strs.length == 1 && !strs[0]) return '';
        let encoded = '';
        for(const str of strs){
            encoded += `${str.length}#${str}`;
        }
        return encoded;
    }

    decode(str){
        if(str === '[]') return [];
        if(!str) return ['']
        let decoded = [], i = 0;
        while(i < str.length){
            let j = i;
            while(str[j] !== '#'){
                j += 1;
            }
            const number = +str.slice(i, j);
            decoded.push(str.slice(j + 1, j + 1 + number));
            i = j + 1 + number;
        }
        return decoded;
    }
}

const solution = new Solution();
const encoded = solution.encode([])
const decoded = solution.decode(encoded);
console.log(decoded);