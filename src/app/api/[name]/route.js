import { NextResponse, NextRequest } from "next/server";


export async function GET(request, context) {
    const { params } = context;
    console.log(params.name);
    let cityName = params.name;
    const getWeatherData = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${process.env.API_KEY}`
      );
      const data = await getWeatherData.json();
      console.log(JSON.stringify(data));

    // return data as json
    return NextResponse.json(data);
}