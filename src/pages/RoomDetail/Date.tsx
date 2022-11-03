import { DatePicker, Space } from "antd";
import React from "react";
import type { RangePickerProps } from "antd/es/date-picker";
import moment from "moment";
import { date } from "yup/lib/locale";
import { useSelector } from "react-redux";

const { RangePicker } = DatePicker;
const {arrNumberStayDates} = useSelector((state: RootState)=> state.roomDetailReducer)

//function lấy ra datestring ngày đến và đi đã chọn, hiện tại mình ko dùng, nhưng nếu muốn console.log ra datastring để xem thì truyền nó vào onChange thay thế hàm countNumberOfDates
function onChangeDate(date: any, dateString: any) {
  console.log("date", date);
  console.log("datestring", dateString);
  console.log("cc", dateString[0]);
}
// function count số ngày đã chọn
function countNumberOfDates(dateString: any) {
  let daysNum = (dateString[1] - dateString[0]) / (1000 * 3600 * 24);
  console.log("daysNum", daysNum);
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
      onChange={(dateString) => countNumberOfDates(dateString)}
      disabledDate={disabledDate}
    />
  </Space>
);

console.log(onselect);

export default App;
