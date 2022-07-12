import { pathToRegexp } from "path-to-regexp";
import { urlToList } from "../../../utils";
import { RouteItem } from "../../../router/interface";

export const getFlatMenuKeys = (menuData: RouteItem[]) => {
  let keys: string[] = [];
  menuData.forEach((item) => {
    item.path && keys.push(item.path);
    if (item.routes) {
      keys = keys.concat(getFlatMenuKeys(item.routes));
    }
  });
  return keys;
};

const getMenuMatches = (flatMenuKeys: string[], path: string) =>
  flatMenuKeys.filter((item) => {
    if (item) {
      return pathToRegexp(item).test(path);
    }
    return false;
  });

/**
 * 获得菜单子节点
 */
export const getDefaultCollapsedSubMenus = (
  pathname: string,
  flatMenuKeys: string[]
) =>
  urlToList(pathname)
    .map((item) => getMenuMatches(flatMenuKeys, item)[0])
    .filter((item) => item);

export const getSelectedMenuKeys = (pathname: string, flatMenuKeys: string[]) =>
  urlToList(pathname).map((itemPath) =>
    getMenuMatches(flatMenuKeys, itemPath).pop()!
  );
