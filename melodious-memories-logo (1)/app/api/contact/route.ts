import { appendToExcel } from "@/lib/excel"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const data = await request.json()

    // Validate required fields
    if (!data.name || !data.email || !data.message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Store in Excel
    await appendToExcel("contacts.xlsx", {
      name: data.name,
      email: data.email,
      message: data.message,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Failed to process contact form" }, { status: 500 })
  }
}

