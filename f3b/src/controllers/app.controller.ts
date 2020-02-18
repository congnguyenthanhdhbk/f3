import { Application } from 'express';
import { AppService } from '../services/app.service';

export class Controller {
    private appService: AppService;

    constructor(private app: Application) {
        this.appService = new AppService();
        this.routes();
    }

    public routes() {
        this.app.route('/').get(this.appService.wellcomeMessage);
        this.app.route("/apps").get(this.appService.getAllAppEntity);
        this.app.route("/app").post(this.appService.addNewAppEntity);
        this.app.route("/app/:id")
            .delete(this.appService.deleteAppEntity)
            .put(this.appService.updateAppEntity);
    }
}