import { Select } from 'antd';
import React from 'react';

const { Option } = Select;

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

const App: React.FC = () => (
  <>
    <Select defaultValue="1ng" onChange={handleChange}>
      <Option value="1ng">1 Khách</Option>
      <Option value="2ng">2 Khách</Option>
      <Option value="4ng">4 Khách</Option>
    </Select>
    
  </>
);

export default App;