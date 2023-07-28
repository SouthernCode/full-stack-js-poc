import express, { Request, Response } from "express";

const router = express.Router();

// Sample initial data
let countries = [
  { id: 1, name: "USA", capital: "Washington, D.C." },
  { id: 2, name: "Canada", capital: "Ottawa" },
  { id: 3, name: "United Kingdom", capital: "London" },
];

// Get all countries
router.get("/", (req: Request, res: Response) => {
  res.json(countries);
});

// Get a country by ID
router.get("/:id", (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const country = countries.find((country) => country.id === id);
  if (country) {
    res.json(country);
  } else {
    res.status(404).json({ message: "Country not found" });
  }
});

// Create a new country
router.post("/", (req: Request, res: Response) => {
  const newCountry = req.body;
  newCountry.id = countries.length + 1;
  countries.push(newCountry);
  res.status(201).json(newCountry);
});

// Update a country by ID
router.put("/:id", (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const countryIndex = countries.findIndex((country) => country.id === id);
  if (countryIndex !== -1) {
    countries[countryIndex] = { ...countries[countryIndex], ...req.body };
    res.json(countries[countryIndex]);
  } else {
    res.status(404).json({ message: "Country not found" });
  }
});

// Delete a country by ID
router.delete("/:id", (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const countryIndex = countries.findIndex((country) => country.id === id);
  if (countryIndex !== -1) {
    countries.splice(countryIndex, 1);
    res.sendStatus(204);
  } else {
    res.status(404).json({ message: "Country not found" });
  }
});

export default router;
