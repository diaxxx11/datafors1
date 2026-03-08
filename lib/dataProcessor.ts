import { SurveyRow } from "@/types/survey"

export function processSurveyData(rows: any[]): SurveyRow[] {

  return rows
    .filter((row) => row.should_display === "t")
    .map((row) => ({
      survey_id: row.survey_id,
      sentiment: row.sentiment,
      score: parseFloat(row.score),
      display_label: row.display_label,
      display_note: row.display_note,
      severity: parseFloat(row.severity),
      confidence: parseFloat(row.confidence),
      themes: row.themes,
      should_display: row.should_display
    }))
}