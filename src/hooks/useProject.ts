import { useRouteMatch } from "react-router";

export default function useProject() {
  const match = useRouteMatch<any>();
  const projectId = match.params.projectId;

  return {
    isProject: !!projectId,
    projectId,
    currentUrl: match.url,
  };
}
