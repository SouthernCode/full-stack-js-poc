import express, { Request, Response } from "express";
import axios from "axios";
import bodyParser from 'body-parser';

const router = express.Router();

interface SearchRequestBody {
    searchParam: string
    status: any
}

const historyArray: SearchRequestBody[] = []

router.get("/", async (req: Request, res: Response) => {
  console.log("Results:", req);

  const body = {
    results: historyArray
  }

  res.json(body);
});



router.post("/", async (req: Request, res: Response) => {
    const body: SearchRequestBody = req.body;
  
    if (typeof body.searchParam !== 'string' || typeof body.status !== 'number') {
        return res.status(400).send('Invalid request body');
    }

    historyArray.push(body)

    res.send(`Received searchParam: ${body.searchParam} with status: ${body.status}`);
});

export default router;
