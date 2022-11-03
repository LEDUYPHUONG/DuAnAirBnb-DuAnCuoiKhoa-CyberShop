import { DatePicker, Space } from "antd";
import React from "react";
import type { RangePickerProps } from 'antd/es/date-picker';
import moment from 'moment';

const { RangePicker } = DatePicker;

//function lấy ra datestring ngày đến và đi đã chọn
function onChangeDate(date: any, dateString: any) {
  console.log("date", date);
  console.log("datestring", dateString);
}

//function không cho chọn những ngày trước hôm nay (vì đã qua lịch booking)
const disabledDate: RangePickerProps['disabledDate'] = current => {
  // Can not select days before today and today
  return current && current < moment().endOf('day');
};
const App: React.FC = () => (
  <Space direction="vertical" size={12}>
    <RangePicker
      placeholder={["NHẬN PHÒNG", "TRẢ PHÒNG"]}
      format={["DD-MM-YYYY"]}
      onChange={(date, dateString) => onChangeDate(date, dateString)}
      disabledDate={disabledDate} 
    />
  </Space>
);

console.log(onselect);

export default App;
