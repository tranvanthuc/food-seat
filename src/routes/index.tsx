import { LayoutType } from 'layouts';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import DefaultRoute from './DefaultRoute';
import Login from 'features/auth/Login';
import Register from 'features/auth/Register';
import Home from 'features/chooseTable/Home';
import SearchTable from 'features/chooseTable/SearchTable';
import DiningTable from 'features/chooseTable/DiningTable';


const routes = () => (
  <Router>
    <Switch>
      <DefaultRoute layout={LayoutType.basic} exact path="/">
        <Home />
      </DefaultRoute>

      <DefaultRoute layout={LayoutType.basic} exact path="/search">
        <SearchTable />
      </DefaultRoute>

      <DefaultRoute layout={LayoutType.basic} exact path="/dining">
        <DiningTable />
      </DefaultRoute>

      <DefaultRoute layout={LayoutType.basic} path="/login">
        <Login />
      </DefaultRoute>

      <DefaultRoute layout={LayoutType.basic} path="/register">
        <Register />
      </DefaultRoute>

      <DefaultRoute path="*" layout={LayoutType.basic} status={404}>
        {/* <PageNotFound /> */}
      </DefaultRoute>
    </Switch>
  </Router>
);

export default routes;