"use client"

import { SurveyRow } from "@/types/survey"

interface Props {
  insight: SurveyRow
}

export default function InsightCard({ insight }: Props) {
  const tags = insight.themes
    ? JSON.parse(insight.themes) as string[]
    : []

  return (
    <div className="border p-4 rounded-md shadow-sm hover:shadow-md transition">
      <h2 className="font-bold text-lg mb-1">{insight.display_label}</h2>
      <p className="mb-2 text-gray-700">{insight.display_note}</p>
      <div className="flex gap-2 flex-wrap">
        {tags.map((tag) => (
          <span
            key={tag}
            className="bg-red-100 text-red-800 text-xs font-medium px-2 py-1 rounded"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-2 text-sm text-gray-600">
        Score: {insight.score} | Sentiment: {insight.sentiment}
      </div>
    </div>
  )
}
