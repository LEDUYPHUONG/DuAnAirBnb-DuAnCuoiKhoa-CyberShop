import React from 'react'
import { DatePicker, Space } from 'antd';
import type { RangePickerProps } from 'antd/es/date-picker';
import moment from 'moment';

type Props = {
    title?:string
}

export default function DatePickerAntd({title}: Props) {
    const { RangePicker } = DatePicker;
    const disabledDate: RangePickerProps['disabledDate'] = current => {
      return current && current < moment().endOf('day');
    };
  return (
    <div>
      <Space direction="vertical" size={12}>
        <RangePicker disabledDate={disabledDate} />
      </Space>
    </div>
  )
}