import { DatePicker, Space } from "antd";
import React from "react";

const { RangePicker } = DatePicker;

const App: React.FC = () => (
  <Space direction="vertical" size={12}>
    <RangePicker
      placeholder={["NHẬN PHÒNG", "TRẢ PHÒNG"]}
      format={["DD-MM-YYYY"]}   
    />
  </Space>
);

export default App;
