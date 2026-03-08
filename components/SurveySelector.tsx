"use client"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface Props {
  surveys: string[]
  onChange: (value: string) => void
}

export default function SurveySelector({ surveys, onChange }: Props) {
  return (
    <Select onValueChange={onChange}>
      <SelectTrigger className="w-[240px]">
        <SelectValue placeholder="Select Survey" />
      </SelectTrigger>

      <SelectContent>
        {surveys.map((survey) => (
          <SelectItem key={survey} value={survey}>
            Survey {survey}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}