import React from "react";

import { Layout } from "antd";
import BreadcrumbWrap from "./BreadcrumbWrap";
import styles from './index.module.less';
import classNames from "classnames";
import SideMenu from "./SideMenu";


const { Header, Content, Sider } = Layout;

const BasicLayout = (props: any) => {
  const { children, route } = props;
  const [collapsed, setCollapsed] = React.useState(false);

  console.log({ props });


  const siderNode = (
    <Sider
      width={260}
      theme="light"
      className={styles.sider}
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <div
        className={classNames(styles.logo, {
          [styles.logoCollapsed]: collapsed,
        })}
      >
        {/* TODO: 折叠与未折叠的LOGO */}
        {/* <img src={collapsed ? logoSmall : logo} alt="logo" /> */}
      </div>

      <div className={styles.menuContainer}>
        <SideMenu
          menuDatas={route.routes}
          inlineIndent={collapsed ? 32 : 44}
          className={styles.menu}
          collapsed={collapsed}
        />
      </div>
    </Sider>
  );
  return (
    <Layout>
      {siderNode}
      <Layout>
        <Header className={styles.header}>
          <div>
            <BreadcrumbWrap routes={route.routes} />
          </div>
        </Header>
        <Content>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default BasicLayout;
