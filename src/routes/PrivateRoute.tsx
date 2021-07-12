import { Route, Redirect } from 'react-router-dom';
// import auth from 'libs/auth';
// import Layout from 'layouts/index';
import { RouteProps } from './Type';

const Index = ({ children, locationPath, layout, ...rest }: RouteProps) => {
  // const isAuth = !!auth.getToken();
  const isAuth = true;
  // const LayoutTemplate = Layout(layout);

  return (
    <Route
      {...rest}
      render={() => {
        return isAuth ? (
          <div>{children}</div>
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: locationPath },
            }}
          />
        );
      }}
    ></Route>
  );
};

export default Index;