import express from 'express';
import path from 'path';
import cors from 'cors';
import 'dotenv/config';
const app = express();
const __dirname = path.resolve();
app.use(cors({origin: true}));


app.use('/',express.static(__dirname + '/build/'));
app.listen(process.env.PORT || 8080);
console.log("listening..");

