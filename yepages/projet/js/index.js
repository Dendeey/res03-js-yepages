import { User } from "./classes/user.js";
import { Book } from "./classes/book.js";
import { UserManager } from "./classes/usermanager.js";
import { BookManager } from "./classes/bookmanager.js";
 
  
window.addEventListener("DOMContentLoaded", function(){  
  
    let SignInForm = document.getElementById("form-sign-in");
    let userManager = new UserManager([]);
    
    SignInForm.addEventListener("submit", function(event)
    {
        event.preventDefault();
        
        let id = userManager.users.length +1;
        let username = document.getElementById("new-username").value;
        let email = document.getElementById("new-email-sign-in").value;
        let password = document.getElementById("new-password-sign-in").value;
        let firstname = document.getElementById("new-firstname").value;
        let lastname = document.getElementById("new-lastname").value;
        let profileImage = document.getElementById("new-profil-img").value;
        
        let newUser = new User(id, username, email, password, firstname, lastname, profileImage);
        userManager.createUser(newUser);
        userManager.save();
    });
    
    let LoginForm = document.getElementById("form-login");
    LoginForm.addEventListener("submit", function(e)
    {
        e.preventDefault();
        let emailLogin = document.getElementById("new-email-login").value;
        let passwordLogin = document.getElementById("new-password-login").value;
    
        userManager.login(emailLogin, passwordLogin);
    });
    
});