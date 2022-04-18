import express from 'express';
// import {
//     Response as ExResponse,
//     Request as ExRequest,
//     NextFunction
// } from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import { RegisterRoutes } from "./tsoa/routes";

export const app = express();
// import { ValidateError } from "tsoa";

// app.use(function errorHandler(
//     err: unknown,
//     req: ExRequest,
//     res: ExResponse,
//     next: NextFunction
// ): ExResponse | void {
//     if (err instanceof ValidateError) {
//         console.warn(`Caught Validation Error for ${req.path}:`, err.fields);
//         return res.status(422).json({
//             message: "Validation Failed",
//             details: err?.fields,
//         });
//     }
//     if (err instanceof Error) {
//         return res.status(500).json({
//             message: "Internal Server Error",
//         });
//     }
//     next();
// });

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

