import LabourEvaluation from "../pages/labour/evaluation";
import { PROJECT_HOME_BASE_PATH } from "./routes.config"; // 这里会有循环引用问题

export const LABOR_BASE_PATH = '/labour';
export const LABOR_EVALUATE_BASE_PATH = `${LABOR_BASE_PATH}/evaluation`;

const labourRoutes = [
  {
    path: LABOR_EVALUATE_BASE_PATH,
    name: 'labourEvaluation',
    title: '劳务评价列表',
    component: LabourEvaluation,
    exact: true,
  }
]

export const projectLabourRoutes = labourRoutes.map((routeItem) => ({
  ...routeItem,
  path: `/project/:projectId${routeItem.path}`,
}))

export const companyLabourRoutes = labourRoutes.map((routeItem) => ({
  ...routeItem,
  path: `/company${routeItem.path}`,
}))

