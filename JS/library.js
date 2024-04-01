class Library {
    constructor() {
        this._items = [];
        this._itemsBook = [];
    }

    get items() {
        return [...this._items]
    }

    get itemsBook() {
        return [...this._itemsBook];
    }

    addBook (book){
        const index = this._items.findIndex(a => a.author  === book.author);
        if (index === -1) {
            this._items.push(book);
            return true;
        }
        alert('This book already exists');

}
    addNoteBook(notebook) {

            const index = this.itemsBook.findIndex(item => item.title === notebook.title && item.author === notebook.author);
            if (index === -1) {
                this._itemsBook.push(notebook);
                return true;
            }
        alert('This Notebook already exists');
        }

}