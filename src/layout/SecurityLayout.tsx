import React from 'react';

const SecurityLayout: React.FC<any> = ({ children }) => {
  React.useEffect(() => {
    // TODO: 判断是否签名、认证、登录等项目安全操作
  }, []);
  return children;
};

export default SecurityLayout;
