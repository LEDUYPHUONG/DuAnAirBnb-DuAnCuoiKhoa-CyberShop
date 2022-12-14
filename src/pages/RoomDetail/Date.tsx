import { DatePicker, Space } from "antd";
import React from "react";
import type { RangePickerProps } from "antd/es/date-picker";
import moment from "moment";

const { RangePicker } = DatePicker;
//function lấy ra datestring ngày đến và đi đã chọn, hiện tại mình ko dùng, nhưng nếu muốn console.log ra datastring để xem thì truyền nó vào onChange thay thế hàm countNumberOfDates
function onChangeDate(date: any, dateString: any) {
  console.log("datestring", dateString);
  console.log(dateString[0]);
}
// function count số ngày đã chọn
function countNumberOfDates(dateString: any) {
  let daysNum = (dateString[1] - dateString[0]) / (1000 * 3600 * 24);
  console.log("daysNum", daysNum);
  return daysNum;
}
//function không cho chọn những ngày trước hôm nay (vì đã qua lịch booking)
const disabledDate: RangePickerProps["disabledDate"] = (current) => {
  // Can not select days before today and today
  return current && current < moment().endOf("day");
};
const App: React.FC = () => (
  <Space direction="vertical" size={12}>
    <RangePicker
      placeholder={["NHẬN PHÒNG", "TRẢ PHÒNG"]}
      format={["DD-MM-YYYY"]}
      onChange={(date, dateString) => countNumberOfDates(date)}
      disabledDate={disabledDate}
    />
  </Space>
);

console.log(onselect);

export default App;
