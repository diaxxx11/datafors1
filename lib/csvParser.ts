import Papa from "papaparse"

export const parseCSV = async () => {

  const response = await fetch("/data.csv")
  const text = await response.text()

  const result = Papa.parse(text, {
    header: true,
    skipEmptyLines: true
  })

  return result.data
}