"use client"

import { useEffect, useState } from "react"

import { parseCSV } from "@/lib/csvParser"
import { processSurveyData } from "@/lib/dataProcessor"
import { calculateMetrics } from "@/lib/analytics"
import { SurveyRow } from "@/types/survey"

import InsightCard from "@/components/InsightCard"
import SurveySelector from "@/components/SurveySelector"

export default function Home() {
  const [data, setData] = useState<SurveyRow[]>([])
  const [surveyId, setSurveyId] = useState<string>("")

  // Load CSV and process
  useEffect(() => {
    const load = async () => {
      const raw = await parseCSV()
      const processed = processSurveyData(raw)
      setData(processed)
    }

    load()
  }, [])

  // Extract unique survey IDs for dropdown
  const surveys = [...new Set(data.map((d) => d.survey_id))]

  // Filter data based on selected survey
  const filteredData =
    surveyId === ""
      ? data
      : data.filter((d) => d.survey_id === surveyId)

  // Calculate metrics for filtered data
  const metrics = calculateMetrics(filteredData)

  return (
    <main className="p-10 space-y-8">

      <h1 className="text-3xl font-bold">
        Ne Dendy? Insights
      </h1>

      {/* Survey Selector Dropdown */}
      <SurveySelector
        surveys={surveys}
        onChange={setSurveyId}
      />

      {/* Metrics Overview */}
      <div className="space-y-2">
        <div>Total Insights: {metrics.total}</div>
        <div>Average Score: {metrics.avgScore}</div>
        <div>Positive: {metrics.positive}</div>
        <div>Negative: {metrics.negative}</div>
      </div>

      {/* Insight List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {filteredData.map((insight) => (
          <InsightCard key={insight.display_label + insight.survey_id} insight={insight} />
        ))}
      </div>

    </main>
  )
}