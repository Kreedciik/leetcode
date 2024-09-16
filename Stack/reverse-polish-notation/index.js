const mathOperations = {
    '+': (a, b) => (a + b),
    '-': (a, b) => (a - b),
    '/': (a, b) => (a / b),
    "*": (a, b) => (a * b)
}
class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = [];
        for(let value of tokens){
            if(!"+-/*".includes(value)){
                stack.push(+value);
            } else {
                const [a, b] = [stack.pop(), stack.pop()];
                stack.push(parseInt(mathOperations[value](b, a)));
            }
        }
        return stack[0];
    }
}

const s = new Solution()
console.log(s.evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"]));
console.log(s.evalRPN(["2","1","+","3","*"]));
console.log(s.evalRPN(["4","13","5","/","+"]));