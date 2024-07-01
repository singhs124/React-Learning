const conf = {
    appWriteURL: String(import.meta.env.VITE_APPWRITE_URL),
    appWriteProject: String(import.meta.env.VITE_APPRWRITE_PROJECTID),
    appWriteDB: String(import.meta.env.VITE_APPRWRITE_DBID),
    appWriteCollection: String(import.meta.env.VITE_APPRWRITE_COLLECTION_ID),
    appWriteBucket: String(import.meta.env.VITE_APPRWRITE_BUCKET_ID)    
}

export default conf