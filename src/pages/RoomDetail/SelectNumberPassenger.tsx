import { Select } from 'antd';
import React from 'react';
import { InputNumber } from 'antd';

const { Option } = Select;

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

const onChange = (value: number) => {
  console.log('changed', value);
};
const App: React.FC = () => (
  <>
    <Select defaultValue="1 khách" onChange={handleChange}>
      <Option value="adult">
        2 người lớn (trên 13 tuổi)
        </Option>
        <Option value="adult_and_child">
        1 người lớn 1 trẻ em (2-12 tuổi)
        </Option>
        <Option value="adult_ and_babies">
        1 người lớn và em bé (dưới 2 tuổi)
        </Option>
  
    </Select>
    
  </>
);

export default App;