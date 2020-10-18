import React from "react";
import { Carousel, Tabs, Row, Col, Table, DatePicker, Space } from "antd";

const Image = () => {
  const onChange = (date, dateString) => {
    const Data = dateName;
    console.log(Data);
    if (dateString) {
      const temp = Data.filter((item) => item.date === dateString);
      setDateName(temp);
    }
  };
  const [dateName, setDateName] = React.useState([
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
      date: "2020-10-13",
    },
    {
      key: "2",
      name: "John",
      age: 52,
      address: "10 Downing Street",
      date: "2020-10-14",
    },
    {
      key: "3",
      name: "Sara",
      age: 22,
      address: "10 Downing Street",
      date: "2020-10-15",
    },
    {
      key: "4",
      name: "Omar",
      age: 42,
      address: "10 Manson street",
      date: "2020-10-16",
    },
    {
      key: "5",
      name: "Nikki",
      age: 72,
      address: "10 Downing Street",
      date: "2020-10-17",
    },
    {
      key: "6",
      name: "selena",
      age: 44,
      address: "10 NY Street",
      date: "2020-10-18",
    },
    {
      key: "7",
      name: "justin",
      age: 41,
      address: "10 house Street",
      date: "2020-10-19",
      },
    {
      key: "8",
      name: "Mike",
      age: 41,
      address: "20 house Street",
      date: "2020-10-19",
      },
      {
          key: "9",
          name: "Harry",
          age: 32,
          address: "101 Downing Street",
          date: "2020-10-13",
      },
      {
          key: "10",
          name: "Sherlock",
          age: 72,
          address: "108 Downing Street",
          date: "2020-10-17",
      },
  ]);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
  ];
  const { TabPane } = Tabs;
  return (
    <div>
      <Tabs centered defaultActiveKey="1">
        <TabPane tab="Image Scroller" key="1">
          <Carousel autoplay>
            <div>
              <img
                style={{ width: "100%" }}
                src={require("../assest/flower.jpg")}
                alt=""
              />
            </div>
            <div>
              <img
                style={{ width: "100%" }}
                src={require("../assest/image.jpg")}
                alt=""
              />
            </div>
            <div>
              <img
                style={{ width: "100%" }}
                src={require("../assest/images.jpg")}
                alt=""
              />
            </div>
            <div>
              <img
                style={{ width: "100%" }}
                src={require("../assest/img.jpg")}
                alt=""
              />
            </div>
          </Carousel>
        </TabPane>
        <TabPane tab="Image Grid" key="2">
          <Row>
            <Col xs={2} sm={4} md={6} lg={3} xl={10}>
              <img src={require("../assest/img.jpg")} alt="" />
            </Col>
            <Col xs={20} sm={16} md={12} lg={8} xl={4}>
              <img src={require("../assest/img.jpg")} alt="" />
            </Col>
            <Col xs={2} sm={4} md={6} lg={8} xl={10}>
              <img src={require("../assest/img.jpg")} alt="" />
            </Col>
          </Row>
          <Row>
            <Col
              span={6}
              xs={{ order: 1 }}
              sm={{ order: 2 }}
              md={{ order: 3 }}
              lg={{ order: 4 }}
            >
              <img src={require("../assest/img.jpg")} alt="" />
            </Col>
            <Col
              span={6}
              xs={{ order: 2 }}
              sm={{ order: 1 }}
              md={{ order: 4 }}
              lg={{ order: 3 }}
            >
              <img src={require("../assest/img.jpg")} alt="" />
            </Col>
            <Col
              span={6}
              xs={{ order: 3 }}
              sm={{ order: 4 }}
              md={{ order: 2 }}
              lg={{ order: 1 }}
            >
              <img src={require("../assest/img.jpg")} alt="" />
            </Col>
            <Col
              span={6}
              xs={{ order: 4 }}
              sm={{ order: 3 }}
              md={{ order: 1 }}
              lg={{ order: 2 }}
            >
              <img src={require("../assest/img.jpg")} alt="" />
            </Col>
          </Row>
          <Row>
            <Col span={18} push={12}>
              <img src={require("../assest/img.jpg")} alt="" />
            </Col>
            <Col span={6} pull={19}>
              <img src={require("../assest/img.jpg")} alt="" />
            </Col>
          </Row>
        </TabPane>
        <TabPane tab="Date filter" key="3">
          <Space direction="vertical">
            <DatePicker style={{ marginBottom: "20px" }} onChange={onChange} />
          </Space>
          {dateName && <Table dataSource={dateName} columns={columns} />}
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Image;
