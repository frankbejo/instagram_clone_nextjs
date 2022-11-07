// 4Z3Gph70khMXR5XD
import mongoose from 'mongoose'

const main = async () => {
    await mongoose.connect("mongodb+srv://frankbejo:4Z3Gph70khMXR5XD@newcluster.h3sfh96.mongodb.net/instagram_clone_db")
    console.log("Database Connected")
}

export default main;