import React, { useEffect } from 'react';
import { Button, Checkbox, Form, Input, Typography } from 'antd';
import { signIn } from '../../state/slices';
import { useDispatch } from 'react-redux';
import { useSelector } from '../../state/hooks';
import styles from './SignIn.module.css';
import { useNavigate } from 'react-router-dom';

export const SignIn: React.FC = () => {
  const dispatch = useDispatch();
  const { token: jwt, isLoading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const onFinish = (values: any) => {
    console.log('Success:', values);
    const { username: email, password } = values;
    dispatch<any>(signIn({ email, password }));
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
    alert('Failed: ' + errorInfo);
  };

  useEffect(() => {
    if (jwt !== null) {
      navigate('/');
    }
  }, [jwt, navigate]);

  if (error)
    return <Typography.Text type={'danger'}>Error: {error}</Typography.Text>;

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      className={styles['login-form']}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{ offset: 8, span: 16 }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button loading={isLoading} type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
