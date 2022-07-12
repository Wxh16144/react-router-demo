import { useRouteMatch } from "react-router";
import {
  DYNAMIC_PROJECT_KEY,
  PROJECT_HOME_BASE_PATH,
} from "../router/constants";

export default function useProject() {
  const match = useRouteMatch<any>();
  const isProject = match.path.startsWith(PROJECT_HOME_BASE_PATH);
  
  return {
    isProject: isProject,
    projectId: isProject ? match.params[DYNAMIC_PROJECT_KEY] as string : void 0,
  };
}
