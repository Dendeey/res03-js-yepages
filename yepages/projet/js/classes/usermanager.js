import { User } from "./user.js";

class UserManager{
    
    #users;
    
    constructor(users = []){
        
        this.#users = users;
        
    }
    
    get(){
        
        return this.#users;
    }
    
    set users (users){
        
        this.#users = users;
            
    }
    
    findAllUsers(){
        
        return this.users;
        
    }
    
    findUserById(id){
        
        for(let i = 0; i < this.#users.length; i++)
        {
            if(this.#users[i].id === id)
            {
                return this.#users[i];
            }
            else
            {
                return null;
            }
        }
        
    }
    
    findUserByUsername(username){
        
        for(let i = 0; i < this.#users.length; i++)
        {
            if(this.#users[i].username === username)
            {
                return this.#users[i];
            }
            else
            {
                return null;
            }
        }
        
    }
    
    findUserByEmail(email){
        
        for(let i = 0; i < this.#users.length; i++)
        {
            if(this.#users[i].email === email)
            {
                return this.#users[i];
            }
            else
            {
                return null;
            }
        }
        
    }
    
    createUser(user){
        
        let registeredEmail = this.#email;
        let existingEmail = false;
        for(let i = 0; i < this.#users.email.length; i++)
        {
            if(this.#users.email[i] === registeredEmail)
            {
                alert("Email déjà existant") ;
            }
            else
            {
                this.#users.push(user);    
            }
        }
            
        
    }
    
    deleteUser(userId){
        
        let emptyArrayUser = [];
        for(let i = 0; i < this.#users.length; i++)
        {
            if(this.#users[i].id === userId)
            {
                emptyArrayUser.push(this.#users[i]);
            }
        }
        
    }
    
    editUser(user){
        
        for(let i = 0; i < this.#users.length; i++)
        {
            if(this.#users[i].id === user)
            {
                this.#users[i] = user;
            }
        }
        
    }
    
    save(){
        
        sessionStorage.setItem("saveUser", JSON.stringify(this.#users));
        
    }
    
    load(){
        
        let getUsers = sessionStorage.getItem("saveUser", JSON.parse(this.#users));
        
        let newUsers = [];
        for (let i = 0; i < getUsers.length; i++) 
        {
            let parseUser = JSON.parse(getUsers[i]);
            let newUser = new User(parseUser.id, parseUser.username, parseUser.email, parseUser.password, parseUser.firstName, parseUser.lastName, parseUser.profileImage);
        }
        
    }
    
    login(username, password)
    {
        
    }
    
}

export { UserManager };