import { SurveyRow } from "@/types/survey"

export function calculateMetrics(data: SurveyRow[]) {
  const validScores = data.filter(
    (d) => typeof d.score === "number" && !isNaN(d.score)
  )

  const total = data.length

  const avgScore =
    validScores.length === 0
      ? 0
      : (
          validScores.reduce((sum, r) => sum + r.score, 0) /
          validScores.length
        ).toFixed(2)

  const positive = data.filter(
    (d) => d.sentiment === "positive"
  ).length

  const negative = data.filter(
    (d) => d.sentiment === "negative"
  ).length

  return {
    total,
    avgScore,
    positive,
    negative,
  }
}