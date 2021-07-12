import React, { useState } from 'react';
import ChooseTable from 'components/ChooseTable';
import SearchHeader from 'assets/images/search-header.png';
import MapFragment from 'assets/images/map-fragment.png';
import HatChef from 'assets/images/hat-chef.svg';
import style from './style.module.scss';
import {
  Row,
  Col,
  Button,
  Radio,
  Space,
  Checkbox,
  Select,
  Divider,
  RadioChangeEvent,
} from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap, faQuestionCircle } from '@fortawesome/free-regular-svg-icons';
import {
  faChair,
  faMoneyBill,
  faMapMarkedAlt,
  faTrophy,
  faUtensils,
  faClock,
} from '@fortawesome/free-solid-svg-icons';
import CardList from './components/CardList';

const { Option } = Select;

const Index = () => {
  const [diningOption, setDiningOption] = useState(1);
  const [sortBy, setSortBy] = React.useState(1);

  const sortByMenu = [
    {
      label: 'Featured',
      value: 1,
    },
    {
      label: 'Highest Rated',
      value: 2,
    },
    {
      label: 'Distance',
      value: 3,
    },
    {
      label: 'Newest',
      value: 4,
    },
  ];

  function onChangeSortBy(value: number) {
    console.log(`selected ${value}`);
    setSortBy(value);
  }

  function onChangeDiningOptions(e: RadioChangeEvent) {
    setDiningOption(e.target.value);
  }

  return (
    <div className="overflow-x-hidden">
      <div
        className={style.header}
        style={{ backgroundImage: `url(${SearchHeader})` }}
      >
        <ChooseTable onClick={() => { }} />
      </div>

      <Row
        justify="center"
        className="mt-2 overflow-x-hidden"
        gutter={[16, 16]}
      >
        <Col
          xl={{ span: 4 }}
          lg={{ span: 5 }}
          md={{ span: 6 }}
          xs={{ span: 22 }}
        >
          <div
            className={style.btnChooseMap}
            style={{ backgroundImage: `url(${MapFragment})` }}
          >
            <Button type="primary">
              <FontAwesomeIcon icon={faMap} />
              <span className="ml-1">Map</span>
            </Button>
          </div>

          {/* Dining Options */}
          <div className="border-bottom pb-2">
            <div className="fw-normal mt-3 mb-1 d-flex align-center">
              <img
                className="mr-1"
                width="20"
                height="24"
                src={HatChef}
                alt="hat-chef"
              />
              Dining Options
            </div>

            <Radio.Group onChange={onChangeDiningOptions} value={diningOption}>
              <Space direction="vertical">
                <Radio value={1}>All dining options</Radio>
                <Radio value={2}>Delivery only</Radio>
                <Radio value={3}>Takeout only</Radio>
              </Space>
            </Radio.Group>
          </div>

          {/* Seating Options */}
          <div className="border-bottom pb-2">
            <div className="fw-normal mt-3 mb-1 d-flex align-center">
              <FontAwesomeIcon icon={faChair} />
              <span className="ml-1">Seating Options</span>
            </div>

            <Space direction="vertical">
              <Checkbox>Standard</Checkbox>
              <Checkbox>Outdoor</Checkbox>
            </Space>
          </div>

          {/* Price */}
          <div className="border-bottom pb-2">
            <div className="fw-normal mt-3 mb-1 d-flex align-center">
              <FontAwesomeIcon icon={faMoneyBill} />
              <span className="ml-1">Price</span>
            </div>

            <div className="mb-1">
              <Button >$$</Button>
              <Button >$$$</Button>
              <Button >$$$$</Button>
            </div>
          </div>

          {/* Regions */}
          <div className="border-bottom pb-2">
            <div className="fw-normal mt-3 mb-1 d-flex align-center">
              <FontAwesomeIcon icon={faMapMarkedAlt} />
              <span className="ml-1">Regions</span>
            </div>

            <Space direction="vertical">
              <Checkbox>Bayside</Checkbox>
              <Checkbox>Bondi Area</Checkbox>
            </Space>
          </div>

          {/* Cuisine */}
          <div className="border-bottom pb-2">
            <div className="fw-normal mt-3 mb-1 d-flex align-center">
              <FontAwesomeIcon icon={faUtensils} />
              <span className="ml-1">Cuisine</span>
            </div>

            <Space direction="vertical">
              <Checkbox>American</Checkbox>
              <Checkbox>Steakhouse</Checkbox>
              <Checkbox>Seafood</Checkbox>
              <Checkbox>Italian</Checkbox>
            </Space>
          </div>

          {/* Top Rated */}
          <div className="border-bottom pb-2">
            <div className="fw-normal mt-3 mb-1 d-flex align-center">
              <FontAwesomeIcon icon={faTrophy} />
              <span className="ml-1">Top Rated</span>
            </div>

            <Space direction="vertical">
              <Checkbox>Authentic</Checkbox>
              <Checkbox>Book the Bar</Checkbox>
              <Checkbox>Cellar</Checkbox>
              <Checkbox>Cozy</Checkbox>
            </Space>
          </div>

          {/* Time */}
          <div className="border-bottom pb-2">
            <div className="fw-normal mt-3 mb-1 d-flex align-center">
              <FontAwesomeIcon icon={faClock} />
              <span className="ml-1">Time</span>
            </div>

            <Space direction="vertical">
              <Checkbox>1,000 Point Times</Checkbox>
            </Space>
          </div>
        </Col>

        <Col
          xl={{ span: 18 }}
          lg={{ span: 17 }}
          md={{ span: 17 }}
          sm={{ span: 24 }}
        >
          <Row align="middle" justify="center">
            <Col span={11} className="fw-normal">
              15 restaurants available
            </Col>
            <Col span={11} className="d-flex justify-end">
              <Select
                defaultValue={sortBy}
                size="large"
                style={{ width: 200 }}
                onChange={onChangeSortBy}
              >
                {sortByMenu.map((menu, index) => (
                  <Option key={index} value={menu.value}>
                    {menu.label}
                  </Option>
                ))}
              </Select>
            </Col>
          </Row>

          <Divider orientation="right" className="fs-2 fw-light">
            <span className="mr-1">How are Featured results ranked</span>
            <FontAwesomeIcon icon={faQuestionCircle} />
          </Divider>

          <CardList />
        </Col>
      </Row>
    </div>
  );
};

export default Index;