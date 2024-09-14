
class MinStack {
        stack = [];
        minimums = [];
        pointer = -1;
        constructor() {}
    
        /**
         * @param {number} val
         * @return {void}
         */
        push(val) {
            this.pointer++;
            if(!this.stack.length){
                this.minimums.push(val);
            } else {
                this.minimums.push(Math.min(this.minimums[this.pointer - 1], val))
            }
            this.stack.push(val);

        }
    
        /**
         * @return {void}
         */
        pop() {
            this.pointer--;
            this.stack.pop();
            this.minimums.pop();
        }
    
        /**
         * @return {number}
         */
        top() {
            return this.stack[this.pointer]
        }
    
        /**
         * @return {number}
         */
        getMin() {
            return this.minimums[this.pointer];
        }
    }

  minStack = new MinStack();
    minStack.push(1);
    minStack.push(2);
    minStack.push(0);
    console.log(minStack.getMin()); // return 0
    minStack.pop();
    console.log(minStack.top());    // return 2
    console.log(minStack.getMin()); // return 1