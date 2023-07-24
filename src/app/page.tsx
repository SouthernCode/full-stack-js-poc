"use client";
import * as React from "react";
import { Country } from "@/types";

export default function Home() {
  const [country, setCountry] = React.useState<Country | null>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const countryInput = e.currentTarget.elements.namedItem("country");
    if (countryInput instanceof HTMLInputElement) {
      const country = countryInput.value;
      fetch(`http://localhost:3000/api/countries/${country}`)
        .then((response) => response.json())
        .then((data) => setCountry(data))
        .catch((error) => console.log(error));
    }
  }

  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold mb-8">🌎 Country finder</h1>
      <form onSubmit={handleSubmit} className="mb-8">
        <label htmlFor="country" className="block font-medium mb-2">
          Find a country by name
        </label>
        <div className="flex items-center">
          <input
            type="text"
            id="country"
            name="country"
            className="flex-grow border border-gray-300 rounded-l px-3 py-2 text-black"
          />
          <button
            type="submit"
            className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-r hover:bg-blue-600"
          >
            Search
          </button>
        </div>
      </form>
      {country && (
        <div className="bg-white p-4 shadow-md rounded-md">
          <p className="text-8xl">{country.flag}</p>
          <h2 className="text-2xl font-bold mb-4 text-black">
            {country.name.common}{" "}
          </h2>
          <p className="mb-2 text-black">
            Capital(s): {country.capital.join(", ")}
          </p>
          <p className="mb-2 text-black">
            Continent(s): {country.continents.join(", ")}
          </p>
          <p className="mb-2 text-black">Population: {country.population}</p>
        </div>
      )}
    </main>
  );
}
