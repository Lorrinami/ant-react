import React from 'react';
import { Layout, Menu, Icon} from 'antd';
import DocumentTitle from 'react-document-title';
import { Button } from 'antd-mobile';
import Card from './card';
import { Link } from "react-router-dom";

const { Header, Footer, Sider, Content} = Layout;

//引入子菜单组件
const SubMenu = Menu.SubMenu;

export default class BasicLayout extends React.Component {
  render() {
    return (
      <Layout>
        <Sider collapsed={true} width={256} style={{ minHeight: '100vh' }}>
          <div style={{ height: '32px', background: 'rgba(255,255,255,.2)', margin: '16px' }} />
          <Menu theme='dark' mode='inline' defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span>HelloWorld</span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={<span><Icon type='dashboard' /><span>dashboard</span></span>}
            >
              <Menu.Item key="2"><Link to="/dashboard/analysis">分析页</Link></Menu.Item>
              <Menu.Item key="3">监控页</Menu.Item>
              <Menu.Item key="4">工作台</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>

        <Layout>
          <Header style={{ background: '#fff', textAlign: 'center', padding: 0 }}>Header</Header>
          <Content style={{ margin: '24px 16px 0' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              <Card />
            </div>

            <Button>Button</Button>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design @2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    )
  }

}