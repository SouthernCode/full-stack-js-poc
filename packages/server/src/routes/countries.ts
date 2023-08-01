import express, { Request, Response } from "express";
import axios from "axios";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  console.log("Testing", req);

  const response = await axios.get("https://restcountries.com/v3.1/all", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "API-Key": "9d92e1f33794fb3e038f647010363b9a",
    },
  });

  console.log(1, res);
  console.log(2, response.data);


  res.json(response.data);
});

router.get("/:name", async (req: Request, res: Response) => {
  const name = req.params.name;
  console.log(name);

  const response = await axios.get("https://restcountries.com/v3.1/name/" + name, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "API-Key": "9d92e1f33794fb3e038f647010363b9a",
    },
  });


  console.log(2, response.data);
  res.json(response.data);
});

export default router;
