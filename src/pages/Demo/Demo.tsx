import { DatePicker } from 'antd'
import React from 'react'
import DatePickerAntd from '../../component/datePickerAntd/DatePickerAntd'
import 'antd/dist/antd.css'
type Props = {
  title?: string
}

export default function Demo({ title }: Props) {
  return (
    <div>
      <DatePickerAntd />

    </div>
  )
}