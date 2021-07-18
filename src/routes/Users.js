import { Link, useRouteMatch, Route, Switch, Redirect } from 'react-router-dom';
// import NotFound from './NotFound';
import UserDetail from './users/UserDetail';

function Users() {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <h2>Users</h2>
      <ul>
        <li>
          <Link to={`${url}/detail/1?first=hello`}>User 1</Link>
        </li>
        <li>
          <Link to={`${url}/detail/2`}>User 2</Link>
        </li>
        <li>
          <Link to={`${url}/not-found`}>Not found page</Link>
        </li>
      </ul>
      <Switch>
        <Route path={`${path}/detail/:id`}>
          <UserDetail />
        </Route>
        <Route exact path={`${path}`}>
          <UserDetail />
        </Route>
        <Route>
          <Redirect to="/404" />
        </Route>
        {/* <Route component={NotFound} /> */}
      </Switch>
    </div>
  );
}

export default Users;
