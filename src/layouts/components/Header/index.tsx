import { useState } from 'react';
import Logo from 'assets/images/logo.png';
import style from './style.module.scss';
import {
  EnvironmentOutlined,
  BellOutlined,
  SearchOutlined,
} from '@ant-design/icons';
import { Button, Popover } from 'antd';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Menu from '../Menu';

const Index = () => {
  const history = useHistory();
  const [visible, setVisible] = useState(false);

  const hidePopover = () => {
    setVisible(false);
  };

  const handleVisible = (v: boolean) => {
    setVisible(v);
  };

  const goHome = () => history.push('/');
  const goLogin = () => history.push('/login');
  const goRegister = () => history.push('/register');

  return (
    <div className={style.header}>
      <div className={style.headerLeft}>
        <img src={Logo} onClick={goHome} alt="logo" className="cursor-pointer" />
        <div className={style.iconPlace}>
          <EnvironmentOutlined />
        </div>
      </div>
      <div className={style.headerRightWeb}>
        <Button className="mr-2" type="primary" onClick={goLogin}>
          Sign in
        </Button>
        <Button onClick={goRegister}>Sign up</Button>
        <Button type="link" shape="circle" icon={<BellOutlined />} />
        <div className="border-left">
          <Button type="link" shape="circle" icon={<SearchOutlined />} />
        </div>
      </div>
      <div className={style.headerRightMobile}>
        <Popover
          visible={visible}
          placement="bottomRight"
          onVisibleChange={handleVisible}
          content={() => <Menu hide={hidePopover} />}
          trigger="click"
        >
          <Button type="text">
            <FontAwesomeIcon icon={faBars} />
          </Button>
        </Popover>
      </div>
    </div>
  );
};

export default Index;