import React from "react";
import { Layout, Menu } from "antd";
import "antd/dist/antd.css";
import Image from './ImageModule/Image'

const { Header, Content, Footer } = Layout;

const App = () => (
  <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu
        style={{ textAlign: "center" }}
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
      >
        <Menu.Item key="1">Image-Sections</Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: "0 50px" }}>
      <div className="site-layout-content">
       <Image />
      </div>
        </Content>
        <Footer style={{ textAlign: "center", background: "black", color:"white" }}>Image-View</Footer>
  </Layout>
);

export default App;
