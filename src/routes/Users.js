import { Link, useRouteMatch, Route, Switch } from 'react-router-dom';
import NotFound from './NotFound';
import UserDetail from './users/UserDetail';
function Users() {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <h2>Users</h2>
      <ul>
        <li>
          <Link to={`${url}/1`}>User 1</Link>
        </li>
        <li>
          <Link to={`${url}/2`}>User 2</Link>
        </li>
      </ul>
      <Switch>
        <Route path={`/:id`}>
          <UserDetail />
        </Route>
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default Users;
