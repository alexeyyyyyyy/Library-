const lib = new Library();

addBook.onclick = function () {
   const book = new Book(
       paperNumber.value,
       nameAuthor.value.trim(),
       ageOfBook.value,
   );
   if (lib.addBook(book)) {
      const element = document.createElement('li');
      const text = document.createTextNode(book.toString());
      element.appendChild(text);
      bookList.appendChild(element);
      clearALL();
      const rmvButton = document.createElement("button");
      const text1 = document.createTextNode('X');
      rmvButton.appendChild(text1);
      rmvButton.onclick =function () {
         element.remove();
      }
      element.appendChild(rmvButton);

   }
}
addNoteBook.onclick  = function () {
   const book1 = new NoteBook(
       paperNumbers.value,
       nameAuthors.value.trim(),
       ageOfBooks.value,
       title.value.trim(),
   );
   if(lib.addNoteBook(book1)){
      const element1 = document.createElement('li');
      const text1 = document.createTextNode(book1.toString());
      element1.appendChild(text1);
      noteBookList.appendChild(element1);
      clearALL();
      const rmvButton = document.createElement('button');
      const text = document.createTextNode('X');
      rmvButton.appendChild(text);
      rmvButton.onclick = function () {
         element1.remove()
      }
      element1.appendChild(rmvButton);
      clearALL();
   }
}
function clearALL() {
const clearStats = document.querySelectorAll("input");
clearStats.forEach(input =>
input.value = '');
}



