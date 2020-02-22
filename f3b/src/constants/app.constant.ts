import dote from 'dotenv';
dote.config();

export const PORT = process.env.SERVER_PORT;
export const MONGO_URI = process.env.MONGO_URI;