import { RouteProps } from "react-router-dom";

/** 路由元素*/
export interface RouteItem {
  /** 路径 */
  path?: string;
  /** 组件 */
  component?: RouteProps["component"];
  /** 路由名称 */
  name?: string;
  /** 菜单名称 */
  title?: string;
  /** 路由图标 */
  icon?: React.ReactNode;
  /** 是否强匹配 */
  exact?: boolean;
  /** 嵌套路由 */
  routes?: RouteItem[];
  /** 重定向 */
  redirect?: string;
  /** 不显示在左边菜单中 */
  hideInMenu?: boolean;
  /** 传递给组件的 Props */
  extraProps?: any;
  sensitive?: boolean;
  strict?: boolean;
}
