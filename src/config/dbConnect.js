import mongoose from "mongoose";


mongoose.connect("mongodb+srv://erickELC:ericklucas821@studyingproject.3xlgdto.mongodb.net/Erick_LIB");

let db = mongoose.connection;

export default db;