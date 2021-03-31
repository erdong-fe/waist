import * as React from 'react';
import Form from '@roo/roo/Form';
import Button from '@roo/roo/Button';
import CheckBox from '@roo/roo/CheckBox';
import Radio from '@roo/roo/Radio';
import Grid from '@roo/roo/Grid';
import Input from '@roo/roo/Input';
import Switch from '@roo/roo/Switch';
import Select from '@roo/roo/Select';

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
            label: { span: 4 },
            field: { span: 6 }
        };

        return (
            <Form
              value={formValue}
              cols={cols}
            >
              <Row>
                <Col>
                    <Field
                        label="用户名1"
                        name="name"
                        placeholder="user name">
                          <Input />
                    </Field>
                </Col>
                <Col span={2}>
                    <Field
                        label="用户名2"
                        name="name">
                          <Select
                            options={
                              [
                                  { value: true, label: '苹果' },
                                  { value: false, label: '香蕉',},
                                  { value: 0, label: '西瓜' },
                                  { value: 4, label: '菠萝', disabled: true },
                                  { value: 5, label: '榴莲' }
                              ]
                            }
                            onChange={() => {}}
                />
                    </Field>
                </Col>
                <Col span={2}>
                    <Field
                        label="用户名3"
                        name="name"
                        placeholder="user name"
                    />
                </Col>
                <Col span={2}>
                    <Field
                        label="用户名4"
                        name="name"
                        placeholder="user name"
                    />
                </Col>
              </Row>
              <Row>
                <Col span={3}>
                    <Field
                        label="用户名1"
                        name="name"
                        placeholder="user name"
                    />
                </Col>
                <Col span={3}>
                    <Field
                        label="用户名2"
                        name="name"
                        placeholder="user name"
                    />
                </Col>
                <Col span={3}>
                    <Field
                        label="用户名3"
                        name="name"
                        placeholder="user name"
                    />
                </Col>
                <Col span={2}>
                    <Field
                        label="用户名4"
                        name="name"
                        placeholder="user name"
                    />
                </Col>
                <Col span={1}>
                      <Button>按钮</Button>
                </Col>
              </Row>
            </Form>
        );
    }
}

export default App;