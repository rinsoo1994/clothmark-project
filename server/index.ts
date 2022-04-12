import express from 'express';
import bodyParser from 'body-parser';

export const app = express();
import { RegisterRoutes } from "./tsoa/routes";
RegisterRoutes(app);

app.use(bodyParser.urlencoded({
    extended: true,
})
);

app.use(bodyParser.json())

const port: string | number = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`start ${port}`);
})