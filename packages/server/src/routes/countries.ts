import express, { Request, Response } from "express";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  var headers = new Headers();
  console.log("Testing", req);

  headers.append("Content-Type", "application/json");
  headers.append("API-Key", "9d92e1f33794fb3e038f647010363b9a");


  const response = await fetch("https://restcountries.com/v3.1/all", {
    method: "GET",
    headers: headers,
  });

  console.log(1, res);

  var data = await response.json();
  console.log(2, data);
  res.json(data);
});

router.get("/:name", async (req: Request, res: Response) => {
  const name = req.params.name;
  var headers = new Headers();

  headers.append("Content-Type", "application/json");
  headers.append("API-Key", "9d92e1f33794fb3e038f647010363b9a");

  const response = await fetch("https://restcountries.com/v3.1/name/" + name, {
    method: "GET",
    headers: headers,
  });

  var data = await response.json();
  console.log(2, data);
  res.json(data[0]);
});

export default router;
