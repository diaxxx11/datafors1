import Papa from "papaparse"

export async function parseCSV() {
  const res = await fetch("/data.csv")
  const text = await res.text()

  return new Promise((resolve) => {
    Papa.parse(text, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        resolve(results.data)
      },
    })
  })
}