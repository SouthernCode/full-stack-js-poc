import express, { Request, Response } from "express";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  console.log("Testing", req);

  const response = await fetch("https://restcountries.com/v3.1/all", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "API-Key": "9d92e1f33794fb3e038f647010363b9a",
    },
  });

  console.log(1, res);

  var data = await response.json();
  console.log(2, data);
  res.json(data);
});

router.get("/:name", async (req: Request, res: Response) => {
  const name = req.params.name;
  console.log(name);

  
  const response = await fetch("https://restcountries.com/v3.1/name/" + name, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "API-Key": "9d92e1f33794fb3e038f647010363b9a",
    },
  });

  var data = await response.json();
  console.log(2, data);
  res.json(data[0]);
});

export default router;
