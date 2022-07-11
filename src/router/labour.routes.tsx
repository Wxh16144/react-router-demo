import LabourEvaluation from "../pages/labour/evaluation";
import { COMPANY_BASE_PATH, PROJECT_HOME_BASE_PATH } from "./constants";

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
  path: `${PROJECT_HOME_BASE_PATH}${routeItem.path}`,
}))

export const companyLabourRoutes = labourRoutes.map((routeItem) => ({
  ...routeItem,
  path: `${COMPANY_BASE_PATH}${routeItem.path}`,
}))

