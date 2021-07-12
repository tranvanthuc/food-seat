import React from 'react';
import { Button, Space } from 'antd';
import { useHistory } from 'react-router-dom';
import style from './style.module.scss';

type Props = {
  hide: () => void
}

const Index = ({ hide }: Props) => {
  const history = useHistory();
  const goLogin = () => {
    history.push('/login');
    hide();
  };
  const goRegister = () => {
    history.push('/register');
    hide();
  };

  return (
    <div className={style.menu}>
      <Space direction="vertical" className="w-100">
        <Button block className="mr-2" type="primary" onClick={goLogin}>
          Sign in
        </Button>
        <Button block onClick={goRegister}>
          Sign up
        </Button>
      </Space>
    </div>
  );
};

export default Index;