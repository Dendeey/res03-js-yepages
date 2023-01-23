import { User } from "./classes/user.js";
import { Book } from "./classes/book.js";
import { UserManager } from "./classes/usermanager.js";
import { BookManager } from "./classes/bookmanager.js";
 
  
window.addEventListener("DOMContentLoaded", function(){  
    /*//Créer 3 instances de chaque classe
    let book1 = new Book(1, "Oui-oui", "Enid Blyton", "2011", "6", "extrait du book 1", "https://static.fnac-static.com/multimedia/Images/FR/NR/c6/66/2b/2844358/1540-1/tsp20230101062641/Oui-Oui-prend-les-commandes.jpg");
    let book2 = new Book(2, "SNK", "Hajime Isayama", "2012", "102", "extrait du book2", "https://www.pika.fr/sites/default/files/images/livres/couv/9782811611699-T.jpg");
    let book3 = new Book(3,"Ki & Hi", "Kévin Tran", "2018", "86", "extrait du book3", "https://static.fnac-static.com/multimedia/Images/FR/NR/59/9f/7c/8167257/1507-1/tsp20221011063739/Ki-Hi-tome-1-Deux-freres.jpg");
    
    let user1 = new User(1, "Arnold", "arnaud@gmail.com", "motdepasse1", "Arnaud", "Dupon", "profile image1");
    let user2 = new User(2, "Antho", "antho@gmail.com", "motdepasse2", "Anthony", "Turpin", "profile image2");
    let user3 = new User(3, "CR7", "cr7@gmail.com", "motdepasse3", "Cristiano", "Ronaldo", "profile image3");
    
    //Rentrer toutes les instances dans des tableaux
    let bookArray = [];
    let userArray = [];
    
    bookArray.push(book1, book2, book3);
    userArray.push(user1, user2, user3);
    console.log(bookArray);
    console.log(userArray);
    
    //Du JS au JSON, stocker dans le sessionStorage 
    sessionStorage.setItem("books", JSON.stringify(bookArray));
    sessionStorage.setItem("user", JSON.stringify(userArray));
    
    //Du JSON au JS
    let recupBook = JSON.parse(sessionStorage.getItem("books"));
    
    let recupBookTab = [];
    for(let i = 0; i < recupBook.length; i++)
    {
        recupBookTab.push(JSON.parse(recupBook[i]));
    }
    
    let recupUser = JSON.parse(sessionStorage.getItem("user"));
    
    let recupUserTab = [];
    for(let i = 0; i < recupBook.length; i++)
    {
        recupUserTab.push(JSON.parse(recupUser[i]));
    }
    console.log(recupUserTab, recupBookTab);
    
    //Hydrater les classes 
    for(let i = 0; i < recupBook.length; i++)
    {
        let books = new Book(recupBookTab[i].id, recupBookTab[i].title, recupBookTab[i].author, recupBookTab[i].publicationDate, recupBookTab[i].totalPages, recupBookTab[i].excerpt, recupBookTab[i].coverImage);
        console.log(books);
    }
    
    for(let i = 0; i < recupUser.length; i++)
    {
        let user = new User(recupUserTab[i].id, recupUserTab[i].username, recupUserTab[i].email, recupUserTab[i].password, recupUserTab[i].firstname, recupUserTab[i].lastname, recupUserTab[i].profileImage);
        console.log(user);
    }*/
    
    
});