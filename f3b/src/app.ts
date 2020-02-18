import express, { Application } from 'express';
import bodyParse from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import { Controller } from './controllers/app.controller';

class App {
    public app: Application;
    
    //declaring our controller
    public appController: Controller;
    constructor() {
        this.app = express();
        this.setConfig();
        this.setMongoConfig();

        // //Creating and assigning a new instance of our controller
        this.appController = new Controller(this.app);
    }

    private setConfig() {
        //Allows us to receive requests with data in json format
        this.app.use(bodyParse.json({ limit: '50mb' }));

        //Allows us to receive requests with data in x-www-form-urlencoded format
        this.app.use(bodyParse.urlencoded({ limit: '50mb', extended: true }));

        //Enables cors
        this.app.use(cors());
    }

    private setMongoConfig() {
        mongoose.Promise = global.Promise;
        mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true
        });
    }
}

export default new App().app;