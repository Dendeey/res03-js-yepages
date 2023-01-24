import { Book } from "./book.js";

class BookManager{
    
    #books;
    
    constructor(books = []){
        
        this.#books = books;
        
    }
    
    get books(){
        
        return this.#books;
    }
    
    set books (books){
        
        this.#books = books;
        
    }
    
    findAllBooks(){
        
        return this.books;
        
    }
    
    findBookById(id){
        
        for(let i = 0; i < this.#books.length; i++)
        {
            if(this.#books[i].id === id)
            {
                return this.#books[i];
            }
            else
            {
                return null;
            }
        }
        
    }
    
    findBooksByTitle(title){
        
        let titleArray = [];
        for(let i = 0; i < this.#books.length; i++)
        {
            if(this.#books[i].title === title)
            {
                return titleArray.push(this.#books[i]);
            }
            else
            {
                return null;
            }
        }
        
    }
    
    findBooksByAuthor(author){
        
        let authorArray = [];
        for(let i = 0; i < this.#books.length; i++)
        {
            if(this.#books[i].author === author)
            {
                return authorArray.push(this.#books[i]);
            }
            else
            {
                return null;
            }
        }
        
    }
    
    findBooksByPublicationYear(year){
        
        let yearArray = [];
        for(let i = 0; i < this.#books.length; i++)
        {
            if(this.#books[i].year === year)
            {
                return yearArray.push(this.#books[i]);
            }
            else
            {
                return null;
            }
        }
        
    }
    
    createBook(book){
        
        this.#books.push(book);
        
    }
    
    deleteBook(bookId){
        
        let emptyArrayBook = [];
        for(let i = 0; i < this.#books.length; i++)
        {
            if(this.#books[i].id === bookId)
            {
                emptyArrayBook.push(bookId[i]);
            }
            
        }
        
    }
    
    editBook(book){
        
        for(let i = 0; i < this.#books.length; i++)
        {
            if (this.#books[i].id === book.id)
            {
                this.#books[i] = book;
            }
        }
        
    }
    

    save(){
        
        sessionStorage.setItem("saveBook", JSON.stringify(this.#books));
        
    }
    
    load() 
    {
    
        let getBooks = sessionStorage.getItem("saveBook", JSON.parse(this.#books));
    
        let newBooks = [];
        for (let i = 0; i < getBooks.length; i++) 
        {
            let parseBook = JSON.parse(getBooks[i]);
            let newBook = new Book(parseBook.id, parseBook.title, parseBook.author, parseBook.publicationDate, parseBook.totalPages, parseBook.excerpt, parseBook.coverImage);
        }
    
    }
        
}
    


export { BookManager };