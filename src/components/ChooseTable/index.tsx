import React, { useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Select, Input, Button, Row, Col } from 'antd';
import { listPeople } from 'constants/homePage';
import DatePicker from 'components/DatePicker';
import TimePicker from 'components/TimePicker';
import format from 'dayjs';

const { Option } = Select;

type Props = {
  onClick: () => void
}

const Index = ({ onClick }: Props) => {
  const formatTime = 'HH:mm';
  const [date, setDate] = useState(format(new Date()));
  const [time, setTime] = useState(format("00:00", 'HH:mm'));
  const [people, setPeople] = useState(1);

  function onChangeDate(date: any, dateString: string): void {
    setDate(date);
    console.log(date, dateString);
  }

  function onChangeTime(time: any, timeString: string): void {
    setTime(time);
    console.log(time, timeString);
  }

  function onChangePeople(value: number) {
    console.log(`selected ${value}`);
    setPeople(value);
  }

  return (
    <Row gutter={[8, 8]} justify="center" align="middle" className="w-100">
      <Col
        xl={{ span: 16 }}
        lg={{ span: 16 }}
        md={{ span: 16 }}
        xs={{ span: 24 }}
      >
        <Row gutter={[8, 8]} justify="center">
          <Col
            xl={{ span: 4 }}
            lg={{ span: 8 }}
            md={{ span: 8 }}
            xs={{ span: 20 }}
          >
            <DatePicker
              className="w-100"
              size="large"
              value={date}
              onChange={onChangeDate}
            />
          </Col>
          <Col
            xl={{ span: 4 }}
            lg={{ span: 8 }}
            md={{ span: 8 }}
            xs={{ span: 20 }}
          >
            <TimePicker
              className="w-100"
              value={time}
              size="large"
              onChange={onChangeTime}
              minuteStep={30}
              format={formatTime}
              showNow={false}
            />
          </Col>
          <Col
            xl={{ span: 4 }}
            lg={{ span: 8 }}
            md={{ span: 8 }}
            xs={{ span: 20 }}
          >
            <Select
              defaultValue={people}
              size="large"
              onChange={onChangePeople}
              className="w-100"
            >
              {listPeople.map((people, index) => (
                <Option key={index} value={people.value}>
                  {people.label}
                </Option>
              ))}
            </Select>
          </Col>
          <Col
            xl={{ span: 9 }}
            lg={{ span: 16 }}
            md={{ span: 16 }}
            xs={{ span: 20 }}
          >
            <Input
              className="w-100"
              size="large"
              placeholder="Location, Restaurant, or Cuisine"
              prefix={<SearchOutlined />}
            />
          </Col>

          <Col
            xl={{ span: 3 }}
            lg={{ span: 8 }}
            md={{ span: 8 }}
            xs={{ span: 20 }}
          >
            <Button block size="large" type="primary" onClick={onClick}>
              Let’s go
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};


export default Index;