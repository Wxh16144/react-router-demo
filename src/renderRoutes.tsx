import { Redirect, Switch, Route, RouteProps, RouteComponentProps } from 'react-router-dom';
import { RouteItem } from './router/interface';


export type RenderComponentProps = RouteComponentProps & {
  route: RouteItem;
  routes: RouteItem[];
  children: React.ReactNode;
}

interface Options {
  routes: RouteItem[];
  rootRoutes?: RouteItem[];
  extraProps?: any;
}
interface RenderComponentOptions {
  route: RouteItem;
  opts: Options;
  props: RouteComponentProps;
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
    const newProps: RenderComponentProps = {
      ...props,
      ...opts.extraProps,
      route,
      routes: opts.rootRoutes,
      children: routes,
    };
    
    return (
      // TODO: 这里可以添加 ErrorBoundary
      <Component {...newProps} />
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
      render={(props) => renderComponent({ route, opts, props })}
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
            opts: {
              ...opts,
              rootRoutes: opts.rootRoutes || opts.routes
            },
          }),
        )
      }
    </Switch>
  )
}

export default renderRoutes;