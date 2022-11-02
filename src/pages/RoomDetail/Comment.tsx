import { Comment, List, Tooltip } from 'antd';
import React from 'react';

const data = [
  {   
    author: 'Anh Phương ',
    avatar: 'https://joeschmoe.io/api/v1/random',
    content: (
      <p>
        We supply a series of design principles, practical patterns and high quality design
        resources (Sketch and Axure), to help people create their product prototypes beautifully and
        efficiently.
      </p>
    ),
    datetime: (
        <span>tháng 5 năm 2022</span>
    ),
  },
  {
    author: 'Tiến Hưng',
    avatar: 'https://joeschmoe.io/api/v1/random',
    content: (
      <p>
        We supply a series of design principles, practical patterns and high quality design
        resources (Sketch and Axure), to help people create their product prototypes beautifully and
        efficiently.
      </p>
    ),
    datetime: ( 
        <span>tháng 11 năm 2020</span>
  
    ),
  },
];

const App: React.FC = () => (
  <List
    className="comment-list"
    itemLayout="horizontal"
    dataSource={data}
    renderItem={item => (
      <li>
        <Comment
          author={item.author}
          avatar={item.avatar}
          content={item.content}
          datetime={item.datetime}
        />
      </li>
    )}
  />
);

export default App;