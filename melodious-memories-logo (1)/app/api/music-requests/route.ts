import { appendToExcel } from "@/lib/excel"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const data = await request.json()

    // Validate required fields
    if (!data.name || !data.occasion || !data.requirements) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Store in Excel
    await appendToExcel("music-requests.xlsx", {
      name: data.name,
      occasion: data.occasion,
      requirements: data.requirements,
      status: "new",
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Music request error:", error)
    return NextResponse.json({ error: "Failed to process music request" }, { status: 500 })
  }
}

