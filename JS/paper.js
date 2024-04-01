class  Paper {

    constructor(paperNumbers) {
        this._paperNumbers = +paperNumbers;
    }

    get paperNumbers() {
        return this._paperNumbers;
    }

    set paperNumbers(value) {
        this._paperNumbers = value;
    }
}
class Book extends Paper{
    constructor(paperNumbers,author,age) {
        super(paperNumbers);
        this._author = author;
        this._age = +age;
    }

    get author() {
        return this._author;
    }

    set author(value) {
        this._author = value;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        this._age = value;
    }
    toString() {
        return `PaperNumbers: ${this._paperNumbers}, Author: ${this._author}, Age of Book: ${this._age}`;
    }
}
class NoteBook extends Book {
    constructor(paperNumbers, author, age, titleList) {
        super(paperNumbers, author, age);
        this._titleList = titleList;
    }

    get titleList() {
        return this._titleList;
    }

    set titleList(value) {
        this._titleList = value;
    }

    toString() {
        return `PaperNumbers: ${this._paperNumbers}, Author: ${this._author}, Age of Book: ${this._age}, Title: ${this._titleList}`;
    }
}