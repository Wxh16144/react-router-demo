import React from "react";

import { Layout } from "antd";
import BreadcrumbWrap from "./BreadcrumbWrap";

const { Header, Content } = Layout;

const BasicLayout = ({ children, route }: any) => {
  return (
    <Layout>
      <Layout>
        <Header>
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
