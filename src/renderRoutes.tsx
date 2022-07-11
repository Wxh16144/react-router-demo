import { Redirect, Switch, Route } from 'react-router-dom';


function renderComponent({ route, opts, props }: any) {
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

function getRouteElement({ route, index, opts }:any) {
  const routeProps = {
    key: route.key || index,
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
      render={(props: any) => {
        return renderComponent({ route, opts, props });
      }}
    />
  );
}

function renderRoutes(opts: any) {
  return opts.routes ? (
    <Switch>
      {opts.routes.map((route: any, index: number) =>
        getRouteElement({
          route,
          index,
          opts: {
            ...opts,
            rootRoutes: opts.rootRoutes || opts.routes,
          },
        }),
      )}
    </Switch>
  ) : null;
}

export default renderRoutes;