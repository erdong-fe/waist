import * as React from 'react';
import Form from '@roo/roo/Form';
import Grid from '@roo/roo/Grid';
import Button from '@roo/roo/Button';
import Input from '@roo/roo/Input';
import Select from '@roo/roo/Select';
import CheckBox from '@roo/roo/CheckBox';
import Radio from '@roo/roo/Radio';
import Switch from '@roo/roo/Switch';
import { DatePicker } from '@roo/roo';
import AutoComplete from '@roo/roo/AutoComplete';
import InputNumber from '@roo/roo/InputNumber';
import TagInput from '@roo/roo/TagInput';
import Slider from '@roo/roo/Slider';
import Upload from '@roo/roo/Upload';
import Mark from '@roo/roo/Mark';

import Panel from '@roo/roo/Panel';

const { Row, Col } = Grid;
const Field = Form.field;


class App extends React.Component {
    render() {
        const formValue = {
            name: '',
            password: '',
            agree: false,
            select: 1,
        };
        const cols = {
            label: { span: 2 },
            field: { span: 8 }
        };

        return (
          <Panel>
            <Form
              value={formValue}
              cols={cols}
            >
              <Row>
                <Col span={5}>
                    <Field
                        label="下拉选"
                        name="name">
                          <Select
                            options={
                              [
                                  { value: true, label: '苹果' },
                                  { value: false, label: '香蕉',},
                                  { value: 0, label: '西瓜' },
                                  { value: 5, label: '榴莲' }
                              ]
                            }
                            onChange={() => {}}
                />
                    </Field>
                </Col>
                <Col span={5}>
                    <Field
                        label="输入框"
                        name="name"
                        placeholder="请输入">
                          <Input />
                    </Field>
                </Col>
              </Row>
              <Row>
                <Col span={5}>
                    <Field label="复选框">
                      <CheckBox>《东风破》</CheckBox>
                      <CheckBox>《青花瓷》</CheckBox>
                      <CheckBox>《千里之外》</CheckBox>
                    </Field>
                </Col>
                <Col span={5}>
                    <Field label="单选框">
                      <Radio value={1}>高优</Radio>
                      <Radio value="2">中优</Radio>
                      <Radio value={3}>低优</Radio>
                    </Field>
                </Col>
              </Row>
              <Row>
                <Col span={5}>
                    <Field label="选择器">
                      <DatePicker
                        flip
                        format="YYYY-MM-DD"
                        valueOfType="string"
                        placeholder="请选择日期"
                      />
                    </Field>
                </Col>
                <Col span={5}>
                    <Field
                        label="你是否帅气">
                          <Switch checked="true"/>
                    </Field>
                </Col>
              </Row>
              <Row>
                <Col span={5}>
                    <Field
                        label="联想输入">
                          <AutoComplete
                            clearable
                            placeholder="想吃点啥"
                            disablePortal
                            fetchSuggestions={(queryStr, cb) => {cb([
                              {
                                  id: '11',
                                  name: '叫花鸡',
                              }, {
                                  id: '12',
                                  name: '炸鸡',
                              }, {
                                  id: '13',
                                  name: '黄焖鸡',
                              }, {
                                  id: '14',
                                  name: '烧鸡',
                              }, {
                                  id: '15',
                                  name: '烤鸡',
                              }, {
                                  id: '16',
                                  name: '飞机',
                              },
                            ])}}
                        />
                    </Field>
                </Col>
                <Col span={5}>
                    <Field label="计数器">
                      <InputNumber
                          isForceToZeroWhenEmpty={true}
                      />
                    </Field>
                </Col>
              </Row>
              <Row>
                <Col span={5}>
                    <Field label="标签输入">
                      <TagInput defaultValue={['美团']}/>
                    </Field>
                </Col>
                <Col span={5}>
                    <Field label="滑块">
                      <Slider value={40.5} />
                    </Field>
                </Col>
              </Row>
              <Row>
                <Col span={5}>
                  <Field label="上传文件">
                    <Upload action="//yapi.sankuai.com/mock/3284/file/upload">
                        <Button
                            icon="upload"
                            type="dashed"
                        >
                        上传文件
                        </Button>
                    </Upload>
                  </Field>
                </Col>
                <Col span={5}>
                  <Field label="评分">
                    <Mark defaultValue={3} />
                  </Field>
                </Col>
              </Row>
              <Row>
                <Col span={1}>
                    <Field>
                      <Button>提交</Button>
                    </Field>
                </Col>
                <Col span={1}>
                    <Field>
                      <Button>重置</Button>
                    </Field>
                </Col>
              </Row>
            </Form>
          </Panel>
            
        );
    }
}

export default App;