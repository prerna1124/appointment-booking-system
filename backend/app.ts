import express from 'express';
import 'dotenv/config';
import cors from "cors";
import doctorRoutes from "./routes/DoctorRoutes"
import bodyParser from 'body-parser';

const app = express();
app.use(cors());
app.use(bodyParser.json());
require('dotenv').config()

app.use('/api/', doctorRoutes);

const port = process.env.PORT_NUMBER || 8005;
app.listen(port, () => {
  console.log(`Application is running on port ${port}.`);
});