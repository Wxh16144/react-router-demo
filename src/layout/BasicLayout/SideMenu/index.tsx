import React, { useEffect, useState } from 'react';
import { Menu, MenuProps } from 'antd';
import getNavMenuItems from './getNavMenuItems';
import {
  getFlatMenuKeys,
  getDefaultCollapsedSubMenus,
  getSelectedMenuKeys,
} from './menuUtils';
import { useLocation } from 'react-router';
import { RouteItem } from '../../../router/interface';

export interface SideMenuProps extends MenuProps {
  menuDatas: RouteItem[];
  collapsed?: boolean;
  afterClick?: () => void;
}

const SideMenu = (props: SideMenuProps) => {
  const { menuDatas, collapsed, afterClick, ...menuProps } = props;
  const { pathname } = useLocation()

  console.log(pathname);
  
  const flatMenuKeys = getFlatMenuKeys(menuDatas);
  const selectedKeys = getSelectedMenuKeys(pathname, flatMenuKeys);
  const defaultOpenKeys = getDefaultCollapsedSubMenus(pathname, flatMenuKeys);
  const [openKeys, setOpenKeys] = useState(defaultOpenKeys);

  useEffect(() => {
    setOpenKeys(defaultOpenKeys);
  }, [pathname]);

  const handleClick = () => {
    afterClick && afterClick();
  };

  const isMainMenu = (key: string) =>
    menuDatas.some((item) => {
      if (key) {
        return item.path === key;
      }
      return false;
    });

  const handleOpenChange: MenuProps['onOpenChange'] = (nextOenKeys) => {
    const moreThanOne = nextOenKeys.filter((openKey) => isMainMenu(openKey)).length > 1;
    const newOpenKeys = moreThanOne ? [nextOenKeys.pop()!] : [...nextOenKeys];
    setOpenKeys(newOpenKeys);
  };

  const finalyOpenKeysProps: MenuProps = {};
  if (!collapsed) {
    finalyOpenKeysProps.defaultOpenKeys = openKeys;
    finalyOpenKeysProps.openKeys = openKeys;
  }

  return (
    <Menu
      mode="inline"
      {...menuProps}
      {...finalyOpenKeysProps}
      onOpenChange={handleOpenChange}
      onClick={handleClick}
      selectedKeys={selectedKeys}
    >
      {getNavMenuItems(menuDatas)}
    </Menu>
  );
};

// TODO: 可以考虑使用 React.memo
export default SideMenu;
