import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import { RegisterRoutes } from "./tsoa/routes";

export const app = express();

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({
    extended: true,
})
);
app.use(bodyParser.json())

RegisterRoutes(app);

const port: string | number = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`start ${port}`);
})

