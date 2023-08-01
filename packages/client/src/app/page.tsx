"use client";
import * as React from "react";
import { Data } from "@/types";

export default function Home() {
  const [country, setCountry] = React.useState<Data[] | null>(null);
  const [allCountries, setAllCountries] = React.useState<Data[] | null>(null);

  const [inputSearch, setInputSearch] = React.useState<string | undefined>(
    undefined
  );

  function get_data(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setAllCountries(null);
    let countryInput = e.currentTarget.elements.namedItem("country");

    if (countryInput instanceof HTMLInputElement) {
      let country = countryInput.value;
      fetch(`http://localhost:3001/api/countries/${country}`)
        .then((response) => response.json())
        .then((data) => setCountry(data));
    }
  }

  async function SearchAll(e: React.FormEvent<HTMLFormElement>) {
    console.log("I am here");
    e.preventDefault();
    setCountry(null);
    fetch(`http://localhost:3001/api/countries`)
      .then((response) => response.json())
      .then((data) => setAllCountries(data));
  }

  return (
    <main className="p-12">
      <p className="text-6xl mb-4 text-center">🌎</p>
      <h1 className="text-4xl font-bold mb-8 text-center">Country finder</h1>
      <form onSubmit={get_data} className="mb-16">
        <label htmlFor="country" className="block font-medium mb-2">
          Find a country by name
        </label>
        <div className="flex items-center">
          <input
            type="text"
            id="country"
            name="country"
            className="flex-grow border border-gray-300 rounded-l px-3 py-2 text-black"
            value={inputSearch}
            onChange={(e) => setInputSearch(e.target.value)}
          />

          <button
            type="submit"
            className="min-w-[300px] ml-2 px-4 py-2 bg-blue-500 text-white rounded-r hover:bg-blue-600"
          >
            Search
          </button>
        </div>
      </form>

      <form onSubmit={SearchAll} className="mb-8">
        <label htmlFor="allCountries" className="block font-medium mb-4">
          Not sure what to search? Fetch all countries!
        </label>
        <button
          id="allCountries"
          name="allCountries"
          type="submit"
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-blue-600 w-full"
        >
          Search
        </button>
      </form>

      {country && (
        <div className="bg-white p-6 shadow-md rounded-md mb-4 flex flex-row gap-16 justify-around">
          <div className="flex-1 flex flex-col justify-center">
            <div className="flex">
              <p className="text-9xl text-left">{country[0].flag}</p>
            </div>
            <h2 className="text-4xl font-bold text-black">
              {country[0]?.name?.common}
            </h2>
          </div>
          <div className="flex-1">
            <p className="mb-2 text-black">
              <b className="text-xl">- Capital(s):</b>{" "}
              {country[0].capital?.join(", ") || "N/A"}
            </p>
            <p className="mb-2 text-black">
              <b className="text-xl">- Continent(s):</b>{" "}
              {country[0].continents?.join(", ")}
            </p>
            <p className="mb-2 text-black">
              <b className="text-xl">- Population:</b> {country[0].population}
            </p>
            <p className="mb-2 text-black">
              <b className="text-xl">- Languages:</b>
            </p>
            {country[0] && country[0].languages ? (
              <ul className="ml-6">
                {Object.values(country[0].languages).map((language, index) => (
                  <li className="mb-1 text-black">- {language}</li>
                ))}
              </ul>
            ) : (
              <p className="ml-6">N/A</p>
            )}
          </div>
        </div>
      )}

      {allCountries &&
        allCountries.map((country, index) => {
          console.log(country.name.common, country?.languages);
          return (
            <div className="bg-white p-6 shadow-md rounded-md mb-4 flex flex-row gap-16 justify-around">
              <div className="flex-1 flex flex-col justify-center">
                <div className="flex">
                  <p className="text-9xl text-left">{country.flag}</p>
                </div>
                <h2 className="text-4xl font-bold text-black">
                  {country.name.common}
                </h2>
              </div>
              <div className="flex-1">
                <p className="mb-2 text-black">
                  <b className="text-xl">- Capital(s):</b>{" "}
                  {country.capital?.join(", ") || "N/A"}
                </p>
                <p className="mb-2 text-black">
                  <b className="text-xl">- Continent(s):</b>{" "}
                  {country.continents?.join(", ")}
                </p>
                <p className="mb-2 text-black">
                  <b className="text-xl">- Population:</b> {country.population}
                </p>
                <p className="mb-2 text-black">
                  <b className="text-xl">- Languages:</b>
                </p>

                {country && country.languages ? (
                  <ul className="ml-6">
                    {Object.values(country.languages).map((language, index) => (
                      <li className="mb-1 text-black">- {language}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="ml-6">N/A</p>
                )}
              </div>
            </div>
          );
        })}
    </main>
  );
}
