import { matchPath } from "react-router-dom";
import { find } from "lodash-es";
import { urlToList } from "../../utils";

const getBreadcrumbData = ({ pathname, routes }: any) => {
  const resultData: any[] = [];

  const getFlatMenu = (menuData: any) => {
    let menuItems: any[] = [];
    menuData.forEach((item: any) => {
      if (item.path && item.name) {
        menuItems.push(item);
      }

      if (item.routes) {
        menuItems = menuItems.concat(getFlatMenu(item.routes));
      }
    });
    return menuItems;
  };

  urlToList(pathname).forEach((value) => {
    const match = ({ path }: any) => {
      return matchPath(value, { path, exact: true });
    };

    const resultRoute = find(getFlatMenu(routes), match);

    if (resultRoute) {
      resultData.push({
        path: value,
        name: resultRoute.name,
        title: resultRoute.title,
        exact: resultRoute.exact,
      });
    }
  });

  return resultData;
};

export default getBreadcrumbData;
