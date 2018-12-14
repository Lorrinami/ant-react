import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import DocumentTitle from 'react-document-title';
import { Button } from 'antd-mobile';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { getMenuData } from '../../common/menu';
import logo from '../../logo.svg';
import Analysis from '../dashboard/analysis'
import Monitor from '../dashboard/monitor'
import Workplace from '../dashboard/workplace'
import PuzzleCardsPage from '../puzzlecard.js'

const { Header, Footer, Sider, Content } = Layout;

//引入子菜单组件
const SubMenu = Menu.SubMenu;

export default class BasicLayout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
        };
    }

    handleMenuCollapse = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        const { children, location } = this.props;
        const { collapsed } = this.state;

        return (
            <div>
                <Router>
                    <Layout>
                        <Sider logo={logo}
                            collapsed={collapsed}
                            location={location}
                            onCollapse={this.handleMenuCollapse} >
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
                                    <Menu.Item key="3"><Link to="/dashboard/monitor">监控页</Link></Menu.Item>
                                    <Menu.Item key="4"><Link to="/dashboard/workplace">工作台</Link></Menu.Item>
                                    <Menu.Item key="5"><Link to="/puzzlecards">卡片列表</Link></Menu.Item>
                                </SubMenu>
                            </Menu>
                        </Sider>
                        <Layout>
                            <Header style={{ background: '#fff', textAlign: 'center', padding: 0 }}>Header</Header>
                            <Content style={{ margin: '24px 16px 0' }}>
                                <Route path="/dashboard/analysis" component={Analysis} />
                                <Route path="/dashboard/monitor" component={Monitor} />
                                <Route path="/dashboard/workplace" component={Workplace} />
                                <Route path='/puzzlecards' component={PuzzleCardsPage} />
                            </Content>
                            <Footer style={{ textAlign: 'center' }}>Ant Design @2018 Created by Ant UED</Footer>
                        </Layout>
                    </Layout>
                </Router>
            </div>
        )
    }

}