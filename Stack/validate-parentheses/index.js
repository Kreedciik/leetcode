const isValid = s => {
    const stack = [];
    const braces = {')': '(', ']': '[', '}': '{'};
    let p = 0;
    while(p < s.length){
        if("([{".includes(s[p])){
            stack.push(s[p]);
        } else {
            if(braces[s[p]] == stack[stack.length - 1]){
                stack.pop();
            }
        }
        p++;
        
    }

    return !stack.length;
}

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("[(])"));