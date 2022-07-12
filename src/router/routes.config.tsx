// layout
import SecurityLayout from "../layout/SecurityLayout";
import BasicLayout from "../layout/BasicLayout";

// routes
import labourRoutes from './labour.routes'

// pages
import CompanyHome from "../pages/home/home";
import ProjectList from "../pages/project/list";
import ProjectHome from "../pages/project/home";
import { COMPANY_BASE_PATH, PROJECT_BASE_PATH, PROJECT_HOME_BASE_PATH } from "./constants";
import { RouteItem } from "./interface";
import { NotFound } from "../pages/404";

const router: RouteItem[] = [
  {
    path: '/',
    component: SecurityLayout,
    routes: [
      {
        path: '/',
        component: BasicLayout,
        routes: [
          {
            path: COMPANY_BASE_PATH,
            name: 'home',
            title: '企业工作台',
            hideInMenu: true,
            component: CompanyHome,
            exact: true,
          },
          {
            path: PROJECT_BASE_PATH,
            name: 'project',
            title: '项目工作台',
            hideInMenu: true,
            component: ProjectList,
            exact: true,
          },
          {
            path: PROJECT_HOME_BASE_PATH,
            name: 'projectHome',
            title: '项目主页',
            hideInMenu: true,
            component: ProjectHome,
            exact: true,
          },
          ...labourRoutes,
          {
            component: NotFound,
          }
        ],
      },
    ]
  }
]

export default router;