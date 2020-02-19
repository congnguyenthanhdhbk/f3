import { Request, Response } from 'express';
import {AppEntity} from "../models/app.model";
import {MongooseDocument} from "mongoose";

export class AppService {
    public wellcomeMessage(req: Request, res: Response) {
        return res.status(200).send(process.env.WELCOME_MESSAGE);
    }

    public getAllAppEntity = (req: Request, res: Response) => {
        AppEntity.find({}, (err: Error, appEntity: MongooseDocument) => {
            if (err) {
                res.send(err);
            }

            res.json(appEntity);
        });
    };

    public addNewAppEntity = (req: Request, res: Response) => {
        const newAppEntity = new AppEntity(req.body);
        // tslint:disable-next-line:no-console
        console.log(newAppEntity);
        AppEntity.create(newAppEntity, (error: Error, appEntity: MongooseDocument) => {
            if (error) {
                res.send(error);
            }

            res.json(appEntity);
        })
    };

    public deleteAppEntity = (req: Request, res: Response) => {
        const appEntityId = req.params.id;
        AppEntity.findByIdAndDelete(appEntityId, (errors: Error, deleted: any) => {
            if (errors) {
                res.send(errors);
            }

            const message = deleted ? 'Deleted sucessfully' : 'Entity is not found :(';
            res.send(message);
        })
    };

    public updateAppEntity = (req: Request, res: Response) => {
        const appId = req.params.id;
        AppEntity.findByIdAndUpdate(
            appId,
            req.body,
            (error: Error, app: any) => {
                if (error) {
                    res.send(error);
                }

                const message = app ? 'Updated sucessfully' : 'App not found';
                res.send(message);
            }
        )
    }
}
