import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import historyRouter from "./routes/history";
import bodyParser from 'body-parser';

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/api/history", historyRouter);
app.listen(3002, () => {
  console.log(`Server is running on http://localhost:${3002}`);
});
