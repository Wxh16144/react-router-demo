// layout
import SecurityLayout from "../layout/SecurityLayout";
import BasicLayout from "../layout/BasicLayout";

// routes
import { companyLabourRoutes, projectLabourRoutes } from './labour.routes'

// pages
import Home from "../pages/home/home";
import ProjectList from "../pages/project/list";
import ProjectHome from "../pages/project/home";

// constants
export const COMPANY_BASE_PATH = '/company';
export const PROJECT_BASE_PATH = '/project';
export const PROJECT_HOME_BASE_PATH = `${PROJECT_BASE_PATH}/:projectId`;

const router = [
  {
    path: '/',
    component: SecurityLayout,
    routes: [
      {
        path: '/',
        component: BasicLayout,
        routes: [
          {
            path: '/',
            exact: true,
            redirect: COMPANY_BASE_PATH,
          },
          {
            path: COMPANY_BASE_PATH,
            name: 'home',
            title: '企业工作台',
            component: Home,
            exact: true,
          },
          {
            path: PROJECT_BASE_PATH,
            name: 'project',
            title: '项目列表',
            component: ProjectList,
            exact: true,
          },
          {
            path: PROJECT_HOME_BASE_PATH,
            name: 'projectHome',
            title: '项目工作台',
            component: ProjectHome,
            exact: true,
          },
          ...companyLabourRoutes,
          ...projectLabourRoutes,
        ],
      },
    ]
  }
]

export default router;