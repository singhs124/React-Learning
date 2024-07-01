import conf from '../conf/conf.js'
import { Client, Account, ID } from "appwrite";

export class AuthService{
    client = new Client();
    account;

    constructor(){
        this.client
        .setEndpoint(conf.appWriteURL)
        .setProject(conf.appWriteProject)

        this.account = new Account(this.client);
    }

    async createAccount({email,password,name}){
        try{
            const userAccount = await this.account.create(ID.unique(),email,password,name )
            if(userAccount){
                return this.loginAccount({email,password})
            }
            else return userAccount
        }catch(err){
            throw err;
        }
    }

    async loginAccount({email,password}){
        try{
            return await this.account.createEmailPasswordSession(email,password)
        }catch(err){
            throw err;
        }
    }

    async getCurrentUser(){
        try{
            return await this.account.get()
        }catch(error){
            console.log("Appwrite serive :: getCurrentUser :: error", error);
        }
        return null ;
    }

    async logout(){
        try {
            await this.account.deleteSessions();    
        } catch (error) {
            console.log("Appwrite serive :: logout :: error", error);
        }
    }
}

const authService = new AuthService();

export default authService;