import { Application } from 'express';
import { AppService } from 'src/routes/app.service';

export class Controller {
    private appService: AppService;

    constructor(private app: Application) {
        this.appService = new AppService();
        this.routes();
    }

    public routes() {
        this.app.route('/').get(this.appService.wellcomeMessage());
    }
}