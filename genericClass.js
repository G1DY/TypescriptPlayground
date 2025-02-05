"use strict";
// using generics in classes
class Box {
    /**
     *
     */
    constructor(initialContent) {
        this.content = initialContent;
    }
    getContent() {
        return this.content;
    }
    setContent(newContent) {
        this.content = newContent;
    }
}
const stringBox = new Box("hello, typescript");
console.log(stringBox.getContent());
stringBox.setContent("new content added");
console.log(stringBox.getContent());
const numberBox = new Box(20);
console.log(numberBox.getContent());
numberBox.setContent(100);
console.log(numberBox.getContent());
