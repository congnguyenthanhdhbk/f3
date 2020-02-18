import express, { Application } from 'express';
import bodyParse from 'body-parser';
import cors from 'cors';
import { Controller } from './controllers/app.controller';

class App {
    public app: Application;
    
    //declaring our controller
    public appController: Controller;
    constructor() {
        this.app = express();
        this.setConfig();

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
}

export default new App().app;