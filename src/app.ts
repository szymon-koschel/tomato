import express, { Application, Request, Response, NextFunction} from 'express';
const app: Application = express();

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({result: 'ok'});
});

app.listen(8080, () => {
    console.log('Server started');
});
