import React from 'react';
import { Menu } from 'antd';
import classNames from 'classnames';
import { RouteItem } from '../../../router/interface';
import { Link } from 'react-router-dom';
import styles from './index.module.less';


const getSubMenuOrItem = (item: RouteItem) => {

  if (item.hideInMenu || !item.name) {
    return null;
  }


  const hasChildren = item.routes && item.routes.length;

  const titleNode = (
    <span className={styles.menuTitleContent}>
      {hasChildren ? (
        <span>{item.title}</span>
      ) : (
        <span>
          <Link to={item.path!}>{item.title}</Link>
        </span>
      )}
    </span>
  );

  if (hasChildren) {
    const { icon } = item;
    return (
      <Menu.SubMenu icon={icon} title={titleNode} key={item.path}>
        {getNavMenuItems(item.routes)}
      </Menu.SubMenu>
    );
  }

  return (
    <Menu.Item
      key={item.path}
      icon={item.icon}
      className={classNames({ 'isLink': item.icon })}
    >
      {titleNode}
    </Menu.Item>
  );
};

function getNavMenuItems(menuDatas?: RouteItem[]) {
  if (!menuDatas) {
    return [];
  }
  return menuDatas.map(getSubMenuOrItem);
}

export default getNavMenuItems;
