import { SurveyRow } from "@/types/survey"

export default function InsightCard({ insight }: { insight: SurveyRow }) {
  return (
    <div className="border rounded-xl p-4 shadow-sm bg-card">
      <div className="font-semibold">
        {insight.display_label}
      </div>

      <div className="text-sm text-muted-foreground mt-2">
        {insight.response || "No summary available"}
      </div>

      <div className="flex justify-between mt-4 text-sm">
        <span>Score: {insight.score}</span>
        <span>{insight.sentiment}</span>
      </div>
    </div>
  )
}