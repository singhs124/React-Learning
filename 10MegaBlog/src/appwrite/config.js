import {conf} from '../conf/conf.js'
import { Client, Databases, Query, Storage , ID } from "appwrite";

export class Service{
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client
        .setEndpoint(conf.appWriteURL)
        .setProject(conf.appWriteProject)

        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({title,content,slug,featuredImage,status,userId}){
        try {
            return await this.databases.createDocument(
                conf.appWriteDB,
                conf.appWriteCollection,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
        } catch (error) {
            console.log("Appwrite serivce :: createPost :: error", error);
        }
    }

    async updatePost(slug,{title,content,featuredImage,status}){
        try {
            return await this.databases.updateDocument(
                conf.appWriteDB,
                conf.appWriteCollection,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
        } catch (error) {
            console.log("Appwrite Service :: updatePost :: error", error);
        }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appWriteDB,
                conf.appWriteCollection,
                slug
            )
            return true;
        } catch (error) {
            console.log("Appwrite Service :: deletePost :: error", error);
            return false;
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appWriteDB,
                conf.appWriteCollection,
                slug
            )
        } catch (error) {
            console.log("Appwrite Service :: getPost :: error", error);
        }
    }

    async getPosts(queries = [Query.equal("status" , "active")]){
        try {
            return await this.databases.listDocuments(
                conf.appWriteDB,
                conf.appWriteCollection,
                queries
            )
        } catch (error) {
            console.log("Appwrite Service :: getPosts :: error", error);
            return false;
        }
    }


    async uploadFile(file){
        try {
            await this.bucket.createFile(
                conf.appWriteBucket,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("AppwriteService :: uploadFile :: error", error);
            return false;
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appWriteBucket,
                fileId
            )
            return true;
        } catch (error) {
            console.log("AppwriteService :: deleteFile :: error", error)
            return false;
        }
    }

    getPreview(fileId){
        return this.bucket.getFilePreview(
            conf.appWriteBucket,
            fileId
        )
    }


}

const service = new Service();

export default service;