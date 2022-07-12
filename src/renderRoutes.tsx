import { Redirect, Switch, Route, RouteProps } from 'react-router-dom';
import { RouteItem } from './router/interface';

interface Options {
  routes: RouteItem[];
  rootRoutes?: RouteItem[];
  extraProps?: any;
}
interface RenderComponentOptions {
  route: RouteItem;
  opts: Options;
  props: any;
  extraProps?: Options['extraProps'];
}

interface RouteElementOptions {
  route: RouteItem;
  opts: Options;
  index: number;
}


function renderComponent({ route, opts, props }: RenderComponentOptions) {
  const routes = renderRoutes({
    ...opts,
    routes: route.routes || [],
    rootRoutes: opts.rootRoutes,
  });

  const { component: Component } = route;
  if (Component) {
    const newProps = {
      ...props,
      ...opts.extraProps,
      route,
      routes: opts.rootRoutes,
    };

    return (
      // TODO: 这里可以添加 ErrorBoundary
      <Component {...newProps}>{routes}</Component>
    );
  }
  return routes;
}

function getRouteElement({ route, index, opts }: RouteElementOptions) {
  const routeProps = {
    key: route.name || index,
    exact: route.exact,
    strict: route.strict,
    sensitive: route.sensitive,
    path: route.path,
  };

  if (route.redirect) {
    return <Redirect {...routeProps} from={route.path} to={route.redirect} />;
  }
  return (
    <Route
      {...routeProps}
      render={(props) => {
        return renderComponent({ route, opts, props });
      }}
    />
  );
}

function renderRoutes(opts: Options) {
  return (
    <Switch>
      {
        opts.routes.map((route, index) =>
          getRouteElement({
            route,
            index,
            opts: { ...opts, rootRoutes: opts.routes },
          }),
        )
      }
    </Switch>
  )
}

export default renderRoutes;