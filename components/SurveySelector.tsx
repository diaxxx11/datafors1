type Props = {
  surveys: string[]
  onChange: (id: string) => void
}

export default function SurveySelector({ surveys, onChange }: Props) {
  return (
    <select
      className="border p-2 rounded"
      onChange={(e) => {
        console.log("dropdown value:", e.target.value)
        onChange(e.target.value)
      }}
    >
      <option value="">All Surveys</option>

      {surveys.map((id) => (
        <option key={id} value={id}>
          {id}
        </option>
      ))}
    </select>
  )
}