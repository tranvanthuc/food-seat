import React from 'react';
import style from './style.module.scss';
import './style.scss';
import BgHeader from 'assets/images/bg-header.jpeg';
import BgFooter from 'assets/images/bg-footer.jpeg';
import { Typography, Button, Tabs, Row, Col } from 'antd';
import Carousel from './components/Carousel';
import LocationDirectionSvg from 'assets/images/location-direction.svg';
import { places } from 'constants/homePage';
import ChooseTable from 'components/ChooseTable';
import { useHistory } from 'react-router-dom';
import clsx from 'clsx';

const { Title, Text } = Typography;
const { TabPane } = Tabs;

const Index = () => {
  const history = useHistory();

  function redirectSearch() {
    history.push('/search');
  }

  return (
    <div>
      <div
        className={style.topContent}
        style={{ backgroundImage: `url(${BgHeader})` }}
      >
        <div className={style.overlayBg}>
          <Row justify="center" className="w-100 mb-1">
            <Col
              xl={{ span: 24 }}
              lg={{ span: 20 }}
              md={{ span: 16 }}
              xs={{ span: 23 }}
            >
              <Title
                style={{ color: 'white' }}
                className={clsx('h1 text-center')}
              >
                Find your table for any occasion
              </Title>
            </Col>
          </Row>
          <ChooseTable onClick={redirectSearch} />
        </div>
        {/* top */}
        <div className={style.content}>
          <div className="border-bottom py-2 d-flex flex-wrap">
            <p>It looks like you're in North Central Coast. Not correct? </p>
            <div>
              <img alt="location" src={LocationDirectionSvg} />{' '}
              <a href="#abc" color="primary">
                Get current location
              </a>
            </div>
          </div>
          <Carousel title="Recently viewed" />
          <Carousel title="Popular restaurants in North Central Coast" />
          <Carousel title="Top Cuisines near North Central Coast" />

          {/* tabs */}
          <Title className="mt-6 mb-1" level={3}>
            Explore OpenTable
          </Title>
          <Tabs>
            <TabPane tab="National cities/regions" key="1">
              <Row gutter={16}>
                {places.map((place, index) => (
                  <Col
                    key={index}
                    className="gutter-row mt-3 fw-normal "
                    xl={{ span: 6 }}
                    md={{ span: 8 }}
                    sm={{ span: 12 }}
                    xs={{ span: 12 }}
                  >
                    <div>{place.label}</div>
                  </Col>
                ))}
              </Row>
            </TabPane>
            <TabPane tab="International cities/regions" key="2">
              <Row gutter={16}>
                {places.slice(5, 17).map((place, index) => (
                  <Col
                    key={index}
                    className="gutter-row mt-3 fw-normal "
                    xl={{ span: 6 }}
                    md={{ span: 8 }}
                    sm={{ span: 12 }}
                    xs={{ span: 12 }}
                  >
                    <div>{place.label}</div>
                  </Col>
                ))}
              </Row>
            </TabPane>
            <TabPane tab="Nearby" key="3">
              <div className="fw-bold">Restaurants nearby</div>
            </TabPane>
          </Tabs>
          {/* end tabs */}
          {/* bg-footer */}
          <div
            className={style.footerBg}
            style={{ backgroundImage: `url(${BgFooter})` }}
          >
            <Title level={3} style={{ color: 'white' }}>
              Restaurateurs Join Us
            </Title>
            <Text className="fw-normal text-white text-center">
              Join the more than 50,000 restaurants which fill seats and manage
              reservations with OpenTable.
            </Text>
            <Button size="large" type="primary" className="px-7 mt-4">
              Learn more
            </Button>
          </div>
          {/* end bg-footer */}
          <div className="my-2 text-center fw-normal">
            Favorite restaurant not yet on OpenTable?{' '}
            <span className="text-primary">Suggest a restaurant.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;