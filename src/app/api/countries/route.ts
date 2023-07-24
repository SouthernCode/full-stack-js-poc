import { NextResponse } from "next/server";

export async function GET(request: Request) {
  var headers = new Headers();
  console.log("Testing", request);



  headers.append("Content-Type", "application/json");
  headers.append("API-Key", "9d92e1f33794fb3e038f647010363b9a");

    const res = await fetch('https://restcountries.com/v3.1/all', {
      method: "GET",
      headers: headers,
    });

    
    console.log(1, res);

    const data = await res.json();

    return NextResponse.json(data);
}
