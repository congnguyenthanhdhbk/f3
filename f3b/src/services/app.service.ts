import { Request, Response } from 'express';

export class AppService {
    public wellcomeMessage(req: Request, res: Response) {
        return res.status(200).send(process.env.WELCOME_MESSAGE);
    }
}
