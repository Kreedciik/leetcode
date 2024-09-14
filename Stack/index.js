class Stack {
    pointer = -1;
    array = [];

    add(value){
        this.array.push(value);
        this.pointer ++;
    }

    pop(){
        this.pointer --;
        return this.array.pop();
    }
}

const s = new Stack();
s.add(12);
s.add(13);

console.log(s.pop());
console.log(s.pop());
