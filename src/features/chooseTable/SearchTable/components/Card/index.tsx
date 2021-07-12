import React from 'react';
import style from './style.module.scss';
import { Typography, Rate, Button, Row, Col } from 'antd';
import { useHistory } from 'react-router-dom';
import { Table } from 'constants/searchPage';

const { Title } = Typography;

type Props = {
  item: Table
}

const Index = ({ item }: Props) => {
  const history = useHistory();

  const goDining = () => history.push('/dining');
  return (
    <Row
      gutter={[{ xl: 16, lg: 16, md: 12, sm: 16, xs: 16 }, { xs: 8 }]}
      className={style.card}
      justify="center"
    >
      <Col xl={{ span: 5 }} lg={{ span: 6 }} md={{ span: 7 }} xs={{ span: 22 }}>
        <img src={item.img} alt={item.name} className="border-radius-1 w-100" />
      </Col>

      <Col
        xl={{ span: 19 }}
        lg={{ span: 18 }}
        md={{ span: 17 }}
        xs={{ span: 22 }}
      >
        <Title level={4} className="mb-0">
          {item.name}
        </Title>
        <div>
          <Rate
            className={style.rating}
            allowHalf
            disabled
            defaultValue={item.rating}
          />
          <span className="fw-normal mx-1">{item.reviewComment}</span>
          <span>({item.reviews})</span>
        </div>
        <div className="fs-2">
          <span>$$$$</span>
          <span className="mx-1 ">{item.type}</span>
          <span>{item.place}</span>
        </div>
        <div className="mt-1">
          {item.times.map((time, index) => (
            <Button
              type="primary"
              onClick={goDining}
              className="mr-1 mb-1"
              key={index}
            >
              {time}
            </Button>
          ))}
        </div>
      </Col>
    </Row>
  );
};

export default Index;