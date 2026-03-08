"use client"

import { useEffect, useState, useMemo } from "react"

import { parseCSV } from "@/lib/csvParser"
import { processSurveyData } from "@/lib/dataProcessor"
import { calculateMetrics } from "@/lib/analytics"
import { SurveyRow } from "@/types/survey"

import InsightCard from "@/components/InsightCard"
import SurveySelector from "@/components/SurveySelector"

export default function Home() {
  const [data, setData] = useState<SurveyRow[]>([])
  const [surveyId, setSurveyId] = useState("")

  useEffect(() => {
    console.log("Selected survey:", surveyId)
    console.log("Surveys:", surveys)
    console.log("Filtered length:", filteredData?.length)
  }, [surveyId])

  // Load CSV and process
  useEffect(() => {
    const load = async () => {
      const raw = await parseCSV() as any[]
      const processed = processSurveyData(raw)
      setData(processed)
    }



    load()
  }, [])

  // Extract unique survey IDs for dropdown

  const surveys = useMemo(() => {
    return [...new Set(data.map((d) => String(d.survey_id)))]
  }, [data])


  // Filter data based on selected survey
  const filteredData = useMemo(() => {
    if (surveyId === "") return data
    return data.filter((d) => String(d.survey_id) === String(surveyId))
  }, [data, surveyId])

  // Calculate metrics for filtered data
  const metrics = useMemo(() => {
    return calculateMetrics(filteredData)
  }, [filteredData])


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
          <InsightCard key={insight.id ?? insight.display_label + insight.survey_id} insight={insight} />
        ))}
      </div>

    </main>
  )
}