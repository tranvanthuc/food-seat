import Layout from 'layouts';
import { Route } from 'react-router-dom';
import { RouteProps } from './Type';

const Index = ({ children, layout, ...rest }: RouteProps) => {
  const LayoutTemplate = Layout(layout);

  return (
    <Route
      {...rest}
      render={() => <LayoutTemplate>{children}</LayoutTemplate>}>
    </Route>
  );
};

export default Index;