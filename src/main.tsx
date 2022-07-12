import { render } from 'react-dom';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router';
import 'antd/dist/antd.css'


import renderRoutes from './renderRoutes';
import routes from './router/routes.config';

export const history = createBrowserHistory()


render(
  <>
    <Router history={history} >
      {renderRoutes({ routes })}
    </Router>
  </>,
  document.getElementById('root')
)