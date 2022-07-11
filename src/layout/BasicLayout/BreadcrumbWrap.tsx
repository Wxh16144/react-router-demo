import React from "react";
import { Breadcrumb } from "antd";
import { useTitle } from "ahooks";
import getBreadcrumbData from "./getBreadcrumbData";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";

const BreadcrumbWrap = ({ routes }: any) => {
  const { pathname } = useLocation();
  
  const breadcrumbData = getBreadcrumbData({ pathname, routes });

  const nowPageRoute = breadcrumbData[breadcrumbData.length - 1] || {};
  useTitle(nowPageRoute.title);

  if (!nowPageRoute.exact) {
    return null;
  }

  return (
    <div>
      <span>面包屑:</span>
      <Breadcrumb>
        {breadcrumbData.map((item, index) => (
          <Breadcrumb.Item key={item.path}>
            {/* <code>{JSON.stringify(item)}</code> */}
            {index === breadcrumbData.length - 1
              ? <span>{item.title}</span>
              : <NavLink to={item.path}>{item.title}</NavLink>
            }
          </Breadcrumb.Item>
        ))}
      </Breadcrumb>
    </div>
  );
};

export default BreadcrumbWrap;
