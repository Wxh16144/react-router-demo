import { useRouteMatch } from "react-router";
import {
  DYNAMIC_PROJECT_KEY,
  PROJECT_HOME_BASE_PATH,
} from "../router/constants";
import { match } from "path-to-regexp";

export default function useProject() {
  const match = useRouteMatch<any>();
  const isProject = match.path.startsWith(PROJECT_HOME_BASE_PATH);
  
  return {
    isProject: isProject,
    projectId: match?.params[DYNAMIC_PROJECT_KEY],
  };
}
