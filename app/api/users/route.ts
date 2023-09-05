import { User } from "@/types";
import { NextRequest, NextResponse } from "next/server";

const endpoint = "https://torre.ai/api/entities/_searchStream";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("query");

  const res = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: query ?? undefined,
      limit: 10,
    }),
  });
  if (!res.ok) {
    return NextResponse.json("ERROR:", { status: res.status });
  }

  const responseText = await res.text();

  // Split the response into lines
  const lines = responseText.trim().split("\n");

  // Initialize an array to store the parsed objects
  const objects: User[] = [];

  // Parse each line as JSON and push it to the array
  lines.forEach((line) => {
    try {
      const parsedObject = JSON.parse(line);
      objects.push(parsedObject);
    } catch (error) {
      console.error(`Error parsing JSON: ${error}`);
    }
  });

  // Now, `objects` contains an array of JSON objects
  return NextResponse.json(objects);
}
