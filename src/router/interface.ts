import React from "react";

export interface RouteItem {
  path: string;
  component?: any;
  name?: string;
  title?: string;
  icon?: React.ReactNode;
  routes?: RouteItem[];
  exact?: boolean;
  redirect?: string;
  hideInMenu?: boolean;
}