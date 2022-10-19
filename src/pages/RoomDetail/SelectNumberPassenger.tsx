import { Select } from 'antd';
import React from 'react';

const { Option } = Select;

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

const App: React.FC = () => (
  <>
    <Select defaultValue="1 khách" onChange={handleChange}>
      <Option value="adult">
        <button className='btn btn-primary'>-</button> 1
        <button className='btn btn-primary'>+</button>
        </Option>
      <Option value="2ng">2 Khách</Option>
      <Option value="4ng">4 Khách</Option>
    </Select>
    
  </>
);

export default App;