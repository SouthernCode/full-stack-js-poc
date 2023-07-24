import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  {
    params,
  }: {
    params: {
      name: string;
    };
  }
) {
  const { name } = params;
  var headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("API-Key", "9d92e1f33794fb3e038f647010363b9a");

  const res = await fetch(
    "https://restcountries.com/v3.1/name/" +
      name +
      "?fields=name,flag,capital,continents,population",
    {
      method: "GET",
      headers: headers,
    }
  );

  const data = await res.json();

  return NextResponse.json(data[0]);
}
