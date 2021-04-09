import React from 'react';
import { Row, Col } from 'antd';
import './app.css';

function App() {


  return (
    <div className="app">
      <Row>
        <Col span={24}>
          <div className="grid-item-div">
            DDD
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <div className="grid-item-div">DDDD</div>
        </Col>
        <Col span={12}>
          <div className="grid-item-div">DDDD</div>
        </Col>
      </Row>
      <Row>
        <Col span={8}>
          <div className="grid-item-div">DDDD</div>
        </Col>
        <Col span={8}>
          <div className="grid-item-div">DDDD</div>
        </Col>
        <Col span={8}>
          <div className="grid-item-div">DDDD</div>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={1}>
          <div className="grid-item-div">DDDD</div>
        </Col>
        <Col span={6}>
          <div className="grid-item-div">DDDD</div>
        </Col>
        <Col span={6}>
          <div className="grid-item-div">DDDD</div>
        </Col>
        <Col span={6}>
          <div className="grid-item-div">DDDD</div>
        </Col>
      </Row>
      {
        React.createElement(
          (props) => {
            return React.createElement('span', props)
          },
          {
            style: {color: 'red'}
          }
        )
      }
    </div>
  );
}

export default App;
