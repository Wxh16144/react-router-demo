import { useRouteMatch } from "react-router";
import { DYNAMIC_PROJECT_KEY } from "../router/constants";

export default function useProject() {
  const match = useRouteMatch<any>();
  const projectId = match.params[DYNAMIC_PROJECT_KEY];

  return {
    isProject: !!projectId,
    projectId,
    currentUrl: match.url,
  };
}
