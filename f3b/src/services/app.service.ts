import { Request, Response } from 'express';

export class AppService {
    public wellcomeMessage(req: Request, res: Response) {
        return res.status(200).send("Well come to Nguyen Thanh Cong");
    }
}
