import React from "react";

import { Layout } from "antd";
import BreadcrumbWrap from "./BreadcrumbWrap";
import styles from './index.module.less';
import classNames from "classnames";
import SideMenu from "./SideMenu";
import { RenderComponentProps } from "../../renderRoutes";
import { useRouteMatch } from "react-router";
import { COMPANY_BASE_PATH, PROJECT_HOME_BASE_PATH, PROJECT_BASE_PATH } from "../../router/constants";


const { Header, Content, Sider } = Layout;

const BasicLayout: React.FC<RenderComponentProps> = (props) => {
  const { children, route, } = props;

  const [collapsed, setCollapsed] = React.useState(false);

  const isHome = useRouteMatch(
    {
      path: [COMPANY_BASE_PATH, PROJECT_HOME_BASE_PATH, PROJECT_BASE_PATH],
      exact: true,
    }
  )


  const siderNode = (
    <Sider
      width={220}
      theme="light"
      trigger={null}
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
          menuDatas={route.routes!}
          inlineIndent={collapsed ? 32 : 44}
          collapsed={collapsed}
        />
      </div>
    </Sider>
  );

  return (
    <Layout>
      {siderNode}
      <Layout>
        {
          !isHome && (
            <Header className={styles.header}>
              <div>
                <BreadcrumbWrap routes={route.routes} />
              </div>
            </Header>
          )
        }
        <Content>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default BasicLayout;
