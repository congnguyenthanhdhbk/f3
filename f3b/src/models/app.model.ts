// @ts-ignore
import mongoose from 'mongoose';

const AppSchema = new mongoose.Schema({
    name: String,
    gender: String,
    type: String,
    height: Number,
    weight: Number,
    photo: String
});

export const AppEntity = mongoose.model('AppEntity', AppSchema);