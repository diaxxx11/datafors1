export interface SurveyRow {
    survey_id: string
    sentiment: string
    score: number
    display_label: string
    display_note: string
    severity: number
    confidence: number
    themes: string
    should_display: string
  }