import { ItemType } from 'antd/es/menu/hooks/useItems';
import classNames from 'classnames';
import { RouteItem } from '../../../router/interface';
import { Link } from 'react-router-dom';
import styles from './index.module.less';


const renderSubMenuOrItem = (item: RouteItem): ItemType => {

  if (item.hideInMenu || !item.name) {
    return null
  }

  const hasChildren = item.routes && item.routes.length;

  const label = (
    <span className={styles.menuTitleContent}>
      {
        hasChildren
          ? <span>{item.title}</span>
          : <Link to={item.path!}>{item.title}</Link>
      }
    </span>
  );

  if (hasChildren) {
    return {
      label,
      icon: item.icon,
      key: item.path!,
      children: getNavMenuItems(item.routes)
    }
  }
  return {
    label,
    icon: item.icon,
    key: item.path!,
    className: classNames({ 'isLink': item.icon })
  }
};

function getNavMenuItems(menuDatas?: RouteItem[]): ItemType[] {

  if (!menuDatas) {
    return [];
  }
  return menuDatas.map(renderSubMenuOrItem);
}

export default getNavMenuItems;
