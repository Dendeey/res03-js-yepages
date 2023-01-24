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
        
        let behavior = false;
        let confirmPassword = document.getElementById("confirm-password");
        
        for(let i = 0; i < this.users.length; i++)
        {
            if(user.email === this.users[i].email)
            {
                alert("Cet email est déjà existant.")
                behavior = true;
            }
            else
            {
                
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
        
        localStorage.setItem("saveUser", JSON.stringify(this.#users));
        
    }
    
    load(){
        
        let getUsers = JSON.parse(localStorage.getItem("saveUser"));
        
        if(getUsers !== null)
        {
            for (let i = 0; i < getUsers.length; i++) 
            {
                let parseData = JSON.parse(getUsers[i]);
                let newUser = new User(parseData.id, parseData.username, parseData.email, parseData.password, parseData.firstName, parseData.lastName, parseData.profileImage);
                this.#users.push(newUser);
            }
        }
    }
    
    login(username, password)
    {
        
    }
    
}

export { UserManager };