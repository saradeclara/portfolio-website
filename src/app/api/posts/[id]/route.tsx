import { NextResponse } from "next/server";

export async function GET(request: Request) {
	// Handle GET requests
	return NextResponse.json({ message: "Hello from the API" });
}

export async function POST(request: Request) {
	// Handle POST requests
	const body = await request.json();
	return NextResponse.json({ message: "Data received", data: body });
}
