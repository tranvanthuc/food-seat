import {
  Form,
  Input,
  Button,
  Row,
  Col,
  Typography,
  Card,
} from 'antd';
import { useHistory } from 'react-router-dom';

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
  const history = useHistory();

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const goLogin = () => history.push('/login');

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Row
      align="middle"
      justify="center"
      className="py-3"
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
            Register
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
              label="First Name"
              name="firstname"
              rules={[
                {
                  required: true,
                  message: 'Please input your first name!',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Middle Name"
              name="middlename"
              rules={[
                {
                  required: true,
                  message: 'Please input your middle name!',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Last Name"
              name="lastname"
              rules={[
                {
                  required: true,
                  message: 'Please input your lastname!',
                },
              ]}
            >
              <Input />
            </Form.Item>
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
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: 'Please input your email!',
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

            <Form.Item
              label="Phone"
              name="phone"
              rules={[
                {
                  required: true,
                  message: 'Please input your phone!',
                },
              ]}
            >
              <Input />
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
              <Button className=" pa-0 fw-bold" type="link" onClick={goLogin}>
                Already registed, click here to Login?
              </Button>
            </div>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default Index;
