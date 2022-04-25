import express, { Express, Request, Response } from 'express';
import morgan from 'morgan';

const app: Express = express();

if (process.env.NODE_ENV === 'development') {
    app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
}

app.get('/', (_: Request, res: Response) => {

    res.json({
        status: true,
        message: "Welcome to real estate API",
    })
})

app.listen(4000, () => {
    console.log(`Server listening on port ${process.env.PORT}\nEnvironment: ${process.env.NODE_ENV}`);
})