export function calculateMetrics(data: any[]) {

    const total = data.length
  
    const avgScore =
      data.reduce((acc, d) => acc + d.score, 0) / total
  
    const positive =
      data.filter((d) => d.sentiment === "positive").length
  
    const negative =
      data.filter((d) => d.sentiment === "negative").length
  
    return {
      total,
      avgScore: avgScore.toFixed(2),
      positive,
      negative
    }
  }