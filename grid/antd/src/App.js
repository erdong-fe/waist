import './App.css';
import { Row, Col } from './grid';

function App() {
  return (
    <div className="App">
        <Row gutter={16}>
          <Col span={4}>
            <div className="item">
              AAA
            </div>
          </Col>
          <Col span={8}>
            <div className="item">
              BBB
            </div>
          </Col>
          <Col span={12}>
            <div className="item">
              CCC
            </div>
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            <div className="item">
              AAA
            </div>
          </Col>
          <Col span={8}>
            <div className="item">
              BBB
            </div>
          </Col>
          <Col span={8}>
            <div className="item">
              CCC
            </div>
          </Col>
        </Row>
    </div>
  );
}

export default App;
