const isAnagram = (s, t) => {

    if(s.length !== t.length) return false;

    const sCount = {};
    const tCount = {};

    for(let i = 0; i < s.length; i++){
        sCount[s[i]] = 1 + (sCount[s[i]] || 0);
        tCount[t[i]] =  1 + (tCount[t[i]] || 0);
    }

    for(const char of sCount){
        if(sCount[char] !== tCount[char]) return false;
    }

    return true;
}