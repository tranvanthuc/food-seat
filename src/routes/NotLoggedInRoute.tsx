import { Route, Redirect } from 'react-router-dom';
// import auth from 'libs/auth';
// import Layout from 'layouts/index';
import { RouteProps } from './Type';

const Index = ({ children, layout, ...rest }: RouteProps) => {
  // const NotLoggedIn = !auth.getToken();
  const NotLoggedIn = true;
  // const LayoutTemplate = Layout(layout);
  return (
    <Route
      {...rest}
      render={() => {
        return NotLoggedIn ? (
          <div>{children}</div>
        ) : (
          <Redirect
            to={{
              pathname: '/',
            }}
          />
        );
      }}
    ></Route>
  );
};


export default Index;