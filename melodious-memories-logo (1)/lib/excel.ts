import * as XLSX from "xlsx"
import path from "path"
import fs from "fs"

// Define the base directory for Excel files
const EXCEL_DIR = path.join(process.cwd(), "data")

// Ensure the directory exists
if (!fs.existsSync(EXCEL_DIR)) {
  fs.mkdirSync(EXCEL_DIR, { recursive: true })
}

// Generic function to append data to Excel file
export async function appendToExcel(filename: string, data: any) {
  const filePath = path.join(EXCEL_DIR, filename)

  // Create workbook and worksheet
  let workbook: XLSX.WorkBook

  if (fs.existsSync(filePath)) {
    // If file exists, read it
    workbook = XLSX.readFile(filePath)
  } else {
    // If file doesn't exist, create new workbook
    workbook = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(workbook, XLSX.utils.json_to_sheet([]), "Sheet1")
  }

  // Get the first worksheet
  const worksheet = workbook.Sheets[workbook.SheetNames[0]]

  // Convert worksheet to JSON to get existing data
  const jsonData = XLSX.utils.sheet_to_json(worksheet)

  // Add timestamp to the data
  const dataWithTimestamp = {
    ...data,
    timestamp: new Date().toISOString(),
  }

  // Append new data
  jsonData.push(dataWithTimestamp)

  // Convert back to worksheet
  const newWorksheet = XLSX.utils.json_to_sheet(jsonData)

  // Replace worksheet in workbook
  workbook.Sheets[workbook.SheetNames[0]] = newWorksheet

  // Write to file
  XLSX.writeFile(workbook, filePath)

  return true
}

