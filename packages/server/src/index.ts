import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import countriesRouter from "./routes/countries";

const app = express();
const port = 3000;

// Middlewares
app.use(helmet());
app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/countries", countriesRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
