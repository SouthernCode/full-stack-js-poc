import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import countriesRouter from "./routes/countries";

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/countries", countriesRouter);
app.listen(3001, () => {
  console.log(`Server is running on http://localhost:${3001}`);
});
