import {
  Form,
  Input,
  Button,
  Checkbox,
  Row,
  Col,
  Typography,
  Card,
} from 'antd';

const layout = {
  labelCol: {
    xl: { span: 6 },
    lg: { span: 6 },
    md: { span: 6 },
    xs: { span: 6 },
  },
  wrapperCol: {
    xl: { span: 18 },
    lg: { span: 18 },
    md: { span: 18 },
    xs: { span: 18 },
  },
};
const tailLayout = {
  wrapperCol: {
    xl: { offset: 6, span: 18 },
    lg: { offset: 6, span: 18 },
    md: { offset: 6, span: 18 },
    sm: { offset: 6, span: 18 },
    xs: { offset: 0, span: 24 },
  },
};

const { Title } = Typography;

const Index = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Row
      align="middle"
      justify="center"
      style={{ backgroundColor: '#efefef', minHeight: 'calc(100vh - 56px)' }}
    >
      <Col
        xl={{ span: 9 }}
        lg={{ span: 12 }}
        md={{ span: 16 }}
        xs={{ span: 22 }}
      >
        <Card>
          <Title className="text-center" level={3}>
            Login
          </Title>
          <Form
            {...layout}
            name="basic"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Please input your username!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item {...tailLayout} name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
              <Button className="ml-1" htmlType="button">
                Clear
              </Button>
            </Form.Item>

            <div className="text-end fw-light">
              <Button className=" pa-0 fw-bold" type="link">
                Forgot password?
              </Button>
            </div>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default Index;
