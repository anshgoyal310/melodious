import { appendToExcel } from "@/lib/excel"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const data = await request.json()

    // Validate required fields
    if (!data.plan || !data.customerDetails) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Store in Excel
    await appendToExcel("orders.xlsx", {
      plan: data.plan,
      customerName: data.customerDetails.name,
      customerEmail: data.customerDetails.email,
      amount: data.amount,
      status: "pending",
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Order processing error:", error)
    return NextResponse.json({ error: "Failed to process order" }, { status: 500 })
  }
}

